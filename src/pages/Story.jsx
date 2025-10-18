import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import prophetsData from "../data/prophets.js";
import sahabasData from "../data/sahabas.js";
import Header from "../components/Header.jsx";
import bg from "../assets/storyBackground.png";
import { SEO } from "../utils/seo";

const Story = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [story, setStory] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    const allStories = [...prophetsData, ...sahabasData];
    const foundStory = allStories.find((s) => s.id === id);

    if (foundStory) {
      setStory(foundStory);
    } else {
      navigate("/"); 
    }

    setLoading(false);
  }, [id, navigate]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading story...</p>
        </div>
      </div>
    );
  }

  if (!story) return null;

  return (
    <>
      <SEO 
        title={`${story.title} - ${story.name}`}
        description={`Read the inspiring story of ${story.name}. ${story.description || 'Discover the wisdom and lessons from this important figure in Islamic history.'}`}
        keywords={`${story.name}, ${story.category}, Islamic stories, ${story.name.toLowerCase()} story, Islamic wisdom, ${story.name.toLowerCase()} teachings`}
        url={`/story/${story.id}`}
        type="article"
      />
      <div className="min-h-screen bg-cover bg-center bg-no-repeat fixed inset-0" style={{ backgroundImage: `url(${bg})` }}>
        <Header />
      <div className="relative z-10 max-w-4xl mx-auto px-4 py-8 mt-16 h-screen overflow-y-auto bg-white/10 backdrop-blur-md rounded-lg" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none', WebkitScrollbar: 'none' }}>

        {/* Story header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-sm font-medium text-blue-600 bg-blue-100 px-4 py-2 rounded-full">
              {story.chapter}
            </span>
            <span className="text-sm text-gray-500 bg-gray-100 px-4 py-2 rounded-full">
              {story.name}
            </span>
            <span className="text-sm text-gray-500 bg-gray-100 px-4 py-2 rounded-full ml-auto">
              {story.date}
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-serif leading-tight">
            {story.title}
          </h1>

          <p className="text-xl text-gray-600 mb-8 font-serif leading-relaxed italic">
            {story.shortDescription}
          </p>

          {story.image && (
            <div className="mb-6 rounded-lg overflow-hidden shadow-lg">
              <img
                src={story.image}
                alt={story.title}
                className="w-full h-64 md:h-96 object-cover transform hover:scale-105 transition-transform duration-300"
              />
            </div>
          )}
        </div>

        {/* Ayah Above */}
        {story.ayahAbove && (
          <div className="mb-8 bg-gradient-to-r from-emerald-50/30 to-teal-50/30 backdrop-blur-sm border-l-4 border-emerald-500 rounded-lg p-6 shadow-lg transform transition-all duration-500 hover:shadow-xl">
            <div className="flex items-start">
              <div className="text-green-600 text-3xl mr-3 mt-1 font-serif">"</div>
              <div className="flex-1">
                <div className="relative">
                  <div className="absolute -top-2 -left-2 w-8 h-8 bg-green-200 rounded-full opacity-20"></div>
                  <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-200 rounded-full opacity-20"></div>
                  <p className="text-gray-800 text-xl font-medium leading-relaxed mb-3 font-serif relative z-10">
                    {story.ayahAbove}
                  </p>
                </div>
                <div className="flex items-center justify-between mt-4">
                  <p className="text-green-700 text-sm font-medium bg-green-100 px-3 py-1 rounded-full">
                    {story.ayahAboveSource}
                  </p>
                  <button className="text-green-600 hover:text-green-700 transition-colors" title="Copy verse">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Story content */}
        <article className="mb-8">
          <div className="prose max-w-none">
            <div className="whitespace-pre-line text-gray-700 leading-relaxed font-serif text-lg lg:text-xl">
              {story.content}
            </div>
          </div>
        </article>

        {/* Ayah Below */}
        {story.ayahBelow && (
          <div className="mb-8 bg-gradient-to-r from-blue-50/30 to-indigo-50/30 backdrop-blur-sm border-l-4 border-blue-500 rounded-lg p-6 shadow-lg transform transition-all duration-500 hover:shadow-xl">
            <div className="flex items-start">
              <div className="text-blue-600 text-3xl mr-3 mt-1 font-serif">"</div>
              <div className="flex-1">
                <div className="relative">
                  <div className="absolute -top-2 -left-2 w-8 h-8 bg-blue-200 rounded-full opacity-20"></div>
                  <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-blue-200 rounded-full opacity-20"></div>
                  <p className="text-gray-800 text-xl font-medium leading-relaxed mb-3 font-serif relative z-10">
                    {story.ayahBelow}
                  </p>
                </div>
                <div className="flex items-center justify-between mt-4">
                  <p className="text-blue-700 text-sm font-medium bg-blue-100 px-3 py-1 rounded-full">
                    {story.ayahBelowSource}
                  </p>
                  <button className="text-blue-600 hover:text-blue-700 transition-colors" title="Copy verse">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
    </>
  );
};

export default Story;
