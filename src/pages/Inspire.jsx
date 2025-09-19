import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import inspireData from "../data/inspire.js";
import bg from "../assets/inspire.png";

const Inspire = () => {
  const inspiringQuotes = inspireData;

  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <Header />

      {/* Main Content */}
      <div className="max-w-7xl mx-auto py-12 px-4 w-full overflow-hidden">
        <div className="mb-12 text-center">
          <div className="relative inline-block">
            <h1 className="text-5xl font-bold mb-4 text-cardo op-shadow-lg font-cardo hover:text-blue-600 transition-colors">
              Wisdom & Inspiration
            </h1>
          </div>
          <p className="text-xl text-cardo drop-shadow-md max-w-2xl mx-auto font-cardo">
            Discover timeless wisdom and inspiration from Islamic teachings and quotes
          </p>
        </div>

        {/* Quotes Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          {inspiringQuotes.map((quote) => (
            <div
              key={quote.id}
              className="group cursor-pointer w-full"
            >
              <div className="rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 relative w-full h-full flex flex-col min-h-[200px] sm:min-h-[220px]" style={{ backgroundColor: '#F6EFD7' }}>
                {/* Content */}
                <div 
                  id={`quote-card-${quote.id}`}
                  className="relative z-10 p-4 sm:p-6 flex flex-col justify-between text-gray-900 h-full"
                >
                  {/* Quote text */}
                  <div className="flex-1 flex items-center mb-2">
                    <p className="text-sm sm:text-base md:text-lg font-light leading-relaxed text-center text-gray-700">
                      {quote.text}
                    </p>
                  </div>
                  
                  {/* Author and source */}
                  <div className="text-center space-y-1 flex-shrink-0">
                    <p className="font-semibold text-sm sm:text-base text-gray-900">{quote.author}</p>
                    <p className="text-xs opacity-80 text-gray-600">{quote.source}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Inspire;
