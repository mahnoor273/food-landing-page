import React from "react";
import bgImage from "./assets/bg.png";

const HeroSection = () => {
  return (
    <section
      className="relative h-[70vh] sm:h-[80vh] md:h-[90vh] w-full 
                 bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-white/10 backdrop-blur-[1px]"></div>

      {/* Content */}
      <div className="relative text-center px-4 sm:px-6 md:px-0 max-w-xl md:max-w-2xl">
        
        {/* Heading */}
        <h1
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl 
                     font-semibold text-gray-800 mb-4 
                     font-[Playfair_Display]"
        >
          Best food for <br className="hidden sm:block" /> your taste
        </h1>

        {/* Paragraph */}
        <p
          className="text-gray-600 mb-6 sm:mb-8 
                     text-sm sm:text-base md:text-lg"
        >
          Discover delectable cuisine and unforgettable moments
          <br className="hidden sm:block" />
          in our welcoming, culinary haven.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
          <button
            className="bg-red-800 text-white px-6 py-3 
                       text-sm sm:text-base
                       rounded-full hover:bg-red-700 transition"
          >
            Book A Table
          </button>

          <button
            className="border border-gray-500 text-gray-700 
                       px-6 py-3 text-sm sm:text-base
                       rounded-full hover:bg-gray-100 transition"
          >
            Explore Menu
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

