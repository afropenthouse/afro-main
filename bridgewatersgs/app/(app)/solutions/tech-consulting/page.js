import Link from "next/link"
import Image from "next/image"
import solutions1 from "../../../../public/Image 3.png"
import solutions2 from "../../../../public/Image 4.png"
import solutions3 from "../../../../public/Image 21.png"
import solutions4 from "../../../../public/Image 41.png"
import solution_main from "../../../../public/unsplash_ws6CJRzdOg8.png"

import styles from "./styles.module.scss"



export default function page() {
  return (
    <section className={styles.container}>
      <section className={styles.top}>
        <section className="w-full relative bg-primary">
      <div className="w-full h-[80vh] md:h-[100vh] overflow-hidden">
        <div className="w-full h-[80vh] md:h-[100vh] relative">
          <Image
            src={solution_main}
            alt="home image"
            className="w-full object-cover h-full"
          />
          <div className="h-full w-full absolute top-0 left-0"></div>
        </div>
      </div>
    </section>
      </section>
      <main className={styles.middle}>
        <div className={styles.words}>
          <h1>Tech Consulting</h1>
          <p>Our Tech Consulting services are designed to unlock your technological potential, providing strategic guidance, expert insights, and hands-on implementation to meet your unique needs.</p>
          </div>
        <div className={styles.main}>
          <div className={styles.card}>
            <div className={styles.card_image}>
              <Image
                src={solutions1}
                alt=""
                width={500}
                height={500}
              />
            </div>
            <div className={styles.card_main}>
              <h1>Digital Transformation Strategy</h1>
              <p>Navigate the digital landscape with a tailored strategy. We work closely with your team to assess your current state, identify opportunities, and develop a roadmap for a successful digital transformation journey. Our consultants help you define clear objectives, select the right technologies, and ensure alignment with your business goals.</p>
            </div>
          </div>
          <div className={styles.card2}>
            
            <div className={styles.card_main}>
              <h1>Cybersecurity and Compliance</h1>
              <p>Safeguard your digital assets and maintain regulatory compliance with our cybersecurity expertise. We provide comprehensive assessments, vulnerability testing, and robust cybersecurity solutions to protect your data and reputation. Rest easy knowing your systems are fortified against cyber threats</p>
            </div>
            <div className={styles.card_image}>
              <Image
                src={solutions2}
                alt=""
                width={500}
                height={500}
              />
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.card_image}>
              <Image
                src={solutions3}
                alt=""
                width={500}
                height={500}
              />
            </div>
            <div className={styles.card_main}>
              <h1>Emerging Technology Adoption</h1>
              <p>Stay ahead of the curve with our guidance on emerging technologies. We help you explore, adopt, and integrate technologies like AI, blockchain, IoT, and more into your operations. Leverage the power of innovation to gain a competitive edge.</p>
            </div>
          </div>
          <div className={styles.card2}>
            
            <div className={styles.card_main}>
              <h1>Infrastructure Optimization</h1>
              <p>Maximize efficiency and reduce costs through IT infrastructure optimization. Our experts assess your current setup, identify bottlenecks, and recommend solutions to enhance performance, scalability, and reliability. Ensure your IT environment supports your business growth.</p>
            </div>
            <div className={styles.card_image}>
              <Image
                src={solutions4}
                alt=""
                width={500}
                height={500}
              />
            </div>
          </div>
          </div>
      </main>
      <section className={styles.bottom}>
        <div className={styles.bottom_main}>
              <h1>Experience the future of supply chain management. 
Contact us today to embark on your journey toward supply chain excellence.</h1>
          <div className={styles.links}>
            <h3>
              <Link href="/">Get Started</Link>
            </h3>
            <h4>
             <Link href="/">Connect with Us</Link>
            </h4>
              </div>
        </div>
      </section>
    </section>
  )
}
