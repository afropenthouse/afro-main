import styles from "./style.module.scss";
import Image from "next/image";
import ProgressBar from "@/components/ProgressBar";
import Link from "next/link";
import { PiBreadLight } from "react-icons/pi";
import ImageSlider from "@/components/sponsors/Sponsor";
import Navbar from "@/components/navbar/mainNav/Navbar";
import Hero from "@/components/home/Hero";
import { getProjects } from "@/actions/project";
import ProjectCard from "@/components/projects/card/ProjectCard";
import { currentServerUser } from "@/lib/serverAuthState";
import { MessageCircle } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa6";
import { checkGoalStatusAndNotify } from "@/actions/user";
import ImageGallery from "@/components/gallery/Gallery";
import ImageGrid from "@/components/gallery/Gallery";

export const metadata = {
  openGraph: {
    images: ["../opengraph-image.png"], // Path to your static image
  },
};

export default async function Home() {
  const user = await currentServerUser;

  const response = await getProjects();

  const checkGoalStatus = await checkGoalStatusAndNotify(user.id);

  const images = [
    { url: "/1.jpg", alt: "Description 1" },
    { url: "/1.jpg", alt: "Description 2" },
    // ... more images
  ];

  return (
    <>
      <Navbar />
      
      <main className={styles.main}>
        <Hero />
        <ImageGrid />
       
        <section className={`${styles.stats} font-font_poppins`}>
          <div className={styles.statsContainer}>
            <div className={styles.statItem}>
              <div className={styles.number}>500+</div>
              <div className={styles.label}>Lives Impacted</div>
            </div>
            <div className={styles.statItem}>
              <div className={styles.number}>50+</div>
              <div className={styles.label}>Members</div>
            </div>
            <div className={styles.statItem}>
              <div className={styles.number}>1</div>
              <div className={styles.label}>Project Completed</div>
            </div>
            <div className={styles.statItem}>
              <div className={styles.number}>2+</div>
              <div className={styles.label}>Communities Reached</div>
            </div>
          </div>
        </section>

        <section className={styles.projects} id="projects">
          {/* <h1 className={styles.title}>Discover projects impacting Africa</h1> */}
          <div className={styles.main}>
            <div className={styles.boxes}>
              {response?.data?.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
            {/* <Link className={styles.seeMore} href="">See More</Link> */}
          </div>
        </section>

        <section className="w-full max-w-4xl mx-auto px-4 py-8 md:py-16">
          <div className="bg-white rounded-lg shadow-lg p-6 md:p-8">
            <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
              {/* Left side with image */}
              <div className="w-40 md:w-48 flex-shrink-0">
                <div className="relative aspect-square">
                  <Image
                    src="/wmremove-transformed.jpeg"
                    alt="WhatsApp Community"
                    layout="fill"
                    objectFit="contain"
                    className="w-full h-auto"
                  />
                </div>
              </div>

              {/* Right side content */}
              <div className="flex-1 w-full text-center md:text-left md:pl-8 md:border-l-2 md:border-black/30">
                <div className="space-y-6">
                  <div className="space-y-4">
                    <h1 className="text-2xl md:text-2xl font-black tracking-wide text-gray-900">
                      STAY UPDATED ON ALL PROJECTS
                    </h1>
                    <p className="text-base text-gray-800 max-w-md mx-auto md:mx-0">
                      Join our WhatsApp community to get real-time updates and
                      connect with like-minded individuals. Together, we can
                      make a difference!
                    </p>
                    <button
                      className="inline-flex items-center gap-2 px-8 py-3.5
                    bg-[#02505a] hover:bg-[#128C7E] text-white 
                    text-base font-semibold rounded-lg 
                    transition-colors duration-300 mx-auto md:mx-0"
                    >
                      <FaWhatsapp className="w-5 h-5" />
                     <a href="https://chat.whatsapp.com/LF1KiVCeJSXH1hko4Ogtwm"> Join Community</a>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
