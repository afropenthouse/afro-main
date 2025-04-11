'use client'
import { motion } from "framer-motion"
import Image from "next/image"

function About() {
  return (
    <section className="about">
    {/* Box 1 */}
    <div className="box1">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{
          duration: 1.2,
          ease: [0.25, 0.1, 0.25, 1],
        }}
        className="textBox"
      >
        <h1>Select Your Budget</h1>
        <p>Find nice restaurants that fit your budget.</p>
      </motion.div>
      <div className="imageBox">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{
            duration: 1.2,
            ease: [0.25, 0.1, 0.25, 1],
          }}
          // className="imageBox"
        >
          <Image
            src="/images/images/Hero/vb3.png"
            alt=""
            width={390}
            height={500}
          />
        </motion.div>
      </div>
    </div>
    {/* Box 2 */}
    <div className="box2">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{
          duration: 1.2,
          ease: [0.25, 0.1, 0.25, 1],
        }}
      >
        <div className="imageBox">
          <Image
            src="/images/images/About/Vibeazy mockupgdgd edited.png"
            alt=""
            width={400}
            height={500}
          />
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{
          duration: 1.2,
          ease: [0.25, 0.1, 0.25, 1],
        }}
        className="textBox"
      >
        <h1>Get Deals & Discounts</h1>
        <p>FInd deals from your favourite restaurants.</p>
      </motion.div>
    </div>
    {/* Box 3 */}
    <div className="box3">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{
          duration: 1.2,
          ease: [0.25, 0.1, 0.25, 1],
        }}
        className="textBox"
      >
        <h1>Plan Group Hangouts</h1>
        <p>
          Create a group wallet and plan budget-friendly hangouts with
          friends and family!
        </p>
      </motion.div>
      <div className="imageBox">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{
            duration: 1.2,
            ease: [0.25, 0.1, 0.25, 1],
          }}
        >
          <Image
            src="/images/images/About/about3.png"
            alt=""
            width={500}
            height={500} 
          />
        </motion.div>
      </div>
    </div>
  </section>
  )
}

export default About