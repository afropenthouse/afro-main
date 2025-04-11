"use client";
import "./styles.scss";
import { servicesData } from "@/lib/data";
import ServicesSingle from "../ui-services/ServicesSingle";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

const Services = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 3;
  const totalItems = servicesData.length;
  const maxIndex = Math.ceil(totalItems / itemsPerPage) - 1;

  const nextSlide = () => {
    if (currentIndex < maxIndex) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCurrentIndex(0);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    } else {
      setCurrentIndex(maxIndex); // Loop to the end
    }
  };

  // Get current items to display
  const getCurrentItems = () => {
    const startIndex = currentIndex * itemsPerPage;
    return servicesData.slice(startIndex, startIndex + itemsPerPage);
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
      <div className="w-full transition-all duration-500 ease-in-out">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {getCurrentItems().map((service) => (
            <ServicesSingle key={service.id} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;



