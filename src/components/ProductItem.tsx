import { Link } from "react-router-dom";
import { formatCategoryName } from "../utils/formatCategoryName";
import { useState, useEffect } from "react";

const ProductItem: React.FC<Product> = ({ id, image, title, category, price }) => { 
  // Generate a random rating between 1 and 5
  const [rating, setRating] = useState(0);

  useEffect(() => {
    setRating(parseFloat((Math.random() * 4 + 1).toFixed(1))); // Generates random rating (1.0 - 5.0)
  }, []);

  // Generate stars dynamically based on rating
  const renderStars = () => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

    return (
      <div className="flex gap-1 text-yellow-400">
        {Array(fullStars)
          .fill(0)
          .map((_, i) => (
            <span key={`full-${i}`}>&#9733;</span> // Full Star
          ))}
        {hasHalfStar && <span>&#9734;</span>} {/* Half Star */}
        {Array(emptyStars)
          .fill(0)
          .map((_, i) => (
            <span key={`empty-${i}`} className="text-gray-300">
              &#9734;
            </span> // Empty Star
          ))}
      </div>
    );
  };

  return (
    <div className="w-full max-w-[400px] flex flex-col items-center justify-center gap-4 mx-auto max-md:w-[90%]">
      <Link
        to={`/product/${id}`}
        className="w-full  overflow-hidden flex items-center justify-center"
      >
        <img src={`/src/assets/${image}`} alt={title} />
      </Link>
      <Link
        to={`/product/${id}`}
        className="text-black text-center text-3xl tracking-[1.02px] max-md:text-2xl"
      >
        <h2 className="text-sm">{title}</h2>
      </Link>

      {/* Category with Star Rating */}
      <div className="flex items-center justify-center gap-3">
        <p className="text-secondaryBrown text-lg tracking-wide text-center max-md:text-base">
          {formatCategoryName(category)}
        </p>
        {renderStars()}
      </div>

      <p className="text-black text-2xl text-center font-bold max-md:text-xl">
        ₹{price}
      </p>

      <div className="w-full flex flex-col gap-1">
        <Link
          to={`/product/${id}`}
          className="text-white bg-secondaryBrown text-center text-xl font-normal tracking-[0.6px] leading-[72px] w-full h-12 flex items-center justify-center max-md:text-base"
        >
          View product
        </Link>
        <Link
          to={`/product/${id}`}
          className="bg-white text-black text-center text-xl border border-[rgba(0, 0, 0, 0.40)] font-normal tracking-[0.6px] leading-[72px] w-full h-12 flex items-center justify-center max-md:text-base"
        >
          Learn more
        </Link>
      </div>
    </div>
  );
};

export default ProductItem;
