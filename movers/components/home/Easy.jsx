"use client";
import React from "react";
import Image from "next/image";
import { BsArrowRight } from "react-icons/bs";
import { motion } from "framer-motion";
import Link from "next/link";

const Easy = () => {
  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const scaleIn = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  };

  return (
    <div className="w-full bg-white overflow-x-hidden">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-20">
        {/* Header Section */}
        <motion.div
          className="flex flex-col items-center justify-center text-center mb-16 sm:mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
        >
          <h1 className="text-3xl sm:text-4xl font-medium mb-4">
            We make moving easy
          </h1>
          <p className="text-base text-gray-700 max-w-xl">
            You can move with confidence because we're here to help you every
            step of the way
          </p>
        </motion.div>

        {/* Three Steps Section */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16 mb-24 relative"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerContainer}
        >
          {/* Connecting lines - only visible on desktop */}
          <div className="hidden md:block absolute top-[calc(100%-28px)] left-[calc(16.67%+32px)] right-[calc(16.67%+32px)] h-[1px] bg-[#FFCACA] mt-2.5"></div>

          {/* Step 1 - Make Reservation */}
          <motion.div
            className="flex flex-col items-center text-center"
            variants={fadeInUp}
          >
            <motion.div
              className="relative mb-4 w-16 h-16 flex items-center justify-center"
              whileHover={{ scale: 1.05, rotate: 5 }}
              transition={{ type: "spring", stiffness: 300, damping: 10 }}
            >
              {/* SVG Icon placeholder */}
              <div className="w-12 h-12 flex items-center justify-center">
                <svg
                  width="62"
                  height="62"
                  viewBox="0 0 62 62"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M44.8498 33.6C54.1282 33.6 61.6498 26.0784 61.6498 16.8C61.6498 7.52162 54.1282 0 44.8498 0C35.5714 0 28.0498 7.52162 28.0498 16.8C28.0498 26.0784 35.5714 33.6 44.8498 33.6Z"
                    fill="#FFCACA"
                  />
                  <path
                    d="M44.9496 22.4997H16.9496L15.1496 20.0997C14.9496 19.7997 14.6496 19.6997 14.2496 19.6997H1.44961C0.84961 19.6997 0.349609 20.1997 0.349609 20.7997V60.3997C0.349609 60.9997 0.84961 61.4997 1.44961 61.4997H44.9496C45.5496 61.4997 46.0496 60.9997 46.0496 60.3997V30.3997V23.5997C46.1496 22.8997 45.6496 22.4997 44.9496 22.4997ZM43.8496 24.6997V29.1997H21.9496L18.5496 24.6997H43.8496ZM43.8496 59.1997H2.54961V21.7997H13.6496L20.5496 30.9997C20.7496 31.2997 21.0496 31.3997 21.4496 31.3997H43.9496V59.1997H43.8496Z"
                    fill="#333333"
                  />
                  <path
                    d="M6.0498 44.1996C6.0498 49.1996 10.1498 53.2996 15.1498 53.2996C20.1498 53.2996 24.2498 49.1996 24.2498 44.1996C24.2498 39.1996 20.1498 35.0996 15.1498 35.0996C10.1498 35.0996 6.0498 39.0996 6.0498 44.1996ZM21.9498 44.1996C21.9498 47.9996 18.8498 51.0996 15.0498 51.0996C11.2498 51.0996 8.14981 47.9996 8.14981 44.1996C8.14981 40.3996 11.2498 37.2996 15.0498 37.2996C18.8498 37.2996 21.9498 40.3996 21.9498 44.1996Z"
                    fill="#333333"
                  />
                  <path
                    d="M14.0496 40.8998V42.9998H11.9496C11.3496 42.9998 10.8496 43.4998 10.8496 44.0998C10.8496 44.6998 11.3496 45.1998 11.9496 45.1998H14.0496V47.3998C14.0496 47.9998 14.5496 48.4998 15.1496 48.4998C15.7496 48.4998 16.2496 47.9998 16.2496 47.3998V45.1998H18.4496C19.0496 45.1998 19.5496 44.6998 19.5496 44.0998C19.5496 43.4998 19.0496 42.9998 18.4496 42.9998H16.2496V40.8998C16.2496 40.2998 15.7496 39.7998 15.1496 39.7998C14.4496 39.7998 14.0496 40.2998 14.0496 40.8998Z"
                    fill="#333333"
                  />
                  <path
                    d="M29.5493 44.3997H38.0493C38.6493 44.3997 39.1493 43.8997 39.1493 43.2997C39.1493 42.6997 38.6493 42.1997 38.0493 42.1997H29.5493C28.9493 42.1997 28.4493 42.6997 28.4493 43.2997C28.3493 43.8997 28.8493 44.3997 29.5493 44.3997Z"
                    fill="#333333"
                  />
                  <path
                    d="M29.5492 48.8997H38.0492C38.6492 48.8997 39.1492 48.3997 39.1492 47.7997C39.1492 47.1997 38.6492 46.6997 38.0492 46.6997H29.5492C28.9492 46.6997 28.4492 47.1997 28.4492 47.7997C28.4492 48.3997 28.8492 48.8997 29.5492 48.8997Z"
                    fill="#333333"
                  />
                  <path
                    d="M49.4492 15.6998C50.6492 14.4998 51.3492 12.8998 51.3492 11.1998C51.3492 7.6998 48.4492 4.7998 44.9492 4.7998C41.4492 4.7998 38.5492 7.6998 38.5492 11.1998C38.5492 12.8998 39.2492 14.4998 40.3492 15.6998C39.0492 16.3998 37.9492 17.2998 37.1492 18.4998C36.8492 18.9998 36.9492 19.6998 37.4492 19.9998C37.9492 20.2998 38.6492 20.1998 38.9492 19.6998C39.6492 18.5998 40.9492 17.6998 42.3492 17.1998C43.1492 17.5998 43.9492 17.7998 44.8492 17.7998C45.7492 17.7998 46.5492 17.4998 47.3492 17.1998C50.1492 18.2998 52.0492 20.9998 52.0492 23.9998V25.2998C52.0492 25.8998 52.5492 26.3998 53.1492 26.3998C53.7492 26.3998 54.2492 25.8998 54.2492 25.2998V23.9998C54.2492 20.4998 52.4492 17.3998 49.4492 15.6998ZM44.8492 6.9998C47.1492 6.9998 49.0492 8.8998 49.0492 11.1998C49.0492 13.4998 47.1492 15.3998 44.8492 15.3998C42.5492 15.3998 40.6492 13.4998 40.6492 11.1998C40.6492 8.7998 42.5492 6.9998 44.8492 6.9998Z"
                    fill="#333333"
                  />
                </svg>
              </div>
            </motion.div>
            <h3 className="text-xl font-medium mb-3">Make Reservation</h3>
            <p className="text-sm text-gray-600 max-w-xs">
              This section overtime features require a short description
            </p>
            <motion.div
              className="mt-8 w-8 h-8 rounded-full bg-[#701323] text-white flex items-center justify-center font-medium z-10 shadow-md"
              variants={scaleIn}
              whileHover={{
                scale: 1.1,
                boxShadow: "0 10px 15px -3px rgba(112, 19, 35, 0.3)",
              }}
            >
              1
            </motion.div>
          </motion.div>

          {/* Step 2 - Pack your stuff */}
          <motion.div
            className="flex flex-col items-center text-center"
            variants={fadeInUp}
          >
            <motion.div
              className="relative mb-4 w-16 h-16 flex items-center justify-center"
              whileHover={{ scale: 1.05, rotate: -5 }}
              transition={{ type: "spring", stiffness: 300, damping: 10 }}
            >
              {/* SVG Icon placeholder */}
              <div className="w-12 h-12 flex items-center justify-center">
                <svg
                  width="62"
                  height="52"
                  viewBox="0 0 62 52"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M49.3289 0.25H12.7289C12.1289 0.25 11.6289 0.75 11.6289 1.35V9.65C11.6289 10.25 12.1289 10.75 12.7289 10.75H49.3289C49.9289 10.75 50.4289 10.25 50.4289 9.65V1.35C50.4289 0.75 49.9289 0.25 49.3289 0.25Z"
                    fill="#FFCACA"
                  />
                  <path
                    d="M61.7291 28.75L55.2291 19.65C55.0291 19.35 54.7291 19.15 54.3291 19.15H50.4291V1.35C50.4291 0.75 49.9291 0.25 49.3291 0.25H12.7291C12.1291 0.25 11.6291 0.75 11.6291 1.35V19.05H7.72913C7.32913 19.05 7.02913 19.25 6.82913 19.55L0.329133 28.65C0.129133 28.95 0.0291347 29.45 0.229135 29.75C0.429135 30.15 0.829135 30.35 1.22913 30.35H6.62913V50.15C6.62913 50.75 7.12913 51.25 7.72913 51.25H38.8291H54.2291C54.8291 51.25 55.3291 50.75 55.3291 50.15V30.45H60.7291C61.1291 30.45 61.5291 30.25 61.7291 29.85C61.9291 29.55 61.9291 29.05 61.7291 28.75ZM13.8291 2.45H48.2291V19.05H38.8291H13.8291V2.45ZM8.32913 21.35H12.7291H36.7291L31.7291 28.25H3.42913L8.32913 21.35ZM8.92913 30.45H32.3291C32.7291 30.45 33.0291 30.25 33.2291 29.95L37.8291 23.55V49.15H8.92913V30.45ZM53.1291 49.25H39.9291V23.65L44.4291 29.95C44.6291 30.25 44.9291 30.45 45.3291 30.45H53.1291V49.25ZM45.9291 28.25L41.0291 21.35H49.3291H53.7291L58.6291 28.25H45.9291Z"
                    fill="#333333"
                  />
                  <path
                    d="M20.0287 41.3501H14.5287C13.9287 41.3501 13.4287 41.8501 13.4287 42.4501C13.4287 43.0501 13.9287 43.5501 14.5287 43.5501H20.0287C20.6287 43.5501 21.1287 43.0501 21.1287 42.4501C21.1287 41.8501 20.6287 41.3501 20.0287 41.3501Z"
                    fill="#333333"
                  />
                  <path
                    d="M17.2289 5.25C16.6289 5.25 16.1289 5.75 16.1289 6.35C16.1289 6.95 16.6289 7.45 17.2289 7.45C17.8289 7.45 18.3289 6.95 18.3289 6.35C18.3289 5.75 17.8289 5.25 17.2289 5.25Z"
                    fill="#333333"
                  />
                  <path
                    d="M26.0287 5.25C25.4287 5.25 24.9287 5.75 24.9287 6.35C24.9287 6.95 25.4287 7.45 26.0287 7.45C26.6287 7.45 27.1287 6.95 27.1287 6.35C27.1287 5.75 26.6287 5.25 26.0287 5.25Z"
                    fill="#333333"
                  />
                  <path
                    d="M21.6293 5.25C21.0293 5.25 20.5293 5.75 20.5293 6.35C20.5293 6.95 21.0293 7.45 21.6293 7.45C22.2293 7.45 22.7293 6.95 22.7293 6.35C22.7293 5.75 22.2293 5.25 21.6293 5.25Z"
                    fill="#333333"
                  />
                </svg>
              </div>
            </motion.div>
            <h3 className="text-xl font-medium mb-3">Pack your stuff</h3>
            <p className="text-sm text-gray-600 max-w-xs">
              This section overtime features require a short description
            </p>
            <motion.div
              className="mt-8 w-8 h-8 rounded-full bg-[#701323] text-white flex items-center justify-center font-medium z-10 shadow-md"
              variants={scaleIn}
              whileHover={{
                scale: 1.1,
                boxShadow: "0 10px 15px -3px rgba(112, 19, 35, 0.3)",
              }}
            >
              2
            </motion.div>
          </motion.div>

          {/* Step 3 - Moving Process */}
          <motion.div
            className="flex flex-col items-center text-center"
            variants={fadeInUp}
          >
            <motion.div
              className="relative mb-4 w-16 h-16 flex items-center justify-center"
              whileHover={{ scale: 1.05, rotate: 5 }}
              transition={{ type: "spring", stiffness: 300, damping: 10 }}
            >
              {/* SVG Icon placeholder */}
              <div className="w-12 h-12 flex items-center justify-center">
                <svg
                  width="62"
                  height="62"
                  viewBox="0 0 62 62"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M45.45 32.4498C54.397 32.4498 61.65 25.1968 61.65 16.2498C61.65 7.30279 54.397 0.0498047 45.45 0.0498047C36.503 0.0498047 29.25 7.30279 29.25 16.2498C29.25 25.1968 36.503 32.4498 45.45 32.4498Z"
                    fill="#FFCACA"
                  />
                  <path
                    d="M61.3496 35.95L53.2496 24.65C53.0496 24.35 52.7496 24.15 52.3496 24.15H39.1496V19.85C39.1496 19.25 38.6496 18.75 38.0496 18.75H1.44961C0.84961 18.75 0.349609 19.25 0.349609 19.85V42.05V53.45C0.349609 54.05 0.84961 54.55 1.44961 54.55H5.74961C5.64961 54.95 5.64961 55.35 5.64961 55.75C5.64961 58.85 8.24961 61.45 11.3496 61.45C14.4496 61.45 17.0496 58.85 17.0496 55.75C17.0496 55.35 17.0496 54.95 16.9496 54.55H38.0496H44.2496C44.1496 54.95 44.1496 55.35 44.1496 55.75C44.1496 58.85 46.7496 61.45 49.8496 61.45C52.9496 61.45 55.5496 58.85 55.5496 55.75C55.5496 55.35 55.5496 54.95 55.4496 54.55H60.5496C61.1496 54.55 61.6496 54.05 61.6496 53.45V36.55C61.5496 36.35 61.4496 36.15 61.3496 35.95ZM59.3496 36.95V39.55H46.3496V26.35H51.8496L59.3496 36.95ZM9.44961 40.95V28.35H14.6496V32.45C14.6496 33.05 15.1496 33.55 15.7496 33.55C16.3496 33.55 16.8496 33.05 16.8496 32.45V28.35H22.0496V41.05H9.44961V40.95ZM24.2496 28.35H29.4496V32.45C29.4496 33.05 29.9496 33.55 30.5496 33.55C31.1496 33.55 31.6496 33.05 31.6496 32.45V28.35H36.8496V41.05H24.2496V28.35ZM36.9496 21.05V25.35V26.15H23.2496H8.34961C7.74961 26.15 7.24961 26.65 7.24961 27.25V41.05H2.54961V21.05H36.9496ZM11.2496 59.25C9.34961 59.25 7.74961 57.65 7.74961 55.75C7.74961 53.85 9.34961 52.25 11.2496 52.25C13.1496 52.25 14.7496 53.85 14.7496 55.75C14.7496 57.65 13.2496 59.25 11.2496 59.25ZM11.2496 50.05C9.44961 50.05 7.74961 50.95 6.74961 52.35H2.54961V43.15H8.34961H23.2496H37.0496V52.35H15.8496C14.7496 50.95 13.1496 50.05 11.2496 50.05ZM49.8496 59.25C47.9496 59.25 46.3496 57.65 46.3496 55.75C46.3496 53.85 47.9496 52.25 49.8496 52.25C51.7496 52.25 53.3496 53.85 53.3496 55.75C53.3496 57.65 51.7496 59.25 49.8496 59.25ZM54.3496 52.35C53.3496 50.95 51.6496 50.05 49.8496 50.05C48.0496 50.05 46.3496 50.95 45.3496 52.35H39.2496V42.05V27.25V26.45H44.2496V40.65C44.2496 41.25 44.7496 41.75 45.3496 41.75H59.4496V52.45H54.3496V52.35Z"
                    fill="#333333"
                  />
                  <path
                    d="M47.1492 10.4496C47.1492 9.54961 46.4492 8.84961 45.5492 8.84961C44.6492 8.84961 43.9492 9.54961 43.9492 10.4496C43.9492 11.3496 44.6492 12.0496 45.5492 12.0496C46.4492 12.0496 47.1492 11.3496 47.1492 10.4496Z"
                    fill="#333333"
                  />
                  <path
                    d="M44.7498 19.5498C44.9498 19.7498 45.2498 19.8498 45.4498 19.8498C45.6498 19.8498 45.9498 19.7498 46.1498 19.5498C46.3498 19.3498 51.3498 14.9498 51.3498 10.4498C51.3498 7.14981 48.6498 4.5498 45.4498 4.5498C42.2498 4.5498 39.5498 7.24981 39.5498 10.4498C39.5498 14.8498 44.5498 19.3498 44.7498 19.5498ZM45.4498 6.74981C47.5498 6.74981 49.1498 8.44981 49.1498 10.4498C49.1498 12.8498 46.8498 15.6498 45.4498 17.1498C43.9498 15.6498 41.7498 12.8498 41.7498 10.4498C41.7498 8.34981 43.4498 6.74981 45.4498 6.74981Z"
                    fill="#333333"
                  />
                </svg>
              </div>
            </motion.div>
            <h3 className="text-xl font-medium mb-3">Moving Process</h3>
            <p className="text-sm text-gray-600 max-w-xs">
              This section overtime features require a short description
            </p>
            <motion.div
              className="mt-8 w-8 h-8 rounded-full bg-[#701323] text-white flex items-center justify-center font-medium z-10 shadow-md"
              variants={scaleIn}
              whileHover={{
                scale: 1.1,
                boxShadow: "0 10px 15px -3px rgba(112, 19, 35, 0.3)",
              }}
            >
              3
            </motion.div>
          </motion.div>
        </motion.div>

        {/* How ready to move section */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
        >
          {/* Text Content */}
          <motion.div
            className="flex flex-col items-start order-2 md:order-1"
            variants={fadeInUp}
          >
            <h2 className="text-2xl sm:text-3xl font-medium mb-4 sm:mb-6">
              How ready are you to move?
            </h2>
            <p className="text-gray-700 mb-6 sm:mb-8 text-sm leading-relaxed">
              At H & O Movers, we cater to a wide range of moving needs,
              offering customized solutions for every type of relocation.
              Whether you're moving across the street, across the country, or
              even to another continent, we have the expertise and resources to
              make your move as smooth as possible.
            </p>
            <motion.button
              className="bg-[#701323] text-white px-6 py-3 rounded-full flex items-center text-sm group shadow-md hover:shadow-lg transition-shadow"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              <Link href="/services">View Services</Link>
              <motion.span
                className="ml-2 flex items-center"
                initial={{ x: 0 }}
                whileHover={{ x: 4 }}
              >
                <BsArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
              </motion.span>
            </motion.button>
          </motion.div>

          {/* Image */}
          <motion.div
            className="relative w-full h-[250px] sm:h-[300px] md:h-[400px] rounded-lg overflow-hidden order-1 md:order-2 shadow-lg"
            variants={scaleIn}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.5 }}
              className="w-full h-full"
            >
              <Image
                src="/package-guy.png"
                alt="Mover with package"
                fill
                className="object-cover rounded-lg"
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Easy;
