import React from 'react';
import about1 from '../../../public/about1.svg'
import Image from 'next/image';
import { MdArrowOutward } from 'react-icons/md';

const AboutHero = () => {
  return (
    <div className="relative">
      {/* Black background that covers only ~60% of the height */}
      <div className="absolute top-0 left-0 w-full h-3/5 bg-black z-0"></div>
     
      {/* Content container with transparent background */}
      <div className="relative z-10 container mx-auto px-4 max-w-7xl py-16">
        {/* Hero Text and CTA Section */}
        <div className="flex flex-col md:flex-row justify-between items-start mb-12">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 md:mb-0 text-white">
              A team of experts ready<br />to help you <span className="inline-block w-16 h-0.5 bg-white ml-2 align-middle"></span>
            </h1>
          </div>
         
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-white text-black rounded-full px-6 py-3 font-medium flex items-center justify-center">
              Get In Touch <span className="ml-2"><MdArrowOutward /></span>
            </button>
            <button className="border border-white text-white rounded-full px-6 py-3 font-medium flex items-center justify-center">
              <span className="mr-2">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18Z" stroke="white" strokeWidth="2" />
                  <path d="M8 12H16" stroke="white" strokeWidth="2" strokeLinecap="round" />
                  <path d="M12 8V16" stroke="white" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </span>
              Talk to our team
            </button>
          </div>
        </div>
       
        {/* Images Section */}
        <div className="flex flex-col md:flex-row gap-4">
          {/* First image - narrower and taller */}
          <div className="w-full md:w-1/3 h-[28rem] md:h-[32rem] bg-gray-800 rounded-lg overflow-hidden">
            <Image
                src={about1}
              alt="Developer reviewing code on screen"
              className="w-full h-full object-cover"
            />
          </div>
         
          {/* Second image - wider and shorter */}
          <div className="w-full md:w-2/3 h-[28rem] md:h-[28rem] bg-gray-800 rounded-lg overflow-hidden">
            <Image
              src={`/office.webp`}
              alt="Developers working in modern office"
              className="w-full h-full object-cover"
              width={500}
              height={500}
            />
          </div>
        </div>
       
        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          <div className="text-center">
            <h2 className="text-5xl font-bold mb-2 text-black">102+</h2>
            <p className="text-xl text-gray-600">Successful projects</p>
          </div>
          <div className="text-center">
            <h2 className="text-5xl font-bold mb-2 text-black">15+</h2>
            <p className="text-xl text-gray-600">Team members</p>
          </div>
          <div className="text-center">
            <h2 className="text-5xl font-bold mb-2 text-black">70+</h2>
            <p className="text-xl text-gray-600">Happy clients</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutHero;