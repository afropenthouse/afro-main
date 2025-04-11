"use client"
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Footer = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 50,
        damping: 10
      }
    }
  };

  const socialIconVariants = {
    hover: {
      scale: 1.2,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 10
      }
    }
  };

  return (
    <footer className="bg-[#701323] text-white">
      {/* Main Footer Content */}
      <motion.div 
        className="container mx-auto px-4 md:px-6 lg:px-20 py-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-6 lg:gap-8">
          {/* Logo and Tagline Column */}
          <motion.div className="flex flex-col items-center md:items-start" variants={itemVariants}>
            <div className="mb-4 text-center md:text-left">
              <Image
                src="/logo-white.png" 
                alt="H&O Movers"
                width={60}
                height={50}
                className="mb-4 mx-auto md:mx-0"
              />
              <p className="mt-3 text-sm md:text-base max-w-xs">
                H & O Movers: Moving You Forward with Care and Confidence
              </p>
            </div>
            <div className="flex space-x-6 mt-4 justify-center md:justify-start">
              <motion.a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="Facebook" 
                className="hover:opacity-80"
                variants={socialIconVariants}
                whileHover="hover"
              >
                <FaFacebookF size={20} />
              </motion.a>
              <motion.a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="Instagram" 
                className="hover:opacity-80"
                variants={socialIconVariants}
                whileHover="hover"
              >
                <FaInstagram size={20} />
              </motion.a>
              <motion.a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="Twitter" 
                className="hover:opacity-80"
                variants={socialIconVariants}
                whileHover="hover"
              >
                <FaTwitter size={20} />
              </motion.a>
            </div>
          </motion.div>

          {/* Company Column */}
          <motion.div className="text-center md:text-left" variants={itemVariants}>
            <h3 className="text-xl font-semibold mb-4">Company</h3>
            <ul className="space-y-3">
              <li><Link href="/services" className="hover:underline transition-all duration-200 inline-block">Services</Link></li>
              <li><Link href="/how-it-works" className="hover:underline transition-all duration-200 inline-block">How it Works</Link></li>
              
              <li><Link href="/how-it-works" className="hover:underline transition-all duration-200 inline-block">FAQ's</Link></li>
            </ul>
          </motion.div>

          {/* Services Column */}
          <motion.div className="text-center md:text-left" variants={itemVariants}>
            <h3 className="text-xl font-semibold mb-4">Services</h3>
            <ul className="space-y-3">
              <li><Link href="/services" className="hover:underline transition-all duration-200 inline-block">Home Moving</Link></li>
              <li><Link href="/services" className="hover:underline transition-all duration-200 inline-block">Business Moving</Link></li>
              <li><Link href="/services" className="hover:underline transition-all duration-200 inline-block">International    Moving</Link></li>
             
            </ul>
          </motion.div>

          {/* Contact Column */}
          <motion.div className="text-center md:text-left" variants={itemVariants}>
            <h3 className="text-xl font-semibold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start justify-center md:justify-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className="text-left">+234 808 050 9080, <br className="md:hidden" />+234 803 548 4882</span>
              </li>
              <li className="flex items-start justify-center md:justify-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>homeofficemovers@gmail.com</span>
              </li>
              <li className="flex items-start justify-center md:justify-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-left">Head Office: 19B Da Silva Street <br />Lekki Phase 1 Lagos, Nigeria</span>
              </li>
            </ul>
          </motion.div>
        </div>
      </motion.div>

      {/* Copyright Bar */}
      <div className="border-t border-white/20">
        <div className="container mx-auto px-4 md:px-6 lg:px-20 py-4 text-center">
          <p className="text-sm">Copyright © 2025 H & O Movers. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;