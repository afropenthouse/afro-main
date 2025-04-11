'use client';
import Image from 'next/image';
import Home_Services from '@/components/Home-services';
import Home_ai from '../public/vibeazy-min.png';
import Home_fintech from '../public/cashwyre.png';

export default function Home() {
  return (
    <main className='w-full'>
      <Home_Services />
      <section className='w-full px-5 md:px-[50px] pt-10'>
        {/* First content */}
        <div className='w-full grid grid-cols-1 md:grid-cols-2 md:h-[370px] overflow-hidden'>
          <div className='text-black flex items-center md:pr-20'>
            <div className='w-full'>
              <h1 className='text-2xl md:text-3xl font-semibold'>
                Vibeazy
              </h1>
              <p className='text-base mt-3'>
                Embrace the future with our AI-driven predictive analytics
                dashboard. Harness the power of data to anticipate trends,
                mitigate risks, and seize opportunities. Let data be your guide
                to financial excellence and prosperity.
              </p>
            </div>
          </div>
          <Image
            src={Home_ai}
            alt='home image'
            className='w-full object-cover md:h-full mt-5 md:mt-0'
          />
        </div>
        {/* Second content */}
        <div className='w-full grid grid-cols-1 md:grid-cols-2 md:h-[370px] mt-10 md:mt-20 '>
          <Image
            src={Home_fintech}
            alt='home image'
            className='w-full object-cover h-full hidden md:block'
          />
          <div className='text-black flex items-center md:pl-20'>
            <div className='w-full'>
              <h1 className='text-2xl md:text-3xl font-semibold'>
                Cashwyre
              </h1>
              <p className='text-base mt-3'>
                We specialize in creating tailored financial applications that
                bring your ideas to life.
                <span className='block'>
                  Join us in shaping the financial future you envision,
                </span>
              </p>
            </div>
          </div>
          <Image
            src={Home_fintech}
            alt='home image'
            className='w-full md:hidden mt-5 md:mt-0'
          />
        </div>
        {/* Third content */}
        
      </section>
      {/* Key Features */}
      
      {/* Product Development */}
     
      {/* Our solutions */}
     
      {/* Next step */}
    
      {/* Everyday technology */}
     
    </main>
  );
}
