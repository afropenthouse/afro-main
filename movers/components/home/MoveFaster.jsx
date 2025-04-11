'use client'
import React from 'react'
import Image from 'next/image'
import { BsArrowRight } from 'react-icons/bs'
import { motion } from 'framer-motion'
import useModalStore from '@/store/useModalStore'

const MoveFaster = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const imageContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const mainImageVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 60,
        damping: 12
      }
    }
  };

  const overlayImageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
        delay: 0.3
      }
    }
  };

  const contentVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 60,
        damping: 12
      }
    }
  };
  const { openModal } = useModalStore()

  return (
    <motion.section 
      className="w-full py-16 sm:py-20 bg-white overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={containerVariants}
    >
      <div className="container mx-auto px-4 flex flex-col items-center">
        {/* Images and Content Container */}
        <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-7xl">
          {/* Left Images */}
          <motion.div 
            className="md:w-1/4 relative mt-10 md:mt-0"
            variants={imageContainerVariants}
          >
            <div className="relative w-[240px] h-[370px]">
              <motion.div 
                className="absolute z-10 bottom-0 left-0 w-[200px] h-[260px] shadow-lg"
                variants={mainImageVariants}
                whileHover={{ 
                  scale: 1.03,
                  transition: { duration: 0.3 }
                }}
              >
                <Image
                  src="/happy-guy1.jpeg"
                  alt="Mover with clipboard"
                  fill
                  className="object-cover rounded-lg"
                />
              </motion.div>
              <motion.div 
                className="absolute top-0 right-[-10px] w-[170px] h-[160px] shadow-lg"
                variants={overlayImageVariants}
                whileHover={{ 
                  rotate: 3,
                  scale: 1.05,
                  transition: { 
                    type: "spring", 
                    stiffness: 300,
                    damping: 10 
                  }
                }}
              >
                <Image
                  src="/overlay1.jpeg"
                  alt="Movers carrying boxes"
                  fill
                  className="object-cover rounded-lg border-white border-8"
                />
              </motion.div>
            </div>
          </motion.div>
          
          {/* Center Content */}
          <motion.div 
            className="md:w-2/4 text-center px-4 my-12 md:my-0"
            variants={contentVariants}
          >
            <h2 className="text-3xl md:text-4xl font-medium mb-6">
              Making Moves Smarter, <br />Faster, and Safer!
            </h2>
            <p className="text-gray-700 mb-10">
              Move with confidence knowing your belongings are in trusted hands. With over 10 years of experience, we bring professionalism, care, and attention to every move, ensuring your items are handled with the utmost respect and expertise.
            </p>
            <motion.button 
              className="bg-[#701323] text-white px-6 py-3 rounded-full flex items-center mx-auto shadow-md"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 10px 15px -3px rgba(112, 19, 35, 0.2), 0 4px 6px -2px rgba(112, 19, 35, 0.1)"
              }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 15 }}
              onClick={openModal}
            >
              Send a Quote 
              <motion.span
                className="ml-2 flex items-center"
                initial={{ x: 0 }}
                whileHover={{ x: 3 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <BsArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
              </motion.span>
            </motion.button>
          </motion.div>
          
          {/* Right Images */}
          <motion.div 
            className="md:w-1/4 relative"
            variants={imageContainerVariants}
          >
            <div className="relative w-[240px] h-[370px]">
              <motion.div 
                className="absolute z-10 top-0 right-0 w-[200px] h-[260px] shadow-lg"
                variants={mainImageVariants}
                whileHover={{ 
                  scale: 1.03,
                  transition: { duration: 0.3 }
                }}
              >
                <Image
                  src="/happy-guy2.png"
                  alt="Smiling mover with device"
                  fill
                  className="object-cover rounded-lg"
                />
              </motion.div>
              <motion.div 
                className="absolute bottom-0 left-0 w-[170px] h-[160px] rounded-lg shadow-lg"
                variants={overlayImageVariants}
                whileHover={{ 
                  rotate: -3,
                  scale: 1.05,
                  transition: { 
                    type: "spring", 
                    stiffness: 300,
                    damping: 10 
                  }
                }}
              >
                <Image
                  src="/overlay2.jpeg"
                  alt="Mover with package"
                  fill
                  className="object-cover rounded-lg border-white border-8"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
}

export default MoveFaster