import React, { useState } from "react";
import logoplaceholder from "../../assets/logo-placeholder.png";
import { Link } from "react-router-dom";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-orange-500 px-4 w-full pr-4">
      <div className="grid grid-cols-[1fr_auto_1fr] items-center w-full py-4">
        <nav className="hidden md:flex space-x-4 justify-start">
          <Link to="/" className="text-white hover:text-gray-300 transition">
            Home
          </Link>
          <Link
            to="/restaurants"
            className="text-white hover:text-gray-300 transition"
          >
            Restaurants
          </Link>
          <Link
            to="/about"
            className="text-white hover:text-gray-300 transition"
          >
            About
          </Link>
        </nav>

        {/* Logo */}
        <div className="flex justify-center">
          <img className="max-h-16 h-auto" src={logoplaceholder} alt="Logo" />
        </div>

        {/* Hamburger Icon for Mobile */}
        <div className="flex justify-end md:hidden col-start-3">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white">
            {/* Hamburger Icon */}
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Dropdown Menu for Mobile */}
      {isOpen && (
        <div className="md:hidden flex flex-col items-center space-y-2 mt-2 bg-orange-500">
          <Link
            to="/"
            className="text-white hover:text-gray-300 transition"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/restaurants"
            className="text-white hover:text-gray-300 transition"
            onClick={() => setIsOpen(false)}
          >
            Restaurants
          </Link>
          <Link
            to="/about"
            className="text-white hover:text-gray-300 transition"
            onClick={() => setIsOpen(false)}
          >
            About
          </Link>
        </div>
      )}
    </div>
  );
};

export default Nav;
