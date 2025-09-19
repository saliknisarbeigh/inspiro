import React from "react";
import { Link } from "react-router-dom";
import bg from "../assets/about.png";
import { SEO, PAGE_SEO } from "../utils/seo";

const About = () => {
  return (
    <>
      <SEO 
        title={PAGE_SEO.about.title}
        description={PAGE_SEO.about.description}
        keywords={PAGE_SEO.about.keywords}
        url="/about"
      />
      <div className="min-h-screen bg-gray-50">
        <div
          className="w-full h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center"
          style={{ backgroundImage: `url(${bg})` }}
        >
          <div className="text-center text-black max-w-4xl px-6">
            <h1 className="md:text-4xl title-elegant mb-8" style={{ 
              fontFamily: "'Beth Ellen', cursive", 
              fontWeight: 400, 
              fontStyle: 'normal', 
              fontSize: '38px', 
              lineHeight: '57px', 
              color: 'rgb(36, 33, 33)' 
            }}>
              About Inspiro
            </h1>
            
            <div className="space-y-6 mb-12">
              <p className="text-lg md:text-xl leading-relaxed" style={{ fontFamily: "'Cardo', serif" }}>
                Welcome to Inspiro, your source for inspiring stories that bring to life the wisdom,
                courage, and faith of the Prophets, Sahabas, and other important figures in Islam.
              </p>
              
              <p className="text-lg md:text-xl leading-relaxed" style={{ fontFamily: "'Cardo', serif" }}>
                Our mission is to preserve and share these timeless stories that continue to inspire
                and guide Muslims around the world. Each story carries valuable lessons about faith,
                patience, courage, and devotion to Allah.
              </p>
              
              <p className="text-lg md:text-xl leading-relaxed" style={{ fontFamily: "'Cardo', serif" }}>
                Through these stories, we hope to connect you with the rich heritage of Islam and
                provide spiritual nourishment for your journey.
              </p>
            </div>

            {/* Navigation Links */}
            <div className="flex gap-6 md:gap-8 justify-center items-center">
              <Link
                to="/"
                className="links-cardo hover:underline hover:decoration-black hover:decoration-1 transition-all duration-300 text-lg"
              >
                Home
              </Link>
              <Link
                to="/stories"
                className="links-cardo hover:underline hover:decoration-black hover:decoration-1 transition-all duration-300 text-lg"
              >
                Stories
              </Link>
              <Link
                to="/inspire"
                className="links-cardo hover:underline hover:decoration-black hover:decoration-1 transition-all duration-300 text-lg"
              >
                Inspire
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
