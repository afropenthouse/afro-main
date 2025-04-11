"use client"
import React from 'react';
import { BsArrowRight } from 'react-icons/bs';
import Image from 'next/image';
import { motion } from 'framer-motion';
import useModalStore from '@/store/useModalStore'
import Link from 'next/link'
const HowItWorks = () => {
  const { openModal } = useModalStore()
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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
        stiffness: 100,
        damping: 12
      }
    }
  };

  const buttonVariants = {
    hover: { 
      scale: 1.03,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    },
    tap: { scale: 0.97 }
  };

  const arrowVariants = {
    hover: { 
      x: 5,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    }
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delay: 0.4,
        duration: 0.5
      }
    },
    hover: {
      scale: 1.02,
      transition: {
        type: "spring",
        stiffness: 150,
        damping: 15
      }
    }
  };

  const stepHoverVariants = {
    hover: {
      x: 5,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 15
      }
    }
  };

  return (
    <motion.section 
      className="w-full max-w-[1440px] mx-auto px-4 md:px-6 lg:px-20 py-12 md:py-16"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={containerVariants}
    >
      {/* Header Section */}
      <motion.div 
        className="flex flex-col md:flex-row justify-between items-center mb-10 md:mb-12"
        variants={itemVariants}
      >
        <h2 className="text-3xl md:text-[32px] font-medium text-black mb-6 md:mb-0">How it works</h2>
        <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 w-full sm:w-auto">
          <motion.button 
            className="bg-[#8B1D1D] text-white px-6 py-2.5 rounded-full flex items-center justify-center w-full sm:w-auto"
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
            onClick={openModal}
          >
            Get Started 
            <motion.span 
              className="ml-2 flex items-center" 
              variants={arrowVariants}
            >
              <BsArrowRight />
            </motion.span>
          </motion.button>
          <motion.button 
            className="text-black border border-black px-6 py-2.5 rounded-full w-full sm:w-auto text-center"
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
          >
            <Link href="/services">Browse all services</Link>
          </motion.button>
        </div>
      </motion.div>

      {/* Content Section */}
      <div className="flex flex-col lg:flex-row justify-between gap-8 md:gap-12">
        {/* Left Content - Steps */}
        <motion.div className="lg:w-1/2" variants={itemVariants}>
          {/* Step 1 */}
          <motion.div 
            className="border-b border-gray-200 pb-8 md:pb-12 mb-8 md:mb-12"
            variants={itemVariants}
            whileHover="hover"
          >
            <motion.h3 
              className="text-xl font-medium mb-4"
              variants={stepHoverVariants}
            >
              Plan Your Move
            </motion.h3>
            <p className="text-gray-600 leading-relaxed">
              Start by contacting H & O Movers to discuss your upcoming move. 
              Whether you're moving locally, across the country, or internationally, we'll 
              help you create a personalized moving plan tailored to your needs. We'll 
              go over your timeline, budget, and any special requirements.
            </p>
          </motion.div>

          {/* Step 2 */}
          <motion.div 
            className="border-b border-gray-200 pb-8 md:pb-12 mb-8 md:mb-12"
            variants={itemVariants}
            whileHover="hover"
          >
            <motion.h3 
              className="text-xl font-medium mb-4"
              variants={stepHoverVariants}
            >
              Confirm Your Booking
            </motion.h3>
            <p className="text-gray-600 leading-relaxed">
              After reviewing the estimate, confirm your booking by choosing the 
              services you need and finalizing your move date. Our team will prepare 
              everything to ensure your move is scheduled and ready to go. We'll help 
              you prepare by providing useful tips and checklists for a smooth move.
            </p>
          </motion.div>

          {/* Step 3 */}
          <motion.div 
            variants={itemVariants}
            whileHover="hover"
          >
            <motion.h3 
              className="text-xl font-medium mb-4"
              variants={stepHoverVariants}
            >
              Delivery and Unpacking
            </motion.h3>
            <p className="text-gray-600 leading-relaxed">
              Upon arrival at your new location, we'll unload and unpack your items 
              with the same level of care. Also assist with setting up furniture, 
              electronics, and appliances, making sure everything is in its proper place. 
              For international moves, we'll ensure your items go through customs and 
              are delivered safely to your new home.
            </p>
          </motion.div>
        </motion.div>

        {/* Right Image */}
        <motion.div 
          className="lg:w-1/2 h-auto mt-8 lg:mt-0"
          variants={imageVariants}
          whileHover="hover"
        >
          <Image
            src="/delivery-guy.png"
            alt="Delivery man smiling while holding packages"
            className="w-full h-full object-cover rounded-lg shadow-md"
            width={472}
            height={620}
          />
        </motion.div>
      </div>
    </motion.section>
  );
};

export default HowItWorks;