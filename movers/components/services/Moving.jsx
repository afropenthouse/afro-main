"use client"
import React from 'react';
import Image from 'next/image';
import { BsArrowRight } from 'react-icons/bs';
import { motion } from 'framer-motion';
import useModalStore from '@/store/useModalStore'

const MovingServicesSection = () => {
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
  
  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { 
        type: "spring", 
        stiffness: 100, 
        damping: 12 
      }
    }
  };
  const { openModal } = useModalStore()
  return (
    <motion.section 
      className="w-full max-w-[1440px] mx-auto px-4 md:px-6 lg:px-20 py-12 md:py-16"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={containerVariants}
    >
      {/* Home Moving Section */}
      <motion.div 
        className="flex flex-col md:flex-row gap-8 mb-16 md:mb-20"
        variants={itemVariants}
      >
        {/* Text Content */}
        <div className="md:w-1/2 flex flex-col">
          <h2 className="text-2xl md:text-3xl font-medium text-black mb-4">Home Moving</h2>
          <p className="text-gray-700 mb-6">
            Need to move a refrigerator, couch, television, or another heavy item? If you 
            hire our Services, you could very well be preventing an incredible, life-altering 
            injury to yourself. Around 9.2 million Nigerians suffer new back injuries every 
            year, with many of these back pain sufferers waiting long and heavy items. 
            Unfortunately, many of these back pain sufferers will never experience a 
            complete recovery from their initial back injury, and that could mean lower 
            productivity at work, less mobility, and of course, more pain while simply doing
            the things they love.
          </p>
          <p className="text-gray-700 mb-8">
            For more information about getting the help of a local mover or for moving 
            quotes, contact us today. We proudly serve Lagos, Port Harcourt, Abuja, Warri 
            and other Nigerian cities.
          </p>
          <motion.button 
            className="bg-[#8B1D1D] text-white px-6 py-3 rounded-full flex items-center text-sm group w-fit mt-auto"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={openModal}
          >
            Book a Move
            <motion.span 
              className="ml-2 flex items-center"
              initial={{ x: 0 }}
              whileHover={{ x: 3 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <BsArrowRight />
            </motion.span>
          </motion.button>
        </div>
        
        {/* Image */}
        <motion.div 
          className="md:w-1/2 h-[250px] sm:h-[300px] md:h-auto"
          whileHover={{ scale: 1.02 }}
          transition={{ type: "tween", duration: 0.3 }}
        >
          <Image
            src="/home-service.png"
            alt="Mover carrying box with a smile"
            className="w-full h-full object-cover rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
            width={540}
            height={300}
          />
        </motion.div>
      </motion.div>

      {/* Business Moving Section */}
      <motion.div 
        className="flex flex-col md:flex-row gap-8 mb-16 md:mb-20"
        variants={itemVariants}
      >
        {/* Image */}
        <motion.div 
          className="md:w-1/2 order-2 md:order-1 h-[250px] sm:h-[300px] md:h-auto"
          whileHover={{ scale: 1.02 }}
          transition={{ type: "tween", duration: 0.3 }}
        >
          <Image
            src="/business-service.png"
            alt="Business mover with clipboard"
            className="w-full h-full object-cover rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
            width={540}
            height={300}
          />
        </motion.div>
        
        {/* Text Content */}
        <div className="md:w-1/2 order-1 md:order-2 flex flex-col">
          <h2 className="text-2xl md:text-3xl font-medium text-black mb-4">Business Moving</h2>
          <p className="text-gray-700 mb-6">
            Moving to a new office can be the start of an exciting chapter in a business's 
            journey, and choosing professional corporate movers to handle the relocation 
            can help ensure the move is a successful one.
          </p>
          <p className="text-gray-700 mb-6">
            At H & O MOVERS, we have experience in managing relocations for businesses 
            of all sizes, and our movers have the necessary skill and expertise to ensure 
            that your valuables safely arrive at their destination. Beyond our unsurpassed 
            knowledge and professionalism in handling corporate relocations, our movers 
            bring another valuable asset to the table, and that is their ability to coordinate 
            all different areas.
          </p>
          <p className="text-gray-700 mb-8">
            For more information about our corporate moving services, contact us today. 
            Our corporate movers are proud to serve businesses in Port Harcourt, Lagos, 
            Abuja, and beyond to the rest part of the world.
          </p>
          <motion.button 
            className="bg-[#8B1D1D] text-white px-6 py-3 rounded-full flex items-center text-sm group w-fit mt-auto"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={openModal}
          >
            Book a Move
            <motion.span 
              className="ml-2 flex items-center"
              initial={{ x: 0 }}
              whileHover={{ x: 3 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <BsArrowRight />
            </motion.span>
          </motion.button>
        </div>
      </motion.div>

      {/* International Relocation Section */}
      <motion.div 
        className="flex flex-col md:flex-row gap-8"
        variants={itemVariants}
      >
        {/* Text Content */}
        <div className="md:w-1/2 flex flex-col">
          <h2 className="text-2xl md:text-3xl font-medium text-black mb-4">International Relocation</h2>
          <p className="text-gray-700 mb-6">
            H & O MOVERS has been the residential moving company exceeding customer 
            expectations with professional, comprehensive household moving services 
            around the country and worldwide.
          </p>
          <p className="text-gray-700 mb-6">
            At our home moving company, we spare no detail in ensuring your household 
            moving experience is a complete success. One of our professional moving 
            coordinator will carry out an in-home survey so we can provide you with the 
            most accurate estimate for your move. And once we offer our no-exceed 
            estimates, you don't have to worry about any hidden charges on your final 
            invoice. It is all effort to provide an even smoother moving process. Our Whatt's 
            important to You? program allows you to inform us of any special requirements 
            you have of your household moving crew.
          </p>
          <motion.button 
            className="bg-[#8B1D1D] text-white px-6 py-3 rounded-full flex items-center text-sm group w-fit mt-auto"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={openModal}
          >
              Book a Move
            <motion.span 
              className="ml-2 flex items-center"
              initial={{ x: 0 }}
              whileHover={{ x: 3 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <BsArrowRight />
            </motion.span>
          </motion.button>
        </div>
        
        {/* Image */}
        <motion.div 
          className="md:w-1/2 h-[250px] sm:h-[300px] md:h-auto"
          whileHover={{ scale: 1.02 }}
          transition={{ type: "tween", duration: 0.3 }}
        >
          <Image
            src="/international-service.png"
            alt="International mover holding packages"
            className="w-full h-full object-cover rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
            width={540}
            height={300}
          />
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default MovingServicesSection;