"use client"
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import React, { useState, useEffect } from 'react';
import { FaCloudDownloadAlt } from 'react-icons/fa';
import Service from "./Service"
import { Mail, Phone } from 'lucide-react';

const DigitalEnergyLanding = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentIndex2, setCurrentIndex2] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  
  const heroImages = [
    "/images/Digital Enerdy Picture slide 1-min.webp",
    "/images/Digital Enerdy Picture slide 2-min.webp",
    "/images/Digital Enerdy Picture slide 3-min.webp"
  ];

  const images = [
    
    
    "/dre3.svg",
    "/dre2.svg",
    "/dre1.svg",
  ];
  


  const partners = [
    {
      name: "iol",
      image: "/images/partner1.png",
      link: "#"
    },
    {
      name: "Elster Honeywell",
      image: "/images/parter2.png",
      link: "#"
    },
    {
      name: "Ilshin Value Co.",
      image: "/images/partner3.png",
      link: "#"
    },
    {
      name: "Ilshin Value Co.",
      image: "/images/partner4.png",
      link: "#"
    },
    {
      name: "Ilshin Value Co.",
      image: "/images/partner5.png",
      link: "#"
    }]

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === partners.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? partners.length - 1 : prevIndex - 1
    );
  };
 

  const goToNext = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex2((prev) => (prev + 1) % images.length);
    setTimeout(() => setIsTransitioning(false), 500);
  };

  const goToPrev = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex2((prev) => (prev - 1 + images.length) % images.length);
    setTimeout(() => setIsTransitioning(false), 500);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
    
    <div className="max-w-4xl mx-auto">
      {/* Hero Section */}
      <div className="relative h-[26rem] overflow-hidden">
        <img 
          src={heroImages[currentImageIndex]}
          alt="Hero"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 to-transparent">
          <div className="p-8 text-white max-w-lg">
            <h1 className="text-4xl font-bold mb-4">Redefining the Future of Oil and Gas</h1>
            <p className="text-lg mb-6">We stand as the ultimate link to excellence in the oil energy sector, driving intellectual progress for suitable future.</p>
            
            <div className="flex flex-col gap-4 text-sm">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>info@digitalenergyng.com</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>+234 493 3442</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Innovations Section */}
      <div className="p-8">
      <div className="pb-4">
      <Image
                src="/oil1.svg"
                alt="Workers on power transmission tower"
                className="object-cover w-[100%]"
               width={1000}
               height={500}
              />
          </div>
        <div className="flex gap-8 items-center mb-12">
          <div className="flex-1">
            <h2 className="text-2xl font-bold mb-4">Our Innovations</h2>
            <p className="text-gray-600">
              DIGITAL ENERGY relies heavily on internal solutions in optimizing duration and exemplary performance in all activities of the different sectors of operations coupled with meeting expectations of Clients related to time and cost effectiveness.
            </p>
          </div>
          
        </div>

        <div className="space-y-4">
          <div className="p-4 bg-gray-50 rounded-lg">
            <h3 className="font-semibold mb-2">Pipeline and Piping:</h3>
            <p>CAD and 3D Modeling, Pipeline Alignment Sheets and Profile Design Programs, Smart P&ID, Stress Analysis (Caesar II)</p>
          </div>
          
          <div className="p-4 bg-gray-50 rounded-lg">
            <h3 className="font-semibold mb-2">Process simulations and Hydraulic Modeling:</h3>
            <p>Aspenone suite (HYSYS), OLGA 2000, Pipeline Studio</p>
          </div>
          
          <div className="p-4 bg-gray-50 rounded-lg">
            <h3 className="font-semibold mb-2">INSTRUMENTATION:</h3>
            <p>INTOOLS, OLGA 2000, ( Smart Plant Instrumentation)</p>
          </div>
        </div>

        <div className="mt-8 text-center">
          <button className="bg-red-600 text-white px-6 py-3 rounded-lg flex items-center gap-2 mx-auto hover:bg-red-700 transition-colors">
          <FaCloudDownloadAlt className="w-5 h-5" />
            Download Company Profile
          </button>
        </div>
      </div>
    </div>
    <div className="bg-[#0a192f] text-white p-8 min-h-screen">
      <div className="max-w-4xl mx-auto">
        <div className="mb-12">
          <h3 className="text-gray-400 uppercase tracking-wider mb-2">CORE VALUES</h3>
          <h2 className="text-3xl font-bold mb-8">Our Mission & Vision</h2>
          
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="w-2 h-2 bg-red-500 mt-2 flex-shrink-0"></div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Professional Service</h3>
                <p className="text-gray-300 leading-relaxed">
                  to add value by applying:- superior technology, skill, leadership, knowledge, sound social and environmental responsibility and practices.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-2 h-2 bg-red-500 mt-2 flex-shrink-0"></div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Consistent Performance</h3>
                <p className="text-gray-300 leading-relaxed">
                  To consistently meet and exceed the overall expectations set by our customers and our own people; to deliver results that substantiate growth.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-2 h-2 bg-red-500 mt-2 flex-shrink-0"></div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Innovation</h3>
                <p className="text-gray-300 leading-relaxed">
                  To be a leading player in the global oil service business, the preferred and trusted local provider of well and process safety systems, operations, electrical and instrumentation services
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="relative">
          <img 
            src="/woman-hat.svg" 
            alt="Engineer at industrial site"
            className="w-full h-[500px] object-cover rounded-lg"
          />
          {/* <div className="absolute top-4 right-4 w-8 h-8 bg-red-500"></div> */}
        </div>
      </div>
    </div>
    <div className="relative bg-red-600 text-white py-10 overflow-hidden">
      <div className="max-w-4xl mx-auto px-8">
        <div className="flex flex-col">
          <span className="text-6xl font-bold mb-2">10</span>
          <div className="text-xl">
            Years of Energy
            <br />
            Industry Experience
          </div>
        </div>
      </div>
      
      {/* Decorative white squares in bottom right */}
      <div className="absolute bottom-0 right-0">
        <div className="w-12 h-12 bg-white -ml-[2.5rem]"></div>
        <div className="w-12 h-12 bg-white ml-2"></div>
      </div>
    </div>
    <Service />
    <div className="max-w-4xl mx-auto p-8">
      {/* Image Slider */}
      <div className="relative mb-8 overflow-hidden rounded-lg">
        <div 
          className="relative h-[500px] transition-transform duration-500 ease-in-out"
          style={{
            width: `${images.length * 100}%`,
            transform: `translateX(-${(100 / images.length) * currentIndex2}%)`
          }}
        >
          {images.map((img, index) => (
            <div
              key={index}
              className="absolute top-0 h-full"
              style={{
                width: `${100 / images.length}%`,
                left: `${(100 / images.length) * index}%`
              }}
            >
              <img 
                src={img}
                alt={`Dredging work ${index + 1}`}
                className="object-cover h-full"
              />
            </div>
          ))}
        </div>
        
        {/* Navigation Buttons */}
        <div className="absolute bottom-0 right-0 flex">
          <button 
            onClick={goToPrev}
            className="bg-red-600 hover:bg-red-700 text-white w-12 h-12 flex items-center justify-center transition-colors disabled:opacity-50"
            disabled={isTransitioning}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button 
            onClick={goToNext}
            className="bg-gray-900 hover:bg-gray-800 text-white w-12 h-12 flex items-center justify-center transition-colors disabled:opacity-50"
            disabled={isTransitioning}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Slide Indicators */}
        <div className="absolute bottom-4 left-4 flex gap-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                if (!isTransitioning) {
                  setIsTransitioning(true);
                  setCurrentIndex2(index);
                  setTimeout(() => setIsTransitioning(false), 500);
                }
              }}
              className={`w-2 h-2 rounded-full transition-all ${
                currentIndex2 === index ? 'bg-red-600 w-4' : 'bg-white bg-opacity-50'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Content Section */}
      <div>
        <div className="text-red-600 font-medium mb-2">PORTFOLIO</div>
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Dredging Works</h2>
        
        <p className="text-gray-600 mb-8 leading-relaxed">
          Dredging in the energy oil sector involves removing sediment and debris from water bodies to ensure safe access for vessels and support offshore infrastructure like oil platforms and pipelines. It helps maintain navigable channels and protect the environment, using specialized techniques like hydraulic or mechanical dredging to meet project needs.
        </p>

        {/* Services Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-red-600"></div>
            <span className="text-gray-800">Surveying</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-red-600"></div>
            <span className="text-gray-800">Disposal</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-red-600"></div>
            <span className="text-gray-800">Environmental Management</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-red-600"></div>
            <span className="text-gray-800">Transporting</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-red-600"></div>
            <span className="text-gray-800">Excavation</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-red-600"></div>
            <span className="text-gray-800">Maintenance</span>
          </div>
        </div>
      </div>
    </div>
    <div className="max-w-6xl mx-auto py-12 px-4">
      <div className="relative">
        <div className="overflow-hidden">
          <div 
            className="flex transition-transform duration-300 ease-in-out"
            style={{
              transform: `translateX(-${currentIndex * 100}%)`,
            }}
          >
            {partners.map((partner, index) => (
              <div 
                key={index}
                className="w-full flex-shrink-0 px-4"
              >
                <div className="bg-white rounded-lg shadow-md p-8 h-48 flex items-center justify-center transition-transform hover:scale-105">
                  <img
                    src={partner.image}
                    alt={`${partner.name} logo`}
                    className="max-w-[80%] max-h-[80%] object-contain"
                  />
                </div>
                <h3 className="text-center text-gray-800 mt-4 text-lg font-medium">
                  {partner.name}
                </h3>
              </div>
            ))}
          </div>
        </div>
        
        <button 
          onClick={prevSlide}
          className="absolute left-0 top-1/2 -translate-y-1/2 -ml-4 bg-white rounded-full p-2 shadow-md hover:bg-gray-100"
        >
          <ChevronLeft className="w-6 h-6 text-gray-600" />
        </button>
        
        <button 
          onClick={nextSlide}
          className="absolute right-0 top-1/2 -translate-y-1/2 -mr-4 bg-white rounded-full p-2 shadow-md hover:bg-gray-100"
        >
          <ChevronRight className="w-6 h-6 text-gray-600" />
        </button>
      </div>
    </div>
    {/* <div className="w-full bg-[#C21C1A] flex justify-between">
      <div className="flex items-center gap-6 px-8 py-6">
        <div className="rounded-full border border-white/30 p-4">
          <Mail className="w-8 h-8 text-white" />
        </div>
        <div className="flex flex-col">
          <span className="text-white/80 text-lg font-normal">
            Email Address
          </span>
          <span className="text-white text-xl font-semibold">
            info@digitalenergyng.com
          </span>
        </div>
      </div>

      <div className="flex items-center gap-6 px-8 py-6">
        <div className="rounded-full border border-white/30 p-4">
          <Phone className="w-8 h-8 text-white" />
        </div>
        <div className="flex flex-col">
          <span className="text-white/80 text-lg font-normal">
            Phone Number
          </span>
          <span className="text-white text-xl font-semibold">
            +234 493 3442
          </span>
        </div>
      </div>
    </div> */}
    </>
  );
};

export default DigitalEnergyLanding;