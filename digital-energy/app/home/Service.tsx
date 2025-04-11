"use client"
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ServicesSingle from "@/components/(landing)/ui-services/ServicesSingle";
import { servicesData } from "@/lib/data";

const Services = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === servicesData.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? servicesData.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="px-6 md:px-20 w-full flex flex-col gap-8 mt-20">
      {/* Header with title and controls */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div className="flex flex-col">
          <h1 className="text-[#D31C1A] text-sm font-normal">SERVICES</h1>
          <div className="text-[#09283A] text-3xl md:text-4xl font-semibold leading-tight">
            <h2>How We Make A</h2>
            <h2>Difference Globally</h2>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <button
            onClick={prevSlide}
            className="border border-[#0C0C0C] p-2 w-10 h-10 flex items-center justify-center"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={nextSlide}
            className="border border-[#0C0C0C] p-2 w-10 h-10 flex items-center justify-center"
            aria-label="Next slide"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Main content with services */}
      <div className="w-full overflow-hidden">
        <div 
          className="w-full transition-all duration-500 ease-in-out"
          style={{
            display: 'grid',
            gridTemplateColumns: `repeat(${servicesData.length}, 100%)`,
            transform: `translateX(-${currentIndex * 100}%)`
          }}
        >
          {servicesData.map((service) => (
            <div key={service.id} className="w-full">
              <ServicesSingle {...service} />
            </div>
          ))}
        </div>
      </div>

      {/* Desktop view (hidden on mobile) */}
      <div className="hidden lg:grid lg:grid-cols-3 gap-10">
        {servicesData.slice(currentIndex, currentIndex + 3).map((service) => (
          <ServicesSingle key={service.id} {...service} />
        ))}
      </div>
    </section>
  );
};

export default Services;