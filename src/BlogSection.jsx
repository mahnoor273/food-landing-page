import React from "react";

// IMPORT YOUR IMAGES
import BurgerImg from './assets/Blogpic1.png';
import FriesImg from './assets/Blogpic2.png';
import ChickenImg from './assets/Blogpic3.png';
import CheesecakeImg from './assets/Blogpic4.png';
import PizzaImg from './assets/Blogpic5.png';




const blogs = [
  {
    id: 2,
    img: FriesImg,
    date: "January 3, 2023",
    title: "How to prepare the perfect french fries in an air fryer",
  },
  {
    id: 3,
    img: ChickenImg,
    date: "January 3, 2023",
    title: "How to prepare delicious chicken tenders",
  },
  {
    id: 4,
    img: CheesecakeImg,
    date: "January 3, 2023",
    title: "7 delicious cheesecake recipes you can prepare",
  },
  {
    id: 5,
    img: PizzaImg,
    date: "January 3, 2023",
    title: "5 great pizza restaurants you should visit this city",
  },
];

const BlogSection = () => {
  return (
    <div className="bg-gray-50 py-20 px-6 md:px-20 lg:px-32">

      {/* Header */}
      <div className="flex items-center justify-between mb-10">
        <h2 className="text-3xl md:text-4xl  font-semibold text-gray-800 font-[Playfair_Display] font-semibold">
          Our Blog & Articles
        </h2>

        <button className="bg-red-600 text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-red-700 transition">
          Read All Articles
        </button>
      </div>

      {/* GRID */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        {/* LEFT LARGE CARD */}
        <div
          className="md:col-span-2 bg-white rounded-2xl shadow-md overflow-hidden 
                     transition-all duration-300 hover:shadow-xl hover:scale-[1.01] 
                     cursor-pointer"
        >
          <img
            src={BurgerImg}
            className="w-full h-110 object-cover cursor-pointer"
          />

          <div className="p-6">
            <p className="text-gray-500 text-sm mb-2">January 3, 2023</p>

            <h3
              className="text-xl font-semibold mb-3 text-gray-800 
                         transition-colors duration-300 hover:text-red-600 cursor-pointer"
            >
              The secret tips & tricks to prepare a perfect burger & pizza for our customers
            </h3>

            <p className="text-gray-600 text-sm cursor-pointer">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid molestiae magnam aliquid nisi error quis. <br />Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla repudiandae expedita odio accusamus saepe voluptate at tempora quos hic, possimus rem necessitatibus est officiis nemo, incidunt ratione neque, tenetur alias!
            </p>
          </div>
        </div>

        {/* RIGHT SIDE (2 columns * 2 rows = 4 cards) */}
        <div className="grid grid-cols-2 gap-6">
          {blogs.map((b) => (
            <div
              key={b.id}
              className="bg-white rounded-2xl shadow-md overflow-hidden
                         transition-all duration-300 hover:shadow-xl hover:scale-[1.03]
                         cursor-pointer"
            >
              <img
                src={b.img}
                className="w-full h-36 object-cover cursor-pointer"
              />

              <div className="p-4">
                <p className="text-gray-500 text-sm">{b.date}</p>

                <h3
                  className="text-md font-semibold text-gray-800 mt-1
                             transition-colors duration-300 hover:text-red-600 cursor-pointer"
                >
                  {b.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default BlogSection;




 