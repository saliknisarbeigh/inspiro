import React, { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import prophetsData from "../data/prophets.js";
import sahabasData from "../data/sahabas.js";
import Header from "../components/Header";

const Person = () => {
  const { category, person } = useParams();
  const navigate = useNavigate();
  const [stories, setStories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    // Get the appropriate data based on category
    const data = category === "Prophet" ? prophetsData : sahabasData;

    // Filter stories for the specific person
    const personStories = data.filter(
      (story) => story.name.toLowerCase() === person.toLowerCase()
    );

    setStories(personStories);
    setLoading(false);
  }, [category, person]);

  const handleCardClick = (story) => {
    navigate(`/story/${story.id}`, { state: { storyData: story } });
  };

  const getReadTime = (content) => {
    const wordsPerMinute = 200;
    const wordCount = content.split(" ").length;
    const minutes = Math.ceil(wordCount / wordsPerMinute);
    return `${minutes} min read`;
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading stories...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            Stories of {person}
          </h1>
          <p className="text-lg text-gray-600 font-cardo">
            {category} • {stories.length}{" "}
            {stories.length === 1 ? "story" : "stories"}
          </p>
        </div>

        {stories.length === 0 ? (
          <div className="text-center py-12">
            <div className="text-gray-400 text-6xl mb-4">📚</div>
            <h3 className="text-xl font-semibold text-gray-700 mb-2">
              No stories found
            </h3>
            <p className="text-gray-500">
              No stories available for {person} yet.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
            {stories.map((story) => (
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
        )}
      </div>
    </div>
  );
};

export default Person;
