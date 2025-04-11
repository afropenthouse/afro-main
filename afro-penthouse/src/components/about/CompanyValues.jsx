import React from 'react';

const CompanyValues = () => {
  return (
    <div className="w-full bg-white px-4 py-16 md:px-8 lg:px-16">
      {/* Main Heading */}
      <div className="text-center mb-16">
        <h2 className="text-2xl md:text-3xl font-bold">
          The value that derives<br />everything we do
        </h2>
      </div>

      {/* Values Grid - First Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        {/* Agility */}
        <div className="flex flex-col items-center text-center">
          <div className="mb-4">
            <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
              <path d="M12 2C6.5 2 2 6.5 2 12H22C22 6.5 17.5 2 12 2Z" stroke="currentColor" strokeWidth="2" />
              <path d="M12 22C17.5 22 22 17.5 22 12H2C2 17.5 6.5 22 12 22Z" stroke="currentColor" strokeWidth="2" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold mb-2">Agility</h3>
          <p className="text-sm text-gray-700">
            We embrace change, adapting quickly to deliver innovative solutions that meet your evolving needs
          </p>
        </div>

        {/* Integrity */}
        <div className="flex flex-col items-center text-center">
          <div className="mb-4">
            <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2L4 6V12C4 15.31 7.58 19.5 12 22C16.42 19.5 20 15.31 20 12V6L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold mb-2">Integrity</h3>
          <p className="text-sm text-gray-700">
            Honesty and transparency guide our actions, ensuring trust in every project we undertake, building lasting relationships based on mutual respect
          </p>
        </div>

        {/* Reliability */}
        <div className="flex flex-col items-center text-center">
          <div className="mb-4">
            <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
              <path d="M2 12H22" stroke="currentColor" strokeWidth="2" />
              <path d="M12 2C8 2 4 6 4 12C4 18 8 22 12 22C16 22 20 18 20 12C20 6 16 2 12 2Z" stroke="currentColor" strokeWidth="2" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold mb-2">Reliability</h3>
          <p className="text-sm text-gray-700">
            You can count on us to consistently deliver on time, every time. Committed to excellence ensures that we meet highest standards in every project
          </p>
        </div>
      </div>

      {/* Values Grid - Second Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Expertise */}
        <div className="flex flex-col items-center text-center">
          <div className="mb-4">
            <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8 21V16.8C8 16.3582 8.35817 16 8.8 16H15.2C15.6418 16 16 16.3582 16 16.8V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              <path d="M12 12L12 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              <path d="M17 8.8L17 7M7 8.8L7 7M7.5 9H16.5C17.3284 9 18 8.32843 18 7.5V4.5C18 3.67157 17.3284 3 16.5 3H7.5C6.67157 3 6 3.67157 6 4.5V7.5C6 8.32843 6.67157 9 7.5 9Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold mb-2">Expertise</h3>
          <p className="text-sm text-gray-700">
            Our team combines deep technical knowledge with industry experience to solve complex challenges
          </p>
        </div>

        {/* Customer Focused */}
        <div className="flex flex-col items-center text-center">
          <div className="mb-4">
            <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 14H20L14 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M4 21H20L14 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold mb-2">Customer Focused</h3>
          <p className="text-sm text-gray-700">
            We prioritize your goals above all else, ensuring that every solution we provide is tailored specifically to create lasting value for your business
          </p>
        </div>

        {/* Team Work */}
        <div className="flex flex-col items-center text-center">
          <div className="mb-4">
            <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 7H8V11H4V7Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M10 7H14V11H10V7Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M16 7H20V11H16V7Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M4 13H8V17H4V13Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M10 13H14V17H10V13Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M16 13H20V17H16V13Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold mb-2">Team Work</h3>
          <p className="text-sm text-gray-700">
            Collaboration is at our core, as we believe in the power of working together to achieve the best outcomes
          </p>
        </div>
      </div>

      {/* Horizontal Separators */}
      <div className="hidden md:block">
        <div className="border-t border-gray-200 w-full mt-12 mb-12"></div>
      </div>
    </div>
  );
};

export default CompanyValues;