import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="text-center max-w-xl px-4">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">About</h1>
        <p className="text-lg text-gray-600 mb-2">
          This project is dedicated to sharing inspiring stories of the
          Prophets, Sahabas, and other important figures in Islam.
        </p>
        <p className="text-lg text-gray-500 mb-6">
          The page is still under development. More stories and features will be
          added soon, in shaa Allah.
        </p>

        <Link
          to="/stories"
          className="links-cardo hover:underline hover:decoration-black hover:decoration-1 transition-all duration-300"
        >
          👉 Click here to read the stories
        </Link>
      </div>
    </div>
  );
};

export default About;
