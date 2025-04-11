"use client"
import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowRight } from 'lucide-react';

const VibeazyOtpModal = ({ isOpen, onClose, onVerify, email }) => {
  const [otp, setOtp] = useState(['', '', '', '']);
  const inputRefs = [useRef(), useRef(), useRef(), useRef()];
  
  // Reset OTP when modal opens
  useEffect(() => {
    if (isOpen) {
      setOtp(['', '', '', '']);
      // Focus the first input when modal opens
      setTimeout(() => {
        if (inputRefs[0].current) {
          inputRefs[0].current.focus();
        }
      }, 100);
    }
  }, [isOpen]);

  const handleChange = (index, value) => {
    // Only allow digits
    if (!/^\d*$/.test(value)) return;
    
    // Update the OTP array
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
    
    // Auto-focus next input if current input is filled
    if (value && index < 3) {
      inputRefs[index + 1].current.focus();
    }
  };

  const handleKeyDown = (index, e) => {
    // Move to previous input on backspace if current input is empty
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      inputRefs[index - 1].current.focus();
    }
    
    // Move to next input on right arrow
    if (e.key === 'ArrowRight' && index < 3) {
      inputRefs[index + 1].current.focus();
    }
    
    // Move to previous input on left arrow
    if (e.key === 'ArrowLeft' && index > 0) {
      inputRefs[index - 1].current.focus();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const otpValue = otp.join('');
    console.log('Submitted OTP:', otpValue);
    
    if (otpValue.length === 4) {
      if (onVerify) {
        onVerify(otpValue);
      }
    }
  };

  const handlePaste = (e) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData('text').trim();
    
    // Check if pasted content contains 4 digits
    if (/^\d{4}$/.test(pastedData)) {
      const digits = pastedData.split('');
      setOtp(digits);
      
      // Focus the last input
      inputRefs[3].current.focus();
    }
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 px-4">
        <motion.div 
          className="relative bg-white rounded-lg shadow-xl w-full max-w-md overflow-hidden"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.3 }}
        >
          {/* Header with burgundy background */}
          <div className="bg-[#6b0f2b] p-6 text-center">
            <h2 className="text-2xl font-bold text-white">
              Verify Your Email
            </h2>
            <p className="text-white text-opacity-80 mt-1">
              We've sent a 4-digit code to {email || "your email"}
            </p>
          </div>
          
          {/* Form */}
          <div className="p-6">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* OTP input fields */}
              <div className="flex justify-center space-x-3">
                {otp.map((digit, index) => (
                  <input
                    key={index}
                    ref={inputRefs[index]}
                    type="text"
                    maxLength={1}
                    value={digit}
                    onChange={(e) => handleChange(index, e.target.value)}
                    onKeyDown={(e) => handleKeyDown(index, e)}
                    onPaste={index === 0 ? handlePaste : undefined}
                    className="w-14 h-14 text-center text-2xl font-semibold border border-gray-300 rounded-md shadow-sm focus:ring-[#6b0f2b] focus:border-[#6b0f2b]"
                    required
                  />
                ))}
              </div>
              
              {/* Submit button */}
              <motion.button
                type="submit"
                disabled={otp.some(digit => digit === '')}
                className="w-full bg-[#6b0f2b] text-white py-2 px-4 rounded-md hover:bg-[#5a0c24] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#6b0f2b] transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Verify Code
                <ArrowRight size={18} className="ml-2" />
              </motion.button>
            </form>
            
            {/* Resend code link */}
            <div className="mt-6 text-center">
              <p className="text-sm text-gray-600">
                Didn't receive the code?
                <button
                  type="button"
                  className="ml-1 text-[#6b0f2b] hover:underline font-medium focus:outline-none"
                  onClick={() => console.log('Resend OTP requested')}
                >
                  Resend Code
                </button>
              </p>
            </div>
            
            {/* Back button */}
            <div className="mt-2 text-center">
              <button
                onClick={onClose}
                className="text-sm text-gray-500 hover:text-gray-700 focus:outline-none"
              >
                Back to login
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default VibeazyOtpModal;