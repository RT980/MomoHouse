import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaFacebook } from "react-icons/fa";
import { AiFillTikTok } from "react-icons/ai";
import { FaSquareInstagram } from "react-icons/fa6";
import icon from "../assets/icon.png";

export default function Navigations() {
  return (
    <nav className="flex items-center justify-between p-4 shadow-md bg-white">
      {/* Logo Section */}
      <div className="flex items-center space-x-2">
        <img src={icon} alt="Momos Logo" className="h-6" />
        <span className="text-teal-700 font-bold text-lg">MOMOS</span>
      </div>

      {/* Navigation Links */}
      <ul className="hidden md:flex space-x-6 text-gray-600 text-s">
        <li><NavLink to="/" activeClassName="text-gray-800">Home</NavLink></li>
        <li><NavLink to="/about" activeClassName="text-gray-800">About Us</NavLink></li>
        <li><NavLink to="/service" activeClassName="text-gray-800">Our Service</NavLink></li>
        <li><NavLink to="/menu" activeClassName="text-gray-800">Our Menu</NavLink></li>
        <li><NavLink to="/advices" activeClassName="text-gray-800">Allergy Advices</NavLink></li>
      </ul>

      {/* Social Media Icons & Contact Button */}
      <div className="flex items-center space-x-4">
      <NavLink to="https://www.facebook.com/ree.tes.566148 " target="_blank">

        <FaFacebook className="size-8 text-gray-500 hover:text-gray-800" />
        </NavLink>
        <NavLink to="https://www.tiktok.com/@reetes_6.9" target="_blank">
          {" "}
        <AiFillTikTok className="size-9 text-gray-500 hover:text-gray-800" />
        </NavLink>
        <NavLink to="https://www.instagram.com/reeteschaudhary/" target="_blank">
          {" "}
        <FaSquareInstagram className="size-9 text-gray-500 hover:text-gray-800" />
        </NavLink>
        <NavLink to="/contact" className="bg-orange-600 text-white px-4 py-2 rounded-full hover:bg-orange-700">
          Contact Us
        </NavLink>
      </div>
    </nav>
  );
}
