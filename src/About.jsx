import React from "react";
import foodImg from "./assets/About.png";

const About = () => {
  return (
    <section className="w-full px-6 md:px-16 py-20 bg-white">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">

        {/* LEFT IMAGE WITH OVERLAY CARD */}
        <div className="relative w-full">

          {/* Image — ONLY responsive height added */}
          <img
            src={foodImg}
            alt="Food"
            className="w-full 
                       h-[240px] sm:h-[300px] md:h-[380px]
                       object-cover rounded-xl shadow-lg"
          />

          {/* OVERLAY CARD — SAME POSITION, responsive width */}
          <div
            className="absolute 
                       top-32 sm:top-36 md:top-43 
                       left-6 sm:left-12 md:left-53
                       bg-gray-900 text-white
                       p-6 sm:p-8
                       rounded-xl
                       w-[90%] sm:w-[320px] md:w-[370px]
                       min-h-[260px]
                       shadow-2xl
                       flex flex-col justify-start"
          >
            <h3 className="text-xl font-semibold mb-4 mt-6">
              Come and visit us
            </h3>

            <div className="space-y-4 text-[15px] leading-relaxed mt-2">

              <div className="flex items-start gap-3">
                <span className="text-lg">📞</span>
                <span>(444) 007 - 0007</span>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-lg">✉️</span>
                <span>happyour@restaurant.com</span>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-lg">📍</span>
                <span>
                  557F, Marshall Lane Manhattan,<br />
                  LA 90201, Los Angeles
                </span>
              </div>

            </div>
          </div>
        </div>

        {/* RIGHT CONTENT — UNCHANGED */}
        <div>
          <h1 className="text-4xl font-bold text-gray-900 leading-tight font-[Playfair_Display]">
            We provide healthy <br /> food for your family.
          </h1>

          <p className="text-gray-600 mt-5 leading-relaxed">
            Our story began with a vision to create a unique dining experience
            that merges fine dining, exceptional service, and a vibrant
            ambiance.
          </p>

          <p className="text-gray-600 mt-4 leading-relaxed">
            With fresh ingredients and dedication, we make every visit
            unforgettable.
          </p>

          <button className="mt-6 px-6 py-3 border border-black rounded-full shadow-sm bg-white text-black font-bold hover:shadow-md transition">
            More About Us
          </button>
        </div>

      </div>
    </section>
  );
};

export default About;
