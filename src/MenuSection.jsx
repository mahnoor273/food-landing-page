import React from "react";
import breakfastImg from "./assets/icon.png";  
import maindishImg from "./assets/icon4.png";
import drinksImg from "./assets/icon2.png";
import dessertImg from "./assets/icon3.png";

const menuItems = [
  {
    img: breakfastImg,
    title: "Breakfast",
    desc: "In the new era of technology we look in the future with certainty and pride for our life.",
  },
  {
    img: maindishImg,
    title: "Main Dishes",
    desc: "In the new era of technology we look in the future with certainty and pride for our life.",
  },
  {
    img: drinksImg,
    title: "Drinks",
    desc: "In the new era of technology we look in the future with certainty and pride for our life.",
  },
  {
    img: dessertImg,
    title: "Desserts",
    desc: "In the new era of technology we look in the future with certainty and pride for our life.",
  },
];

const MenuSection = () => {
  return (
    <section className="py-20 bg-white">
      <h2 className="text-center text-4xl font-semibold mb-14 font-[Playfair_Display] font-semibold">
        Browse Our Menu
      </h2>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-4">
        {menuItems.map((item, index) => (
          <div
            key={index}
            className="border rounded-xl border-gray-400 p-8 text-center hover:shadow-lg transition"
          >
            {/* Image Instead of Icon */}
            <img
              src={item.img}
              alt={item.title}
              className="w-16 h-16 mx-auto mb-4 object-contain"
            />

            <h3 className="text-xl font-semibold mt-2 mb-2">{item.title}</h3>

            <p className="text-gray-600 text-sm mb-4">{item.desc}</p>

            <a
              href="#"
              className="text-red-600 font-medium hover:underline text-sm"
            >
              Explore Menu
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MenuSection;
