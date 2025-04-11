"use client"

import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
  };

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="w-full relative">
      <div className="bg-black text-white py-16 md:py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            {/* Left column - Heading, text */}
            <div className="space-y-8">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={staggerContainer}
                className="space-y-4"
              >
                <motion.h2 
                  className="text-4xl md:text-5xl font-bold"
                  variants={fadeIn}
                >
                  Let's work together
                </motion.h2>
                
                <motion.p 
                  className="text-gray-300"
                  variants={fadeIn}
                >
                  We believe in building lasting partnerships and are excited to learn how we can support your goals. Drop us a message and let's start the conversation today
                </motion.p>
              </motion.div>
              
              {/* Image positioned to overflow the black background */}
              <div className="relative">
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  <Image 
                    src="/contact.svg" 
                    width={600} 
                    height={400} 
                    alt="IT professional with headset looking at code on monitors"
                    className="w-full h-auto rounded-lg"
                  />
                </motion.div>
              </div>
            </div>
            
            {/* Right column - Form */}
            <motion.form 
              onSubmit={handleSubmit}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="space-y-6 lg:pt-12"
            >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <motion.div variants={fadeIn}>
                <label className="block text-sm font-medium mb-2">Full name</label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  // placeholder="Enter your full name"
                  className="w-full bg-transparent border-b border-gray-600 py-2 px-1 focus:outline-none focus:border-white text-white placeholder:text-[#FFFFFFCC]"
                />
              </motion.div>
              
              <motion.div variants={fadeIn}>
                <label className="block text-sm font-medium mb-2">Email address</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  // placeholder="Enter your email address"
                  className="w-full bg-transparent border-b border-gray-600 py-2 px-1 focus:outline-none focus:border-white text-white placeholder:text-[#FFFFFFCC]"
                />
              </motion.div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <motion.div variants={fadeIn}>
                <label className="block text-sm font-medium mb-2">Phone number</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  // placeholder="Enter your phone number"
                  className="w-full bg-transparent border-b border-gray-600 py-2 px-1 focus:outline-none focus:border-white text-white placeholder:text-[#FFFFFFCC]"
                />
              </motion.div>
              
              <motion.div variants={fadeIn}>
                <label className="block text-sm font-medium mb-2">Service</label>
                <input
                  type="text"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  // placeholder="Enter the service you're interested in"
                  className="w-full bg-transparent border-b border-gray-600 py-2 px-1 focus:outline-none focus:border-white text-white placeholder:text-[#FFFFFFCC]"
                />
              </motion.div>
            </div>
            
            <motion.div variants={fadeIn}>
              <label className="block text-sm font-medium mb-2">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                // placeholder="Tell us more about your project"
                rows={3}
                className="w-full bg-transparent border-b border-gray-600 py-2 px-1 focus:outline-none focus:border-white text-white placeholder:text-[#FFFFFFCC] resize-none"
              />
            </motion.div>
            
            <motion.div 
              variants={fadeIn}
              className="pt-4"
            >
              <motion.button
                type="submit"
                className="bg-white text-black py-3 px-6 rounded-full flex items-center justify-center font-medium"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Send message <span className="ml-2">→</span>
              </motion.button>
            </motion.div>
          </motion.form>
        </div>
      </div>
    </div>
    </div>
  );
};

export default ContactForm;