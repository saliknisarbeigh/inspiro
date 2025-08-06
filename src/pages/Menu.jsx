import React, { useState } from "react";
import { Search, Filter } from "lucide-react";
import CategorySection from "../components/CategorySection";
import OrderModal from "../components/OrderModal";
import cakesData from "../data/cakes.json";
import breadsData from "../data/breads.json";
import pastriesData from "../data/pastries.json";

// Combine all products into a single array
const productsData = [...cakesData, ...breadsData, ...pastriesData];

const Menu = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [orderOpen, setOrderOpen] = useState(false);

  // Filter products based on search term and category
  const filteredProducts = productsData.filter((product) => {
    const matchesSearch =
      product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "all" || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  // Group products by category
  const groupedProducts = {
    cake: filteredProducts.filter((product) => product.category === "cake"),
    pastry: filteredProducts.filter((product) => product.category === "pastry"),
    bread: filteredProducts.filter((product) => product.category === "bread"),
  };

  // Category information
  const categories = [
    {
      id: "cake",
      name: "Cakes & Desserts",
      description:
        "Decadent cakes, cupcakes, and sweet treats perfect for celebrations and everyday indulgence",
      icon: "\uD83C\uDF70",
    },
    {
      id: "pastry",
      name: "Pastries & Viennoiserie",
      description:
        "Delicate pastries, croissants, and artisanal baked goods made with traditional techniques",
      icon: "\uD83E\uDD50",
    },
    {
      id: "bread",
      name: "Artisan Breads",
      description:
        "Fresh-baked breads using time-honored methods and premium ingredients",
      icon: "\uD83C\uDF5E",
    },
  ];

  const categoryFilters = [
    { value: "all", label: "All Items" },
    { value: "cake", label: "Cakes & Desserts" },
    { value: "pastry", label: "Pastries" },
    { value: "bread", label: "Breads" },
  ];

  // Handler for order modal
  const handleOrderNow = () => setOrderOpen(true);

  return (
    <div className="min-h-screen bg-bakery-mint">
      {/* Menu Header */}
      <section className="bg-bakery-dark text-bakery-yellow py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-bakery-yellow mb-4">
            Our Menu
          </h1>
          <p className="text-xl text-bakery-mintAccent max-w-2xl mx-auto">
            Discover our full range of freshly baked goods, from traditional
            breads to decadent desserts, all made with love and premium
            ingredients
          </p>
        </div>
      </section>
      {/* Search and Filter Section */}
      <section className="bg-bakery-mint py-8 border-b border-bakery-mintAccent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 items-center">
            {/* Search Bar */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Search our menu..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors duration-200"
              />
            </div>

            {/* Category Filter */}
            <div className="flex items-center space-x-2">
              <Filter className="text-gray-400 h-5 w-5" />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors duration-200"
              >
                {categoryFilters.map((filter) => (
                  <option key={filter.value} value={filter.value}>
                    {filter.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Results Count */}
            <div className="text-gray-600">
              <span className="font-medium">{filteredProducts.length}</span>{" "}
              items found
            </div>
          </div>
        </div>
      </section>
      {/* Menu Content */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Show filtered results or all categories */}
          {selectedCategory === "all" ? (
            // Show all categories
            <div className="space-y-16">
              {categories.map((category) => {
                const categoryProducts = groupedProducts[category.id];
                if (categoryProducts.length === 0) return null;

                return (
                  <CategorySection
                    key={category.id}
                    title={category.name}
                    description={category.description}
                    icon={category.icon}
                    products={categoryProducts}
                    onOrder={handleOrderNow}
                  />
                );
              })}
            </div>
          ) : (
            // Show single category
            <div>
              {(() => {
                const category = categories.find(
                  (cat) => cat.id === selectedCategory
                );
                const categoryProducts = groupedProducts[selectedCategory];

                if (categoryProducts.length === 0) {
                  return (
                    <div className="text-center py-12">
                      <p className="text-gray-500 text-lg">
                        No items found matching your criteria.
                      </p>
                      <button
                        onClick={() => {
                          setSelectedCategory("all");
                          setSearchTerm("");
                        }}
                        className="mt-4 bg-amber-600 text-white px-6 py-2 rounded-lg hover:bg-amber-700 transition-colors duration-200"
                      >
                        View All Items
                      </button>
                    </div>
                  );
                }

                return (
                  <CategorySection
                    title={category.name}
                    description={category.description}
                    icon={category.icon}
                    products={categoryProducts}
                    onOrder={handleOrderNow}
                  />
                );
              })()}
            </div>
          )}

          {/* No Results Message */}
          {filteredProducts.length === 0 && (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                No items found
              </h3>
              <p className="text-gray-600 mb-6">
                Try adjusting your search terms or browse all categories
              </p>
              <button
                onClick={() => {
                  setSelectedCategory("all");
                  setSearchTerm("");
                }}
                className="bg-amber-600 text-white px-6 py-3 rounded-lg hover:bg-amber-700 transition-colors duration-200"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-yellow-100 py-16">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Can't Find What You're Looking For?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            We offer custom orders and special requests. Contact us to discuss
            your needs!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-amber-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-amber-700 transition-colors duration-200"
            >
              Contact Us
            </a>
            <a
              href="tel:555-123-BAKE"
              className="border-2 border-amber-600 text-amber-600 px-8 py-3 rounded-lg font-semibold hover:bg-amber-600 hover:text-white transition-colors duration-200"
            >
              Call: (555) 123-BAKE
            </a>
          </div>
        </div>
      </section>
      <OrderModal isOpen={orderOpen} onClose={() => setOrderOpen(false)} />
    </div>
  );
};

export default Menu;
