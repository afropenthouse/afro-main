"use client"

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { MdArrowOutward } from 'react-icons/md';

const StatsSection = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const statVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (custom) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: custom * 0.2,
        duration: 0.7,
        ease: "easeOut"
      }
    })
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
    <div className="w-full bg-gray-100 min-h-screen flex items-center">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 items-center">
          {/* Stats Column */}
          <div className="space-y-12 lg:pl-16">
            <motion.div
              className="space-y-2"
              variants={statVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={0}
            >
              <h2 className="text-6xl md:text-7xl font-bold text-gray-900">102+</h2>
              <p className="text-xl text-gray-600">Successful projects</p>
              <div className="w-full h-px bg-gray-300 mt-4"></div>
            </motion.div>

            <motion.div
              className="space-y-2"
              variants={statVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={1}
            >
              <h2 className="text-6xl md:text-7xl font-bold text-gray-900">15+</h2>
              <p className="text-xl text-gray-600">Team members</p>
              <div className="w-full h-px bg-gray-300 mt-4"></div>
            </motion.div>

            <motion.div
              className="space-y-2"
              variants={statVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={2}
            >
              <h2 className="text-6xl md:text-7xl font-bold text-gray-900">70+</h2>
              <p className="text-xl text-gray-600">Happy clients</p>
            </motion.div>
          </div>

          {/* Image Column */}
          <motion.div
            className="order-first md:order-none"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Image
              src="/statImage.svg"
              width={600}
              height={400}
              alt="Team collaboration"
              className="w-full h-auto object-cover rounded-lg shadow-lg"
            />
          </motion.div>

          {/* Text Content Column */}
          <motion.div
            className="space-y-6"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              The best combination of modernity & simplicity
            </h2>
            <p className="text-gray-700">
              At Afro Penthouse Technologies Limited, we do not just provide IT solutions—we provide game-changing partnerships. We understand that every organization is unique, and that is why we deliver tailored, cutting-edge technology designed to make your life easier, your operations smoother, and your success inevitable.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <motion.button
                className="bg-black text-white py-3 px-6 rounded-full flex items-center justify-center font-medium"
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
              >
                <a href="https://wa.me/2348034616759" target="_blank" rel="noopener noreferrer">Get In Touch</a><span className="ml-2"><MdArrowOutward /></span>
              </motion.button>
              <motion.button
                className="border border-gray-300 bg-white text-black py-3 px-6 rounded-full flex items-center justify-center font-medium"
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
              >
                <span className="mr-2">🎧</span> <a href="https://wa.me/2348034616759" target="_blank" rel="noopener noreferrer">Talk to our team</a>
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default StatsSection;