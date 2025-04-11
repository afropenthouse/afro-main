'use client';
import Image from 'next/image';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Link from 'next/link';
import Home_img1 from '../../public/unsplash_sggw4-qDD54.png';

export default function Solutions_main() {
  return (
    <section className='w-full relative bg-primary'>
      <div className='w-full h-[100vh] iphone6:h-[80vh] md:h-[100vh] overflow-hidden'>
        <div className='w-full h-[100vh] iphone6:h-[80vh] md:h-[100vh] relative'>
          <Image
            src={Home_img1}
            alt='home image'
            className='w-full object-cover h-full'
          />
          <div className='h-full w-full absolute top-0 left-0 bg-[#000] opacity-[0.5]'></div>
          <div className='w-full px-5 md:px-0 md:w-[650px] absolute z-1 text-white left-0 bottom-[10vh] iphone6:bottom-32 md:left-[150px] md:bottom-[100px]'>
            <p className='font-normal w-[500px] text-base mb-4'>
              Salami Financial | Solutions
            </p>
            <h1 className='text-2xl md:text-5xl font-bold'>
              Elevate Possibilities with Salami Financial Solutions
            </h1>
            <p className='font-normal w-[500px] text-base my-10'>
              Empowering success through innovative solutions infused with AI
              expertise
            </p>
            <Link href={'/connect-with-us'}>
              <button className='bg-primary w-[160px] h-[54px] text-[#1795D4] rounded-full'>
                <p className='mr-3'>Connect with us</p>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
