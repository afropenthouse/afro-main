import Link from "next/link"
import Image from "next/image"
import solutions1 from "../../../../public/Image 1a.png"
import solutions2 from "../../../../public/Image 41.png"
import solutions3 from "../../../../public/Image 33.png"
import solution_main from "../../../../public/unsplash_Oalh2MojUuk.png"

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
          <h1>Cloud Academy</h1>
          <p>In a digital age defined by the cloud, staying ahead means equipping your team with the right skills. Our Cloud Academy services are designed to provide comprehensive training and programs that empower your organization for the cloud-driven future. Whether you're looking to start your cloud journey or take your expertise to new heights, we're here to guide you.</p>
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
              <h1>Advanced Cloud Architecture and Development</h1>
              <p>Learn the ins and outs of cloud migration and optimization. Our experts guide you through the process of migrating to the cloud, optimizing existing cloud environments, and ensuring cost-efficiency. Master the art of cloud resource management.</p>
            </div>
          </div>
          <div className={styles.card2}>
            
            <div className={styles.card_main}>
              <h1>Cloud Security and Compliance Training</h1>
              <p>Prioritize security and compliance in the cloud with our specialized training program. Understand the unique security challenges of cloud environments and learn best practices to protect your data and meet regulatory requirements and also ensuring your cloud operations are safe and compliant</p>
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
              <h1>Cloud Migration and Optimization</h1>
              <p>Learn the ins and outs of cloud migration and optimization. Our experts guide you through the process of migrating to the cloud, optimizing existing cloud environments, and ensuring cost-efficiency. Master the art of cloud resource management.</p>
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
