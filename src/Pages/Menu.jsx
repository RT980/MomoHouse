import React from 'react';
import Qrimage from "../assets/MenuImage/Qr.png";
import stream from "../assets/MenuImage/stream.png";
import chilli from "../assets/MenuImage/chilli.png";
import fry from "../assets/MenuImage/fry.png";

const MenuItem = ({ title, price, description, image, badge }) => (
  <div className="flex flex-col items-center text-center">
    {/* Image Container with Badge */}
    <div className="relative mb-4 w-48">
      <img 
        src={image} 
        alt={title}
        className="w-full h-auto"
      />
      {badge && (
        <span className={`absolute top-2 left-2 px-3 py-1 text-xs text-white rounded-full
          ${badge === 'New' ? 'bg-orange-500' : 
            badge === 'Popular' ? 'bg-red-500' : 
            'bg-blue-500'}`}>
          {badge}
        </span>
      )}
    </div>

    {/* Title */}
    <h3 className="text-lg font-medium text-gray-800 mb-1">{title}</h3>

    {/* Price */}
    <div className="mb-2">
      <span className="text-orange-500 font-medium">₹</span>
      <span className="text-lg text-orange-500 font-bold">{price}</span>
    </div>

    {/* Description */}
    <p className="text-sm text-gray-500 leading-relaxed max-w-xs">
      ({description})
    </p>
  </div>
);

const MenuSection = ({ title, items }) => (
  <div className="mb-20">
    {/* Section Header */}
    <div className="text-center mb-16">
      <div className="flex items-center justify-center gap-4 mb-8">
        <div className="w-32 h-px bg-teal-200"></div>
        <h2 className="text-3xl font-bold">
          <span className="text-orange-500">{title.split(' ')[0]}</span>
          <span className="text-gray-800"> {title.split(' ')[1]}</span>
        </h2>
        <div className="w-32 h-px bg-teal-200"></div>
      </div>
    </div>

    {/* Menu Grid */}
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
        {items.map((item, index) => (
          <MenuItem key={index} {...item} />
        ))}
      </div>
    </div>
  </div>
);

export default function Menu() {
  const buffItems = [
    {
      title: "Buff Steam Momo",
      price: "200",
      description: "Freshly Steamed Buff Momos made from whole wheat and kneaded with beta Carotene Rich Vegetable Juice",
      image: stream,
      badge: "New"
    },
    {
      title: "Buff C. Momo",
      price: "200",
      description: "Freshly Steamed Buff Momos made from whole wheat and kneaded with beta Carotene Rich Vegetable Juice",
      image: chilli,
      badge: "Popular"
    },
    {
      title: "Buff Fry Momo",
      price: "200",
      description: "Freshly Steamed Buff Momos made from whole wheat and kneaded with beta Carotene Rich Vegetable Juice",
      image: fry
    },
    {
      title: "Buff Jhol Momo",
      price: "200",
      description: "Freshly Steamed Buff Momos made from whole wheat and kneaded with beta Carotene Rich Vegetable Juice",
      image: stream,
      badge: "Recommended"
    }
  ];

  const chickenItems = [
    {
      title: "Chicken Steam Momo",
      price: "200",
      description: "Freshly Steamed Chicken Momos made from whole wheat and kneaded with beta Carotene Rich Vegetable Juice",
      image: stream,
      badge: "New"
    },
    {
      title: "Chicken C. Momo",
      price: "200",
      description: "Freshly Steamed Chicken Momos made from whole wheat and kneaded with beta Carotene Rich Vegetable Juice",
      image: chilli,
      badge: "Popular"
    },
    {
      title: "Chicken Fry Momo",
      price: "200",
      description: "Freshly Steamed Chicken Momos made from whole wheat and kneaded with beta Carotene Rich Vegetable Juice",
      image: fry
    },
    {
      title: "Chicken Jhol Momo",
      price: "200",
      description: "Freshly Steamed Chicken Momos made from whole wheat and kneaded with beta Carotene Rich Vegetable Juice",
      image: stream,
      badge: "Recommended"
    }
  ];

  return (
    <div>
      {/* Our Menu Section */}
      <div className="max-w-4xl mx-auto py-16 px-4">
        <div className="text-center space-y-12">
          <h2 className="text-4xl font-script text-teal-600">
            Our Menu
          </h2>

          <div className="space-y-2">
            <p className="text-2xl font-medium text-orange-500">
              Our menu is more than just momos,
            </p>
            <p className="text-3xl text-gray-800">
              with a variety of dishes to cater to all tastes and preferences.
            </p>
          </div>

          <div className="mt-12 space-y-4">
            <h3 className="text-2xl font-medium text-teal-600">
              Scan the QR code
            </h3>
            <p className="text-gray-600">
              You can also check the allergy advices using your phone as well
            </p>
            
            <div className="flex flex-col items-center space-y-4">
              <div className="w-48 h-48 border-2 border-navy-800 rounded-lg p-2">
                <img 
                  src={Qrimage}
                  alt="Menu QR Code"
                  className="w-full h-full"
                />
              </div>
              
              <div className="flex items-center space-x-2">
                <span className="text-xl font-bold text-orange-500">SCAN</span>
                <span className="text-xl font-bold text-gray-800">ME!</span>
                <span className="text-2xl">📱</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Menu Sections */}
      <MenuSection title="BUFF MOMO's" items={buffItems} />
      <MenuSection title="CHICKEN MOMO's" items={chickenItems} />
    </div>
  );
}