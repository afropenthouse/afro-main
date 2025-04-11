"use client"

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { MdArrowOutward } from 'react-icons/md';
import Link from 'next/link';

const ServicesSection = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const serviceVariants = {
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
    <div className="w-full bg-white py-16 md:py-24 lg:px-10">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 md:mb-0"
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            A comprehensive set of<br />our services
          </motion.h2>

          <div className="flex flex-col sm:flex-row gap-4">
            <motion.button
              className="bg-black text-white py-3 px-6 rounded-full flex items-center justify-center font-medium"
              variants={buttonVariants}
              initial="initial"
              whileHover="hover"
              whileTap="tap"
            >
              <a href="https://wa.me/2348034616759" target="_blank" rel="noopener noreferrer">Get a quote</a> <span className="ml-2"><MdArrowOutward /></span>
            </motion.button>
            <motion.button
              className="border border-gray-300 bg-white text-black py-3 px-6 rounded-full flex items-center justify-center font-medium"
              variants={buttonVariants}
              initial="initial"
              whileHover="hover"
              whileTap="tap"
            >
              <Link href="/services">Browse all services</Link>
            </motion.button>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column + Middle Column (Services) combined in a 2-column grid */}
          <div className="lg:col-span-2">
            {/* IT Infrastructure */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 py-10 border-b border-gray-200">
              <motion.div
                variants={serviceVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={0}
              >
                <h3 className="text-2xl font-bold text-gray-900">IT Infrastructure</h3>
              </motion.div>

              <motion.div
                variants={serviceVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={0}
              >
                <p className="text-gray-700">
                  Cyber security, Workforce Management/Security Surveillance, Unified Communication & Collaboration, Employee Remote Monitoring Solution, Network Management Solution
                </p>
              </motion.div>
            </div>

            {/* Building mobile & Business Applications */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 py-10 border-b border-gray-200">
              <motion.div
                variants={serviceVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={1}
              >
                <h3 className="text-2xl font-bold text-gray-900">Building mobile &<br />Business Applications</h3>
              </motion.div>

              <motion.div
                variants={serviceVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={1}
              >
                <p className="text-gray-700">
                  Enterprise Resource Planning (ERP), Investment Portfolio Management, Customer Relationship Management (CRM), Human Resource Management, Document Management, Medical Software
                </p>
              </motion.div>
            </div>

            {/* Cloud Services */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 py-10 border-b border-gray-200">
              <motion.div
                variants={serviceVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={2}
              >
                <h3 className="text-2xl font-bold text-gray-900">Cloud Services</h3>
              </motion.div>

              <motion.div
                variants={serviceVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={2}
              >
                <p className="text-gray-700">
                  Microsoft Azure, Microsoft 365, Cloud Migration, Cloud Productivity Suite, Cloud Readiness Assessment. Transition smoothly to the cloud with our migration services
                </p>
              </motion.div>
            </div>
          </div>

          {/* Right Column - Image */}
          <motion.div
            className="h-full"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Image
              src="/computer.svg"
              width={500}
              height={700}
              alt="Person working on computer"
              className="w-full h-full object-cover rounded-lg"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;