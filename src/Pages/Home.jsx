import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import image from "../assets/momos.png";
import dot from '../assets/dot.jpg';
import man from "../assets/man.png";
import buff from "../assets/buff.png";
import fry from "../assets/fry.png";
import cmomo from "../assets/cmomo.png";

export default function Home() {
  const [activeCategory, setActiveCategory] = useState('Buff');

  const categories = ['Buff', 'Chicken', 'Veg'];
  
  const recipes = [
    {
      name: 'Buff Momo',
      price: 150,
      image: buff,
      category: 'Buff'
    },
    {
      name: 'Buff Fry Momo',
      price: 180,
      image: fry,
      category: 'Buff'
    },
    {
      name: 'Buff C. Momo',
      price: 200,
      image: cmomo,
      category: 'Buff'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
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

      {/* Why Love Us Section */}
      <section className="flex flex-col md:flex-row items-center justify-center p-8 bg-white">
        <div className="relative w-full md:w-1/2 flex justify-center">
          <div className="bg-teal-800 rounded-t-full w-72 h-80 flex items-end justify-center m-20">
            <img
              src={man}
              alt="Happy Customer"
              className="w-full h-auto"
            />
          </div>
        </div>
        <div className="w-full md:w-1/2 text-center md:text-left mt-8 md:mt-0">
          <h2 className="text-3xl font-bold text-gray-900">
            Why Customers <span className="text-orange-500">Love Us</span>
          </h2>
          <p className="text-gray-600 mt-4">
            Lorem ipsum dolor sit amet consectetur. Sed diam dolor vivamus nibh fermentum
            vulputate tortor. Egestas facilisi luctus turpis arcu dignissim. Amet neque enim
            etiam purus id. Tortor sit orci blandit cursus turpis.
          </p>
          <button className="mt-6 px-6 py-3 bg-teal-600 text-white rounded-lg flex items-center gap-2 hover:bg-teal-700">
            Explore Our Story
            <span>&rarr;</span>
          </button>
        </div>
      </section>

      {/* Popular Recipes Section */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">
            Our <span className="text-orange-500">Most Popular</span> Recipes
          </h2>
          <p className="text-gray-600">
            Browse through a varieties of recipes with fresh ingredients selected only from the best places
          </p>
        </div>

        <div className="flex justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full ${
                activeCategory === category
                ? 'border-2 border-black font-medium'
                : 'bg-gray-100 text-gray-600'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="relative">
          <button className="absolute left-0 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-md">
      
          </button>

          <div className="flex justify-center gap-8">
            {recipes.map((recipe) => (
              <div key={recipe.name} className="text-center">
                <img
                  src={recipe.image}
                  alt={recipe.name}
                  className="w-64 h-48  mb-4"
                />
                <h3 className="font-bold text-xl mb-2">{recipe.name}</h3>
                <p className="text-xl">
                  NRs<span className="text-orange-500">{recipe.price}</span>
                </p>
              </div>
            ))}
          </div>

          <button className="absolute right-0 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-md">
          </button>
        </div>

        <div className="text-center mt-12">
          
        <NavLink
              to="/menu"
              className="mt-6 inline-flex items-center bg-cyan-900 text-white px-6 py-3 rounded-full shadow-md hover:bg-orange-700 transition"
            >
              Explore Food Menu →
            </NavLink>
        </div>
      </div>
    </div>
  );
}