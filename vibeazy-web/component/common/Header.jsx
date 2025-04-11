"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import logo from "../../public/images/images/Hero/logo.png";
import Image from 'next/image';
import { accessTokenStore } from '@/store';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { accessToken } = accessTokenStore();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/download-app', label: 'Download App', hasDropdown: true },
  ];

  const handleNavClick = (link) => {
    if (link.hasDropdown) {
      return;
    }
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className="w-full bg-white py-4 px-4 md:px-6 lg:px-20">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <Link href="/">
            <Image src={logo} alt="logo" width={100} height={100} />
          </Link>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <div key={link.href} className="relative">
              {link.hasDropdown ? (
                <div className="relative">
                  <button 
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    className="text-black hover:text-[#6b0f2b] transition-colors flex items-center"
                  >
                    {link.label} <ChevronDown className="ml-1 h-4 w-4" />
                  </button>
                  {isDropdownOpen && (
                    <div className="absolute z-10 mt-2 w-48 bg-white rounded-md shadow-lg py-1">
                      <a href="https://apps.apple.com/ng/app/vibeazy/id6739540165" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">App Store</a>
                      <a href="https://play.google.com/store/apps/details?id=com.vibeazyflex.app" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Play Store</a>
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  href={link.href}
                  className="text-black hover:text-[#6b0f2b] transition-colors"
                  onClick={() => handleNavClick(link)}
                >
                  {link.label}
                </Link>
              )}
            </div>
          ))}
        </div>

        {/* Sign In and Sign Up Buttons */}
        
{/* {
  !accessToken && <div className="hidden md:flex items-center space-x-6">
  <Link href="/signin">
    <button className="border border-[#6b0f2b] text-[#6b0f2b] rounded-full px-6 py-2 font-medium hover:bg-[#6b0f2b] hover:text-white transition-colors">
      Sign In
    </button>
  </Link>
  <Link href="/signup">
    <button className="bg-[#6b0f2b] text-white rounded-full px-6 py-2 font-medium hover:bg-[#5a0c24] transition-colors">
      Sign Up
    </button>
  </Link>
</div>
} */}
        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={toggleMenu}
            className="text-black focus:outline-none"
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu with Framer Motion */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="md:hidden py-4 px-4 bg-white overflow-hidden"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <motion.div
              className="flex flex-col space-y-4"
              initial={{ y: -20 }}
              animate={{ y: 0 }}
              transition={{ staggerChildren: 0.1, delayChildren: 0.1 }}
            >
              {navLinks.map((link) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {link.hasDropdown ? (
                    <div>
                      <button
                        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                        className="font-medium block text-black hover:text-[#6b0f2b] w-full text-left flex items-center justify-between"
                      >
                        {link.label}
                        <ChevronDown className="h-4 w-4" />
                      </button>
                      <AnimatePresence>
                        {isDropdownOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="pl-4 mt-2 space-y-2"
                          >
                            <Link target="_blank"  href="https://apps.apple.com/ng/app/vibeazy/id6739540165" className="block py-2 text-gray-700 hover:text-[#6b0f2b]">
                              App Store
                            </Link>
                            <Link target="_blank" href="https://play.google.com/store/apps/details?id=com.vibeazyflex.app" className="block py-2 text-gray-700 hover:text-[#6b0f2b]">
                              Play Store
                            </Link>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link
                      href={link.href}
                      className="font-medium block text-black hover:text-[#6b0f2b]"
                      onClick={() => handleNavClick(link)}
                    >
                      {link.label}
                    </Link>
                  )}
                </motion.div>
              ))}

              {/* <motion.div
                className="pt-4 flex flex-col space-y-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                <motion.button
                  className="border border-[#6b0f2b] text-[#6b0f2b] rounded-full px-6 py-2 font-medium hover:bg-[#6b0f2b] hover:text-white transition-colors w-full mb-2"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  Sign In
                </motion.button>
                <motion.button
                  className="bg-[#6b0f2b] text-white rounded-full px-6 py-2 font-medium hover:bg-[#5a0c24] transition-colors w-full"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  Sign Up
                </motion.button>
              </motion.div> */}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Header;