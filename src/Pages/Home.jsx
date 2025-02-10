import React from 'react';
import image from "../assets/momos.png";
import dot from '../assets/dot.jpg';
import { NavLink } from 'react-router-dom';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-10 overflow-hidden">
      <section className="relative flex flex-col lg:flex-row items-center justify-between w-full max-w-6xl">

        <div className="max-w-xl text-center lg:text-left z-30">
          <p className="text-gray-500 tracking-widest uppercase text-sm">Restaurant</p>

          <h1 className="text-5xl font-bold text-gray-900 leading-tight mt-2">
            The <span className="text-orange-600 relative">
              #One
              <span className="absolute inset-0 transform rotate-1 skew-x-6"></span>
            </span> <br />
            Momos <span className="text-orange-600">Restaurant</span>
          </h1>

          <p className="text-lg text-gray-700 mt-4">
            More than <span className="text-orange-600 font-semibold">20+ Varieties</span> of momos available for you.
          </p>

          <NavLink
            to="/menu"
            className="mt-6 inline-flex items-center bg-orange-600 text-white px-6 py-3 rounded-full shadow-md hover:bg-orange-700 transition"
          >
            Explore Food Menu →
          </NavLink>
        </div>

        <div className="relative w-full lg:w-[600px] flex justify-center lg:justify-end mt-10 lg:mt-0">

          <div
            className="absolute w-[200px] h-[200px] top-[-40px] right-90 opacity-60 bg-no-repeat bg-contain z-10"
            style={{ backgroundImage: `url(${dot})` }}
          ></div>
          <div
            className="absolute w-[200px] h-[200px] top-[170px] right-[-90px] opacity-50 bg-transparent bg-no-repeat bg-contain z-10 backdrop-blur-xl"
            style={{ backgroundImage: `url(${dot})` }}
          ></div>


          <div className="absolute -top-50 -right-100 w-[600px] h-[600px] bg-orange-500 rounded-full opacity-90 z-0"></div>


          <img src={image} alt="Momos" className="relative z-20 w-[500px] object-cover drop-shadow-xl" />
        </div>
      </section>
    </div>
  );
}