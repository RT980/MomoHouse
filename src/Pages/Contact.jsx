import React, { useState } from 'react';
import { MapPin, Phone, Clock } from 'lucide-react';
import map from "../assets/ContactImage/mapp.png"

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
    service: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
  };

  return (
    <div>
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-teal-600 text-3xl font-serif mb-3">Our Contact</h2>
          <p className="text-gray-500 uppercase tracking-wide text-sm mb-6">GET IN TOUCH</p>
          <div className="text-xl">
            <span className="text-orange-500 font-medium">Our Friendly Team</span>
            <span className="text-gray-700"> would love to hear from you</span>
          </div>
        </div>

        {/* Contact Info Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Location Card */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center mb-4">
              <MapPin className="text-orange-500 w-5 h-5 mr-2" />
              <h3 className="font-medium text-gray-700">LOCATION</h3>
            </div>
            <p className="text-gray-600">
              New Baneshwor -41201,<br />
              Kathmandu, Bagmati, Nepal
            </p>
          </div>

          {/* Phone Card */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center mb-4">
              <Phone className="text-orange-500 w-5 h-5 mr-2" />
              <h3 className="font-medium text-gray-700">PHONE</h3>
            </div>
            <div className="text-gray-600">
              <p className="mb-2">
                <span className="text-teal-600">Mobile: </span>
                (+977) 980 5689789<br />
                (+977) 9841 275897
              </p>
              <p>
                <span className="text-teal-600">Tel: </span>
                01-4783972
              </p>
            </div>
          </div>

          {/* Service Time Card */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center mb-4">
              <Clock className="text-orange-500 w-5 h-5 mr-2" />
              <h3 className="font-medium text-gray-700">SERVICE TIME</h3>
            </div>
            <div className="text-gray-600">
              <div className="flex justify-between mb-2">
                <span className="text-teal-600">MON - FRI</span>
                <span>8 am - 8 pm</span>
              </div>
              <div className="flex justify-between">
                <span className="text-teal-600">SAT - SUN</span>
                <span className="italic">Closed</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Map Section */}
          <div className="relative h-200 bg-gray-100 rounded-lg ">
            <div className="absolute mx-auto h-96">
              <img 
                src={map} 
                alt="Map" 
                className="w-full h- full"
              />
            </div>
            <div className="absolute bottom-10 left-4 bg-white p-2 rounded-lg shadow-lg  mb-120 ml-70">
              <div className="flex items-center space-x-2 ">
                <MapPin className="text-teal-600 " size={20} />
                <p className="text-sm font-medium">New Baneshwor, Kathmandu, Bagmati, Nepal</p>
              </div>
            </div>
          </div>

          {/* Contact Form Section */}
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-2xl font-bold mb-6">Contact Us</h2>
            <p className="text-gray-600 mb-8">
              If you have any queries, send us a message. Our Friendly team would love to hear from you.
            </p>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    First Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
                    onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Last Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
                    onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  What can we do for you
                </label>
                <select 
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                  onChange={(e) => setFormData({...formData, service: e.target.value})}
                >
                  <option value="">Choose</option>
                  <option value="support">Support</option>
                  <option value="sales">Sales</option>
                  <option value="feedback">Feedback</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Phone Number
                </label>
                <div className="flex">
                  <select className="px-3 py-2 border border-gray-300 rounded-l-md border-r-0">
                    <option>+977</option>
                  </select>
                  <input
                    type="tel"
                    className="w-full px-3 py-2 border border-gray-300 rounded-r-md"
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  rows={4}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                />
              </div>

              <button
                type="submit"
                className=" bg-teal-600 text-white py-2 px-4 rounded-md hover:bg-teal-700 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
