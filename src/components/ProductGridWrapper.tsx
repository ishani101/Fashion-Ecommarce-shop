import React, { ReactElement, useCallback, useEffect, useState } from "react";
import customFetch from "../axios/custom";
import { useAppDispatch, useAppSelector } from "../hooks";
import {
  setShowingProducts,
  setTotalProducts,
} from "../features/shop/shopSlice";

/** Minimal Product type — adjust fields to match your backend model */
type Product = {
  id: string | number;
  title: string;
  price: number;
  category?: string;
  popularity?: number;
  // add other fields you actually use...
};

type Props = {
  searchQuery?: string;
  sortCriteria?: string;
  category?: string;
  page?: number;
  limit?: number;
  children:
    | ReactElement<{ products: Product[] }>
    | ReactElement<{ products: Product[] }>[];
};

const ProductGridWrapper: React.FC<Props> = ({
  searchQuery = "",
  sortCriteria = "",
  category,
  page = 1,
  limit,
  children,
}) => {
  // products state + setter (you were calling setProducts in your logic)
  const [products, setProducts] = useState<Product[]>([]);
  const dispatch = useAppDispatch();

  // Read totalProducts from redux so comparison works
  const totalProducts = useAppSelector((state: any) => state.shop.totalProducts);

  // fetch & filter products
  const getSearchedProducts = useCallback(
    async (query: string, sort: string, pageNo: number) => {
      try {
        // fetch products
        const response = await customFetch("/products");
        // response.data might already be the array; adjust if API differs
        const allProducts: Product[] = response.data ?? [];

        // filter by query
        let searchedProducts = allProducts.filter((product: Product) =>
          product.title.toLowerCase().includes((query || "").toLowerCase())
        );

        // filter by category (if provided)
        if (category) {
          searchedProducts = searchedProducts.filter(
            (product: Product) => product.category === category
          );
        }

        // update totalProducts in redux if changed
        if (totalProducts !== searchedProducts.length) {
          dispatch(setTotalProducts(searchedProducts.length));
        }

        // sort
        if (sort === "price-asc") {
          searchedProducts = searchedProducts.sort(
            (a: Product, b: Product) => a.price - b.price
          );
        } else if (sort === "price-desc") {
          searchedProducts = searchedProducts.sort(
            (a: Product, b: Product) => b.price - a.price
          );
        } else if (sort === "popularity") {
          searchedProducts = searchedProducts.sort(
            (a: Product, b: Product) => (b.popularity ?? 0) - (a.popularity ?? 0)
          );
        }

        // paginate / limit
        if (limit && limit > 0) {
          const sliced = searchedProducts.slice(0, limit);
          setProducts(sliced);
          dispatch(setShowingProducts(sliced.length));
        } else if (pageNo && pageNo > 0) {
          const perPage = 9; // you used 9 earlier — change if needed
          const sliced = searchedProducts.slice(0, pageNo * perPage);
          setProducts(sliced);
          dispatch(setShowingProducts(sliced.length));
        } else {
          setProducts(searchedProducts);
          dispatch(setShowingProducts(searchedProducts.length));
        }
      } catch (err) {
        // handle API error (log or dispatch error state)
        // keep products as-is or set to empty
        console.error("getSearchedProducts error:", err);
        setProducts([]);
        dispatch(setShowingProducts(0));
      }
    },
    // dependencies: include things used inside callback
    [category, limit, totalProducts, dispatch]
  );

  // call on mount / when inputs change
  useEffect(() => {
    getSearchedProducts(searchQuery || "", sortCriteria || "", page || 1);
    // `getSearchedProducts` already depends on category/limit/totalProducts/dispatch
  }, [searchQuery, sortCriteria, page, getSearchedProducts]);

  // clone children and pass products prop
  const childrenWithProps = React.Children.map(children, (child) => {
    if (React.isValidElement(child)) {
      // Always pass products (even empty array) so child won't break
      return React.cloneElement(child, { products });
    }
    return null;
  });

  // Return a fragment containing the children (could be array or single)
  return <>{childrenWithProps}</>;
};

export default ProductGridWrapper;
