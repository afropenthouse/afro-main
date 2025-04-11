"use client"
import React, { useState, useEffect } from 'react';
import { Menu, X, Home, User, Settings, Mail, Bell, Boxes, HandHelping, TicketPercent } from 'lucide-react';
import { TbCategory } from "react-icons/tb";
import { GrMapLocation } from "react-icons/gr";
import { IoLocationSharp } from "react-icons/io5";
import Image from 'next/image';
import Link from 'next/link';

const Sidebar = () => {
  const [expanded, setExpanded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [activeItem, setActiveItem] = useState('home');

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
      if (window.innerWidth <= 768) {
        setExpanded(false);
      }
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const menuItems = [
    { id: 'home', icon: <Home size={24} />, text: 'Home', link: '/' },
    { id: 'Venues', icon: <GrMapLocation size={24} />, text: 'Venues', link: '/venues' },
    { id: 'categories', icon:<TbCategory size={24} />, text: 'Categories', link: '/categories' },
    { id: 'locations', icon: <IoLocationSharp size={24}/>, text: 'Locations', link: '/locations' },
    { id: 'Discounts', icon:<TicketPercent size={24} />, text: 'Discounts', link: '/new-discounts' },
  ];

  return (
    <div className="relative" style={{
        zIndex: '10000000000000000'
    }}>
      {/* Mobile Toggle Button - Now in a fixed container */}
      {isMobile && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
          <button 
            className="w-12 h-12 bg-[#650928] rounded-full flex items-center justify-center text-white shadow-lg hover:scale-110 transition-transform"
            onClick={() => setExpanded(!expanded)}
          >
            {expanded ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      )}

      {/* Sidebar */}
      <div className="fixed top-0 left-0 h-full">
        <div 
          className={`h-full bg-[#1a1a1a] text-white transition-all duration-300 ease-in-out flex flex-col relative
            ${expanded ? 'w-60' : 'w-[70px]'}
            ${isMobile && !expanded ? '-translate-x-full' : 'translate-x-0'}`}
        >
          {/* Desktop Toggle Button */}
          {!isMobile && (
            <button 
              className="absolute -right-3 top-5 w-6 h-6 bg-[#650928] rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-transform"
              onClick={() => setExpanded(!expanded)}
            >
              {expanded ? <X size={14} /> : <Menu size={14} />}
            </button>
          )}

          {/* Menu Items */}
          {
            isMobile ? <div className="flex-1 mt-8 px-4">
            {menuItems.map((item) => (
              <Link
              href={item.link}
                key={item.id}
                className={`flex items-center px-3 py-3 rounded-lg cursor-pointer transition-all duration-200
                  ${activeItem === item.id ? 'bg-[#650928]' : 'hover:bg-white/10 hover:translate-x-1'}
                  mb-4`}
                onClick={() => {
                  setActiveItem(item.id)
                  setExpanded(!expanded)
                }}
              >
                <div className="min-w-[24px] flex items-center justify-center">
                  {item.icon}
                </div>
                <span className={`ml-4 whitespace-nowrap ${!expanded && 'opacity-0'} transition-opacity duration-300`}>
                  {item.text}
                </span>
              </Link>
            ))}
          </div> : <div className="flex-1 mt-8 px-4">
            {menuItems.map((item) => (
              <Link
              href={item.link}
                key={item.id}
                className={`flex items-center px-3 py-3 rounded-lg cursor-pointer transition-all duration-200
                  ${activeItem === item.id ? 'bg-[#650928]' : 'hover:bg-white/10 hover:translate-x-1'}
                  mb-4`}
                onClick={() => {
                  setActiveItem(item.id)
                }}
              >
                <div className="min-w-[24px] flex items-center justify-center">
                  {item.icon}
                </div>
                <span className={`ml-4 whitespace-nowrap ${!expanded && 'opacity-0'} transition-opacity duration-300`}>
                  {item.text}
                </span>
              </Link>
            ))}
          </div>
          }

          {/* Logo Section */}
          <div className="mt-auto border-t border-white/10 bg-black/20 p-1">
            <div className="flex items-center justify-center gap-2">
              <Image width={100} height={100} src="/white logo.png" alt="" style={{
                width: '8rem'
              }} />
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Overlay */}
      {!isMobile && expanded && (
        <div 
          className="fixed inset-0 bg-black/50 z-40"
          onClick={() => setExpanded(false)}
        />
      )}
    </div>
  );
};

export default Sidebar;