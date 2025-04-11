'use client';
import { useState } from 'react';
import { BiChevronDown, BiChevronUp } from 'react-icons/bi';
import { BsChevronDown, BsChevronUp } from 'react-icons/bs';

import { motion, AnimatePresence } from 'framer-motion';

export default function ToggleNav({ children, question }) {
  const [toggle, setToggle] = useState(false);
  function handleToggle() {
    setToggle(!toggle);
  }
  return (
    <motion.div className='w-full cursor-pointer mb-3'>
      <motion.div
        className='flex justify-between items-center'
        onClick={handleToggle}
        layout
      >
        <motion.p
          transition={{ ease: 'easeOut', duration: 5 }}
          className='text-base font-normal text-[#1F2937] '
          layout
        >
          {question}
        </motion.p>
        {toggle ? (
          <BiChevronUp className=' text-3xl text-black' />
        ) : (
          <BiChevronDown className='text-3xl text-black' />
        )}
      </motion.div>
      <AnimatePresence>
        {toggle && (
          <motion.div
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ ease: 'easeOut', duration: 0.5 }}
            layout
            className='text-[#475569]'
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
