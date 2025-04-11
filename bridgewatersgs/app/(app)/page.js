'use client';
import Image from 'next/image';
import Home_Services from '../components/home-components/Home-services';
import Home_fintech from '../../public/bridgewaters/review1.jpg';
import Engineering2_project from '../../public/bridgewaters/home2-transformed.jpeg';
import Home_ai from '../../public/bridgewaters/240_F_857175861_bHEyN50iehkoYBEKcHxu0nN2weoIDtKe.jpg';
import Home_consult from '../../public/bridgewaters/hands-holding-puzzle-business-problem-solving-concept.jpg';
import Home_scalability from '../../public/home-assets/home-scalability.png';
import Home_predictive from '../../public/home-assets/home-predict.png';
import Home_box from '../../public/home-assets/home-box.png';
import Home_analysis from '../../public/home-assets/home-analysis.png';
import Home_continuous from '../../public/home-assets/home-continuous.png';
import Home_partnership from '../../public/home-assets/home-partnership.png';
import Home_bulb from '../../public/home-assets/home-bulb.png';
import Security from '../../public/bridgewaters/dragon-glass.jpg'
import Security2 from '../../public/bridgewaters/drangon 2.png'
import Home_expertise from '../../public/home-assets/home-expertise.png';
import Home_customer_centric from '../../public/home-assets/home-customer-centric.png';
import Home_line from '../../public/home-assets/home-line.png';
import Home_next_step from '../../public/home-assets/home-next_step.png';
import Home_machine_learning from '../../public/home-assets/home-machine_learning.png';
import Home_python_image from '../../public/home-assets/home-python_image.png';
import home_python_data from '../../public/home-assets/home-python_data.png';
import home_data_image from '../../public/home-assets/home-data_image.png';
import home_cloud_academy from '../../public/bridgewaters/vertical-shot-crane-lifting-white-boat-pier.jpg';
import home_predictive_analytic from '../../public/bridgewaters/illustration-construction-site.jpg';
import Engineering_project from '../../public/bridgewaters/african-american-people-looking-supplies-list-pc-working-with-computer-check-inventory-logistics-employees-organizing-merchandise-shelves-warehouse-space-handheld-shot.jpg'
// import { RiBox3Line } from 'react-icons/ri';
import { BsBox } from 'react-icons/bs';
import health_icon from '../../public/home-assets/health-icon.svg';
import { Icon } from '@iconify/react';
import Link from 'next/link';

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
                Engineering Excellence
              </h1>
              <p className='text-base mt-3'>
                Bridgewaters Global Services Limited delivers a comprehensive suite of civil construction and minor mechanical works, combining precision and speed to meet the highest standards. From foundation works to HDPE water piping, we ensure each project is executed seamlessly with attention to detail, safety, and reliability.
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
                Trusted Procurement Solutions
              </h1>
              <p className='text-base mt-3'>
                Our global procurement services bring essential engineering materials and equipment right where they’re needed, fast. Bridgewaters Global Services specializes in sourcing and delivering quality steel pipes, fittings, and spares, ensuring the oil and gas, energy, and construction sectors have reliable access to vital resources.
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
        <div className='w-full grid grid-cols-1 md:grid-cols-2 md:h-[370px] mt-10 md:mt-20 overflow-hidden'>
          <div className='text-black block md:flex items-center md:pr-20'>
            <div className='w-full'>
              <h1 className='text-2xl md:text-3xl font-semibold'>
                Strategic Partnerships
              </h1>
              <p className='text-base mt-3'>
                In collaboration with industry leaders, we offer robust engineering services, mooring control systems, and fabrication solutions. Our partnerships with ACT Nigeria, WEAM Engineering, and Mampaey Offshore Industries enhance our capabilities, enabling us to deliver world-class solutions and maintain a strong foothold in the industry.
              </p>
            </div>
          </div>
          <Image
            src={Home_consult}
            alt='home image'
            className='w-full object-cover md:h-full mt-5 md:mt-0'
          />
        </div>
      </section>
      {/* Key Features */}
      {/* <section className='pt-20 px-5 md:px-[50px]'>
        <h1 className='font-bold text-2xl md:text-3xl mb-10 text-[#004785]'>
          Key Features
        </h1>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
          <div className='w-full flex flex-col items-center bg-[#EFFCF9] py-5 px-5 md:px-10'>
            <div className=''>
              <Image
                src={Home_scalability}
                alt='home image'
                className='w-full mt-5 md:mt-0'
              />
            </div>
            <div className='w-full flex flex-col items-center'>
              <h3 className='text-3xl font-semibold mt-3'>Scalability</h3>
              <p className='w-full text-center text-base mt-5'>
                Whether you're a small startup or a large enterprise, our demand
                forecasting solutions can scale with your business. We grow with
                you, ensuring that you always have the right tools at your
                disposal.
              </p>
            </div>
          </div>
          <div className='w-full flex flex-col items-center bg-[#F9F4FE] py-5 px-5 md:px-10'>
            <div className=''>
              <Image
                src={Home_predictive}
                alt='home image'
                className='w-full mt-5 md:mt-0'
              />
            </div>
            <div className='w-full flex flex-col items-center'>
              <h3 className='text-3xl font-semibold mt-3'>
                Predictive Analytics
              </h3>
              <p className='w-full text-center text-base mt-5'>
                Our algorithms are finely tuned to ensure that your forecasts
                are as precise as possible. This means fewer surprises and
                better control over your operations.
              </p>
            </div>
          </div>
        </div>
      </section> */}
      {/* Product Development */}
      {/* <section className='px-5 vsm:px-10 md:px-[50px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 py-20'>
        <div className='bg-[#FCDDEC] px-5 py-10 hover:bg-[#1795D4] hover:text-white transition delay-150 duration-300 ease-in-out'>
        
          <BsBox className='text-8xl' />
          <h4 className='my-3 text-lg font-semibold'>Product Development</h4>
          <p className='text-base'>
            Our product development journey is driven by a commitment to
            providing outstanding solutions. We tirelessly work to create
            applications that empower businesses and individuals to excel.
          </p>
        </div>
        <div className='bg-[#D7E2FF] px-5 py-10 hover:text-white hover:bg-[#751DBA] transition delay-150 duration-300 ease-in-out'>
          <Icon
            icon='healthicons:health-data-security'
            width='88'
            height='88'
          />
          <h4 className='my-3 text-lg font-semibold'>Data Analytics</h4>
          <p className='text-base'>
            Data analytics is our compass in the data-driven world. It's not
            just about numbers; it's about uncovering the stories they tell and
            using those insights to make informed decisions that drive success.
          </p>
        </div>
        <div className='bg-[#FFE70F] px-5 py-10 hover:bg-[#4285F4] hover:text-white transition delay-150 duration-300 ease-in-out'>
        
          <Icon icon='mdi:handshake-outline' width='88' height='88' />
          <h4 className='my-3 text-lg font-semibold'>
            Partnership & Collaboration
          </h4>
          <p className='text-base'>
            We understand that great achievements are rarely accomplished alone.
            That's why we value partnerships and collaboration as the driving
            force behind innovation and success.
          </p>
        </div>
        <div className='bg-[#D7E2FF] px-5 py-10 hover:bg-[#F11533] hover:text-white transition delay-150 duration-300 ease-in-out'>
         
          <Icon icon='carbon:partnership' width='88' height='88' />
          <h4 className='my-3 text-lg font-semibold'>Continuous Innovation</h4>
          <p className='text-base'>
            Innovation isn't just a buzzword; it's our way of life. We believe
            that by continuously pushing boundaries and embracing change, we
            ensure that our solutions remain at the forefront of progress.
          </p>
        </div>
      </section> */}
      <section className='w-full relative min-h-[500px]'>
        <h3 className='font-bold text-3xl text-[#004785] ml-5 md:ml-[50px] pt-7'>
          Why Choose Us?
        </h3>
        <div className='relative'>
          <Image
            src={Home_line}
            alt='home line'
            className='absolute z-10 top-0 left-0-0'
          />
          <div className='w-full relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:grid-rows-3 my-10 gap-10 lg:abso-lute top-0 z-30 px-5 md:px-[50px]'>
            <div className='w-full flex justify-center md:justify-normal md:row-start-1 md:row-span-2'>
              <div className='max-w-[380px] bg-[#F9F9F9] px-5 py-10 rounded-lg'>
                <Image src={Home_bulb} alt='box icon' className='' />
                <h4 className='text-xl font-semibold py-3'>Unmatched Expertise</h4>
                <p className='text-base'>
                  With over 20 years in the industry, our experienced team brings unparalleled knowledge and skill to every project. At Bridgewaters Global Services, we are committed to exceeding expectations with top-tier engineering and construction solutions.
                </p>
              </div>
            </div>
            <div className='w-full md:relative flex justify-center row-start-2 row-span-2'>
              <div className='grid'>
                <div className='max-w-[380px] bg-[#1795D4] px-5 py-10 rounded-lg lg:abso-lute md:-bottom-[50%] place-self-center'>
                  <Image src={Home_expertise} alt='box icon' className='' />
                  <h4 className='text-xl font-semibold py-3'>Commitment to Safety and Quality</h4>
                  <p className='text-base'>
                    We prioritize safety, quality, and environmental responsibility in all operations. Our strict adherence to engineering standards ensures safe, high-quality outcomes that build trust and reliability with every client.


                  </p>
                </div>
              </div>
            </div>
            <div className='w-full flex justify-center md:justify-start lg:justify-end md:row-span-2'>
              <div className='max-w-[380px] bg-[#F9F9F9] px-5 py-10 rounded-lg'>
                <Image
                  src={Home_customer_centric}
                  alt='box icon'
                  className=''
                />
                <h4 className='text-xl font-semibold py-3'>
                  Strong Financial Foundation
                </h4>
                <p className='text-base'>
                  Backed by a robust financial base and strategic banking partnerships, we have the capacity to handle large-scale projects with confidence. Our financial stability allows us to deliver projects on time and maintain a high level of trust and integrity in our relationships.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Our solutions */}
      <section className='px-5 md:px-[50px] py-10'>
        <h3 className='font-bold text-3xl text-[#004785] mb-10'>
          Our Services
        </h3>
        <div className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
          {/* First */}
          <div className='w-full shadow-lg pb-5'>
            <div className='w-full overflow-hidden h-[350px]'>
              <Image
                src={home_predictive_analytic}
                alt='home image'
                className='w-full h-full object-cover'
              />
            </div>
            <div className='px-5 md:h-[270px]  lg:h-[300px] xl:h-[250px] relative'>
              <h4 className='my-5 text-2xl font-semibold'>
                Civil Construction
              </h4>
              <p>
                From permanent buildings to temporary site accommodations, we handle all aspects of civil works. Our expertise spans concrete pavements, asphalt roads, piling, jetty construction, and precision equipment installations, meeting the complex needs of the oil, gas, and construction sectors.
              </p>
              <div className='w-full md:absolute left-0 bottom-0 flex justify-start md:px-5'>

              </div>
            </div>
          </div>
          <div className='w-full shadow-lg pb-5'>
            <div className='w-full overflow-hidden h-[350px]'>
              <Image
                src={Engineering2_project}
                alt='home image'
                className='w-full h-full object-cover'
              />
            </div>
            <div className='px-5 md:h-[270px]  lg:h-[300px] xl:h-[250px] relative'>
              <h4 className='my-5 text-2xl font-semibold'>
                Minor Mechanical Works
              </h4>
              <p>
                From permanent buildings to temporary site accommodations, we handle all aspects of civil works. Our expertise spans concrete pavements, asphalt roads, piling, jetty construction, and precision equipment installations, meeting the complex needs of the oil, gas, and construction sectors.
              </p>
              <div className='w-full md:absolute left-0 bottom-0 flex justify-start md:px-5'>

              </div>
            </div>
          </div>
          {/* Second */}
          <div className='w-full shadow-lg pb-5'>
            <div className='w-full overflow-hidden h-[350px]'>
              <Image
                src={home_predictive_analytic}
                alt='home image'
                className='w-full h-full object-cover'
              />
            </div>
            <div className='px-5 md:h-[270px] lg:h-[300px] xl:h-[250px] w-full relative'>
              <h4 className='my-5 text-2xl font-semibold'>Engineering Project Procurement</h4>
              <p>
                Supplying quality materials for critical projects, we procure and deliver essential engineering resources. Our inventory includes carbon and stainless steel pipes, fittings, mechanical spares, and more, ensuring your project requirements are met with reliability and speed.
              </p>
              <div className='w-full md:absolute left-0 bottom-0 flex justify-start md:px-5'>

              </div>
            </div>
          </div>
          {/* third */}
          <div className='w-full shadow-lg pb-5'>
            <div className='w-full overflow-hidden h-[350px]'>
              <Image
                src={home_cloud_academy}
                alt='home image'
                className='w-full h-full object-cover'
              />
            </div>
            <div className='px-5 md:h-[270px] lg:h-[300px] xl:h-[250px] w-full relative'>
              <h4 className='my-5 text-2xl font-semibold'>Marine Equipment Supply</h4>
              <p>
                Supporting marine operations with comprehensive equipment rental options, we provide tugboats, watercraft, piling equipment, and lifting machinery. Our services ensure you have access to trusted, ready-to-use marine resources for any operation.
              </p>
              <div className='w-full md:absolute left-0 bottom-0 flex justify-start md:px-5'>

              </div>
            </div>
          </div>
          {/* fourth */}
          <div className='w-full shadow-lg'>
            <div className='w-full overflow-hidden h-[350px]'>
              <Image
                src={Security}
                alt='home image'
                className='w-full h-full object-cover'
              />
            </div>
            <div className='px-5 md:h-[270px] lg:h-[250px] xl:h-[250px] w-full relative'>
              <h4 className='my-5 text-2xl font-semibold'>Security Equipment</h4>
              <p className='pb-5'>
                Enhancing site security with bulletproof doors, safety containment rooms, and advanced fencelines, we deliver tailored installations that protect people and assets. Trust our secure solutions to safeguard your infrastructure effectively and efficiently.
              </p>
            </div>
          </div>
          <div className='w-full shadow-lg'>
            <div className='w-full overflow-hidden h-[350px]'>
              <Image
                src={Security2}
                alt='home image'
                className='w-full h-full object-cover'
              />
            </div>
            <div className='px-5 md:h-[270px] lg:h-[250px] xl:h-[250px] w-full relative'>
              <h4 className='my-5 text-2xl font-semibold'>Security Equipment Installations</h4>
              <p className='pb-5'>
                Enhancing site security with bulletproof doors, safety containment rooms, and advanced fencelines, we deliver tailored installations that protect people and assets. Trust our secure solutions to safeguard your infrastructure effectively and efficiently.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Next step */}
      <section className='w-full px-5 md:px-[50px] bg-[#fffdd0] grid grid-cols-1 md:grid-cols-5 pb-10 md:pb-0'>
        <div className='md:col-span-1 py-[50px] md:py-0 px-5 md:px-0 w-full'>
          <Image src={Home_next_step} alt='home image' className=' mx-auto' />
        </div>
        <div className='md:col-span-4  flex items-center justify-center w-full '>
          <div className='w-full max-w-[650px] md:mx-10 flex justify-center items-center flex-col md:block'>
            <p className='mb-10'>
              Ready to elevate your projects with unparalleled engineering and procurement expertise? Let’s connect and explore how Bridgewaters Global Services Limited can deliver tailored solutions that meet your unique industry demands.
            </p>
            <Link href='/connect-with-us'>
              <button className='bg-[#1795D4] rounded-full h-[54px] w-[160px] text-white md:mr-5 mb-5 md:mb-0'>
                Get Started
              </button>
            </Link>

          </div>
        </div>
      </section>
    </main>
  );
}
