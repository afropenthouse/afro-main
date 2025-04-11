"use client"

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const OfficeLocations = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <div className="w-full mt-16">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* Left Column - Office Image */}
        <div className="flex items-center justify-center lg:justify-end relative h-[420px] lg:h-auto bg-white">
          <div className="w-full lg:w-[90%] h-full p-4 lg:p-0">
            <motion.div
              className="w-full h-full relative"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Image
                src="/location.svg"
                fill
                alt="Modern office space with computers and plants"
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>

        {/* Right Column - Office Locations */}
        <div className="bg-gray-50 p-8 lg:p-16">
          <div className="space-y-12">
            {/* Head Office */}
            <motion.div
              className="space-y-4"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.1
                  }
                }
              }}
            >
              <motion.h3
                className="text-2xl font-bold text-gray-900"
                variants={fadeIn}
              >
                Our Offices
              </motion.h3>

              <motion.p
                className="text-gray-700"
                variants={fadeIn}
              >
                Tapa House 3/5, Imam Dauda Street, Off Eric Moore Road, Surulere, Lagos State, Nigeria
              </motion.p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4 border-t border-gray-200">
                <motion.div variants={fadeIn}>
                  <h4 className="text-sm font-medium text-gray-500 mb-1">Phone number</h4>
                  <p className="text-gray-700">+234 803 461 6759</p>
                  <p className="text-gray-700">+234 810 478 6490</p>
                </motion.div>

                <motion.div variants={fadeIn}>
                  <h4 className="text-sm font-medium text-gray-500 mb-1">Email address</h4>
                  <p className="text-gray-700">info@afropenthouse.com</p>
                </motion.div>
              </div>
            </motion.div>

            {/* Chevron Office */}
            <motion.div
              className="space-y-4"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.1
                  }
                }
              }}
            >
              <motion.h3
                className="text-2xl font-bold text-gray-900"
                variants={fadeIn}
              >
                Chevron Office
              </motion.h3>

              <motion.p
                className="text-gray-700"
                variants={fadeIn}
              >
                House 8, Dr. Chimezie Street, Chevy View Estate, along Chevron drive, off Lekki- Epe expressway, Lagos.
              </motion.p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4 border-t border-gray-200">
                <motion.div variants={fadeIn}>
                  <h4 className="text-sm font-medium text-gray-500 mb-1">Phone number</h4>
                  <p className="text-gray-700">+2347086078838</p>
                  <p className="text-gray-700">+2347077525861</p>
                </motion.div>

                <motion.div variants={fadeIn}>
                  <h4 className="text-sm font-medium text-gray-500 mb-1">Email address</h4>
                  <p className="text-gray-700">info@afropenthouse.com</p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OfficeLocations;