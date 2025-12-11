import React from "react";
import bgImage from './assets/bg.png'; // <-- apni image ka path lagana

const HeroSection = () => {
  return (
    <section
      className="relative h-[90vh] w-full bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-white/10 backdrop-blur-[1px]"></div>

      {/* Content */}
      <div className="relative text-center px-4 max-w-2xl">
        <h1 className="text-5xl md:text-6xl font-semibold text-gray-800 mb-4 font-[Playfair_Display] font-semibold">
          Best food for <br /> your taste
        </h1>

        <p className="text-gray-600 mb-8 text-lg">
          Discover delectable cuisine and unforgettable moments
          <br />
          in our welcoming, culinary haven.
        </p>

        <div className="flex justify-center gap-4">
          <button className="bg-red-800 text-white px-6 py-3 rounded-full hover:bg-red-700 transition">
            Book A Table
          </button>

          <button className="border border-gray-500 text-gray-700 px-6 py-3 rounded-full hover:bg-gray-100 transition">
            Explore Menu
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
