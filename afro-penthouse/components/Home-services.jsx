'use client';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Home_img1 from '../public/vibeazy-min.png';
import Home_img2 from '../public/cashwyre.png';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function Home_Services() {
  const pathname = usePathname();

  const settings = {
    dots: false,
    infinite: true,
    speed: 8000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    fade: true,
    pauseOnHover: false,
    easing: 'ease-out',
  };
  return (
    <section className='w-full relative bg-primary'>
      <div className='w-full h-[100vh] iphone6:h-[80vh] md:h-[100vh] overflow-hidden'>
        <Slider {...settings}>
          
          <div className='w-full h-[100vh] iphone6:h-[80vh] md:h-[100vh] relative'>
            <Image
              src={Home_img1}
              alt='home image'
              className='w-full object-cover h-full'
            />
            <div className='h-full w-full absolute top-0 left-0 bg-[#161717ea] opacity-[0.73]'></div>
            <div className='w-full px-5 md:px-0 md:w-[650px] absolute z-1 text-white left-0 bottom-[10vh] iphone6:bottom-32 md:left-[150px] md:bottom-[100px]'>
              <h1 className='text-2xl md:text-5xl font-bold'>
              Building Products  <br /> Impacting the world
              </h1>
              <p className='font-normal text-base my-10' style={{
                visibility: 'hidden'
              }}>
                We are dedicated to creating a visionary future through the
                power of data analytics. Our advanced solutions in predictive
                logistic dashboard and demand forecasting brings unprecedented
                insights to the financial industry
              </p>
              {/* <Link href='/sign-up'>
                <button className='bg-primary w-[160px] h-[54px] text-[#1795D4] rounded-full'>
                  <p className='mr-3'>Get Started</p>
                </button>
              </Link> */}
            </div>
            {/* <HomeNav_white /> */}
          </div>
          <div className='w-full h-[100vh] iphone6:h-[80vh] md:h-[100vh] relative'>
            <Image
              src={Home_img2}
              alt='home image'
              className='w-full object-cover h-full'
            />
            <div className='h-full w-full absolute top-0 left-0 bg-[#161717ea] opacity-[0.73]'></div>
            <div className='w-full px-5 md:px-0 md:w-[650px] absolute z-1 text-white left-0 bottom-[10vh] iphone6:bottom-32 md:left-[150px] md:bottom-[100px]'>
              <h1 className='text-2xl md:text-5xl font-bold'>
              Building Products  <br /> Impacting the world
              </h1>
              <p className='font-normal text-base my-10' style={{
                visibility: 'hidden'
              }}>
                We are dedicated to creating a visionary future through the
                power of data analytics. Our advanced solutions in predictive
                logistic dashboard and demand forecasting brings unprecedented
                insights to the financial industry
              </p>
              {/* <Link href='/sign-up'>
                <button className='bg-primary w-[160px] h-[54px] text-[#1795D4] rounded-full'>
                  <p className='mr-3'>Get Started</p>
                </button>
              </Link> */}
            </div>
            {/* <HomeNav_white /> */}
          </div>
          {/* Second slide */}
         
        </Slider>
      </div>
    </section>
  );
}
