import {
  Button,
  Dropdown,
  ProductItem,
  QuantityInput,
  StandardSelectInput,
} from "../components";
import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { addProductToTheCart } from "../features/cart/cartSlice";
import { useAppDispatch } from "../hooks";
import WithSelectInputWrapper from "../utils/withSelectInputWrapper";
import WithNumberInputWrapper from "../utils/withNumberInputWrapper";
import { formatCategoryName } from "../utils/formatCategoryName";
import toast from "react-hot-toast";

const SingleProduct = () => {
  
  const [products, setProducts] = useState<Product[]>([]);
  const [singleProduct, setSingleProduct] = useState<Product | null>(null);
  // defining default values for input fields
  const [size, setSize] = useState<string>("xs");

  const [quantity, setQuantity] = useState<number>(1);
  const params = useParams<{ id: string }>();
  const dispatch = useAppDispatch();

  // defining HOC instances
  const SelectInputUpgrade = WithSelectInputWrapper(StandardSelectInput);
  const QuantityInputUpgrade = WithNumberInputWrapper(QuantityInput);

  useEffect(() => {
    const fetchSingleProduct = async () => {
      try {
        await fetch(`http://localhost:5173/products/${params.id}`);
        // Do nothing with the data
      } catch (err) {
        console.error("Error fetching single product", err);
      }
    };
  
    const fetchProducts = async () => {
      try {
        await fetch("http://localhost:5173/products");
        // Do nothing with the data
      } catch (err) {
        console.error("Error fetching products", err);
      }
    };
  
    fetchSingleProduct();
    fetchProducts();
  }, [params.id]);
  

  const handleAddToCart = async () => {
    try {
      const res = await fetch(`http://localhost:5173/products/${params.id}`);
      const product = await res.json();
  
      dispatch(
        addProductToTheCart({
          id: product.id + size,
          image: product.image,
          title: product.title,
          category: product.category,
          price: product.price,
          quantity,
          size,
          popularity: product.popularity,
          stock: product.stock,
        })
      );
  
      localStorage.setItem(
        "cartCount",
        ((parseInt(localStorage.getItem("cartCount") || "0") || 0) + 1).toString()
      );
      window.dispatchEvent(new Event("cartUpdated"));
      toast.success("Product added to the cart");
    } catch (err) {
      console.error("Error adding product to cart", err);
    }
  };
  
  
  

  return (
    <div className="max-w-screen-2xl mx-auto px-5 max-[400px]:px-3">
      <div className="grid grid-cols-3 gap-x-8 max-lg:grid-cols-1">
        <div className="lg:col-span-2">
          <img
            src={`/src/assets/${singleProduct?.image}`}
            alt={singleProduct?.title}
          />
        </div>
        <div className="w-full flex flex-col gap-5 mt-9">
          <div className="flex flex-col gap-2">
            <h1 className="text-2xl">{singleProduct?.title}</h1>
            <div className="flex justify-between items-center">
              <p className="text-base text-secondaryBrown">
                {formatCategoryName(singleProduct?.category || "")}
              </p>
              <p className="text-base font-bold">₹{ singleProduct?.price }</p>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <SelectInputUpgrade
              selectList={[
                { id: "xs", value: "XS" },
                { id: "sm", value: "SM" },
                { id: "m", value: "M" },
                { id: "lg", value: "LG" },
                { id: "xl", value: "XL" },
                { id: "2xl", value: "2XL" },
              ]}
              value={size}
              onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                setSize(() => e.target.value)
              }
            />
            

            <QuantityInputUpgrade
              value={quantity}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setQuantity(() => parseInt(e.target.value))
              }
            />
          </div>
          <div className="flex flex-col gap-3">
            <Button mode="brown" text="Add to cart" onClick={handleAddToCart} />
            
          </div>
          <div>
            {/* drowdown items */}
            <div className="p-4">
      <Dropdown dropdownTitle="Description">
        <ul className="list-disc pl-5">
          <li>Exquisite hand-painted dress</li>
          <li>Crafted with precision and love</li>
          <li>Delicate floral patterns on soft, breathable fabric</li>
          <li>Elegant silhouette and lightweight material</li>
          <li>Perfect for casual outings, special occasions, or evening gatherings</li>
          <li>Blend of tradition and modern fashion</li>
        </ul>
      </Dropdown>

      <Dropdown dropdownTitle="Product Details">
        <ul className="list-disc pl-5">
          <li><strong>Material:</strong> Premium quality chiffon blend</li>
          <li><strong>Design:</strong> Hand-painted floral patterns</li>
          <li><strong>Fit:</strong> Comfortable, flowy, and breathable</li>
          <li><strong>Sleeves:</strong> Half puff sleeves for a chic look</li>
          <li><strong>Length:</strong> Mid-length, suitable for all body types</li>
          <li><strong>Care Instructions:</strong> Hand wash with mild detergent, do not bleach, dry in shade</li>
        </ul>
      </Dropdown>

      <Dropdown dropdownTitle="Delivery Details">
        <ul className="list-disc pl-5">
          <li><strong>Shipping Time:</strong> 5-7 business days (India), 10-15 days (International)</li>
          <li><strong>Return Policy:</strong> 7-day easy return and exchange</li>
          <li><strong>Packaging:</strong> Carefully packed to prevent damage during transit</li>
          <li><strong>Cash on Delivery:</strong> Available for select locations</li>
          <li><strong>Customer Support:</strong> Contact our team anytime for queries</li>
        </ul>
      </Dropdown>
    </div>


          </div>
        </div>
      </div>

      {/* similar products */}
      <div>
        <h2 className="text-black/90 text-5xl mt-24 mb-12 text-center max-lg:text-4xl">
          Similar Products
        </h2>
        <div className="flex flex-wrap justify-between items-center gap-y-8 mt-12 max-xl:justify-start max-xl:gap-5 ">
          {products.slice(0, 3).map((product: Product) => (
            <ProductItem
              key={product?.id}
              id={product?.id}
              image={product?.image}
              title={product?.title}
              category={product?.category}
              price={product?.price}
              popularity={product?.popularity}
              stock={product?.stock}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
export default SingleProduct;
