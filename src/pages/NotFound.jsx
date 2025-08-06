import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center text-center p-6">
      <h1 className="text-4xl font-bold text-pink-700 mb-4">
        404 - Page Not Found
      </h1>
      <p className="text-lg text-gray-600 mb-6">
        Oops! This cupcake seems to have melted 🍰
      </p>
      <Link
        to="/"
        className="px-6 py-2 bg-pink-500 text-white rounded hover:bg-pink-600 transition"
      >
        Go back home
      </Link>
    </div>
  );
};

export default NotFound;
