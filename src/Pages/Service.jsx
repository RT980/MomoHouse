import React from 'react'
import image from "../assets/ServiceImage/chef.png"
import female from "../assets/ServiceImage/female.png"
import Qr from "../assets/ServiceImage/unnamed.png"
export default function Service() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      {/* About Us Section */}
      <div className="grid md:grid-cols-2 gap-8 items-center mb-16">
        <div className="space-y-4">
          <h2 className="text-teal-600 font-script text-3xl">Our Service</h2>
          <div className="space-y-2">
            <p className="text-gray-500 uppercase text-sm tracking-wide">
              KNOWING OUR CUSTOMER NEEDS
            </p>
            <div className="space-y-2">
              <h3 className="text-3xl font-bold">
                <span className="text-orange-500">We're more than just momos.</span>
              </h3>
              <h1 className="text-3xl text-gray-800 ">
                We're  full-service dining experiences.
              </h1>
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="bg-teal-600 rounded-full w-70 h-70 mx-auto mt-40  transform -translate-x-0   ">
            <img
              src={image}
              alt="Chef with wooden spoon"
              className="absolute transform -translate-y-30  translate-x-0 w-[350px] h-[400px] rounded-b-full   "
            />
          </div>
        </div>
      </div>

      <div className="relative h-96 rounded-lg overflow-hidden">
        <img
          src="/api/placeholder/1200/400"
          alt="Momo making process"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40">
          <div className="h-full flex flex-col justify-end p-8">
            <h2 className="text-white text-4xl font-bold mb-4">
              Dine with Us
            </h2>
            <p className="text-white text-lg mb-6">
              Enjoy our momos in the comfort of your own home with our delivery services.
            </p>
            <button className="bg-teal-600 text-white px-6 py-3 rounded-full inline-flex items-center space-x-2 hover:bg-teal-700 transition-colors w-fit">
              <svg
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span>Watch the Video</span>
            </button>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto p-4">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6 p-6 bg-white rounded-lg shadow-sm">
            <div className="w-12 h-12">
              <svg
                viewBox="0 0 24 24"
                className="w-full h-full text-orange-500"
                fill="currentColor"
              >
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-14v7l6 3.5-1 1.5-7-4V6h2z" />
              </svg>
            </div>


            <h1 className="text-3xl font-bold text-gray-800">Private Party</h1>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet consectetur. Lectus faucibus lorem ac adipiscing.
              Leo odio tincidunt ipsum magna lacus viverra tincidunt.
            </p>

            <div className="mt-8 p-4 bg-gray-50 rounded-lg">
              <h2 className="text-xl font-semibold text-teal-600 mb-2">
                Scan the QR code
              </h2>
              <p className="text-gray-500 text-sm mb-4">
                You can also check about the service
              </p>
              <div className="w-32 h-32">
                <img
                  src={Qr}
                  alt="QR Code"
                  className="w-full h-full"
                />
              </div>
            </div>
          </div>
          <div className="relative h-[400px] rounded-lg overflow-hidden">
            <img
              src={female}
              alt="Private party gathering"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto p-4">
        <div className="grid md:grid-cols-2 gap-8 items-center">

          <div className="relative h-[400px] rounded-lg overflow-hidden">
            <img
              src={female}
              alt="Catering event with people dining"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="space-y-6 p-6">
            <div className="w-12 h-12">
              <svg
                viewBox="0 0 24 24"
                className="w-full h-full text-orange-500"
                fill="currentColor"
              >
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-14v7l6 3.5-1 1.5-7-4V6h2z" />
              </svg>
            </div>


            <h1 className="text-3xl font-bold text-gray-800">Categring</h1>


            <p className="text-gray-600">
              Lorem ipsum dolor sit amet consectetur. Lectus faucibus lorem ac adipiscing.
              Leo odio tincidunt ipsum magna lacus viverra tincidunt.
            </p>


            <div className="mt-8">
              <h2 className="text-xl font-semibold text-teal-600 mb-2">
                Scan the QR code
              </h2>
              <p className="text-gray-500 text-sm mb-4">
                You can also check about the service
              </p>
              <div className="w-32 h-32">
                <img
                  src={Qr}
                  alt="QR Code"
                  className="w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto p-8">
        <div className="bg-gray-50 rounded-2xl p-12 text-center space-y-6">
          <h2 className="text-3xl font-semibold text-gray-900">
            Got any Queries?
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            If you have any queries, send us a message. Our Friendly team would love to hear from you
          </p>
          <div className="pt-4">
            <button
              className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-3 rounded-full transition-colors duration-200"
            >
              Get In Touch
            </button>
          </div>
        </div>
      </div>


    </div>
  )
}
