"use client";
import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { X } from "lucide-react"; // Import the X icon from lucide-react

const Navbar = () => {
  const [isCompanyOpen, setIsCompanyOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const companyRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);

  const companyItems = [
    { name: "About", link: "/company/about" },
    { name: "Mission, Vision & Values", link: "/company/mission-vision-values" },
    { name: "Board of Directors", link: "/company/board" },
    { name: "Management Team", link: "/company/management" },
  ];

  const serviceItems = [
    { name: "Fabrication & Construction", link: "/services/fabrication-and-construction" },
    { name: "Procurement Services", link: "/services/procurement-services" },
    { name: "Engineering Solutions", link: "/services/engineering-solutions" },
    { name: "IT Solutions", link: "/services/it-solutions" },
    { name: "Maintenance Solutions", link: "/services/maintenance-solutions" },
    { name: "Commissioning Solutions", link: "/services/commissioning-solutions" },
    { name: "Project Management", link: "/services/project-management" },
    { name: "Operations Solutions", link: "/services/operations-solutions" },
  ];

  // Handle clicks outside of dropdowns
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (companyRef.current && !companyRef.current.contains(event.target as Node)) {
        setIsCompanyOpen(false);
      }
      if (servicesRef.current && !servicesRef.current.contains(event.target as Node)) {
        setIsServicesOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const MobileMenuButton = () => (
    <button
      onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      className="lg:hidden p-2 focus:outline-none"
    >
      <div className="w-6 h-5 relative flex flex-col justify-between">
        <span
          className={`w-full h-0.5 bg-gray-800 transform transition-all duration-300 ${isMobileMenuOpen ? "rotate-45 translate-y-2" : ""
            }`}
        />
        <span
          className={`w-full h-0.5 bg-gray-800 transition-all duration-300 ${isMobileMenuOpen ? "opacity-0" : ""
            }`}
        />
        <span
          className={`w-full h-0.5 bg-gray-800 transform transition-all duration-300 ${isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
        />
      </div>
    </button>
  );

  const DropdownArrow = ({ isOpen }: { isOpen: boolean }) => (
    <motion.svg
      className="ml-1 w-4 h-4"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      initial={{ rotate: 0 }}
      animate={{ rotate: isOpen ? 180 : 0 }}
      transition={{ duration: 0.3 }}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M19 9l-7 7-7-7"
      />
    </motion.svg>
  );

  return (
    <nav className="h-20 w-full flex justify-center items-center bg-white shadow-md relative z-50">
      <div className="w-full px-4 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link
            href="/"
          >
            <Image
              src="/images/Digital Energy Logo Design 1.png"
              alt="Digital Energy Logo"
              width={115}
              height={44}
              className="h-11 w-auto object-contain"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link href="/" className="hover:text-gray-900">
              Home
            </Link>

            {/* Company Dropdown */}
            <div className="relative" ref={companyRef}>
              <button
                className="hover:text-gray-900 flex items-center"
                onClick={(e) => {
                  e.stopPropagation();
                  setIsCompanyOpen(!isCompanyOpen);
                  setIsServicesOpen(false); // Close other dropdown
                }}
              >
                Company
                <DropdownArrow isOpen={isCompanyOpen} />
              </button>

              <AnimatePresence>
                {isCompanyOpen && (
                  <motion.div
                    className="absolute left-0 mt-2 w-64 bg-white rounded-lg shadow-lg py-2 z-50"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                  >
                    {companyItems.map((item, index) => (
                      <Link
                        key={index}
                        href={item.link}
                        className="block px-4 py-2 text-gray-600 hover:bg-gray-100"
                        onClick={(() => {
                          setIsCompanyOpen(false)
                        })}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Services Dropdown */}
            <div className="relative" ref={servicesRef}>
              <button
                className="hover:text-gray-900 flex items-center"
                onClick={(e) => {
                  e.stopPropagation();
                  setIsServicesOpen(!isServicesOpen);
                  setIsCompanyOpen(false); // Close other dropdown
                }}
              >
                Services
                <DropdownArrow isOpen={isServicesOpen} />
              </button>

              <AnimatePresence>
                {isServicesOpen && (
                  <motion.div
                    className="absolute left-0 mt-2 w-64 bg-white rounded-lg shadow-lg py-2 z-50"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                  >
                    {serviceItems.map((item, index) => (
                      <Link
                        key={index}
                        href={item.link}
                        className="block px-4 py-2 text-gray-600 hover:bg-gray-100"
                        onClick={(() => {
                          setIsServicesOpen(false)
                        })}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link href="/portfolio" className="hover:text-gray-900">
              Portfolio
            </Link>
            <Link href="/company/subsidiaries" className="hover:text-gray-900">
              Subsidiaries
            </Link>
            <Link href="/contact-us" className="hover:text-gray-900">
              Contact us
            </Link>
          </div>

          {/* Quote Button (Desktop) */}
          <button className="hidden lg:block bg-red-600 text-white px-4 py-2 hover:bg-red-700">
            Request A Quote
          </button>

          {/* Mobile Menu Button */}
          <MobileMenuButton />
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden fixed inset-0 bg-white z-50 pt-16"
          >
            {/* Close Button */}
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="absolute top-4 right-4 p-2 focus:outline-none"
            >
              <X size={24} className="text-gray-800" />
            </button>

            <div className="px-4 py-6 space-y-4 overflow-y-auto h-full">
              <Link  onClick={() => setIsMobileMenuOpen(false)} href="/" className="block py-2 text-lg">
                Home
              </Link>

              {/* Mobile Company Menu */}
              <div>
                <button
                  onClick={() => setIsCompanyOpen(!isCompanyOpen)}
                  className="flex items-center justify-between w-full py-2 text-lg"
                >
                  Company
                  <DropdownArrow isOpen={isCompanyOpen} />
                </button>
                <AnimatePresence>
                  {isCompanyOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="pl-4 space-y-2"
                    >
                      {companyItems.map((item, index) => (
                        <Link
                        onClick={() => setIsMobileMenuOpen(false)}
                          key={index}
                          href={item.link}
                          className="block py-2 text-gray-600"
                        >
                          {item.name}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Mobile Services Menu */}
              <div>
                <button
                  onClick={() => setIsServicesOpen(!isServicesOpen)}
                  className="flex items-center justify-between w-full py-2 text-lg"
                >
                  Services
                  <DropdownArrow isOpen={isServicesOpen} />
                </button>
                <AnimatePresence>
                  {isServicesOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="pl-4 space-y-2"
                    >
                      {serviceItems.map((item, index) => (
                        <Link
                        onClick={() => setIsMobileMenuOpen(false)}
                          key={index}
                          href={item.link}
                          className="block py-2 text-gray-600"
                        >
                          {item.name}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <Link  onClick={() => setIsMobileMenuOpen(false)} href="/portfolio" className="block py-2 text-lg">
                Portfolio
              </Link>
              <Link  onClick={() => setIsMobileMenuOpen(false)} href="/company/subsidiaries" className="block py-2 text-lg">
                Subsidiaries
              </Link>
              <Link  onClick={() => setIsMobileMenuOpen(false)} href="/contact" className="block py-2 text-lg">
                Contact us
              </Link>

              {/* Mobile Quote Button */}
              <button className="w-full bg-red-600 text-white px-4 py-3 hover:bg-red-700 text-lg mt-4">
                Request A Quote
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;