"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/Home.scss";
import { motion } from "framer-motion";

export default function Home_Services() {
  const pathname = usePathname();

  const settings = {
    dots: false,
    infinite: true,
    speed: 4000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    fade: true,
    pauseOnHover: false,
    easing: "ease-out",
  };
  return (
    <section className="w-full relative bg-primary">
      <div className="w-full">
        <Slider {...settings}>
        <div className="slider slider-one relative">
            <div className="background-image absolute inset-0">
             
              <Image
                src="/images/images/Hero/chicken-skewers-with-slices-sweet-peppers-dill.webp"
                layout="fill"
                objectFit="cover"
                alt="Background"
              />
            </div>
            <div className="overlay absolute inset-0 bg-black opacity-30"></div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{
                duration: 1.0,
                ease: [0.25, 0.1, 0.25, 1],
              }}
              className="slider-text relative z-10 text-white p-8"
            >
              <h1 className="">Find Restaurants</h1>
              <h1 className="">Within Your Budget</h1>
             
              
              {/* original */}
              <div className="links flex space-x-4">
                <Link href="https://apps.apple.com/ng/app/vibeazy/id6739540165">
                  <Image
                    width={120}
                    height={40}
                    src="/images/images/Hero/app store.png"
                    alt="App Store"
                  />
                </Link>
                <Link href="https://play.google.com/store/apps/details?id=com.vibeazyflex.app">
                  <Image
                    width={120}
                    height={40}
                    src="/images/images/Hero/google play.png"
                    alt="Google Play"
                  />
                </Link>
              </div>
            </motion.div>
          </div>
          <div className="slider slider-one relative">
            <div className="background-image absolute inset-0">
             
              <Image
                src="/images/images/Hero/background1.webp"
                layout="fill"
                objectFit="cover"
                alt="Background"
              />
            </div>
            <div className="overlay absolute inset-0 bg-black opacity-30"></div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{
                duration: 1.0,
                ease: [0.25, 0.1, 0.25, 1],
              }}
              className="slider-text relative z-10 text-white p-8"
            >
              <h1 className="">Find Restaurants</h1>
              <h1 className="">Within Your Budget</h1>
            
            
              
              {/* original here */}
              <div className="links flex space-x-4">
                <Link href="https://apps.apple.com/ng/app/vibeazy/id6739540165">
                  <Image
                    width={120}
                    height={40}
                    src="/images/images/Hero/app store.png"
                    alt="App Store"
                  />
                </Link>
                <Link href="https://play.google.com/store/apps/details?id=com.vibeazyflex.app">
                  <Image
                    width={120}
                    height={40}
                    src="/images/images/Hero/google play.png"
                    alt="Google Play"
                  />
                </Link>
              </div>
            </motion.div>
          </div>
          <div className="slider slider-one relative">
            <div className="background-image absolute inset-0">
             
              <Image
                src="/images/images/Hero/landscape2.png"
                layout="fill"
                objectFit="cover"
                alt="Background"
              />
            </div>
            <div className="overlay absolute inset-0 bg-black opacity-50"></div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{
                duration: 1.0,
                ease: [0.25, 0.1, 0.25, 1],
              }}
              className="slider-text relative z-10 text-white p-8"
            >
               <h1 className="">Pool Funds Using</h1>
               <h1 className="">Our Group Wallet</h1>
              {/* <p className="text-xl mb-6">
                Find nice restaurants within your budget.
              </p> */}
            
              
              {/* original */}
              <div className="links flex space-x-4">
                <Link href="https://apps.apple.com/ng/app/vibeazy/id6739540165">
                  <Image
                    width={120}
                    height={40}
                    src="/images/images/Hero/app store.png"
                    alt="App Store"
                  />
                </Link>
                <Link href="https://play.google.com/store/apps/details?id=com.vibeazyflex.app">
                  <Image
                    width={120}
                    height={40}
                    src="/images/images/Hero/google play.png"
                    alt="Google Play"
                  />
                </Link>
              </div>
            </motion.div>
          </div>
         
         
         
        </Slider>
      </div>
    </section>
  );
}



