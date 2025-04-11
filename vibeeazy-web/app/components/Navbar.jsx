"use client";
import React, { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../../public/images/Hero/logo.png";
import logoWhite from "../../public/images/Hero/white logo.png";
import "../../styles/Navbar.css";
import Image from "next/image";
import Link from "next/link";
import { HiMiniBars2 } from "react-icons/hi2";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const [color, setColor] = useState(false);

  const handleClick = () => setClick(!click);

  const changeColor = () => {
    if (typeof window !== 'undefined') {
      if (window.scrollY >= 70) {
        setColor(true);
      } else {
        setColor(false);
      }
    }
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', changeColor);
      return () => window.removeEventListener('scroll', changeColor);
    }
  }, []);

  const closeMenu = () => setClick(false);

  return (
    <div className={color ? 'header header-bg': 'header'}>
      <nav className="navbar">
        <Link href="/" className="logo">
          <Image src={color ? logo : logoWhite} alt="logo" width={100} height={100} />
        </Link>
        {/* <div className="hamburger">
          {click ? (
            <FaTimes size={50} style={{ color: "#ffffff" }} />
          ) : (
            <HiMiniBars2 size={40} className={!color ? 'text-[#ffffff]' : 'text-[#650928]'} />
          )}
        </div> */}
        {/* original */}
        <div className="hamburger" onClick={handleClick}>
          {click ? (
            <FaTimes size={50} style={{ color: "#ffffff" }} />
          ) : (
            <HiMiniBars2 size={40} className={!color ? 'text-[#ffffff]' : 'text-[#650928]'} />
          )}
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className={color ? 'nav-item' : 'nav-item color'}>
            <a href="/" onClick={closeMenu}>
              Home
            </a>
          </li>
          <li className={color ? 'nav-item' : 'nav-item color'}>
            <a href="#about" onClick={closeMenu}>
              About
            </a>
          </li>
          <li className={color ? 'nav-item' : 'nav-item color'}>
            <a href="#about" onClick={closeMenu}>
              How it works
            </a>
          </li>
          <li className={color ? 'nav-item' : 'nav-item color'}>
            <a href="#testimonials" onClick={closeMenu}>
              Contact Us
            </a>
          </li>
          <li className="nav-item started">
            <a href="#demo" onClick={closeMenu} >
              Get Started
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
