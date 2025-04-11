"use client"
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Loader2 } from 'lucide-react';
import { toast } from 'react-toastify';
import { accessTokenStore, isauthmodalopenStore } from '@/store';

const EmailSignupModal = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { setAccessToken } = accessTokenStore();
  const { setIsAuthModalOpen } = isauthmodalopenStore();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      const payload = { email };
      
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/web/web-register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });
  
      const data = await response.json();
      
      if (response.ok) {
        // Store the email as the access token as specified
        setAccessToken(data.data.email);
        setIsAuthModalOpen(false);
        toast.success("Email added successfully!");
      } else {
        toast.error(data.message || "Something went wrong");
      }
    } catch (error) {
      console.error("Email submission failed:", error.message);
      toast.error("Failed to submit email");
    } finally {
      setIsLoading(false);
    }
    
    // Reset form
    setEmail('');
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
           Want to see more spots?
            </h2>
            <p className="text-white text-opacity-80 mt-1">
              Sign up with your email to keep discovering new places to chill
            </p>
          </div>
          
          {/* Form */}
          <div className="p-6">
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Email field */}
              <div className="space-y-2">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Mail size={18} className="text-gray-400" />
                  </div>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-[#6b0f2b] focus:border-[#6b0f2b] sm:text-sm"
                    placeholder="your@email.com"
                    required
                  />
                </div>
              </div>
              
              {/* Submit button */}
              <motion.button
                type="submit"
                className="w-full flex items-center justify-center bg-[#6b0f2b] text-white py-2 px-4 rounded-md hover:bg-[#5a0c24] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#6b0f2b] transition-colors"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {isLoading ? <Loader2 className="animate-spin mr-2" /> : null}
               Discover More
              </motion.button>
            </form>
            
            {/* Privacy note */}
            {/* <div className="mt-4 text-center">
              <p className="text-xs text-gray-500">
                By subscribing, you agree to our privacy policy. We'll never share your email with anyone else.
              </p>
            </div> */}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default EmailSignupModal;