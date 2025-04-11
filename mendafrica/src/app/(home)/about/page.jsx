import styles from "./style.module.scss"
import Navbar from "@/components/navbar/mainNav/Navbar"
import { Mukta_Vaani } from "next/font/google"
import { Poppins } from "next/font/google"

const mukta = Mukta_Vaani({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600', '700', '800']
})


const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
})

export default function page() {
  return (
    <>
    <Navbar />
     <main className={styles.main}>
         <div className={styles.initiatives}>
            <div className={styles.text}>
              <h1 className={`${mukta.className}`}>Join MendAfrica</h1>
              <p className={`${mukta.className}`}>Find Projects, Track your Givings & Stay Updated.</p>
              <div className={styles.prove}>
              </div>
            </div>
            
        </div>
        <section className={styles.more}>
          <h1 className={`${poppins.className}`}>WHO ARE WE?</h1>
          <p className={`${mukta.className}`}>
          MendAfrica is a social impact platform that connects people to transformative projects across Africa. Our platform allows you to support credible initiatives impacting Africa and track the real-time impact of their contributions, fostering transparency and creating meaningful change in communities across the continent.
          </p>
        </section>    
      </main>
    </>
   
  )
}
