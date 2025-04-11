"use client"

import React from 'react';
import { motion } from 'framer-motion';
import { MdArrowOutward } from 'react-icons/md';

const CTASection = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const buttonVariants = {
    hover: {
      scale: 1.05,
      transition: { duration: 0.2 }
    },
    tap: {
      scale: 0.95
    }
  };

  return (
    <div className="w-full bg-[#F5F6F8] py-16 md:py-24 relative overflow-hidden">
      {/* Top-right corner shape */}
      <div className="absolute top-0 right-[5%] w-32 h-32 bg-black rounded-bl-full z-10"></div>

      {/* Bottom-right rectangle */}
      <div className="absolute bottom-0 right-0 w-14 h-full bg-black z-10"></div>

      {/* Bottom-left corner shape */}
      <div className="absolute bottom-0 left-0 w-24 h-24 bg-black rounded-tr-full z-10"></div>

      <div className="container mx-auto px-4 relative z-20">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Heading */}
          <motion.h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 md:mb-0"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            Let's work<br />together
          </motion.h2>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 lg:mr-24">
            <motion.button
              className="bg-black text-white py-3 px-6 rounded-full flex items-center justify-center font-medium"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              <a href="https://wa.me/2348034616759" target="_blank" rel="noopener noreferrer">Get a quote</a> <span className="ml-2"><MdArrowOutward /></span>
            </motion.button>
            <motion.button
              className="border border-gray-300 bg-white text-black py-3 px-6 rounded-full flex items-center justify-center font-medium"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              Our Services
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTASection;