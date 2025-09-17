import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import prophetsData from "../data/prophets.js";
import sahabasData from "../data/sahabas.js";
import bg from "../assets/background.jpg";
import Header from "../components/Header";    

const Stories = () => {
  const [allStories, setAllStories] = useState([]);
  const [prophets, setProphets] = useState([]);
  const [sahabas, setSahabas] = useState([]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const combined = [...prophetsData, ...sahabasData];
    const sorted = combined.sort((a, b) => a.title.localeCompare(b.title));
    setAllStories(sorted);

    const prophetNames = [...new Set(prophetsData.map((story) => story.name))];
    const sahabaNames = [...new Set(sahabasData.map((story) => story.name))];

    setProphets(prophetNames);
    setSahabas(sahabaNames);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleCardClick = (story) => {
    window.location.href = `/story/${story.id}`;
  };

  const getReadTime = (content) => {
    const wordsPerMinute = 200;
    const wordCount = content.split(" ").length;
    const minutes = Math.ceil(wordCount / wordsPerMinute);
    return `${minutes} min read`;
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <Header />

      {/* Main Content */}
      <div className="max-w-7xl mx-auto py-12 px-4 w-full overflow-hidden">
        <div className="mb-12 text-center">
          <div className="relative inline-block" ref={dropdownRef}>
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="text-5xl font-bold mb-4 text-cardo op-shadow-lg font-cardo hover:text-blue-600 transition-colors"
            >
              All Stories
            </button>

            {isDropdownOpen && (
              <div className="absolute left-1/2 transform -translate-x-1/2 mt-2 bg-white shadow-lg rounded-lg p-4 w-[480px] gap-8 flex z-10">
                <div>
                  <h3 className="font-semibold mb-2 text-black">Prophets</h3>
                  <ul className="space-y-1 text-sm">
                    {prophets.map((name) => (
                      <li key={`p-${name}`}>
                        <Link
                          className="hover:text-blue-600 text-gray-600 transition-colors duration-200 block py-1"
                          to={`/person/Prophet/${encodeURIComponent(name)}`}
                          onClick={() => setIsDropdownOpen(false)}
                        >
                          {name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-2 text-black">Sahabas</h3>
                  <ul className="space-y-1 text-sm">
                    {sahabas.map((name) => (
                      <li key={`s-${name}`}>
                        <Link
                          className="hover:text-blue-600 text-gray-600 transition-colors duration-200 block py-1"
                          to={`/person/Sahaba/${encodeURIComponent(name)}`}
                          onClick={() => setIsDropdownOpen(false)}
                        >
                          {name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </div>
          <p className="text-xl text-cardo drop-shadow-md max-w-2xl mx-auto font-cardo">
            Explore timeless tales of faith, wisdom, and courage from the lives of Prophets and Sahabas
          </p>
        </div>

        {/* Stories Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          {allStories.map((story) => (
            <div
              key={story.id}
              onClick={() => handleCardClick(story)}
              className="group cursor-pointer w-full"
            >
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 relative w-full h-full flex flex-col">
                {story.image && (
                  <div className="h-24 sm:h-48 overflow-hidden relative">
                    <img
                      src={story.image}
                      alt={story.title}
                      className="w-full h-full object-cover"
                    />
                    {/* Date Badge */}
                    <div className="absolute top-2 sm:top-4 left-2 sm:left-4 z-10">
                      <div className="bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 text-xs sm:text-sm font-medium text-gray-700">
                        {story.date}
                      </div>
                    </div>
                  </div>
                )}

                {/* Content Section */}
                <div className="p-3 sm:p-6 flex-grow flex flex-col">
                  {/* Meta Info */}
                  <div className="flex items-center justify-between mb-1 sm:mb-4">
                    <span className="text-xs sm:text-sm font-medium text-gray-500 uppercase tracking-wide">
                      {story.chapter}
                    </span>
                    <span className="text-xs sm:text-sm text-gray-400">
                      {getReadTime(story.content)}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-base sm:text-xl font-bold text-gray-900 mb-1 sm:mb-3 leading-tight group-hover:text-blue-600 transition-colors font-cardo">
                    {story.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-gray-600 mb-1 sm:mb-4 line-clamp-2 leading-relaxed font-cardo flex-grow">
                    {story.shortDescription}
                  </p>

                  {/* Read More */}
                  <div className="flex items-center justify-between text-sm sm:text-base mt-auto pt-2">
                    <span className="text-gray-500 font-cardo truncate max-w-[60%]">{story.name}</span>
                    <div className="flex items-center text-blue-600 font-medium group-hover:gap-1 transition-all whitespace-nowrap">
                      <span>Read More</span>
                      <svg
                        className="w-4 h-4 transform group-hover:translate-x-1 transition-transform"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
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

export default Stories;
