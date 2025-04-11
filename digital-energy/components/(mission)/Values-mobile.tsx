import React from 'react';

const CoreValues = () => {
  const values = [
    {
      id: '01',
      title: 'INTEGRITY',
      description: "Upholding the highest ethical standards, trust and accountability at every level of the organization.",
      bgColor: 'bg-gray-900'
    },
    {
      id: '02',
      title: 'RESPECT',
      description: "It's all about being honest, ethical, and transparent in every action and decision the company makes.",
      bgColor: 'bg-red-600'
    },
    {
      id: '03',
      title: 'EXCELLENCE',
      description: "It emphasizes the pursuit of the highest standards in setting ambitious goals, and continual innovations.",
      bgColor: 'bg-gray-900'
    },
    {
      id: '04',
      title: 'TEAMWORK',
      description: "It emphasizes the importance of collaboration, mutual respect, and shared goals within your organization.",
      bgColor: 'bg-red-600'
    },
    {
      id: '05',
      title: 'CUSTOMERS FOCUS',
      description: "Making the needs and satisfaction of your customers a top priority in every aspect of your business.",
      bgColor: 'bg-gray-900'
    }
  ];

  return (
    <div className="p-6 max-w-md mx-auto">
      <h1 className="text-center text-2xl font-bold text-[#1a237e] mb-2">
        OUR CORE VALUES
      </h1>
      <p className="text-center text-gray-600 mb-8">
        We are guided by five core values that shape our approach to growth and innovation.
      </p>
      
      <div className="space-y-4">
        {values.map((value) => (
          <div key={value.id} className="relative">
            <div className={`${value.bgColor} rounded-full py-6 px-8 text-white relative`}>
              <span className="absolute -left-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full flex items-center justify-center">
                <span className="text-gray-900 font-medium">{value.id}</span>
              </span>
              <h2 className="text-lg font-semibold mb-2">{value.title}</h2>
              <p className="text-sm leading-relaxed">{value.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CoreValues;