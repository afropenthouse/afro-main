"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./styles.scss";
import { motion } from "framer-motion";

import { Bokor } from "next/font/google";
import { Mukta_Vaani } from "next/font/google";
import { Poppins } from "next/font/google";
import { useModalStore } from "@/store";

const bokor = Bokor({
  subsets: ['latin'],
  weight: '400'
})

const mukta = Mukta_Vaani({
  subsets: ['latin'],
  weight: ["200", '300', '400', '500', '600', '700', '800']
})

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
})
export default function Home_Services() {
  const pathname = usePathname();
  const { ispaymentModalOpen, toggleIspaymentModalOpen } = useModalStore();

  const handleGiveNow = () => {
      toggleIspaymentModalOpen();
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    fade: true,
    pauseOnHover: false,
    easing: "ease-out",
  };
  return (
    <section className="w-full relative h-full">
      <div className="w-full">
        <Slider {...settings}>
          <div className="slider slider-one relative">
            <div className="background-image absolute inset-0">
              <Image
                src="/background.jpg"
                layout="fill"
                objectFit="cover"
                alt="Background"
              />
            </div>
            <div className="overlay absolute inset-0 bg-black opacity-30"></div>
            <motion.div className='sliderText1 relative z-10 text-white p-8' initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{
                duration: 1.0,
                ease: [0.25, 0.1, 0.25, 1],
              }}>
              <div className={`words ${poppins.className}`}>
                <h1 className='htext1'>LET'S</h1>
                <h1 className='htext2'>IMPACT</h1>
                <h1 className='hText3'>AFRICA</h1>
                <h1 className='htext4'>TOGETHER</h1>
              </div>
              <div className='paragraph font-mukta'>
                <h2 className={`${mukta.className}`}>Discover & give to projects impacting Africa</h2>
              </div>
              <button onClick={handleGiveNow} className='button font-font_poppins' id="about">
                Give Now
              </button>
            </motion.div>
          </div>
         
        </Slider>
      </div>
    </section>
  );
}
