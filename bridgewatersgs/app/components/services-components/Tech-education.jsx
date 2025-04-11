'use client';
import Image from 'next/image';
import services_specialized from '../../../public/services-assets/services-specialized.png';
import services_bootcamp from '../../../public/services-assets/services-bootcamp.png';
import services_company_wide from '../../../public/services-assets/services-company-wide.png';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useRef } from 'react';
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from 'react-icons/io';

export default function Tech_education() {
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
        <h4 className='font-semibold text-3xl'>Tech Education</h4>
        <p className='my-5'>
          Elevate your tech proficiency, whether you're an organization seeking
          customized company training or an individual looking for comprehensive
          tech education. We offer tailored training programs designed to
          empower workforces with the latest tech skills and knowledge.
        </p>
      </div>
      <div className='w-full hidden md:grid grid-cols-1 md:grid-cols-3 gap-10'>
        {/* First */}
        <div className='w-full shadow-lg'>
          <div>
            <Image src={services_specialized} alt='digital banking' />
          </div>
          <div className='px-5 h-[250px] relative'>
            <h4 className='my-10 font-semibold text-3xl'>
              Specialized Tech Courses
            </h4>
            <div className='absolute top-0 right-0 pt-[120px] px-5'>
              <p>
                We are here to guide you through the complexities of tech,
                providing you with the knowledge to excel and lead lead in the
                ever-changing digital landscape.
              </p>
            </div>
          </div>
        </div>
        {/* Second */}
        <div className='w-full shadow-lg '>
          <div>
            <Image src={services_bootcamp} alt='digital banking' />
          </div>
          <div className='px-5 h-[250px] relative'>
            <h4 className='my-10 font-semibold text-3xl'>Coding Bootcamps</h4>
            <div className='absolute top-0 right-0 pt-[120px] px-5'>
              <p>
                From coding to cloud computing, are designed to equip you with
                the expertise that you need.
              </p>
            </div>
          </div>
        </div>
        {/* Third */}
        <div className='w-full shadow-lg '>
          <div>
            <Image src={services_company_wide} alt='digital banking' />
          </div>
          <div className='px-5 h-[250px] relative'>
            <h4 className='my-10 font-semibold text-3xl'>
              Company-Wide Upskilling
            </h4>
            <div className='absolute top-0 right-0 pt-[120px] px-5'>
              <p>
                Our company-wide upskilling programs are designed to empower
                teams reach new heights and drive innovation.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className='w-full grid grid-cols-1 gap-10 md:hidden shadow-lg'>
        <Slider ref={slider} {...settings}>
          {/* First */}
          <div className='w-full '>
            <div className='flex justify-center'>
              <Image src={services_specialized} alt='digital banking' />
            </div>
            <div className='px-5 h-[250px] relative flex justify-center'>
              <h4 className='my-10 font-semibold text-3xl'>
                Specialized Tech Courses
              </h4>
              <div className='absolute top-0 right-0 pt-[120px] px-5'>
                <p>
                  We are here to guide you through the complexities of tech,
                  providing you with the knowledge to excel and lead lead in the
                  ever-changing digital landscape.
                </p>
              </div>
            </div>
          </div>
          {/* Second */}
          <div className='w-full '>
            <div className='flex justify-center'>
              <Image src={services_bootcamp} alt='digital banking' />
            </div>
            <div className='px-5 h-[250px] relative flex justify-center'>
              <h4 className='my-10 font-semibold text-3xl'>Coding Bootcamps</h4>
              <div className='absolute top-0 right-0 pt-[120px] px-5'>
                <p>
                  From coding to cloud computing, are designed to equip you with
                  the expertise that you need.
                </p>
              </div>
            </div>
          </div>
          {/* Third */}
          <div className='w-full '>
            <div className='flex justify-center'>
              <Image src={services_company_wide} alt='digital banking' />
            </div>
            <div className='px-5 h-[250px] relative flex justify-center'>
              <h4 className='my-10 font-semibold text-3xl'>
                Company-Wide Upskilling
              </h4>
              <div className='absolute top-0 right-0 pt-[120px] px-5'>
                <p>
                  Our company-wide upskilling programs are designed to empower
                  teams reach new heights and drive innovation.
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
