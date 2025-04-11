"use client"

import React from 'react';
import { motion } from 'framer-motion';

const FAQSection = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const questions = [
    {
      id: '01',
      question: 'How many years of experience does Afro-penthouse have?',
      answer: 'While Afro-Penthouse has been in the industry for two years, weve made an incredible impact in that time. Our team combines fresh, innovative ideas with a strong passion for delivering top-quality results. Were focused on growth, learning, and providing the best possible service to our clients'
    },
    {
      id: '02',
      question: 'Does Afro-penthouse have a project minimum?',
      answer: 'At Afro-Penthouse, we believe every client is unique, which is why we don’t offer one-size-fits-all solutions. Our services are customized to fit your specific needs, with no strict project minimum. Whether it’s a small-scale initiative or a large-scale endeavour, we’re here to turn your vision into reality.'
    },
    {
      id: '03',
      question: 'Do you offer support after the project is completed?',
      answer: 'Absolutely! At Afro-Penthouse, we believe in building lasting relationships with our clients. We offer ongoing support even after project completion to ensure everything runs smoothly and you are completely satisfied with the results.'
    },
    {
      id: '04',
      question: 'Where can i locate your office or workspace?',
      answer: 'Our office is located at Tapa House,3/5, Imam Dauda Street, Off Eric Moore Road, Surulere, Lagos. Feel free to stop by during business hours, or reach out to schedule a meeting with our team'
    }
  ];

  return (
    <div className="w-full bg-white py-16 md:py-24 border border-gray-100">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.2
              }
            }
          }}
        >
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-3"
            variants={fadeIn}
          >
            Frequently asked questions
          </motion.h2>
          
          <motion.p 
            className="text-gray-600 max-w-2xl mx-auto"
            variants={fadeIn}
          >
            Got questions? We've got answers! Here are some of the most common inquiries. If you need more help, don't hesitate to reach out.
          </motion.p>
        </motion.div>
        
        <div className="max-w-4xl mx-auto">
          {questions.map((item, index) => (
            <motion.div 
              key={item.id}
              className={`grid grid-cols-1 md:grid-cols-4 gap-4 py-8 ${
                index !== questions.length - 1 ? 'border-b border-gray-200' : ''
              }`}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    delay: index * 0.1
                  }
                }
              }}
            >
              <div className="md:col-span-1">
                <div className="text-gray-500 font-mono">{item.id}</div>
                <h3 className="text-lg font-bold text-gray-900 mt-2">{item.question}</h3>
              </div>
              
              <div className="md:col-span-3">
                <p className="text-gray-700">{item.answer}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQSection;