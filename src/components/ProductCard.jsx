import React from "react";
import { ShoppingCart, Star } from "lucide-react";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { addItem, clearCart } from "../cartSlice";
import toast from "react-hot-toast";

const ProductCard = ({ product, onOrder }) => {
  const {
    id,
    title,
    price,
    image,
    description,
    category,
    ingredients,
    servings,
  } = product;
  const dispatch = useDispatch();

  // Handle add to cart functionality
  const handleAddToCart = () => {
    dispatch(addItem({ id, title, price, quantity: 1 }));
    toast.success("Added to cart!");
  };

  // Handle order now (open modal)
  const handleOrderNow = () => {
    // Clear cart and add only this product for direct order
    dispatch(clearCart());
    dispatch(addItem({ id, title, price, quantity: 1 }));
    if (onOrder) onOrder(product);
    else toast.error("Order modal not available");
  };

  // Fallback image if image fails to load
  const handleImageError = (e) => {
    e.target.src = "/api/placeholder/300/250";
  };

  return (
    <motion.div
      className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden group border-2 border-amber-100"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      {/* Image Container */}
      <div className="relative overflow-hidden">
        <img
          src={image || "/api/placeholder/300/250"}
          alt={title}
          onError={handleImageError}
          className="w-full h-48 sm:h-56 object-cover transition-transform duration-300 group-hover:scale-105 rounded-t-3xl"
        />
        {/* Category Badge */}
        {category && (
          <div className="absolute top-3 left-3">
            <span className="bg-amber-600 text-white text-xs font-semibold px-3 py-1 rounded-full capitalize shadow">
              {category}
            </span>
          </div>
        )}
      </div>
      {/* Content Container */}
      <div className="p-5">
        {/* Title and Rating */}
        <div className="flex items-start justify-between mb-2">
          <h3
            className="text-xl font-bold text-gray-800 overflow-hidden text-ellipsis group-hover:text-amber-600 transition-colors duration-200"
            style={{
              display: "-webkit-box",
              WebkitLineClamp: 2,
              WebkitBoxOrient: "vertical",
            }}
          >
            {title}
          </h3>
          <div className="flex items-center ml-2 flex-shrink-0">
            <Star className="h-4 w-4 text-yellow-400 fill-current" />
            <span className="text-sm text-gray-600 ml-1">4.8</span>
          </div>
        </div>
        {/* Description */}
        <p
          className="text-gray-600 text-sm leading-relaxed mb-3 overflow-hidden text-ellipsis"
          style={{
            display: "-webkit-box",
            WebkitLineClamp: 3,
            WebkitBoxOrient: "vertical",
          }}
        >
          {description}
        </p>
        {/* Additional Info */}
        {(ingredients || servings) && (
          <div className="mb-3 space-y-1">
            {servings && (
              <p className="text-xs text-gray-500">
                <span className="font-medium">Serves:</span> {servings}
              </p>
            )}
            {ingredients && ingredients.length > 0 && (
              <p className="text-xs text-gray-500">
                <span className="font-medium">Key ingredients:</span>{" "}
                {ingredients.slice(0, 3).join(", ")}
                {ingredients.length > 3 && "..."}
              </p>
            )}
          </div>
        )}
        {/* Price and Action */}
        <div className="flex flex-col sm:flex-row items-center justify-between pt-2 border-t border-gray-100 gap-2">
          <div className="flex flex-col">
            <span className="text-2xl font-bold text-amber-600">{price}</span>
            {servings && (
              <span className="text-xs text-gray-500">
                per {servings.includes("person") ? "serving" : "item"}
              </span>
            )}
          </div>
          <div className="flex gap-2 w-full sm:w-auto">
            <button
              onClick={handleAddToCart}
              className="flex-1 sm:flex-none bg-amber-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-amber-700 transition-colors duration-200 flex items-center justify-center space-x-2 text-sm"
            >
              <ShoppingCart className="h-4 w-4" />
              <span>Add to Cart</span>
            </button>
            <button
              onClick={handleOrderNow}
              className="flex-1 sm:flex-none bg-pink-500 text-white px-4 py-2 rounded-lg font-semibold shadow hover:bg-pink-600 transition-colors duration-200 flex items-center justify-center space-x-2 text-sm"
            >
              <span>Order Now</span>
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
