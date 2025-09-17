import React from "react";
import { Link } from "react-router-dom";
import bg from "../assets/background.jpg";
import Header from "../components/Header";

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* <Header /> */}
      <div
        className="w-full h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <div className="text-center text-black">
          <h1 className="md:text-4xl title-elegant mb-8" style={{ 
            fontFamily: "'Beth Ellen', cursive", 
            fontWeight: 400, 
            fontStyle: 'normal', 
            fontSize: '38px', 
            lineHeight: '57px', 
            color: 'rgb(36, 33, 33)' 
          }}>
            Stories of Prophets and Sahabas
          </h1>

          {/* Navigation Links */}
          <div className="flex md:flex-row gap-6 md:gap-8 justify-center items-center">
            <Link
              to="/about"
              className="links-cardo hover:underline hover:decoration-black hover:decoration-1 transition-all duration-300"
            >
              About
            </Link>
            <Link
              to="/stories"
              className="links-cardo hover:underline hover:decoration-black hover:decoration-1 transition-all duration-300"
            >
              Stories
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
