"use client"
import React, { useState, useEffect, useCallback } from 'react';

const AwardsCarousel = () => {
  const originalAwards = [
    { year: 2024, isHighlighted: false },
    { year: 2023, isHighlighted: false },
    { year: 2022, isHighlighted: false },
    { year: 2021, isHighlighted: false },
    { year: 2020, isHighlighted: false },
    { year: 2019, isHighlighted: false }
  ];

  const awards = [...originalAwards, ...originalAwards, ...originalAwards];
  const [currentIndex, setCurrentIndex] = useState(originalAwards.length);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handlePrevious = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex(prev => prev - 1);
  }, [isTransitioning]);

  const handleNext = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex(prev => prev + 1);
  }, [isTransitioning]);

  useEffect(() => {
    if (!isTransitioning) return;

    const timeoutId = setTimeout(() => {
      setIsTransitioning(false);
      
      if (currentIndex >= originalAwards.length * 2) {
        setCurrentIndex(originalAwards.length);
      } else if (currentIndex < originalAwards.length) {
        setCurrentIndex(originalAwards.length * 2 - 1);
      }
    }, 300);

    return () => clearTimeout(timeoutId);
  }, [currentIndex, isTransitioning, originalAwards.length]);

  return (
    <div className="w-full max-w-7xl mx-auto mb-[4rem] px-[5rem]">
      <div className="mb-2">
        <span className="text-red-600 text-sm uppercase tracking-wide">AWARDS</span>
      </div>
      
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-bold text-slate-900">
          Awards &<br />
          Recognitions
        </h2>
        <div className="flex gap-2">
          <button 
            className="w-10 h-10 border border-gray-300 flex items-center justify-center hover:bg-gray-50"
            onClick={handlePrevious}
          >
            <span className="sr-only">Previous</span>
            &#8249;
          </button>
          <button 
            className="w-10 h-10 border border-gray-300 flex items-center justify-center hover:bg-gray-50"
            onClick={handleNext}
          >
            <span className="sr-only">Next</span>
            &#8250;
          </button>
        </div>
      </div>

      <div className="overflow-hidden">
        <div 
          className="flex gap-6 transition-transform duration-300 ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * (25)}%)`,
          }}
        >
          {awards.map((award, index) => (
            <div 
              key={`${award.year}-${index}`}
              className={`${award.isHighlighted ? 'bg-red-600' : 'bg-slate-900'} p-8 relative min-h-[280px] w-[20rem]`}
              style={{ flexShrink: 0 }}
            >
              <div className="absolute top-6 left-6 text-white">{award.year}</div>
              <div className="absolute bottom-6 right-6 text-2xl font-medium text-right text-white">
                Energy<br />
                Company of<br />
                the Year Award
              </div>
              {award.isHighlighted && (
                <div className="absolute -bottom-2 -left-2 w-8 h-8">
                  <div className="w-4 h-4 bg-red-600"></div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AwardsCarousel;