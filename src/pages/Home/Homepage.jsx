import React from "react";
import { Link } from "react-router-dom";
import iphoneMockup from "../../assets/iphoneMockup.png";
import ipadMockup from "../../assets/ipadMockup.png";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-[#f1efef]">
      {/* Hero Section */}
      <section className="relative bg-[#ff746c] text-[#fbfbfb]">
        <div className="container mx-auto flex flex-col-reverse md:flex-row items-center py-12 px-6 md:px-12">
          {/* Left Content */}
          <div className="flex flex-col justify-center space-y-6 md:w-1/2">
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
              Welcome to <span className="text-[#fbfbfb]">Rate My Plate</span>
            </h1>
            <p className="text-lg md:text-xl leading-relaxed">
              Discover the best dining spots around Northeastern University.
              Explore restaurants that accept Dining Dollars, offer student
              discounts, and fit your taste and budget.
            </p>
            <Link
              to="/restaurants"
              className="inline-block px-8 py-3 bg-[#39b2ff] text-white text-lg font-semibold rounded-lg shadow-md hover:bg-[#00426c] transition"
            >
              Explore Restaurants
            </Link>
          </div>
          {/* Right Content */}
          <div className="md:w-1/2 flex justify-center">
            <img
              src={iphoneMockup}
              alt="iPhone mockup"
              className="w-48 md:w-64"
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-[#fbfbfb]">
        <div className="container mx-auto px-6 md:px-12 text-center">
          <h2 className="text-3xl font-bold text-[#292423] mb-6">
            Why Choose Rate My Plate?
          </h2>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="p-6 bg-white shadow-md rounded-lg">
              <h3 className="text-xl font-semibold text-[#ff4439]">
                Tailored Recommendations
              </h3>
              <p className="mt-4 text-[#6e5f5e]">
                Get curated restaurant options based on your preferences, from
                dietary needs to budget.
              </p>
            </div>
            <div className="p-6 bg-white shadow-md rounded-lg">
              <h3 className="text-xl font-semibold text-[#39b2ff]">
                Real-Time Chat
              </h3>
              <p className="mt-4 text-[#6e5f5e]">
                Engage with fellow students and share restaurant experiences in
                a live chat environment.
              </p>
            </div>
            <div className="p-6 bg-white shadow-md rounded-lg">
              <h3 className="text-xl font-semibold text-[#6cc6ff]">
                Exclusive Deals
              </h3>
              <p className="mt-4 text-[#6e5f5e]">
                Discover student discounts and special offers available at your
                favorite spots.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Media Showcase Section */}
      <section className="py-16 bg-[#f1efef]">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-[#292423]">
                Seamless Experience on Any Device
              </h2>
              <p className="mt-4 text-lg text-[#6e5f5e]">
                Rate My Plate is optimized for mobile and desktop. Access
                real-time information, view restaurant details, and connect with
                other students from anywhere.
              </p>
            </div>
            <div className="flex justify-center">
              <img
                src={ipadMockup}
                alt="iPad mockup"
                className="w-64 md:w-80"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#ff4439] text-[#fbfbfb] py-12">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">
            Start Your Food Adventure Today!
          </h2>
          <p className="text-lg mb-6">
            Sign up now to unlock exclusive deals and connect with other
            students.
          </p>
          <Link
            to="/auth"
            className="inline-block px-8 py-3 bg-[#39b2ff] text-white text-lg font-semibold rounded-lg shadow-md hover:bg-[#00426c] transition"
          >
            Sign Up
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
