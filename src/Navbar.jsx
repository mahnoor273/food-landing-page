import React from "react";
import { FiPhoneCall } from "react-icons/fi";
import { HiOutlineMail } from "react-icons/hi";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import logo from './assets/logo.png';

const Navbar = () => {
  return (
    <>
      {/* ----------- TOP DARK BAR ----------- */}
      <div className="w-full bg-gray-900 text-gray-300 text-sm py-2">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4">
          
          {/* Left Contact */}
          <div className="flex items-center gap-6">
            <p className="flex items-center gap-2">
              <FiPhoneCall /> (406) 207 - 0707
            </p>
            <p className="flex items-center gap-2">
              <HiOutlineMail /> yummy@bistrobliss
            </p>
          </div>

          {/* Right Social Icons */}
          <div className="flex items-center gap-4">
            <FaFacebookF className="cursor-pointer hover:text-white" />
            <FaTwitter className="cursor-pointer hover:text-white" />
            <FaInstagram className="cursor-pointer hover:text-white" />
          </div>

        </div>
      </div>

      {/* ----------- MAIN NAVBAR ----------- */}
      <div className="w-full bg-white shadow-sm">
        <div className="max-w-7xl mx-auto flex items-center justify-between py-4 px-4">

          {/* Logo */}
          <div className="flex items-center gap-2">
            <img src={logo} className="h-10" />
           
          </div>

          {/* Nav Links */}
          <ul className="hidden md:flex items-center gap-8 text-gray-700 font-medium">
            <li className="cursor-pointer hover:text-red-500"> <a href="#hero">Home</a></li>
        <li className="cursor-pointer hover:text-red-500"> <a href="#about">About</a> 
</li> 
            <li className="cursor-pointer hover:text-red-500"><a href="#menusection">Menu</a></li>
            <li className="cursor-pointer hover:text-red-500"><a href="#servicessection">Services</a></li>

            <li className="cursor-pointer hover:text-red-500"><a href="#reviews">Reviews</a></li>

            <li className="cursor-pointer hover:text-red-500"><a href="#blog">Blog & Article</a></li>
          </ul>

          {/* Book Button */}
          <button className="border border-gray-500 px-4 py-2 rounded-full hover:bg-gray-900 hover:text-white transition">
            Book A Table
          </button>

        </div>
      </div>
    </>
  );
};

export default Navbar;
