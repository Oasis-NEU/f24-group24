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

        {/* Centered Links */}
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
        <div className="flex-shrink-0">
          <Link
            to="/auth"
            className="text-[#fbfbfb] hover:text-[#6cc6ff] transition"
          >
            <FaUserCircle size={40} /> {/* Increased icon size */}
          </Link>
        </div>
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
          <Link
            to="/auth"
            className="text-lg text-[#fbfbfb] font-semibold transition hover:text-[#6cc6ff]"
            onClick={() => setIsOpen(false)}
          >
            <FaUserCircle size={24} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Nav;
