"use client"
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

const HowHero = () => {
  const statsVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const statItemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    }
  };

  const stats = [
    { label: "SATISFIED CLIENTS", value: "150+" },
    { label: "WORKERS", value: "30+" },
    { label: "COMPANY OFFICES", value: "12+" },
    { label: "SATISFIED CLIENTS", value: "12+" },
  ];

  return (
    <>
      <div className="relative w-full h-[300px] sm:h-[350px] md:h-[400px]">
        {/* Background Image */}
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="/movers2.jpeg"
            alt="Movers carrying boxes"
            className="w-full h-full object-cover"
            width={1440}
            height={400}
            priority
          />
          {/* Darker Overlay - 60% opacity black */}
          <div className="absolute inset-0 bg-black/60" />
        </div>

        {/* Content */}
        <div className="relative w-full max-w-[1440px] mx-auto px-6 sm:px-8 md:px-10 lg:px-20 h-full flex flex-col justify-center">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 sm:gap-3 text-white text-sm sm:text-base">
            <Link href="/" className="text-white/80 hover:text-white transition-colors">
              Home
            </Link>
            <span className="text-white/60">•</span>
            <span className="text-white">How it works</span>
          </nav>

          {/* Title */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[56px] font-medium text-white mt-3 md:mt-4">
            How it works
          </h1>
        </div>
      </div>


    </>
  );
};

export default HowHero;