import React, { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import prophetsData from "../data/prophets.js";
import sahabasData from "../data/sahabas.js";
import bg from "../assets/background.jpg";
import Header from "../components/Header";
import { SEO, getPersonSEO } from "../utils/seo";

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
      <div className="min-h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center" style={{ backgroundImage: `url(${bg})` }}>
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading stories...</p>
        </div>
      </div>
    );
  }

  const seoData = getPersonSEO(person, category);
  
  return (
    <>
      <SEO 
        title={seoData.title}
        description={seoData.description}
        keywords={seoData.keywords}
        url={`/person/${category}/${person}`}
      />
      <div className="min-h-screen bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${bg})` }}>
      <Header />

      <div className="relative z-10 max-w-6xl mx-auto py-12 px-4 w-full overflow-hidden min-h-[calc(100vh-4rem)]" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none', WebkitScrollbar: 'none' }}>
        {/* Enhanced Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4 font-serif leading-tight">
            Stories of {person}
          </h1>
          
          <div className="flex items-center justify-center gap-4 mb-6">
            <span className="text-lg font-medium text-blue-600 bg-blue-100 px-6 py-2 rounded-full">
              {category}
            </span>
            <span className="text-lg text-gray-600 bg-gray-100 px-6 py-2 rounded-full">
              {stories.length} {stories.length === 1 ? "story" : "stories"}
            </span>
          </div>
          
          <p className="text-xl text-gray-700 max-w-3xl mx-auto font-serif leading-relaxed italic">
            Discover the inspiring tales and wisdom from the life of {person}, 
            exploring their journey of faith, courage, and devotion to Islam.
          </p>
        </div>

        {stories.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-2xl shadow-lg max-w-2xl mx-auto">
            <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-gray-100 to-gray-200 rounded-full mb-6">
              <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-700 mb-3 font-serif">
              No Stories Found
            </h3>
            <p className="text-gray-500 text-lg mb-6 max-w-md mx-auto leading-relaxed">
              No stories available for {person} yet. Check back soon for inspiring tales from their life.
            </p>
            <button 
              onClick={() => navigate('/stories')}
              className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors font-medium"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              Browse All Stories
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
            {stories.map((story) => (
              <div
                key={story.id}
                onClick={() => handleCardClick(story)}
                className="group cursor-pointer w-full"
              >
                <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 relative w-full h-full flex flex-col group">
                  {story.image && (
                    <div className="h-24 sm:h-48 overflow-hidden relative">
                      <img
                        src={story.image}
                        alt={story.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      {/* Date Badge */}
                      <div className="absolute top-2 sm:top-4 left-2 sm:left-4 z-10">
                        <div className="bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 text-xs sm:text-sm font-medium text-gray-700 shadow-md">
                          {story.date}
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Content Section */}
                  <div className="p-3 sm:p-6 flex-grow flex flex-col">
                    {/* Meta Info */}
                    <div className="flex items-center justify-between mb-2 sm:mb-4">
                      <span className="text-xs sm:text-sm font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded-full uppercase tracking-wide">
                        {story.chapter}
                      </span>
                      <span className="text-xs sm:text-sm text-gray-500 bg-gray-50 px-3 py-1 rounded-full">
                        {getReadTime(story.content)}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-base sm:text-xl font-bold text-gray-900 mb-2 sm:mb-4 leading-tight group-hover:text-blue-600 transition-colors font-serif">
                      {story.title}
                    </h3>

                    {/* Description */}
                    <p className="text-xs sm:text-sm text-gray-600 mb-3 sm:mb-6 line-clamp-3 leading-relaxed font-serif flex-grow">
                      {story.shortDescription}
                    </p>

                    {/* Read More */}
                    <div className="flex items-center justify-between text-sm sm:text-base mt-auto pt-3 border-t border-gray-100">
                      <span className="text-gray-500 font-serif truncate max-w-[60%]">{story.name}</span>
                      <div className="flex items-center text-blue-600 font-medium group-hover:gap-2 transition-all whitespace-nowrap">
                        <span>Read Story</span>
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
    </>
  );
};

export default Person;
