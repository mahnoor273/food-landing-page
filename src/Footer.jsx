import React from "react";

// ⭐ Yaha sirf 1 image import karni hai (jo collage wali hai)
import CollageImg from "./assets/Footerimage.png";

const Footer = () => {
  return (
    <footer className="bg-[#3a3a3a] text-white py-16 px-6 md:px-20">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12">

        {/* Left Logo + Text */}
        <div>
          <h2 className="text-2xl font-bold mb-4 font-[Playfair_Display] font-semibold">Bistro Bliss</h2>
          <p className="text-gray-300 mb-4">
            In the new era of technology we look in the future with certainty
            and pride for our company and.
          </p>

          {/* Social Icons */}
          <div className="flex gap-3 mt-4">
            <i className="fab fa-facebook text-xl hover:text-red-500 cursor-pointer"></i>
            <i className="fab fa-twitter text-xl hover:text-red-500 cursor-pointer"></i>
            <i className="fab fa-instagram text-xl hover:text-red-500 cursor-pointer"></i>
            <i className="fab fa-pinterest text-xl hover:text-red-500 cursor-pointer"></i>
          </div>
        </div>

        {/* Pages Column */}
        <div>
          <h3 className="font-semibold mb-4">Pages</h3>
          <ul className="space-y-2 text-gray-300">
            <li>Home</li>
            <li>About</li>
            <li>Menu</li>
            <li>Pricing</li>
            <li>Blog</li>
            <li>Contact</li>
            <li>Delivery</li>
          </ul>
        </div>

        {/* Utility Pages Column */}
        <div>
          <h3 className="font-semibold mb-4">Utility Pages</h3>
          <ul className="space-y-2 text-gray-300">
            <li>Start Here</li>
            <li>Styleguide</li>
            <li>Password Protected</li>
            <li>404 Not Found</li>
            <li>Licenses</li>
            <li>Changelog</li>
            <li>View More</li>
          </ul>
        </div>

        {/* Instagram Section — ⭐ ONLY 1 IMAGE */}
        <div>
          <h3 className="font-semibold mb-4">Follow Us On Instagram</h3>

          {/* ⭐ Collage Image */}
          <img
            src={CollageImg}
            alt="Instagram Collage"
            className="w-full h-56 object-cover rounded-lg hover:scale-105 transition cursor-pointer"
          />
        </div>
      </div>

      {/* Bottom Line */}
      <div className="text-center text-gray-300 mt-12  border-gray-500 pt-15">
        Copyright © 2023 Hashtag Developer. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
