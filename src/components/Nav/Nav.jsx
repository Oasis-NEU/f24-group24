import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/ratemyplatelogo.webp";
import { FaUserCircle } from "react-icons/fa";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-[#ff4439] shadow-md relative w-full">
      {/* Navbar Container */}
      <div className="flex items-center justify-between px-4 py-3 md:py-4 md:px-8">
        {/* Logo */}
        <div className="flex-shrink-0">
          <img className="h-20 md:h-24 object-contain" src={logo} alt="Logo" />
        </div>

        {/* Centered Links (Desktop Only) */}
        <nav className="hidden md:flex space-x-8 absolute left-1/2 transform -translate-x-1/2">
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

        {/* User Icon */}
        <div className="flex-shrink-0 flex items-center">
          <Link
            to="/auth"
            className="text-[#fbfbfb] hover:text-[#6cc6ff] transition"
            onClick={() => setIsOpen(false)}
          >
            <FaUserCircle size={40} /> {/* Increased icon size */}
          </Link>

          {/* Hamburger Menu (Mobile Only) */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-[#fbfbfb] md:hidden ml-4 focus:outline-none"
          >
            {isOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      <div
        className={`md:hidden bg-[#ff4439] transition-[max-height] duration-300 ease-in-out overflow-hidden ${
          isOpen ? "max-h-96" : "max-h-0"
        }`}
      >
        <div className="flex flex-col items-center py-4 space-y-4">
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
