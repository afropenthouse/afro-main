import React from 'react'
import styles from "./styles.module.scss"
import Solutions_main from '@/app/components/Solutions_main'
import Link from 'next/link'
export default function page() {
  return (
    <>
      <section className={styles.container}>
        <div className={styles.top}>
          <Solutions_main />
          </div>
        <div className={styles.bottom}>
          <aside className={styles.aside}>
            <h3>Unlocking Financial Possibilities with our Seamless Solution</h3>
          </aside>
          <main className={styles.main}>
            <div className={styles.top}>
              <div className={styles.card}>
                <h1>Predictive Analytics <br />Dashboard</h1>
                <p>Whether you're optimizing supply chains, streamlining logistics, managing resources in oil and gas, fine-tuning retail strategies, or driving efficiency in manufacturing, our dashboard is your compass. It empowers you to navigate challenges, seize opportunities, and illuminate the path to success, all through the lens of your data.</p>
                <Link href="/solutions/predictive-analysis-dashboard">See more</Link>
              </div>
              <div className={styles.card}>
                <h1>Tech Consulting</h1>
                <p>Our Tech Consulting services are designed to unlock your technological potential, providing strategic guidance, expert insights, and hands-on implementation to meet your unique needs.</p>
                <Link href="/solutions/tech-consulting">See more</Link>
              </div>
            </div>
            <div className={styles.bottom}>
              <div className={styles.card}>
                <h1>Cloud Academy</h1>
                <p>Our Cloud Academy services are designed to provide comprehensive training and programs that empower your organization for the cloud-driven future. Whether you're looking to start your cloud journey or take your expertise to new heights, we're here to guide you.</p>
                <Link href="/solutions/cloud-academy">See more</Link>
              </div>
            </div>
          </main>
          </div>
      </section>
    </>
  )
}
