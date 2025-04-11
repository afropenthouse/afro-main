"use client";
import React from "react";
import { motion } from "framer-motion";

const CompanyValues = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 12,
      },
    },
  };

  const titleVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  };

  const iconVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
        delay: 0.1,
      },
    },
    hover: {
      scale: 1.15,
      rotate: 5,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 10,
      },
    },
  };

  return (
    <section className="w-full py-16 sm:py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12 sm:mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
        >
          <motion.h2
            className="text-2xl sm:text-3xl md:text-4xl font-medium mb-2"
            variants={titleVariants}
          >
            The value that derives
          </motion.h2>
          <motion.h2
            className="text-2xl sm:text-3xl md:text-4xl font-medium mb-8 sm:mb-12"
            variants={titleVariants}
          >
            everything we do
          </motion.h2>
        </motion.div>

        {/* Values Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-10 max-w-7xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={containerVariants}
        >
          {/* Value 1 - Agility */}
          <motion.div
            className="flex flex-col items-center text-center p-4 rounded-lg hover:bg-gray-50 transition-colors duration-300"
            variants={itemVariants}
          >
            <motion.div
              className="w-16 h-16 mb-6 flex items-center justify-center"
              variants={iconVariants}
              whileHover="hover"
            >
              <svg
                width="48"
                height="48"
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M24 42C33.9411 42 42 33.9411 42 24C42 14.0589 33.9411 6 24 6C14.0589 6 6 14.0589 6 24C6 33.9411 14.0589 42 24 42Z"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M6 24H42"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M24 6C28.5075 10.9565 31.0001 17.3369 31 24C31.0001 30.6631 28.5075 37.0435 24 42C19.4925 37.0435 16.9999 30.6631 17 24C16.9999 17.3369 19.4925 10.9565 24 6Z"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </motion.div>

            <motion.h3
              className="text-xl font-medium mb-4"
              whileHover={{ color: "#701323" }}
            >
              Agility
            </motion.h3>

            <motion.p
              className="text-gray-700 mb-6"
              whileHover={{ scale: 1.01 }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
            >
              We embrace change, adapting quickly to deliver innovative
              solutions that meet your evolving needs
            </motion.p>

            <motion.div
              className="w-full max-w-xs h-px bg-gray-200 mt-auto"
              whileHover={{ backgroundColor: "#701323", height: "2px" }}
              transition={{ duration: 0.3 }}
            ></motion.div>
          </motion.div>

          {/* Value 2 - Integrity */}
          <motion.div
            className="flex flex-col items-center text-center p-4 rounded-lg hover:bg-gray-50 transition-colors duration-300"
            variants={itemVariants}
          >
            <motion.div
              className="w-16 h-16 mb-6 flex items-center justify-center"
              variants={iconVariants}
              whileHover="hover"
            >
              <svg
                width="30"
                height="47"
                viewBox="0 0 30 47"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.35189 21.7598L4.01877 3.00194C3.98144 2.78106 4.01244 2.55405 4.10761 2.35126C4.20278 2.14847 4.35759 1.97957 4.55134 1.86714C4.7451 1.75472 4.96856 1.70413 5.19184 1.72213C5.41513 1.74014 5.6276 1.82588 5.80084 1.9679L13.6771 7.8795C14.0573 8.16356 14.5192 8.31705 14.9938 8.31705C15.4685 8.31705 15.9304 8.16356 16.3106 7.8795L24.2001 1.9701C24.3732 1.82834 24.5854 1.74273 24.8084 1.7247C25.0314 1.70667 25.2546 1.75708 25.4482 1.86919C25.6419 1.9813 25.7967 2.14979 25.8921 2.35218C25.9875 2.55457 26.0189 2.78123 25.9821 3.00194L22.6512 21.7598"
                  stroke="black"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M14.9998 19.3179C7.70935 19.3179 1.79931 25.2279 1.79931 32.5183C1.79931 39.8087 7.70935 45.7188 14.9998 45.7188C22.2902 45.7188 28.2002 39.8087 28.2002 32.5183C28.2002 25.2279 22.2902 19.3179 14.9998 19.3179Z"
                  stroke="black"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </motion.div>

            <motion.h3
              className="text-xl font-medium mb-4"
              whileHover={{ color: "#701323" }}
            >
              Integrity
            </motion.h3>

            <motion.p
              className="text-gray-700 mb-6"
              whileHover={{ scale: 1.01 }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
            >
              Honesty and transparency guide our actions, ensuring trust in
              every project we undertake, building lasting relationships based
              on mutual respect
            </motion.p>

            <motion.div
              className="w-full max-w-xs h-px bg-gray-200 mt-auto"
              whileHover={{ backgroundColor: "#701323", height: "2px" }}
              transition={{ duration: 0.3 }}
            ></motion.div>
          </motion.div>

          {/* Value 3 - Reliability */}
          <motion.div
            className="flex flex-col items-center text-center p-4 rounded-lg hover:bg-gray-50 transition-colors duration-300"
            variants={itemVariants}
          >
            <motion.div
              className="w-16 h-16 mb-6 flex items-center justify-center"
              variants={iconVariants}
              whileHover="hover"
            >
              <svg
                width="48"
                height="48"
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M24 42C33.9411 42 42 33.9411 42 24C42 14.0589 33.9411 6 24 6C14.0589 6 6 14.0589 6 24C6 33.9411 14.0589 42 24 42Z"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M6 24H42"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M24 6C28.5075 10.9565 31.0001 17.3369 31 24C31.0001 30.6631 28.5075 37.0435 24 42C19.4925 37.0435 16.9999 30.6631 17 24C16.9999 17.3369 19.4925 10.9565 24 6Z"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </motion.div>

            <motion.h3
              className="text-xl font-medium mb-4"
              whileHover={{ color: "#701323" }}
            >
              Reliability
            </motion.h3>

            <motion.p
              className="text-gray-700 mb-6"
              whileHover={{ scale: 1.01 }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
            >
              You can count on us to consistently deliver on time, every time.
              Committed to excellence ensures that we meet highest standards in
              every project
            </motion.p>

            <motion.div
              className="w-full max-w-xs h-px bg-gray-200 mt-auto"
              whileHover={{ backgroundColor: "#701323", height: "2px" }}
              transition={{ duration: 0.3 }}
            ></motion.div>
          </motion.div>

          {/* Value 4 - Expertise */}
          <motion.div
            className="flex flex-col items-center text-center p-4 rounded-lg hover:bg-gray-50 transition-colors duration-300"
            variants={itemVariants}
          >
            <motion.div
              className="w-16 h-16 mb-6 flex items-center justify-center"
              variants={iconVariants}
              whileHover="hover"
            >
              <svg
                width="41"
                height="41"
                viewBox="0 0 41 41"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20.4998 28.3855C9.45978 28.3855 7.50478 17.3839 7.15978 8.65536C7.06203 6.22886 7.01412 5.01369 7.92645 3.89244C8.83687 2.76927 9.92745 2.58527 12.1105 2.21727C14.8836 1.76302 17.6898 1.54055 20.4998 1.55219C23.9191 1.55219 26.7347 1.85311 28.889 2.21727C31.0721 2.58527 32.1627 2.76927 33.075 3.89244C33.9874 5.01561 33.9375 6.22886 33.8417 8.65536C33.4967 17.3839 31.5417 28.3855 20.5017 28.3855H20.4998Z"
                  stroke="black"
                  stroke-width="2"
                />
                <path
                  d="M33.9163 7.30176L35.7353 7.90742C37.6328 8.53992 38.5815 8.85617 39.1239 9.60942C39.6663 10.3627 39.6663 11.3651 39.6663 13.3623V13.5022C39.6663 15.1505 39.6663 15.9766 39.2696 16.6513C38.8728 17.3259 38.1503 17.7265 36.7089 18.5296L31.0413 21.6768M7.08301 7.30176L5.26409 7.90742C3.36659 8.53992 2.41784 8.85617 1.87542 9.60942C1.33301 10.3627 1.33301 11.3651 1.33301 13.3623V13.5022C1.33301 15.1505 1.33301 15.9766 1.72976 16.6513C2.12651 17.3259 2.84909 17.7265 4.29042 18.5296L9.95801 21.6768"
                  stroke="black"
                  stroke-width="2"
                />
                <path
                  d="M20.5 28.3857V34.1357"
                  stroke="black"
                  stroke-width="2"
                  stroke-linecap="round"
                />
                <path
                  d="M27.2077 39.8854H13.791L14.4427 36.6348C14.5295 36.2004 14.7641 35.8096 15.1065 35.5286C15.4489 35.2477 15.8781 35.094 16.321 35.0938H24.6777C25.1206 35.094 25.5498 35.2477 25.8922 35.5286C26.2346 35.8096 26.4692 36.2004 26.556 36.6348L27.2077 39.8854Z"
                  stroke="black"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M32 39.8857H9"
                  stroke="black"
                  stroke-width="2"
                  stroke-linecap="round"
                />
              </svg>
            </motion.div>

            <motion.h3
              className="text-xl font-medium mb-4"
              whileHover={{ color: "#701323" }}
            >
              Expertise
            </motion.h3>

            <motion.p
              className="text-gray-700 mb-6"
              whileHover={{ scale: 1.01 }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
            >
              Our team combines deep technical knowledge with industry
              experience to solve complex challenges
            </motion.p>

            <motion.div
              className="w-full max-w-xs h-px bg-gray-200 mt-auto"
              whileHover={{ backgroundColor: "#701323", height: "2px" }}
              transition={{ duration: 0.3 }}
            ></motion.div>
          </motion.div>

          {/* Value 5 - Customer Focused */}
          <motion.div
            className="flex flex-col items-center text-center p-4 rounded-lg hover:bg-gray-50 transition-colors duration-300"
            variants={itemVariants}
          >
            <motion.div
              className="w-16 h-16 mb-6 flex items-center justify-center"
              variants={iconVariants}
              whileHover="hover"
            >
              <svg
                width="38"
                height="45"
                viewBox="0 0 38 45"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.5 28.9671C1.5 28.9671 4.00164 26.4678 11.4997 26.4678C19 26.4678 19 31.4687 26.5003 31.4687C29.9671 31.3124 33.3674 30.4626 36.5 28.9694V3.96907C33.3674 5.46223 29.9671 6.31209 26.5003 6.46841C19 6.46841 19 1.46973 11.4997 1.46973C4.00164 1.46973 1.5 3.96907 1.5 3.96907V43.9678"
                  stroke="black"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </motion.div>

            <motion.h3
              className="text-xl font-medium mb-4"
              whileHover={{ color: "#701323" }}
            >
              Customer Focused
            </motion.h3>

            <motion.p
              className="text-gray-700 mb-6"
              whileHover={{ scale: 1.01 }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
            >
              We prioritize your goals above all else, ensuring that every
              solution we provide is tailored specifically to create lasting
              value for your business
            </motion.p>

            <motion.div
              className="w-full max-w-xs h-px bg-gray-200 mt-auto"
              whileHover={{ backgroundColor: "#701323", height: "2px" }}
              transition={{ duration: 0.3 }}
            ></motion.div>
          </motion.div>

          {/* Value 6 - Team Work */}
          <motion.div
            className="flex flex-col items-center text-center p-4 rounded-lg hover:bg-gray-50 transition-colors duration-300"
            variants={itemVariants}
          >
            <motion.div
              className="w-16 h-16 mb-6 flex items-center justify-center"
              variants={iconVariants}
              whileHover="hover"
            >
              <svg
                width="43"
                height="44"
                viewBox="0 0 43 44"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M38.7875 1.29004H4.2161C3.38256 1.29004 2.58316 1.62116 1.99376 2.21056C1.40436 2.79996 1.07324 3.59936 1.07324 4.4329V39.0043C1.07324 39.8379 1.40436 40.6373 1.99376 41.2267C2.58316 41.8161 3.38256 42.1472 4.2161 42.1472H38.7875C39.6211 42.1472 40.4205 41.8161 41.0099 41.2267C41.5993 40.6373 41.9304 39.8379 41.9304 39.0043V4.4329C41.9304 3.59936 41.5993 2.79996 41.0099 2.21056C40.4205 1.62116 39.6211 1.29004 38.7875 1.29004Z"
                  stroke="black"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M21.5018 1.29004V7.99061C20.8235 7.38387 19.9841 6.98644 19.0848 6.84628C18.1856 6.70612 17.2651 6.82924 16.4343 7.20076C15.6035 7.57228 14.898 8.17632 14.403 8.93998C13.9079 9.70364 13.6445 10.5943 13.6445 11.5043C13.6445 12.4144 13.9079 13.305 14.403 14.0687C14.898 14.8323 15.6035 15.4364 16.4343 15.8079C17.2651 16.1794 18.1856 16.3025 19.0848 16.1624C19.9841 16.0222 20.8235 15.6248 21.5018 15.018V28.4192C22.1801 27.8124 23.0195 27.415 23.9187 27.2749C24.818 27.1347 25.7385 27.2578 26.5693 27.6293C27.4001 28.0008 28.1056 28.6049 28.6006 29.3686C29.0956 30.1322 29.3591 31.0228 29.3591 31.9329C29.3591 32.843 29.0956 33.7336 28.6006 34.4972C28.1056 35.2609 27.4001 35.8649 26.5693 36.2365C25.7385 36.608 24.818 36.7311 23.9187 36.5909C23.0195 36.4508 22.1801 36.0533 21.5018 35.4466V42.1472"
                  stroke="black"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M1.07324 21.7186H7.77381C7.16708 22.3969 6.76964 23.2363 6.62948 24.1355C6.48933 25.0347 6.61244 25.9553 6.98396 26.7861C7.35548 27.6169 7.95953 28.3224 8.72318 28.8174C9.48684 29.3124 10.3775 29.5759 11.2875 29.5759C12.1976 29.5759 13.0882 29.3124 13.8519 28.8174C14.6155 28.3224 15.2196 27.6169 15.5911 26.7861C15.9626 25.9553 16.0857 25.0347 15.9456 24.1355C15.8054 23.2363 15.408 22.3969 14.8012 21.7186H28.2024C27.5956 21.0403 27.1982 20.2009 27.0581 19.3016C26.9179 18.4024 27.041 17.4819 27.4125 16.6511C27.7841 15.8203 28.3881 15.1148 29.1518 14.6198C29.9154 14.1247 30.806 13.8613 31.7161 13.8613C32.6262 13.8613 33.5168 14.1247 34.2804 14.6198C35.0441 15.1148 35.6481 15.8203 36.0197 16.6511C36.3912 17.4819 36.5143 18.4024 36.3741 19.3016C36.234 20.2009 35.8365 21.0403 35.2298 21.7186H41.9304"
                  stroke="black"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </motion.div>

            <motion.h3
              className="text-xl font-medium mb-4"
              whileHover={{ color: "#701323" }}
            >
              Team Work
            </motion.h3>

            <motion.p
              className="text-gray-700 mb-6"
              whileHover={{ scale: 1.01 }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
            >
              Collaboration is at our core, as we believe in the power of
              working together to achieve the best outcomes
            </motion.p>

            <motion.div
              className="w-full max-w-xs h-px bg-gray-200 mt-auto"
              whileHover={{ backgroundColor: "#701323", height: "2px" }}
              transition={{ duration: 0.3 }}
            ></motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CompanyValues;
