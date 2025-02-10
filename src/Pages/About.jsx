import React from 'react'
import image1 from "../assets/Image/chef.png"
import image2 from "../assets/Image/chef1.jpeg"
import image3 from "../assets/Image/girl.jpeg"
import girl from "../assets/Image/girlchef.jpeg"
import first from "../assets/Image/image1.jpeg"
import second from "../assets/Image/image2.jpeg"
import third from "../assets/Image/image3.jpeg"
import male from "../assets/Image/malechef.jpeg"
import momo from "../assets/Image/momo.png"
import momos from "../assets/Image/momo1.png"
import food from "../assets/Image/momo2.png"


export default function About() {

  const teamMembers = [
    {
      name: "Head Chef",
      image: first,
    },
    {
      name: "Assistant Chef",
      image: second,
    },
    {
      name: "Assistant Chef",
      image: third,
    },
  ];
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">

      <div className="grid md:grid-cols-2 gap-8 items-center mb-16">
        <div className="space-y-4">
          <h2 className="text-teal-600 font-script text-3xl">About Us</h2>
          <div className="space-y-2">
            <p className="text-gray-500 uppercase text-sm tracking-wide">
              WE PRIDE OURSELF ON
            </p>
            <div className="space-y-2">
              <h3 className="text-3xl font-bold">
                <span className="text-orange-500">Our authentic momo recipes</span>
              </h3>
              <h1 className="text-4xl text-gray-800 ">
                passed down through generations
              </h1>
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="bg-teal-600 rounded-full w-70 h-70 mx-auto mt-40  transform -translate-x-0  ">
            <img
              src={image1}
              alt="Chef with wooden spoon"
              className="absolute transform -translate-y-30  translate-x-0 w-[350px] h-[400px] rounded-b-full     "
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
              Process behind the making
            </h2>
            <p className="text-white text-lg mb-6">
              See how we make momos that you like from only the best ingredients
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
      <div className="max-w-6xl mx-auto px-4 py-12 space-y-24">

        <div className="relative flex items-center">
          <div className="w-1/2 pr-8">
            <h2 className="text-3xl font-bold mb-4">
              Our momos are <span className="text-orange-500">made</span><br />
              <span className="text-orange-500">with love</span>
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Lorem ipsum dolor sit amet consectetur. Lectus faucibus lorem ac adipiscing. Leo odio tincidunt ipsum magna lacus viverra tincidunt. Viverra aliquet sollicitudin eget dapibus. Vestibulum velit viverra gravida consectetur sed facilisis ut morbi.
            </p>
          </div>
          <div className="w-1/2 relative">
            <div >
              <img
                src={image2}
                className="w-[550px] h-[400px]r "
              />
              <img
                src={momo}
                alt="Momo plate with sauce"
                className="absolute -bottom-12 -left-8 w-48 h-48   "
              />
            </div>
          </div>
        </div>


        <div className="relative flex items-center flex-row-reverse">
          <div className="w-1/2 pl-8">
            <h2 className="text-3xl font-bold mb-4">
              Taste the difference with<br />
              <span className="text-orange-500">our handcrafted momos</span>
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Lorem ipsum dolor sit amet consectetur. Lectus faucibus lorem ac adipiscing. Leo odio tincidunt ipsum magna lacus viverra tincidunt. Viverra aliquet sollicitudin eget dapibus. Vestibulum velit viverra gravida consectetur sed facilisis ut morbi.
            </p>
          </div>
          <div className="w-1/2 relative">
            <div >
              <img
                src={girl}
                alt="Plating momos"
                className="w-[550px] h-[400px] "
              />
              <img
                src={momos}
                alt="Fried momos"
                className="absolute -bottom-12 -right-8 w-48 h-48 "
              />
            </div>
          </div>
        </div>


        <div className="relative flex items-center">
          <div className="w-1/2 pr-8">
            <h2 className="text-3xl font-bold mb-4">
              Our momos are the<br />
              perfect <span className="text-orange-500">blend of tradition</span><br />
              and innovation
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Lorem ipsum dolor sit amet consectetur. Lectus faucibus lorem ac adipiscing. Leo odio tincidunt ipsum magna lacus viverra tincidunt. Viverra aliquet sollicitudin eget dapibus. Vestibulum velit viverra gravida consectetur sed facilisis ut morbi.
            </p>
          </div>
          <div className="w-1/2 relative ">
            <div>
              <img
                src={male}
                alt="Chef with laptop"
                className="w-[550px] h-[400px]"
              />
              <img
                src={food}
                alt="Steamed momos plate"
                className="absolute -bottom-20 -left-8 w-48 h-48 "
              />
            </div>
          </div>
        </div>
      </div>

      <div className="relative bg-white shadow-lg  overflow-hidden flex flex-col md:flex-row w-full md:w-7/5 mx-auto mt-10">

        <div className="md:w-1/2 bg-black text-white p-10 flex flex-col justify-center">
          <blockquote className="text-5xl font-bold italic mb-4">“</blockquote>
          <p className="text-sm md:text-base leading-relaxed">
            Momo is not just about sustenance, it’s about bringing people together and creating memories. At our restaurant, we strive to create a warm and inviting atmosphere where our guests can enjoy delicious momo, great company, and unforgettable experiences.
          </p>
          <div className="mt-6 font-bold text-lg">Marcus Schleifer</div>
          <div className="text-xl font-bold text-white-400">CEO</div>
        </div>


        <div className="md:w-1/2 relative">
          <img
            src={image3}
            alt="Marcus Schleifer"
            className="w-100 h-100 object-cover"
          />
        </div>
      </div>

      <div className="text-center py-10">
        <h2 className="text-3xl font-bold">
          Meet The <span className="text-orange-500">Team</span>
        </h2>
        <p className="text-teal-600 mt-2">
          Our talented team members who deliver only the best results
        </p>
        <div className="flex flex-col md:flex-row justify-center gap-6 mt-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-white shadow-lg rounded-xl overflow-hidden w-72">
              <img src={member.image} alt={member.name} className="w-full h-80 object-cover" />
              <div className="p-4 text-lg font-bold text-center">{member.name}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
