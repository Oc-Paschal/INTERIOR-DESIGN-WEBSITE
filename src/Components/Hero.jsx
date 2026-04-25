import React from "react";

const Hero = () => {
  return (
    <div
      style={{
        backgroundImage:
          "url('/images/Modern Living Room Zoom Background (Digital Download).jpg')",
      }}
      className="bg-center bg-cover h-screen filter brightness-90"
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* Content */}
      <div className="relative z-10 text-white px-6 md:px-15 flex flex-col justify-center h-full">
        {/* Navbar */}
        <nav className="absolute top-0 left-0 w-full flex justify-between items-center px-6 md:px-20 py-6 z-20 text-white">
          <h1 className="text-2xl font-semibold tracking-wide">
            BARRY <span className="text-gray-400 text-sm">interiors</span>
          </h1>

          <ul className="hidden md:flex gap-8 text-md">
            <li className="hover:text-gray-300 cursor-pointer">Home</li>
            <li className="hover:text-gray-300 cursor-pointer">Portfolio</li>
            <li className="hover:text-gray-300 cursor-pointer">Services</li>
            <li className="hover:text-gray-300 cursor-pointer">About</li>
          </ul>

          <button className="bg-green-700 px-4 py-2 text-sm rounded hover:bg-green-600">
            Get in Touch
          </button>
        </nav>

        {/* Hero Text */}
        <div className="max-w-2xl mt-20">
          <h1 className="text-4xl md:text-5xl font-light leading-tight mb-6 font-serif ">
            Elevate Your Interior <br />
            with Sophisticated Design
          </h1>

          <p className="text-gray-300 mb-8">
            Discover modern luxury living spaces crafted with minimal elegance.
          </p>

          <div className="flex gap-4">
            <button className="bg-green-700 px-6 py-3 rounded hover:bg-green-600">
              Explore Portfolio
            </button>
            <button className="border border-gray-400 px-6 py-3 rounded hover:bg-white hover:text-black transition">
              View Services
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
