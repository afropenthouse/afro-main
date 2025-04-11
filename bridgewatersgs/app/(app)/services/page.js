import Image from 'next/image';
import services_image from '../../../public/services-assets/services-services.png';
import Finance_technology from '../../components/services-components/Finance-technology';
// import Tech_education from '../../components/services-components/Tech-education';
// import Tech_consulting from '../../components/services-components/Tech-consulting';
// import Oil_gas from '../../components/services-components/Oil-gas';
import Home_next_step from '../../../public/home-assets/home-next_step.png';
import Link from 'next/link';

export default function Home() {
  return (
    <main className='pt-[15vh]'>
      <section className='w-full bg-white lg:pt-20 px-5 lg:px-[50px]'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-10'>
          <div>
            <p className='text-xl font-normal'>Services</p>
            <h1 className='text-3xl lg:text-5xl font-bold my-8 lg:leading-[60px]'>
              Unlocking Excellence{' '}
              <span className='block'>through Topnotch</span>
              <span className='block'>Services</span>
            </h1>
            <p className='text-base'>
              BGS LIMITED provides professional services in Engineering, Civil construction, Global Procurement of Engineering Materials/Equipment, Project Management and Manpower Services.
            </p>
            <Link href='/connect-with-us'>
              <button className='w-[160px] h-[54px] mt-8 bg-[#1795D4] rounded-full text-white'>
                Connect with us
              </button>
            </Link>
          </div>
          <div className='w-full'>
            <Image
              src={services_image}
              alt='our services'
              className='object-cover w-full lg:min-h-[465px]'
            />
          </div>
        </div>
      </section>
      <Finance_technology />
      {/* <Tech_education />
      <Tech_consulting />
      <Oil_gas /> */}
      <section className='w-full px-5 md:px-[50px] bg-[#E8F4FB] grid grid-cols-1 md:grid-cols-5 pb-10 md:pb-0 mt-10'>
        <div className='md:col-span-1 py-[50px] md:py-0 px-5 md:px-0'>
          <Image src={Home_next_step} alt='home image' className='mx-auto' />
        </div>
        <div className='md:col-span-4  flex items-center justify-center w-full '>
          <div className='w-full max-w-[650px] md:mx-10 flex justify-center items-center flex-col md:block'>
            <p className='mb-10'>
              Ready to take the next step towards ensuring business growth? We're eager to discuss how we can tailor our solutions to your specific needs.
            </p>
            <Link href='connect-with-us'>
              <button className='bg-[#1795D4] rounded-full h-[54px] w-[160px] text-white md:mr-5 mb-5 md:mb-0'>
                Connect with Us
              </button>
            </Link>
            {/* <Link href='connect-with-us'>
              <button className='bg-transparent rounded-full border border-black h-[54px] w-[210px]'>
                Connect with Us
              </button>
            </Link> */}
          </div>
        </div>
      </section>
    </main>
  );
}
