import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import prophetsData from "../data/prophets.js";
import sahabasData from "../data/sahabas.js";
import Header from "../components/Header.jsx";

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
      navigate("/"); // Redirect if not found
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
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="max-w-4xl mx-auto px-4 py-8">

        {/* Story header */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-sm font-medium text-blue-600 bg-blue-100 px-3 py-1 rounded-full">
              {story.chapter}
            </span>
            <span className="text-sm text-gray-500">{story.name}</span>
          </div>

          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {story.title}
          </h1>

          <p className="text-lg text-gray-600 mb-6 font-cardo">
            {story.shortDescription}
          </p>

          {story.image && (
            <div className="mb-6">
              <img
                src={story.image}
                alt={story.title}
                className="w-full h-64 md:h-96 object-cover rounded-lg"
              />
            </div>
          )}
        </div>

        {/* Story content */}
        <article className="bg-white rounded-lg shadow-md p-8">
          <div className="prose max-w-none">
            <div className="whitespace-pre-line text-gray-700 leading-relaxed font-cardo text-lg">
              {story.content}
            </div>
          </div>
        </article>
      </div>
    </div>
  );
};

export default Story;
