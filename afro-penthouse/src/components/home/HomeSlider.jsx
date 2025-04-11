"use client"

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const TrustedBy = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    }
  };

  const textVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const logoHoverVariants = {
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  };

  return (
    <motion.div 
      className="w-full bg-white py-12 md:py-16"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <motion.div 
            className="mb-6 md:mb-0"
            variants={textVariants}
            initial="hidden"
            animate="visible"
          >
            <h3 className="text-xl font-bold text-gray-800">Trusted by</h3>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-5 gap-8 md:gap-12 items-center w-full md:w-auto"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Digital Energy Logo */}
            <motion.div 
              className="flex justify-center"
              variants={itemVariants}
              whileHover="hover"
            //   variants={logoHoverVariants}
            >
              <Image 
                src="/digital.svg" 
                alt="Digital Energy" 
                width={140} 
                height={50} 
                className="h-auto object-contain"
              />
            </motion.div>
            
            {/* Pivot Logo */}
            <motion.div 
              className="flex justify-center"
              variants={itemVariants}
              whileHover="hover"
            //   variants={logoHoverVariants}
            >
              <Image 
                src="/pivot.svg" 
                alt="Pivot" 
                width={120} 
                height={50} 
                className="h-auto object-contain"
              />
            </motion.div>
            
            {/* Recode Logo */}
            <motion.div 
              className="flex justify-center"
              variants={itemVariants}
              whileHover="hover"
            //   variants={logoHoverVariants}
            >
              <Image 
                src="/recode.svg" 
                alt="Recode" 
                width={140} 
                height={50} 
                className="h-auto object-contain"
              />
            </motion.div>
            
            {/* iBeazy Logo */}
            <motion.div 
              className="flex justify-center"
              variants={itemVariants}
              whileHover="hover"
            //   variants={logoHoverVariants}
            >
              <Image 
                src="/vibe.svg" 
                alt="iBeazy" 
                width={120} 
                height={50} 
                className="h-auto object-contain"
              />
            </motion.div>
            
            {/* Cashwyre Logo */}
            <motion.div 
              className="flex justify-center"
              variants={itemVariants}
              whileHover="hover"
            //   variants={logoHoverVariants}
            >
              <Image 
                src="/cash.svg" 
                alt="Cashwyre" 
                width={140} 
                height={50} 
                className="h-auto object-contain"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default TrustedBy;