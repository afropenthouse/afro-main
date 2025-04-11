import Link from "next/link"
import Image from "next/image"
import solutions1 from "../../../../public/Image 2.png"
import solutions2 from "../../../../public/Image 4.png"
import solutions3 from "../../../../public/image 5.png"
import solution_main from "../../../../public/unsplash_qfp4-Ud6Fyg.png"

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
          <h1>Predictive Analytic Dashboard</h1>
          <p>Our dashboard and analytics platform is your gateway to data-driven excellence. It's the control center where raw data transforms into actionable insights. Designed with precision and tailored for your specific industry, our dashboard simplifies complexity.</p>
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
              <h1>Optimize Your Logistics Operations</h1>
              <p>evolutionize your logistics operations with our dedicated dashboard and analytics platform. 
It transforms raw data into actionable insights, simplifying complexity for logistics professionals. With precision-designed features catering specifically to logistics needs, our dashboard becomes your trusted compass. It empowers you to navigate supply chain challenges, optimize routes, enhance resource allocation, and seize opportunities for efficiency, all driven by your logistics data. Experience logistics excellence through the lens of our tailored dashboard.</p>
            </div>
          </div>
          <div className={styles.card2}>
            
            <div className={styles.card_main}>
              <h1>Oil and Gas</h1>
              <p>Fuel your oil and gas endeavors with our dedicated dashboard. Precision-engineered for the industry's unique demands, our dashboard translates complex data into actionable intelligence. Visualize production trends, streamline resource allocation, and enhance operational efficiency effortlessly.</p>
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
              <h1> Manufacturing and Retail</h1>
              <p>Our solution is meticulously designed to cater to the unique demands of the manufacturing and retail sector, turning raw production data into actionable insights.
It transforms complex sales and inventory data into actionable intelligence. Visualize sales trends, optimize inventory management, and enhance customer experiences seamlessly. Empowering decision-makers to navigate the dynamic retail and manufacturing landscape, make informed choices, and capitalize on opportunities for growth and profitability</p>
            </div>
          </div>
          </div>
      </main>
      <section className={styles.bottom}>
        <div className={styles.bottom_main}>
              <h1>Unlock the power of predictive analytics
Contact us today to embark on your journey </h1>
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
