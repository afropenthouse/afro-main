"use client"

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { MdArrowOutward } from 'react-icons/md';

const MissionSection = () => {
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
    <div className="w-full bg-white py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Text Content */}
          <motion.div
            className="max-w-lg"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.2
                }
              }
            }}
          >
            <motion.h2
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6"
              variants={fadeIn}
            >
              Our mission is to deliver high quality work
            </motion.h2>

            <motion.p
              className="text-gray-700 mb-8"
              variants={fadeIn}
            >
              Our goal is not only to provide excellent ICT services but to act as a trusted partner in driving the technological advancement of our clients, ensuring that they stay competitive and future-ready in an ever-changing digital landscape.
            </motion.p>

            <motion.button
              className="bg-black text-white py-3 px-6 rounded-full flex items-center justify-center font-medium"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              <a href="https://wa.me/2348034616759" target="_blank" rel="noopener noreferrer">Get in touch</a> <span className="ml-2"><MdArrowOutward /></span>
            </motion.button>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Image
              src="/homeMission.svg"
              width={600}
              height={400}
              alt="IT professionals working in a server room with blue lighting"
              className="w-full h-auto object-cover rounded-lg shadow-lg"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default MissionSection;