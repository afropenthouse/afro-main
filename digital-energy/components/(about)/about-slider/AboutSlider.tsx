"use client"

import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { Icons } from '@/components/(landing)/common/Icons';

const ResponsiveImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Sample images - replace with your actual images
  const images = [
    '/about1.svg',
    '/about2.svg',
    '/about3.svg',
    '/about4.svg',
    '/about5.svg',
  ];

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  }, [images.length]);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  // Auto-advance slides every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [nextSlide]);

  return (
    <div className="relative w-full mx-auto">
      {/* Main image container */}
      <div className="relative overflow-hidden w-full h-96 md:h-[28rem] lg:h-[32.5rem] 2xl:h-[35rem]">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute w-full h-full transition-opacity duration-500 ease-in-out ${index === currentIndex ? 'opacity-100' : 'opacity-0'
              }`}
          >
            <Image
              src={image}
              alt={`Slide ${index + 1}`}
              width={1600}
              height={520}
              className="object-cover w-full h-full"
            />
          </div>
        ))}
      </div>

      {/* Navigation arrows */}
      <button
        onClick={prevSlide}
        className="h-11 w-11 flex justify-center items-center absolute top-1/2 left-5 xl:left-10 transform -translate-y-1/2 bg-de_red_d3 hover:bg-white transition-all duration-200 focus:outline-none group"
        aria-label="Previous slide"
      >
        <Icons.chevronLeft size={22} className="text-white group-hover:text-de_red_d3" />
      </button>

      <button
        onClick={nextSlide}
        className="h-11 w-11 flex justify-center items-center absolute top-1/2 bg-de_red_d3 right-5 xl:right-10 transform -translate-y-1/2 hover:bg-white transition-all duration-200 focus:outline-none group"
        aria-label="Next slide"
      >
        <Icons.chevronRight size={22} className="text-white group-hover:text-de_red_d3" />
      </button>

      {/* Indicator dots */}
      {/* <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-colors duration-200 focus:outline-none ${index === currentIndex ? 'bg-white' : 'bg-white/50 hover:bg-white/70'
              }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div> */}
    </div>
  );
};

export default ResponsiveImageSlider;