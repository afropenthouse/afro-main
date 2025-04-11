import React from 'react';
import { MdArrowOutward } from 'react-icons/md';

const ProjectHero = () => {
  return (
    <div className="w-full bg-black text-white py-12 md:py-16">
      <div className="container mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Left column */}
          <div className="md:col-span-6">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Take a look at our<br />
              recent projects <span className="inline-block w-16 h-0.5 bg-white ml-2 align-middle"></span>
            </h2>
            
            <div className="mt-12 flex space-x-4">
              <button className="bg-white text-black rounded-full px-6 py-3 text-sm font-medium flex items-center">
                Get In Touch <span className="ml-2"><MdArrowOutward /></span>
              </button>
              <button className="border border-white text-white rounded-full px-6 py-3 text-sm font-medium flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="8" y1="12" x2="16" y2="12"></line>
                  <line x1="12" y1="8" x2="12" y2="16"></line>
                </svg>
                Talk to our team
              </button>
            </div>
          </div>
          
          {/* Right column */}
          <div className="md:col-span-5 md:col-start-8">
            <p className="text-sm md:text-base">
              We take pride in delivering impactful solutions that drive success.
              Explore our recent work and see how we've helped organizations
              like yours achieve their goals.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectHero;