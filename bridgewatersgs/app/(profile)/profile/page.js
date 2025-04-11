// import Link from 'next/link'
// import React from 'react'
// import styles from "./styles.module.scss"
// import user_image from "../../../public/blank-profile-pic.webp"
// import solutions_image from "../../../public/unsplash_qfp4-Ud6Fyg.png"
// import solutions_image2 from "../../../public/unsplash_ws6CJRzdOg8.png"
// import solutions_image3 from "../../../public/unsplash_Oalh2MojUuk.png"
// import { useSession, signIn } from "next-auth/react";
// import Image from 'next/image'
// import { fetchUserByEmail } from '@/lib/user.actions'
// import { getServerSession } from 'next-auth'
// import { redirect } from 'next/navigation'
// export default async function page() {
//     const session = await getServerSession();

//     if (!session) {
//         redirect('/connect-with-us')
//     }

//     const user = await fetchUserByEmail(session?.user?.email)

//   return (
//       <>
//           <section className={styles.container}>
//               <nav className={styles.nav}>
//                   <div className={styles.left}>
//                       <h1>Salami <br />Financial</h1>
//                       <div className={styles.line}></div>
//                       <h2>PROFILE</h2>
//                   </div>
//                   <div className={styles.right}>
//                       <h1><Link href="/logout">Sign Out</Link></h1>
//                   </div>
//               </nav>
//               <header className={styles.header}>
//                   <div className={styles.header_container}>
//                       <div className={styles.left}>
//                       <div className={styles.image}>
//                               <Image
//                                   src={user?.avatar ?? user_image}
//                                   alt=""
//                                   height={50}
//                                   width={50}
//                               />
//                       </div>
//                       <div className={styles.words}>
//                           <h1>{
//   (user?.first_name && user?.last_name) ? `${user?.first_name} ${user?.last_name}` :
//   (user?.first_name || user?.last_name) ? `${user?.first_name || user?.last_name}` :
//   user?.name?.split(" ")[1] ?? ""
// }</h1>
//                           <p>{user?.email ?? "edit profile"}</p>
//                       </div>
//                   </div>
//                   <div className={styles.right}>
//                       <Link href={`/edit-profile/${user._id}`}>Edit</Link>
//                   </div>
//                   </div>
//               </header>
//               <main className={styles.profile}>
//                   <h2>Profile</h2>
//                   <div className={styles.line}></div>
//                   <form action="" className={styles.form}>
//                       <div className={styles.form1}>
//                               <h1>First Name*</h1>
//                               <input
//                                 name="email"
//                                 type="email"
//                                 id="email"
//                                 defaultValue={(user?.first_name || user?.name?.split(" ")[0]) ?? ""}
//                                 disabled={true}
//                                 />
//                           </div>
//                       <div className={styles.form1}>
//                               <h1>Last Name*</h1>
//                               <input
//                                 name="email"
//                                 type="email"
//                                 id="email"
//                               defaultValue={(user?.last_name || user?.name?.split(" ")[1]) ?? ""}
//                               disabled={true}
//                                 />
//                           </div>
//                       <div className={styles.form1}>
//                               <h1>Email Address*</h1>
//                               <input
//                                 name="email"
//                                 type="email"
//                                 id="email"
//                               defaultValue={user?.email ?? ""}
//                               disabled={true}
//                                 />
//                           </div>
//                       <div className={styles.form1}>
//                               <h1>Company*</h1>
//                               <input
//                                 name="email"
//                                 type="email"
//                               id="email"
//                               defaultValue={user?.company ?? ""}
//                               disabled={true}
//                                 />
//                           </div>
//                       <div className={styles.form1}>
//                               <h1>Country*</h1>
//                               <input
//                                 name="email"
//                                 type="text"
//                               id="email"
//                               defaultValue={user?.country ?? ""}
//                               disabled={true}
//                                 />
//                           </div>
//                       <div className={styles.form1}>
//                               <h1>State*</h1>
//                               <input
//                                 name="email"
//                                 type="email"
//                               id="email"
//                               defaultValue={user?.state ?? ""}
//                               disabled={true}
//                                 />
//                           </div>
//                   </form>
//               </main>
//               <section className={styles.solutions}>
//                   <h3>Our Solutions</h3>
//                   <div className={styles.solutions_container}>
//                       <div className={styles.solutions_card}>
//                           <div className={styles.top}>
//                               <Image 
//                                   src={solutions_image}
//                                   alt=""
//                                   height={300}
//                                   width={300}
//                               />
//                           </div>
//                           <div className={styles.middle}>
//                               <h1>Predictive Analytic Dashboard</h1>
//                               <p>Whether you're optimizing supply chains, streamlining logistics, managing resources in oil and gas, fine-tuning retail strategies, or driving efficiency in manufacturing, our dashboard is your compass.</p>
//                           </div>
//                           <div className={styles.bottom}>
//                               <a href="/solutions/predictive-analysis-dashboard">See more</a>
//                           </div>
//                       </div>
//                       <div className={styles.solutions_card}>
//                           <div className={styles.top}>
//                               <Image 
//                                   src={solutions_image2}
//                                   alt=""
//                                   height={300}
//                                   width={300}
//                               />
//                           </div>
//                           <div className={styles.middle}>
//                               <h1>Tech Consulting</h1>
//                               <p>Our Tech Consulting services are designed to unlock your technological potential, providing strategic guidance, expert insights, and hands-on implementation to meet your unique needs.</p>
//                           </div>
//                           <div className={styles.bottom}>
//                               <a href="/solutions/tech-consulting">See more</a>
//                           </div>
//                       </div>
//                       <div className={styles.solutions_card}>
//                           <div className={styles.top}>
//                               <Image 
//                                   src={solutions_image3}
//                                   alt=""
//                                   height={300}
//                                   width={300}
//                               />
//                           </div>
//                           <div className={styles.middle}>
//                               <h1>Cloud Academy</h1>
//                               <p>Our Cloud Academy services are designed to provide comprehensive training and programs that empower your organization for the cloud-driven future. </p>
//                           </div>
//                           <div className={styles.bottom}>
//                               <a href="/solutions/cloud-academy">See more</a>
//                           </div>
//                       </div>
//                   </div>
//               </section>
//           </section>
//     </>
//   )
// }

import React from 'react'

export default function page() {
    return (
        <div>page</div>
    )
}
