import React from 'react';
import Image from 'next/image';

const ServicesGrid = () => {
  const services = [
    {
      title: "IT Infrastructure",
      description: "We build and manage IT infrastructures for seamless operations and scalable growth.",
      image: "/service1.svg"
    },
    {
      title: "Building mobile & Business Apps",
      description: "Custom-built mobile & business applications to enhance user experience and productivity.",
      image: "/service2.svg"
    },
    {
      title: "Cloud Services",
      description: "Scalable cloud solutions for secure storage, collaboration, and agility.",
      image: "/service3.svg"
    },
    {
      title: "Application Development",
      description: "Custom software development using cutting-edge technology to meet your needs.",
      image: "/service4.svg"
    },
    {
      title: "Migration",
      description: "Seamless, secure migration of data and apps to modern environments.",
      image: "/service5.svg"
    },
    {
      title: "Support",
      description: "Technical support to ensure your systems run smoothly, backed by our expert team.",
      image: "/service6.svg"
    },
    {
      title: "Application Integration",
      description: "Streamlined integration of disparate systems for a more connected and efficient workflow.",
      image: "/service7.svg"
    },
    {
      title: "Training",
      description: "Tailored training to equip team with skills to manage and leverage technology solutions.",
      image: "/service8.svg"
    },
    {
      title: "IT Audit",
      description: "Comprehensive IT audits to identify areas of improvement & ensure compliance & security.",
      image: "/service9.svg"
    }
  ];

  return (
    <div className="w-full bg-white py-12 px-5 md:px-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div key={index} className="flex flex-col">
              <div className="h-64 overflow-hidden mb-4">
                <Image 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover"
                  height={500}
                  width={500}
                />
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-2">
                {service.title}
              </h3>
              <p className="text-sm text-gray-600">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesGrid;