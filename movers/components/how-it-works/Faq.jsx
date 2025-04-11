"use client"
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const FAQ = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  const faqs = [
    {
      number: "01",
      question: "How many years of experience does H & O Movers have?",
      answer: "While H & O Movers has been in the moving industry for several years, we've quickly established ourselves as a trusted name in the business. Our team combines innovative solutions with a commitment to delivering top-notch service. We're dedicated to growth, continuous improvement, and ensuring the best possible experience for every client."
    },
    {
      number: "02",
      question: "How far in advance should I schedule my move?",
      answer: "We recommend booking your move at least 2-4 weeks ahead of time, especially during peak moving seasons like summer or holidays. However, if you're in a time crunch, we can often accommodate last-minute moves depending on our availability. It's always best to book as early as possible to secure your preferred moving date."
    },
    {
      number: "03",
      question: "Can you move large or fragile items?",
      answer: "Definitely! We specialize in handling large and fragile items with care. Our team is trained to move heavy furniture, pianos, fine art, antiques, and more delicate items. We use specialized packing materials and equipment, ensuring that even the most fragile or oversized items arrive safely at your new location."
    },
    {
      number: "04",
      question: "How can I track my shipment during an international move?",
      answer: "For international relocations, we offer real-time tracking so you can monitor your shipment's progress. We keep you updated throughout the entire journey, from departure to arrival. You'll be able to track where your belongings are in transit, and you'll be informed of any customs clearance processes, so you're always in the loop."
    }
  ];

  // Animation variants
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

  const headerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
        delay: 0.1
      }
    }
  };

  return (
    <motion.div 
      className="w-full py-12 px-4 md:px-8 lg:px-16 bg-white"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={containerVariants}
    >
      {/* FAQ Header */}
      <motion.div 
        className="text-center mb-12"
        variants={headerVariants}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently asked questions</h2>
        <p className="text-gray-700 max-w-3xl mx-auto px-4">
          Got questions? We've got answers! Here are some of the most common
          inquiries. If you need more help, don't hesitate to reach out.
        </p>
      </motion.div>

      {/* FAQ Items */}
      <div className="max-w-6xl mx-auto">
        {faqs.map((faq, index) => (
          <motion.div 
            key={index}
            className={`border-b border-gray-200 py-8 ${
              index === expandedIndex ? 'bg-gray-50 rounded-lg' : ''
            } transition-colors duration-300`}
            variants={itemVariants}
          >
            <div 
              className="flex flex-col md:flex-row gap-4 px-4"
              onClick={() => toggleExpand(index)}
            >
              <motion.div 
                className="md:w-1/3 mb-4 md:mb-0 cursor-pointer"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <div className="flex items-start">
                  <span className="text-gray-500 mr-3 text-lg">{faq.number}</span>
                  <h3 className="text-xl font-medium">
                    {faq.question}
                  </h3>
                </div>
              </motion.div>
              <motion.div 
                className="md:w-2/3"
                initial={{ opacity: 0.9 }}
                whileHover={{ opacity: 1 }}
              >
                <p className="text-gray-700">
                  {faq.answer}
                </p>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default FAQ;