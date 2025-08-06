import React from "react";
import ProductCard from "./ProductCard";

const CategorySection = ({ title, description, icon, products, onOrder }) => {
  // Don't render if no products
  if (!products || products.length === 0) {
    return null;
  }

  return (
    <section className="mb-16">
      {/* Category Header */}
      <div className="text-center mb-8">
        <div className="flex items-center justify-center mb-4">
          {icon && <span className="text-4xl mr-3">{icon}</span>}
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            {title}
          </h2>
        </div>
        {description && (
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {description}
          </p>
        )}
        <div className="mt-4 flex items-center justify-center">
          <div className="w-20 h-1 bg-amber-600 rounded-full"></div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} onOrder={onOrder} />
        ))}
      </div>

      {/* Category Stats */}
      <div className="mt-8 text-center">
        <p className="text-gray-500">
          {products.length} {products.length === 1 ? "item" : "items"} in this
          category
        </p>
      </div>
    </section>
  );
};

export default CategorySection;
