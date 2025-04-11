import React from 'react';
import { MdArrowOutward } from 'react-icons/md';

const CTAComponent = () => {
  return (
    <div className='bg-black'>
      <div className="w-[95%] bg-[#F5F6F8] py-16 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center">
          <div className="mb-6 md:mb-0">
            <h2 className="text-4xl md:text-5xl font-bold text-black">
              Let's work<br />together
            </h2>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="inline-flex items-center px-6 py-3 bg-black text-white rounded-full text-sm font-medium">
              <a href="https://wa.me/2348034616759">Get a quote</a> <span className="ml-2"><MdArrowOutward /></span>
            </div>
            <a
              href="/services"
              className="inline-flex items-center px-6 py-3 bg-white text-black border border-gray-200 rounded-full text-sm font-medium"
            >
              Our Services
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTAComponent;