import React from 'react';

const PortfolioCard = () => {
  // Array of portfolio items
  const portfolioItems = [
    {
      id: 1,
      name: 'Cashwyre',
      description: 'Cashwyre is a fintech platform designed to streamline cross-border payments. It offers services such as remittances, fund transfers, Crypto4Cash, virtual dollar cards, and more. Additionally, fintechs and businesses can integrate Cashwyre\'s APIs to enhance their financial solutions.',
      client: 'Wyrelight',
      service: 'Mobile/Web Design',
      website: 'cashwyre.io',
      websiteUrl: 'https://cashwyre.io',
      socialLinks: [
        { id: 'instagram', url: 'https://instagram.com/cashwyre' },
        { id: 'twitter', url: 'https://twitter.com/cashwyre' }
      ],
      imageUrl: '/cashwyre.svg'
    },
    {
      id: 2,
      name: 'Vibeazy',
      description: 'Vibeazy is an online application that helps you stick to your budget by suggesting affordable places to go on dates, family & group hangouts, offering exclusive discounts when you pay via the app.',
      tagline: 'Leading with Integrity in Oil & Gas Solutions',
      client: 'Afro-penthouse',
      service: ' Mobile App',
      website: 'vibeazy.com',
      websiteUrl: 'vibeazy.com',
      socialLinks: [
        { id: 'instagram', url: 'https://instagram.com/bridgewatersgs' },
        { id: 'twitter', url: 'https://twitter.com/bridgewatersgs' }
      ],
      imageUrl: '/vibe.png'
    },
    {
      id: 3,
      name: 'MendAfrica',
      description: 'MendAfrica is an online platform that partners with credible, vetted individuals and organizations to highlight projects that positively impact Africa. Discover, give and get updates on these projects.',
      tagline: 'Leading with Integrity in Oil & Gas Solutions',
      client: 'Afro-penthouse',
      service: 'Mobile/Web Design',
      website: 'mendafrica.com',
      websiteUrl: 'mendafrica.com',
      socialLinks: [
        { id: 'instagram', url: 'https://instagram.com/bridgewatersgs' },
        { id: 'twitter', url: 'https://twitter.com/bridgewatersgs' }
      ],
      imageUrl: 'mend.svg'
    },
    {
      id: 4,
      name: 'PurpleHCM',
      description: 'PurpleHCM is an innovative HR technology solution designed to streamline and optimize human capital management for businesses of all sizes. Developed by RecodeApps, PurpleHCM offers a comprehensive suite of tools for talent acquisition, payroll processing, performance management, employee engagement, and workforce analytics.',
      tagline: 'Leading with Integrity in Oil & Gas Solutions',
      client: 'PurpleHCM',
      service: 'Mobile/Web Design',
      website: 'Purplehcm.com',
      websiteUrl: 'Purplehcm.com',
      socialLinks: [
        { id: 'instagram', url: 'https://instagram.com/bridgewatersgs' },
        { id: 'twitter', url: 'https://twitter.com/bridgewatersgs' }
      ],
      imageUrl: 'purple.svg'
    },
    {
      id: 5,
      name: 'Bridge water',
      description: 'Bridgewaters Global Services Limited delivers a comprehensive suite of civil construction and minor mechanical works, combining precision and speed to meet the highest standards.',
      client: 'Bridgewatersgs',
      service: 'Mobile/Web Design',
      website: 'bridgewatersgs.com',
      websiteUrl: 'Purplehcm.com',
      socialLinks: [
        { id: 'instagram', url: 'https://instagram.com/bridgewatersgs' },
        { id: 'twitter', url: 'https://twitter.com/bridgewatersgs' }
      ],
      imageUrl: 'bridge.svg'
    },
  ];

  return (
    <div className="w-full max-w-6xl mx-auto mt-10 px-4 sm:px-6 lg:px-0">
      {portfolioItems.map((item) => (
        <div key={item.id} className="mb-12 relative">
          <div className="relative overflow-hidden bg-gray-900 text-white">
            {/* Content area with hover effect */}
            <div className="relative group">
              {/* Image */}
              <div className="w-full h-64 sm:h-80 bg-amber-600 overflow-hidden">
                <img src={item.imageUrl} alt={item.name} className="w-full h-full object-cover" />

                {/* Overlay with description (visible on hover) */}
                <div className="absolute inset-0 bg-gray-900 bg-opacity-85 opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4 flex flex-col gap-4">
                  <p className="text-sm md:text-base text-white max-w-[35rem] pt-10">
                    {item.description}
                  </p>

                  {/* Web and Share icons */}
                  <div className="flex space-x-2 mt-4">
                    <button className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="10"></circle>
                        <line x1="2" y1="12" x2="22" y2="12"></line>
                        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                      </svg>
                    </button>
                    <button className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="18" cy="5" r="3"></circle>
                        <circle cx="6" cy="12" r="3"></circle>
                        <circle cx="18" cy="19" r="3"></circle>
                        <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line>
                        <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Project details (always visible) with responsive layout */}
          <div className="flex flex-col md:flex-row mt-6">
            <div className="w-full md:w-1/3 mb-4 md:mb-0">
              <h2 className="text-xl font-medium mb-4 md:mb-0">{item.name}</h2>
            </div>
            <div className="w-full md:w-2/3 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-0">
              <div className="mb-3 sm:mb-0">
                <p className="text-gray-500 text-sm mb-1">Client</p>
                <p>{item.client}</p>
              </div>
              <div className="mb-3 sm:mb-0">
                <p className="text-gray-500 text-sm mb-1">Service</p>
                <p>{item.service}</p>
              </div>
              <div>
                <p className="text-gray-500 text-sm mb-1">Website</p>
                <a href={item.websiteUrl} target="_blank" rel="noopener noreferrer" className="text-black hover:underline">{item.website}</a>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PortfolioCard;