import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false); // Mobile menu toggle
  const [scrolled, setScrolled] = useState(false); // Track scroll for desktop

  // Detect scroll for desktop blur
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  return (
    <header
      className={`w-full fixed top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/70 backdrop-blur" : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="text-2xl font-semibold">
        Logo
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Link to="/" className="hover:text-blue-600">
            Home
          </Link>
          <Link to="/about" className="hover:text-blue-600">
            About
          </Link>
        </nav>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button
            onClick={() => setMobileOpen((v) => !v)}
            className="focus:outline-none"
          >
            <span className="block w-6 h-0.5 bg-black mb-1"></span>
            <span className="block w-6 h-0.5 bg-black mb-1"></span>
            <span className="block w-6 h-0.5 bg-black"></span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white/90 backdrop-blur border-t border-b shadow-md px-4 py-4 flex flex-col gap-3 transition-all duration-300">
          <Link
            to="/"
            className="hover:text-blue-600"
            onClick={() => setMobileOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/about"
            className="hover:text-blue-600"
            onClick={() => setMobileOpen(false)}
          >
            About
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;
