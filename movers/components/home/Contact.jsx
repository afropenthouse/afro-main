'use client'
import React, { useState } from 'react'
import { BsTelephone } from 'react-icons/bs'
import { MdOutlineEmail } from 'react-icons/md'
import { BiSupport } from 'react-icons/bi'
import { motion } from 'framer-motion'

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [focusedField, setFocusedField] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
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
        stiffness: 80,
        damping: 12
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 60,
        damping: 14
      }
    },
    hover: {
      y: -5,
      boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.05)",
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 15
      }
    }
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
        delay: 0.3
      }
    },
    hover: {
      scale: 1.03,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    },
    tap: {
      scale: 0.97
    }
  };

  return (
    <motion.section 
      className="w-full py-16 bg-white overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={containerVariants}
      id="contact"
    >
      <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-10"
          variants={itemVariants}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Contact Us</h2>
          <p className="text-gray-700 max-w-3xl mx-auto">
            Need H & O Movers in your area? Let us know, and we'll make it a priority to bring 
            our moving services to you quickly and efficiently!
          </p>
        </motion.div>

        <div className="flex flex-col md:flex-row gap-6 md:gap-8">
          {/* Left side contact info */}
          <div className="md:w-1/3 space-y-6">
            {/* Chat with support */}
            <motion.div 
              className="bg-[#701323] text-white p-6 rounded-lg shadow-md"
              variants={cardVariants}
              whileHover="hover"
            >
              <div className="flex items-center mb-4">
                <motion.div 
                  className="w-10 h-10 bg-white rounded-full flex items-center justify-center mr-3"
                  whileHover={{ rotate: 15, scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300, damping: 10 }}
                >
                  <BiSupport className="text-[#701323] text-xl" />
                </motion.div>
                <span className="text-lg">Chat with support</span>
              </div>

              <h3 className="text-2xl font-bold mb-8">+234 201 453 6157</h3>

              <motion.button 
                className="w-full bg-white text-[#701323] py-3 rounded-lg font-medium"
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
              >
                Contact Us
              </motion.button>
            </motion.div>

            {/* Send us email */}
            <motion.div 
              className="bg-[#FFF1F1] p-6 rounded-lg shadow-md"
              variants={cardVariants}
              whileHover="hover"
            >
              <div className="flex items-center mb-4">
                <motion.div 
                  className="w-10 h-10 bg-white rounded-full flex items-center justify-center mr-3 border border-gray-200"
                  whileHover={{ rotate: -15, scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300, damping: 10 }}
                >
                  <MdOutlineEmail className="text-[#701323] text-xl" />
                </motion.div>
                <span className="text-lg">Send us email</span>
              </div>

              <h3 className="text-xl font-bold text-[#701323] mb-8">
                homeofficemovers@gmail.com
              </h3>

              <motion.button 
                className="w-full bg-white text-[#701323] py-3 rounded-lg font-medium border border-gray-200"
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
              >
                Contact Us
              </motion.button>
            </motion.div>
          </div>

          {/* Right side contact form */}
          <motion.div 
            className="md:w-2/3 bg-white rounded-lg border border-gray-200 p-6 shadow-sm"
            variants={itemVariants}
          >
            <form onSubmit={handleSubmit}>
              {/* Name Input */}
              <div className="mb-4">
                <div className="relative">
                  <motion.div 
                    className="absolute inset-y-0 left-3 flex items-center pointer-events-none text-gray-400"
                    animate={focusedField === 'name' ? { color: '#701323' } : {}}
                  >
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10 10C11.0609 10 12.0783 9.57857 12.8284 8.82843C13.5786 8.07828 14 7.06087 14 6C14 4.93913 13.5786 3.92172 12.8284 3.17157C12.0783 2.42143 11.0609 2 10 2C8.93913 2 7.92172 2.42143 7.17157 3.17157C6.42143 3.92172 6 4.93913 6 6C6 7.06087 6.42143 8.07828 7.17157 8.82843C7.92172 9.57857 8.93913 10 10 10ZM10 12C6.685 12 4 14.685 4 18H16C16 14.685 13.315 12 10 12Z" fill="currentColor"/>
                    </svg>
                  </motion.div>
                  <motion.input 
                    type="text" 
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('name')}
                    onBlur={() => setFocusedField(null)}
                    placeholder="Name" 
                    className="w-full rounded-lg border border-gray-200 py-3 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-[#701323]/20 focus:border-[#701323] transition-all"
                    whileFocus={{ scale: 1.01 }}
                    initial={{ scale: 1 }}
                  />
                </div>
              </div>

              {/* Email and Phone Row */}
              <div className="flex flex-col md:flex-row gap-4 mb-4">
                <div className="relative md:w-1/2">
                  <motion.div 
                    className="absolute inset-y-0 left-3 flex items-center pointer-events-none text-gray-400"
                    animate={focusedField === 'email' ? { color: '#701323' } : {}}
                  >
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M17.5 3.33337H2.5C1.57953 3.33337 0.833332 4.07957 0.833332 5.00004V15C0.833332 15.9205 1.57953 16.6667 2.5 16.6667H17.5C18.4205 16.6667 19.1667 15.9205 19.1667 15V5.00004C19.1667 4.07957 18.4205 3.33337 17.5 3.33337Z" stroke="currentColor" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M0.833332 5.00004L10 10.8334L19.1667 5.00004" stroke="currentColor" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </motion.div>
                  <motion.input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('email')}
                    onBlur={() => setFocusedField(null)}
                    placeholder="Email Address" 
                    className="w-full rounded-lg border border-gray-200 py-3 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-[#701323]/20 focus:border-[#701323] transition-all"
                    whileFocus={{ scale: 1.01 }}
                    initial={{ scale: 1 }}
                  />
                </div>

                <div className="relative md:w-1/2">
                  <motion.div 
                    className="absolute inset-y-0 left-3 flex items-center pointer-events-none text-gray-400"
                    animate={focusedField === 'phone' ? { color: '#701323' } : {}}
                  >
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M17.5 13.9583V16.4583C17.5 16.7318 17.3903 16.9941 17.1949 17.1895C16.9995 17.3849 16.7372 17.4945 16.4637 17.4945C13.8791 17.2555 11.4017 16.3581 9.2592 14.8943C7.27822 13.5659 5.64566 11.9334 4.31732 9.95239C2.85 7.80164 1.95218 5.32145 1.71674 2.73362C1.71669 2.60161 1.74123 2.47087 1.78913 2.34886C1.83704 2.22684 1.90741 2.11613 1.99675 2.02236C2.08609 1.92859 2.19337 1.85312 2.31302 1.7996C2.43267 1.74608 2.56205 1.7154 2.6942 1.71503H5.1942C5.67995 1.71022 6.09563 2.04065 6.1775 2.51681C6.29733 3.28801 6.49957 4.04235 6.78015 4.76701C6.92382 5.12724 6.83224 5.53775 6.55107 5.82181L5.53461 6.83826C6.77563 8.91071 8.42555 10.5606 10.498 11.8016L11.5145 10.7852C11.7985 10.504 12.209 10.4124 12.5692 10.5561C13.2939 10.8367 14.0483 11.0389 14.8195 11.1587C15.3033 11.2419 15.6354 11.6687 15.6175 12.1603L17.5 13.9583Z" stroke="currentColor" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </motion.div>
                  <motion.input 
                    type="tel" 
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('phone')}
                    onBlur={() => setFocusedField(null)}
                    placeholder="Phone Number" 
                    className="w-full rounded-lg border border-gray-200 py-3 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-[#701323]/20 focus:border-[#701323] transition-all"
                    whileFocus={{ scale: 1.01 }}
                    initial={{ scale: 1 }}
                  />
                </div>
              </div>

              {/* Message Text Area */}
              <div className="mb-6">
                <motion.textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('message')}
                  onBlur={() => setFocusedField(null)}
                  placeholder="Message Here..." 
                  rows="6" 
                  className="w-full rounded-lg border border-gray-200 py-3 px-4 focus:outline-none focus:ring-2 focus:ring-[#701323]/20 focus:border-[#701323] transition-all"
                  whileFocus={{ scale: 1.01 }}
                  initial={{ scale: 1 }}
                ></motion.textarea>
              </div>

              {/* Submit Button */}
              <motion.button 
                type="submit" 
                className="w-full bg-[#FFF1F1] text-[#701323] py-4 rounded-lg font-medium hover:bg-[#FFE5E5] transition-colors shadow-sm"
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
              >
                Submit
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
}

export default ContactUs