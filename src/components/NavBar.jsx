import React, { useState } from "react";
import { Menu, X, ChefHat, ShoppingCart } from "lucide-react";
import { useSelector } from "react-redux";
import CartModal from "./CartModal";
import OrderModal from "./OrderModal";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [orderOpen, setOrderOpen] = useState(false);
  const cartCount = useSelector((state) =>
    state.cart.items.reduce((sum, item) => sum + item.quantity, 0)
  );
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const isActive = (path) => {
    return location.pathname === path;
  };

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Menu", path: "/menu" },
    { name: "Gallery", path: "/gallery" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <>
      <nav className="bg-bakery-dark text-bakery-lightgray px-8 py-4 shadow-lg  z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center h-16">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center space-x-2 cursor-pointer"
            onClick={closeMenu}
          >
            <ChefHat className="h-8 w-8 text-bakery-gold" />
            <span className="text-2xl font-bold text-bakery-yellow tracking-wide">
              Sweet Delights
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="flex items-baseline space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={closeMenu}
                  className={`px-4 py-2 rounded-lg text-lg font-medium transition-colors duration-200 ${
                    isActive(link.path)
                      ? "text-bakery-gold bg-bakery-mintAccent shadow"
                      : "text-bakery-lightgray hover:text-bakery-gold hover:bg-bakery-mintAccent"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
            {/* Cart Icon */}
            <button
              className="relative ml-8 flex items-center group"
              onClick={() => setCartOpen(true)}
            >
              <ShoppingCart className="h-7 w-7 text-bakery-gold group-hover:text-bakery-yellow transition-colors duration-200" />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-bakery-peachAccent text-bakery-dark text-xs font-bold rounded-full px-2 py-0.5 shadow">
                  {cartCount}
                </span>
              )}
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-bakery-lightgray hover:text-bakery-gold hover:bg-bakery-mintAccent focus:outline-none focus:ring-2 focus:ring-inset focus:ring-bakery-gold transition-colors duration-200"
              aria-label="Toggle navigation menu"
            >
              {isOpen ? (
                <X className="block h-6 w-6" />
              ) : (
                <Menu className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden transition-all duration-300 ease-in-out ${
            isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
          } overflow-y-auto bg-bakery-dark border-t border-bakery-mintAccent shadow-lg`}
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={closeMenu}
                className={`w-full text-left block px-4 py-3 rounded-lg text-lg font-medium transition-colors duration-200 ${
                  isActive(link.path)
                    ? "text-bakery-gold bg-bakery-mintAccent shadow"
                    : "text-bakery-lightgray hover:text-bakery-gold hover:bg-bakery-mintAccent"
                }`}
              >
                {link.name}
              </Link>
            ))}
            {/* Cart Icon Mobile */}
            <button
              className="relative mt-4 flex items-center group"
              onClick={() => setCartOpen(true)}
            >
              <ShoppingCart className="h-7 w-7 text-bakery-gold group-hover:text-bakery-yellow transition-colors duration-200" />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-bakery-peachAccent text-bakery-dark text-xs font-bold rounded-full px-2 py-0.5 shadow">
                  {cartCount}
                </span>
              )}
              <span className="ml-2 text-bakery-lightgray font-medium">
                Cart
              </span>
            </button>
          </div>
        </div>
      </nav>
      <CartModal
        isOpen={cartOpen}
        onClose={() => setCartOpen(false)}
        onOrder={() => {
          setCartOpen(false);
          setOrderOpen(true);
        }}
      />
      <OrderModal isOpen={orderOpen} onClose={() => setOrderOpen(false)} />
    </>
  );
};

export default Navbar;
