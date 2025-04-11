'use client';
import Image from 'next/image';
import services_strategic from '../../../public/services-assets/services-strategic.png';
import services_handson from '../../../public/services-assets/services-handson.png';
import services_innovation from '../../../public/services-assets/services-innovation.png';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useRef } from 'react';
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from 'react-icons/io';

export default function Tech_consulting() {
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
        <h4 className='font-semibold text-3xl'>Tech Consulting</h4>
        <p className='my-5'>
          Navigate the dynamic tech landscape with confidence through our Tech
          Consulting services.
        </p>
      </div>
      <div className='w-full hidden md:grid grid-cols-1 md:grid-cols-3 gap-10'>
        {/* First */}
        <div className='w-full shadow-lg'>
          <div>
            <Image src={services_strategic} alt='digital banking' />
          </div>
          <div className='px-5 h-[250px] relative'>
            <h4 className='my-10 font-semibold text-3xl'>Strategic Guidance</h4>
            <div className='absolute top-0 right-0 pt-[120px] px-5'>
              <p>
                We are here to provide the insights, direction, and expertise
                you need to thrive in a dynamic business landscape.
              </p>
            </div>
          </div>
        </div>
        {/* Second */}
        <div className='w-full shadow-lg '>
          <div>
            <Image src={services_handson} alt='digital banking' />
          </div>
          <div className='px-5 h-[250px] relative'>
            <h4 className='my-10 font-semibold text-3xl'>Hands-On Support</h4>
            <div className='absolute top-0 right-0 pt-[120px] px-5'>
              <p>
                Experience the power of hands-on guidance as we work alongside
                you to bring your boldest ideas to life.
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
      <div className='w-full grid grid-cols-1 md:hidden gap-10 shadow-lg'>
        <Slider ref={slider} {...settings}>
          {/* First */}
          <div className='w-full '>
            <div className='flex justify-center'>
              <Image src={services_strategic} alt='digital banking' />
            </div>
            <div className='px-5 h-[250px] relative flex justify-center'>
              <h4 className='my-10 font-semibold text-3xl'>
                Strategic Guidance
              </h4>
              <div className='absolute top-0 right-0 pt-[120px] px-5'>
                <p>
                  We are here to provide the insights, direction, and expertise
                  you need to thrive in a dynamic business landscape.
                </p>
              </div>
            </div>
          </div>
          {/* Second */}
          <div className='w-full '>
            <div className='flex justify-center'>
              <Image src={services_handson} alt='digital banking' />
            </div>
            <div className='px-5 h-[250px] relative flex justify-center'>
              <h4 className='my-10 font-semibold text-3xl'>Hands-On Support</h4>
              <div className='absolute top-0 right-0 pt-[120px] px-5'>
                <p>
                  Experience the power of hands-on guidance as we work alongside
                  you to bring your boldest ideas to life.
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
