"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Home_img1 from "../../../public/bridgewaters/home5.jpg";
import Home_img2 from "../../../public/bridgewaters/home4.jpg";
import Home_img3 from "../../../public/bridgewaters/home1.jpg";
import Home_img4 from "../../../public/bridgewaters/home2-transformed.jpeg";
import Home_img5 from "../../../public/bridgewaters/beautiful-view-construction-site-city-sunset.jpg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Home_Services() {
  const pathname = usePathname();

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
    <section className="w-full relative bg-primary">
      <div className="w-full h-[100vh] iphone6:h-[80vh] md:h-[100vh] overflow-hidden">
        <Slider {...settings}>
          <div className="w-full h-[100vh] iphone6:h-[80vh] md:h-[100vh] relative">
            <Image
              src={Home_img1}
              alt="home image"
              className="w-full object-cover h-full"
            />
            <div className="h-full w-full absolute top-0 left-0 bg-[black] opacity-[0.7]"></div>
            <div className="w-full px-5 md:px-0 md:w-[650px] absolute z-1 text-white left-0 bottom-[10vh] iphone6:bottom-32 md:left-[150px] md:bottom-[100px]">
              <h1 className="text-2xl md:text-5xl font-bold">
                Leading with Integrity in Oil & Gas Solutions
              </h1>

              <p className="font-normal text-base my-10">
                At Bridgewaters Global Services Limited, we are driven by a
                passion for delivering top-tier quality and unmatched client
                satisfaction in every project we undertake.
              </p>

              <Link href="/connect-with-us">
                <button className="bg-primary w-[160px] h-[54px] text-[#1795D4] rounded-full">
                  <p className="mr-3">Get Started</p>
                </button>
              </Link>
            </div>
            {/* <HomeNav_white /> */}
          </div>
          {/* Second slide */}
          <div className="w-full h-[100vh] iphone6:h-[80vh] md:h-[100vh] relative ">
            <Image
              src={Home_img2}
              alt="home image"
              width={500}
              height={500}
              className="w-full object-cover h-full"
            />
            <div className="h-full w-full absolute top-0 left-0 bg-[black] opacity-[0.7]"></div>
            <div className="w-full px-5 md:px-0 md:w-[650px] absolute z-1 text-white left-0 bottom-[10vh] iphone6:bottom-32 md:left-[150px] md:bottom-[100px]">
              <h1 className="text-2xl md:text-5xl font-bold">
                Setting New Standards in Engineering Excellence
              </h1>

              <p className="font-normal text-base my-10">
                Our mission goes beyond traditional boundaries, establishing
                next-generation engineering standards in safety, aesthetics, and
                timely project delivery.
              </p>

              <Link href="/connect-with-us">
                <button className="bg-[#1795D4] w-[160px] h-[54px] text-white rounded-full">
                  <p className="mr-3">Get Started</p>
                </button>
              </Link>
            </div>
          </div>
          {/* 3rd slide */}
          <div className="w-full h-[100vh] iphone6:h-[80vh] md:h-[100vh] relative ">
            <Image
              src={Home_img3}
              alt="home image"
              width={500}
              height={500}
              className="w-full object-cover h-full"
            />
            <div className="h-full w-full absolute top-0 left-0 bg-[black] opacity-[0.7]"></div>
            <div className="w-full px-5 md:px-0 md:w-[650px] absolute z-1 text-white left-0 bottom-[10vh] iphone6:bottom-32 md:left-[150px] md:bottom-[100px]">
              <h1 className="text-2xl md:text-5xl font-bold">
                Passion-Driven, World-Class Service
              </h1>

              <p className="font-normal text-base my-10">
                Dedicated to excellence, our team combines expertise with
                industry-leading partnerships to create world-class solutions
                for oil, gas, and civil construction.
              </p>

              <Link href="/connect-with-us">
                <button className="bg-[#1795D4] w-[160px] h-[54px] text-white rounded-full">
                  <p className="mr-3">Get Started</p>
                </button>
              </Link>
            </div>
          </div>
          {/* 4th slide */}
          <div className="w-full h-[100vh] iphone6:h-[80vh] md:h-[100vh] relative ">
            <Image
              src={Home_img4}
              alt="home image"
              width={500}
              height={500}
              className="w-full object-cover h-full"
            />
            <div className="h-full w-full absolute top-0 left-0 bg-[#004988] opacity-[0.65]"></div>
            <div className="w-full px-5 md:px-0 md:w-[650px] absolute z-1 text-white left-0 bottom-[10vh] iphone6:bottom-32 md:left-[150px] md:bottom-[100px]">
              <h1 className="text-2xl md:text-5xl font-bold">
                Redefining Safety and Environmental Commitment
              </h1>

              <p className="font-normal text-base my-10">
                Safety, environmental stewardship, and human resource
                development are at the core of our operations, ensuring value
                for every stakeholder in our projects.
              </p>

              <Link href="/connect-with-us">
                <button className="bg-[#1795D4] w-[160px] h-[54px] text-white rounded-full">
                  <p className="mr-3">Get Started</p>
                </button>
              </Link>
            </div>
          </div>
          {/* 5th slide */}
          <div className="w-full h-[100vh] iphone6:h-[80vh] md:h-[100vh] relative ">
            <Image
              src={Home_img5}
              alt="home image"
              width={500}
              height={500}
              className="w-full object-cover h-full"
            />
            <div className="h-full w-full absolute top-0 left-0 bg-[black] opacity-[0.7]"></div>
            <div className="w-full px-5 md:px-0 md:w-[650px] absolute z-1 text-white left-0 bottom-[10vh] iphone6:bottom-32 md:left-[150px] md:bottom-[100px]">
              <h1 className="text-2xl md:text-5xl font-bold">
                Excellence in Every Detail
              </h1>

              <p className="font-normal text-base my-10">
                From concrete works to advanced civil engineering, we are
                committed to delivering quality that exceeds expectations, on
                time, and with integrity.
              </p>

              <Link href="/connect-with-us">
                <button className="bg-[#1795D4] w-[160px] h-[54px] text-white rounded-full">
                  <p className="mr-3">Get Started</p>
                </button>
              </Link>
            </div>
          </div>
        </Slider>
      </div>
    </section>
  );
}
