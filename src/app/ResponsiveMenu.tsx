"use client";

import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi"; // Using React Icons for menu/close icons

export function ResponsiveNav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to toggle menu state
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Function to close menu (e.g., when a link is clicked)
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="relative bg-white shadow-md">
      <div className="container mx-auto flex items-center justify-between p-4">

        {/* Mobile Menu Button */}
        <button
          id="menuBtn"
          className="md:hidden p-2 text-gray-600 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md"
          onClick={toggleMenu}
          aria-expanded={isMenuOpen}
          aria-controls="main-menu"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>

        {/* Navigation Links */}
        <ul
          id="main-menu"
          className={`
            fixed inset-x-0 top-[64px] bg-white shadow-lg p-4 transition-transform duration-300 ease-in-out z-10
            md:static md:flex md:items-center md:gap-6 md:bg-transparent md:shadow-none md:p-0 md:translate-x-0
            ${isMenuOpen ? "translate-x-0" : "translate-x-full md:translate-x-0 hidden"}
          `}
        >
          <li>
            <a
              href="#home"
              className="block py-2 px-4 text-gray-700 hover:text-blue-600 hover:bg-gray-100 md:hover:bg-transparent transition-colors duration-200"
              onClick={closeMenu}
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#about"
              className="block py-2 px-4 text-gray-700 hover:text-blue-600 hover:bg-gray-100 md:hover:bg-transparent transition-colors duration-200"
              onClick={closeMenu}
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#services"
              className="block py-2 px-4 text-gray-700 hover:text-blue-600 hover:bg-gray-100 md:hover:bg-transparent transition-colors duration-200"
              onClick={closeMenu}
            >
              Services
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="block py-2 px-4 text-gray-700 hover:text-blue-600 hover:bg-gray-100 md:hover:bg-transparent transition-colors duration-200"
              onClick={closeMenu}
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}