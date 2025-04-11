'use client';
import Image from 'next/image';
import services_safety from '../../../public/services-assets/services-safety.png';
import services_asset from '../../../public/services-assets/services-asset-management.png';
import services_innovation from '../../../public/services-assets/services-innovation.png';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useRef } from 'react';
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from 'react-icons/io';

export default function Oil_gas() {
  const slider = useRef();
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    fade: false,
    pauseOnHover: false,
    easing: 'ease-out',
    swipeToSlide: false,
  };
  return (
    <section className='md:pt-20 pb-10 px-5 md:px-[50px]'>
      <div className='max-w-[741px]'>
        <h4 className='font-semibold text-3xl'>Oil and Gas</h4>
        <p className='my-5'>
          Empower your presence in the ever-evolving oil and gas industry with
          our specialized services. We stand alongside you as steadfast allies
          in achieving success within the oil and gas realm. Together, we
          navigate the distinctive challenges and seize opportunities to propel
          your business forward in this dynamic industry.
        </p>
      </div>
      <div className='w-full hidden md:grid grid-cols-1 md:grid-cols-3 gap-10'>
        {/* First */}
        <div className='w-full shadow-lg'>
          <div>
            <Image src={services_safety} alt='digital banking' />
          </div>
          <div className='px-5 h-[250px] relative'>
            <h4 className='my-10 font-semibold text-3xl'>Safety Protocols</h4>
            <div className='absolute top-0 right-0 pt-[120px] px-5'>
              <p>
                Join us in our unwavering dedication to implementing and
                enhancing safety protocols that set industry standards.
              </p>
            </div>
          </div>
        </div>
        {/* Second */}
        <div className='w-full shadow-lg '>
          <div>
            <Image src={services_asset} alt='digital banking' />
          </div>
          <div className='px-5 h-[250px] relative'>
            <h4 className='my-10 font-semibold text-3xl'>Asset Management</h4>
            <div className='absolute top-0 right-0 pt-[120px] px-5'>
              <p>
                Our experts are here to guide you on a path of asset
                optimization and sustainable success.
              </p>
            </div>
          </div>
        </div>
        {/* Third */}
        <div className='w-full shadow-lg '>
          <div>
            <Image src={services_innovation} alt='digital banking' />
          </div>
          <div className='px-5 h-[250px] relative'>
            <h4 className='my-10 font-semibold text-3xl'>Innovation</h4>
            <div className='absolute top-0 right-0 pt-[120px] px-5'>
              <p>
                Together, we will roll up our sleeves and turn your vision into
                reality, one idea at a time.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className='w-full grid grid-cols-1 md:grid-cols-3 gap-10 shadow-lg md:hidden'>
        <Slider ref={slider} {...settings}>
          {/* First */}
          <div className='w-full '>
            <div className='flex justify-center'>
              <Image src={services_safety} alt='digital banking' />
            </div>
            <div className='px-5 h-[250px] relative flex justify-center'>
              <h4 className='my-10 font-semibold text-3xl'>Safety Protocols</h4>
              <div className='absolute top-0 right-0 pt-[120px] px-5'>
                <p>
                  Join us in our unwavering dedication to implementing and
                  enhancing safety protocols that set industry standards.
                </p>
              </div>
            </div>
          </div>
          {/* Second */}
          <div className='w-full '>
            <div className='flex justify-center'>
              <Image src={services_asset} alt='digital banking' />
            </div>
            <div className='px-5 h-[250px] relative flex justify-center'>
              <h4 className='my-10 font-semibold text-3xl'>Asset Management</h4>
              <div className='absolute top-0 right-0 pt-[120px] px-5'>
                <p>
                  Our experts are here to guide you on a path of asset
                  optimization and sustainable success.
                </p>
              </div>
            </div>
          </div>
          {/* Third */}
          <div className='w-full '>
            <div className='flex justify-center'>
              <Image src={services_innovation} alt='digital banking' />
            </div>
            <div className='px-5 h-[250px] relative flex justify-center'>
              <h4 className='my-10 font-semibold text-3xl'>Innovation</h4>
              <div className='absolute top-0 right-0 pt-[120px] px-5'>
                <p>
                  Together, we will roll up our sleeves and turn your vision
                  into reality, one idea at a time.
                </p>
              </div>
            </div>
          </div>
        </Slider>
      </div>
      <div className='flex justify-center mt-10 md:hidden'>
        <button
          onClick={() => slider?.current?.slickPrev()}
          className='rounded-full border border-[#1277AA] text-[#1277AA] mr-5'
        >
          <IoIosArrowRoundBack className='text-[#1277AA] text-4xl' />
        </button>
        <button
          onClick={() => slider?.current?.slickNext()}
          className='rounded-full border border-[#1277AA] ml-5'
        >
          <IoIosArrowRoundForward className='text-[#1277AA] text-4xl' />
        </button>
      </div>
    </section>
  );
}
