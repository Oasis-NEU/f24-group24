import React, { useState } from "react";
import logo from "../../assets/ratemyplatelogo.webp";
import { Link } from "react-router-dom";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-[#ff4439] shadow-md relative w-full">
      {/* Desktop & Mobile Nav */}
      <div className="flex items-center justify-between px-4 py-3 md:py-4 md:px-8">
        {/* Logo */}
        <div>
          <img className="h-20 md:h-24 object-contain" src={logo} alt="Logo" />
        </div>

        {/* Desktop Links */}
        <nav className="hidden md:flex space-x-8">
          <Link
            to="/"
            className="text-lg md:text-xl text-[#fbfbfb] font-semibold transition relative hover:text-[#6cc6ff] hover:after:w-full after:content-[''] after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:bg-[#6cc6ff] after:transition-all after:duration-300"
          >
            Home
          </Link>
          <Link
            to="/restaurants"
            className="text-lg md:text-xl text-[#fbfbfb] font-semibold transition relative hover:text-[#6cc6ff] hover:after:w-full after:content-[''] after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:bg-[#6cc6ff] after:transition-all after:duration-300"
          >
            Restaurants
          </Link>
          <Link
            to="/about"
            className="text-lg md:text-xl text-[#fbfbfb] font-semibold transition relative hover:text-[#6cc6ff] hover:after:w-full after:content-[''] after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:bg-[#6cc6ff] after:transition-all after:duration-300"
          >
            About
          </Link>
        </nav>

        {/* Hamburger Menu for Mobile */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-[#fbfbfb] md:hidden focus:outline-none"
        >
          {isOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Dropdown */}
      <div
        className={`md:hidden bg-[#ff4439] overflow-hidden transition-[max-height] duration-300 ease-in-out ${
          isOpen ? "max-h-40" : "max-h-0"
        }`}
      >
        <div className="flex flex-col items-center py-2 space-y-2">
          <Link
            to="/"
            className="text-lg text-[#fbfbfb] font-semibold transition hover:text-[#6cc6ff]"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/restaurants"
            className="text-lg text-[#fbfbfb] font-semibold transition hover:text-[#6cc6ff]"
            onClick={() => setIsOpen(false)}
          >
            Restaurants
          </Link>
          <Link
            to="/about"
            className="text-lg text-[#fbfbfb] font-semibold transition hover:text-[#6cc6ff]"
            onClick={() => setIsOpen(false)}
          >
            About
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Nav;
