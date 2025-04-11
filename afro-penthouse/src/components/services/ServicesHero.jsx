import React from 'react';
import Image from 'next/image';
import { MdArrowOutward } from 'react-icons/md';

const ServicesHero = () => {
  return (
    <div className="relative">
      {/* Black background that covers full height */}
      <div className="absolute top-0 left-0 w-full h-full bg-black z-0"></div>
      
      {/* Content container with transparent background */}
      <div className="relative z-10 container mx-auto px-4 max-w-7xl py-16">
        {/* Hero Text and CTA Section */}
        <div className="flex flex-col md:flex-row justify-between items-start mb-12">
          <div className="mb-8 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold max-w-md text-white mb-4">
              A comprehensive set of our services
            </h1>
            <div className="w-20 h-0.5 bg-white"></div>
          </div>
          
          <div className="max-w-md">
            <p className="text-white text-base">
              From IT infrastructure and data security to custom applications, our team delivers results that empower your business. Let us be the partner that drives your innovation forward.
            </p>
          </div>
        </div>
        
        {/* Buttons Section */}
        <div className="flex flex-col sm:flex-row gap-4 mb-12">
          <button className="bg-white text-black rounded-full px-6 py-3 text-sm font-medium flex items-center justify-center">
            Get In Touch <span className="ml-2"><MdArrowOutward /></span>
          </button>
          <button className="border border-white text-white rounded-full px-6 py-3 text-sm font-medium flex items-center justify-center">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-2">
              <path d="M12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18Z" stroke="white" strokeWidth="2" />
              <path d="M8 12H16" stroke="white" strokeWidth="2" strokeLinecap="round" />
              <path d="M12 8V16" stroke="white" strokeWidth="2" strokeLinecap="round" />
            </svg>
            Talk to our team
          </button>
        </div>
        
        {/* Image Section */}
        <div className="w-full h-96 overflow-hidden">
          <img 
            src="/serviceHero.svg" 
            alt="Developer working on multiple monitors with code"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default ServicesHero;