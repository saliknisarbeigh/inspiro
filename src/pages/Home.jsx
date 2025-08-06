import React from "react";
import { ArrowRight, Star, Clock, Award } from "lucide-react";
import ProductCard from "../components/ProductCard";
import productsData from "../data/products.json";

const Home = () => {
  // Get first 3 products as featured items
  const featuredProducts = productsData.slice(0, 3);

  const scrollToFeatured = () => {
    document.getElementById("featured-products").scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-amber-50 to-yellow-100 py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Hero Content */}
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 leading-tight">
                Fresh Baked
                <span className="text-amber-600 block">Every Morning</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                Experience the warmth of freshly baked breads, pastries, and
                cakes made with love and the finest ingredients. Serving our
                community since 1985.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button
                  onClick={scrollToFeatured}
                  className="bg-amber-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-amber-700 transition-colors duration-200 flex items-center justify-center group"
                >
                  View Our Specialties
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
                </button>
                <a
                  href="/menu"
                  className="border-2 border-amber-600 text-amber-600 px-8 py-3 rounded-lg font-semibold hover:bg-amber-600 hover:text-white transition-colors duration-200 text-center"
                >
                  Full Menu
                </a>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-4 pt-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-amber-600">38+</div>
                  <div className="text-sm text-gray-600">
                    Years of Experience
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-amber-600">50+</div>
                  <div className="text-sm text-gray-600">Daily Fresh Items</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-amber-600">1000+</div>
                  <div className="text-sm text-gray-600">Happy Customers</div>
                </div>
              </div>
            </div>

            {/* Hero Image */}
            <div className="relative">
              <div className="aspect-square lg:aspect-[4/3] bg-amber-200 rounded-2xl overflow-hidden shadow-2xl">
                <img
                  //   src="/api/placeholder/600/600"
                  src="https://plus.unsplash.com/premium_photo-1713447395823-2e0b40b75a89?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2FrZXxlbnwwfHwwfHx8MA%3D%3D"
                  alt="Fresh baked goods display"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Floating Badge */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl p-4 shadow-lg">
                <div className="flex items-center space-x-2">
                  <Star className="h-5 w-5 text-yellow-500 fill-current" />
                  <div>
                    <div className="text-sm font-semibold text-gray-800">
                      4.9/5 Rating
                    </div>
                    <div className="text-xs text-gray-600">500+ Reviews</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section id="featured-products" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Today's Specialties
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover our most loved creations, baked fresh daily with premium
              ingredients
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="text-center mt-12">
            <a
              href="/menu"
              className="inline-flex items-center bg-amber-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-amber-700 transition-colors duration-200 group"
            >
              View Full Menu
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
            </a>
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-16 bg-yellow-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* About Image */}
            <div className="relative">
              <div className="aspect-[4/3] bg-amber-200 rounded-2xl overflow-hidden shadow-xl">
                <img
                  src="/api/placeholder/500/400"
                  alt="Baker working in kitchen"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-amber-600 rounded-full opacity-20"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-yellow-400 rounded-full opacity-30"></div>
            </div>

            {/* About Content */}
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                Our Story of
                <span className="text-amber-600 block">
                  Passion & Tradition
                </span>
              </h2>

              <p className="text-lg text-gray-600 leading-relaxed">
                For over three decades, Sweet Delights has been the heart of our
                community's morning ritual. What started as a small family
                bakery has grown into a beloved institution, yet we've never
                forgotten our roots.
              </p>

              <p className="text-gray-600 leading-relaxed">
                Every loaf of bread, every delicate pastry, and every
                celebration cake is crafted using time-honored techniques passed
                down through generations, combined with the finest
                locally-sourced ingredients.
              </p>

              {/* Key Features */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                <div className="flex items-center space-x-3">
                  <Clock className="h-5 w-5 text-amber-600" />
                  <span className="text-gray-700">Daily Fresh Baking</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Award className="h-5 w-5 text-amber-600" />
                  <span className="text-gray-700">Award-Winning Quality</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Star className="h-5 w-5 text-amber-600" />
                  <span className="text-gray-700">Family Recipes</span>
                </div>
                <div className="flex items-center space-x-3">
                  <ArrowRight className="h-5 w-5 text-amber-600" />
                  <span className="text-gray-700">Local Ingredients</span>
                </div>
              </div>

              <div className="pt-6">
                <a
                  href="/about"
                  className="inline-flex items-center text-amber-600 font-semibold hover:text-amber-700 transition-colors duration-200 group"
                >
                  Learn More About Us
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 bg-gradient-to-r from-amber-600 to-yellow-500">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Visit Us Today
          </h2>
          <p className="text-xl text-amber-100 mb-8">
            Experience the aroma of fresh-baked goods and taste the difference
            quality makes
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-white text-amber-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
            >
              Get Directions
            </a>
            <a
              href="tel:555-123-BAKE"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-amber-600 transition-colors duration-200"
            >
              Call Now: (555) 123-BAKE
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
