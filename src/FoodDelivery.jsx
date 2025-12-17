import React from "react";

// Correct Icons
import { BiTimeFive } from "react-icons/bi";
import { FaGift } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";

import FoodCollage from "./assets/delivery.png";

const FoodDelivery = () => {
  return (
    <section className="px-6 md:px-20 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

        {/* LEFT IMAGE — ONLY RESPONSIVE CHANGE */}
        <div>
          <img
            src={FoodCollage}
            alt="Food Collage"
            className="
              w-full
              h-[260px] sm:h-[320px] md:h-[450px]
              object-cover
              rounded-xl
            "
          />
        </div>

        {/* RIGHT CONTENT — UNCHANGED */}
        <div className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 leading-snug">
            Fastest Food <br /> Delivery in City
          </h2>

          <p className="text-gray-600 leading-relaxed">
            Our visual designer lets you quickly and drag a down
            your way to customize your food for both laptop desktop.
          </p>

          <ul className="space-y-5 text-gray-700">
            <li className="flex items-center gap-3">
              <span className="w-8 h-8 bg-[#8B0000] text-white rounded-full flex items-center justify-center">
                <BiTimeFive size={20} />
              </span>
              Delivery within 30 minutes
            </li>

            <li className="flex items-center gap-3">
              <span className="w-8 h-8 bg-[#8B0000] text-white rounded-full flex items-center justify-center">
                <FaGift size={18} />
              </span>
              Best Offer & Prices
            </li>

            <li className="flex items-center gap-3">
              <span className="w-8 h-8 bg-[#8B0000] text-white rounded-full flex items-center justify-center">
                <FaShoppingCart size={20} />
              </span>
              Online Services Available
            </li>
          </ul>
        </div>

      </div>
    </section>
  );
};

export default FoodDelivery;

