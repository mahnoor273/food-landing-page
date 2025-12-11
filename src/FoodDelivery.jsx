import React from "react";

// Correct Icons
import { BiTimeFive } from "react-icons/bi";     // 1 — Delivery Time
import { FaGift } from "react-icons/fa";         // 2 — Gift / Offer / Birthday
import { FaShoppingCart } from "react-icons/fa";
       // 3 — Group / People / Events

import FoodCollage from "./assets/delivery.png";

const FoodDelivery = () => {
  return (
    <section className="px-6 md:px-20 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

        {/* LEFT IMAGE */}
        <div>
          <img
            src={FoodCollage}
            alt="Food Collage"
            className="w-full h-[450px] object-cover rounded-xl"
          />
        </div>

        {/* RIGHT CONTENT */}
        <div className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 leading-snug">
            Fastest Food <br /> Delivery in City
          </h2>

          <p className="text-gray-600 leading-relaxed">
            Our visual designer lets you quickly and drag a down
            your way to customize your food for both laptop desktop.
          </p>

          {/* LIST WITH CORRECTED ICONS */}
          <ul className="space-y-5 text-gray-700">

            {/* 1 — Delivery Time */}
            <li className="flex items-center gap-3">
              <span className="w-8 h-8 bg-[#8B0000] text-white rounded-full flex items-center justify-center">
                <BiTimeFive size={20} />
              </span>
              Delivery within 30 minutes
            </li>

            {/* 2 — Gift / Offers */}
            <li className="flex items-center gap-3">
              <span className="w-8 h-8 bg-[#8B0000] text-white rounded-full flex items-center justify-center">
                <FaGift size={18} />
              </span>
              Best Offer & Prices
            </li>

            {/* 3 — Users / People / Events */}
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
