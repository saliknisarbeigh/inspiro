import React from "react";
import {
  MapPin,
  Clock,
  Phone,
  Mail,
  Facebook,
  Instagram,
  Twitter,
  ChefHat,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-bakery-darker text-bakery-lightgray py-10 px-4 mt-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="mb-6 md:mb-0">
          <h2 className="text-2xl font-bold text-bakery-gold mb-2">
            Sweet Delights
          </h2>
          <p className="text-bakery-lightgray max-w-xs">
            Food of the Gods, Freshly Baked!
            <br />
            Serving smiles since 2004.
          </p>
        </div>
        <div className="flex flex-col md:flex-row gap-8">
          <div>
            <h3 className="text-lg font-semibold text-bakery-yellow mb-2">
              Quick Links
            </h3>
            <ul className="space-y-1">
              <li>
                <a href="/" className="hover:text-bakery-gold transition">
                  Home
                </a>
              </li>
              <li>
                <a href="/menu" className="hover:text-bakery-gold transition">
                  Menu
                </a>
              </li>
              <li>
                <a href="/about" className="hover:text-bakery-gold transition">
                  About
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="hover:text-bakery-gold transition"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-bakery-yellow mb-2">
              Contact
            </h3>
            <p className="text-bakery-lightgray">+91 8182-881881</p>
            <p className="text-bakery-lightgray">contact@theobroma.in</p>
          </div>
        </div>
      </div>
      <div className="mt-8 text-center text-bakery-gray text-sm">
        &copy; {new Date().getFullYear()} Sweet Delights. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
