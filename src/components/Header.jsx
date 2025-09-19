import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import prophetsData from "../data/prophets.js";
import sahabasData from "../data/sahabas.js";
import logo from "../assets/logo.png";

const Header = () => {
  const [open, setOpen] = useState(false); // Desktop dropdown
  const [mobileOpen, setMobileOpen] = useState(false); // Mobile menu toggle
  const [mobileStoriesOpen, setMobileStoriesOpen] = useState(false); // Mobile dropdown
  const [prophets, setProphets] = useState([]);
  const [sahabas, setSahabas] = useState([]);
  const [scrolled, setScrolled] = useState(false); // Track scroll for desktop
  const dropdownRef = useRef(null);

  // Detect scroll for desktop blur
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close desktop dropdown when clicking away
  useEffect(() => {
    const onClickAway = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("click", onClickAway);
    return () => document.removeEventListener("click", onClickAway);
  }, []);

  // Load unique names
  useEffect(() => {
    setProphets([...new Set(prophetsData.map((story) => story.name))]);
    setSahabas([...new Set(sahabasData.map((story) => story.name))]);
  }, []);


  return (
    <header
      className={`w-full fixed top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/70 backdrop-blur" : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <img 
            src={logo} 
            alt="Stories of Prophets and Sahabas" 
            className="h-16 w-auto rounded-full"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Link to="/" className="hover:text-blue-600">
            Home
          </Link>
          <Link to="/about" className="hover:text-blue-600">
            About
          </Link>
          <Link to="/inspire" className="hover:text-blue-600">
            Inspire
          </Link>
          <div className="relative" ref={dropdownRef}>
            <button
              className="hover:text-blue-600"
              aria-haspopup="menu"
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
            >
              Stories
            </button>

            {open && (
              <div className="absolute left-0 mt-2 shadow-lg rounded-lg p-4 w-[480px] gap-8 flex" style={{ backgroundColor: '#E3E1D8' }}>
                <div>
                  <h3 className="font-semibold mb-2">Prophets</h3>
                  <ul className="space-y-1 text-sm">
                    {prophets.map((name) => (
                      <li key={`p-${name}`}>
                        <Link
                          className="hover:text-blue-600"
                          to={`/person/Prophet/${encodeURIComponent(name)}`}
                          onClick={() => setOpen(false)}
                        >
                          {name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Sahabas</h3>
                  <ul className="space-y-1 text-sm">
                    {sahabas.map((name) => (
                      <li key={`s-${name}`}>
                        <Link
                          className="hover:text-blue-600"
                          to={`/person/Sahaba/${encodeURIComponent(name)}`}
                          onClick={() => setOpen(false)}
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
          <Link to="/stories" className="hover:text-blue-600">
            All Stories
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
        <div className="md:hidden backdrop-blur border-t border-b shadow-md px-4 py-4 flex flex-col gap-3 transition-all duration-300" style={{ backgroundColor: '#E3E1D8' }}>
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
          <Link
            to="/inspire"
            className="hover:text-blue-600"
            onClick={() => setMobileOpen(false)}
          >
            Inspire
          </Link>

          {/* Mobile Dropdown for Stories */}
          <div>
            <button
              onClick={() => setMobileStoriesOpen((v) => !v)}
              className="hover:text-blue-600 mb-2"
            >
              Stories
            </button>

            {mobileStoriesOpen && (
              <div className="shadow-lg rounded-lg p-4 gap-4 flex flex-col" style={{ backgroundColor: '#E3E1D8' }}>
                <div>
                  <h3 className="font-semibold mb-2 text-black">Prophets</h3>
                  <ul className="space-y-1 text-sm">
                    {prophets.map((name) => (
                      <li key={`mp-${name}`}>
                        <Link
                          className="hover:text-blue-600 text-gray-600 transition-colors duration-200 block py-1"
                          to={`/person/Prophet/${encodeURIComponent(name)}`}
                          onClick={() => {
                            setMobileStoriesOpen(false);
                            setMobileOpen(false);
                          }}
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
                      <li key={`ms-${name}`}>
                        <Link
                          className="hover:text-blue-600 text-gray-600 transition-colors duration-200 block py-1"
                          to={`/person/Sahaba/${encodeURIComponent(name)}`}
                          onClick={() => {
                            setMobileStoriesOpen(false);
                            setMobileOpen(false);
                          }}
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
          <Link
            to="/stories"
            className="hover:text-blue-600"
            onClick={() => setMobileOpen(false)}
          >
            All Stories
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;
