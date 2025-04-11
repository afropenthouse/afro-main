import Image from 'next/image';
import products_containers from '../../../public/products-assets/products-containers.png';
import products_chart from '../../../public/products-assets/products-chart.png';
import products_pieChart from '../../../public/products-assets/products-pieChart.png';
import products_barChart from '../../../public/products-assets/products-barChart.png';
import products_analysis from '../../../public/products-assets/products-analysis.png';
import products_getStarted from '../../../public/products-assets/products-getStarted.png';
import Link from 'next/link';

export default function Home() {
  return (
    <main className='pt-[10vh] md:pt-[15vh]'>
      <section className='bg-[#1795D4] pt-20 text-white pb-[100px] md:pb-[200px]'>
        <div className='grid grid-cols-1 md:grid-cols-2 px-5 md:px-[50px] gap-x-20'>
          <div>
            <h4>Salami Financial | Product</h4>
            <h1 className='font-bold text-3xl md:text-5xl mt-10 md:leading-[60px]'>
              Predictive Analytics <span>Dashboard and Platform</span>
              <span> for Supply Chain</span>
            </h1>
          </div>
          <div>
            <p className='text-base mt-[50px]'>
              A game-changer in optimizing your company's logistics and supply
              chain operations. This advanced platform harnesses the synergy of
              your internal data, external logistics and supply chain data,
              providing unparalleled insights and foresight into your entire
              supply chain ecosystem.
            </p>
          </div>
        </div>
      </section>
      <section className='w-full h-[200px] vsm:h-[355px] md:h-[427px] lg:h-[570px] relative'>
        <Image
          src={products_containers}
          alt='shipping container image'
          className='w-full h-full'
        />
        <div className='w-full absolute top-0 flex'>
          <div className='relative flex w-full'>
            <div className='absolute left-0 top-0 md:-top-[20px] lg:-top-[60px] w-[25%]'>
              <Image
                src={products_chart}
                alt='shipping container image'
                className=''
              />
            </div>
            <div className='absolute left-[25%] -top-[20px] md:-top-[70px] lg:-top-[100px] w-[27%]'>
              <Image
                src={products_pieChart}
                alt='shipping container image'
                className=''
              />
            </div>
            <div className='absolute left-[52%] -top-[50px] md:-top-[100px] lg:-top-[150px] w-[47.5%]'>
              <Image
                src={products_barChart}
                alt='shipping container image'
                className=''
              />
            </div>
          </div>
        </div>
      </section>
      <section className='pt-10 md:px-[50px]'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-x-20 py-10 mb-10 px-5 md:px-0'>
          <div>
            <h4 className='font-semibold text-3xl'>
              Unlocks the Hidden Potential Within Your Data Streams
            </h4>
          </div>
          <div className='mt-10 md:mt-0'>
            <p>
              Our platform empowers you to make data-driven decisions that drive
              efficiency, precision, and growth. From demand forecasting to
              route optimization and risk mitigation, it equips you to navigate
              supply chain complexities with confidence.
            </p>
          </div>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-x-20 py-10 bg-[#FEF0F1]'>
          <div className='px-5 md:p-10 md:flex md:items-center'>
            <Image
              src={products_analysis}
              alt='shipping container image'
              className='md:h-[80%]'
            />
          </div>
          <div className='m-5 p-5 md:m-10 bg-white py-1'>
            <h4 className='my-10 font-semibold text-3xl'>
              Adapt to Changing Conditions
            </h4>
            <p className=''>
              In a world where supply chain disruptions are the norm, our
              Predictive Analytics Platform keeps you one step ahead. It helps
              you identify bottlenecks, anticipate market shifts, and
              proactively adapt to changing conditions, ensuring your supply
              chain remains agile and resilient.
            </p>
          </div>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-x-20 py-10'>
          <div className='md:m-10 bg-white px-5 shadow-lg'>
            <h4 className='my-10 font-semibold text-3xl'>
              Predictive Analytics
            </h4>
            <p className=''>
              Our solution is tailored to your unique needs, seamlessly
              integrating with your existing systems and processes. Join the
              ranks of industry leaders who are revolutionizing their supply
              chain operations with our Predictive Analytics Platform.
            </p>
          </div>
          <div className='p-5 md:p-10 md:flex md:items-center'>
            <Image
              src={products_analysis}
              alt='shipping container image'
              className='md:h-[80%]'
            />
          </div>
        </div>
      </section>
      <section className='w-full relative mb-20'>
        <div className='w-full '>
          <Image
            src={products_getStarted}
            alt='home image'
            className='w-full min-h-[320px] object-cover'
          />
        </div>
        <div className='absolute w-full h-full flex items-center justify-center left-0 top-0 px-5 md:px-0'>
          <div className='w-full max-w-[650px] md:mx-10 flex justify-center items-center flex-col md:block'>
            <p className='mb-10'>
              Ready to take the next step toward precise demand forecasting and
              smarter business decisions? We're eager to discuss how we can
              tailor our solutions to your specific needs.
            </p>
            <Link href='/connect-with-us'>
              <button className='bg-[#1795D4] rounded-full h-[54px] w-[160px] text-white md:mr-5 mb-5 md:mb-0'>
                Get Started
              </button>
            </Link>
            <Link href='connect-with-us'>
              <button className='bg-transparent rounded-full border border-black h-[54px] w-[210px]'>
                Connect with Us
              </button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

{
  /* <section className='w-full h-[619px] relative'>
<Image
  src={products_containers}
  alt='shipping container image'
  className='w-full h-full'
/>
<div className='w-full absolute top-0 flex'>
  <div className='relative flex w-full'>
    <div className='absolute left-0 -top-[60px]'>
      <Image
        src={products_chart}
        alt='shipping container image'
        className=''
      />
    </div>
    <div className='absolute left-[365px] -top-[100px]'>
      <Image
        src={products_pieChart}
        alt='shipping container image'
        className=''
      />
    </div>
    <div className='absolute left-[761px] -top-[150px] w-[691px]]'>
      <Image
        src={products_barChart}
        alt='shipping container image'
        className=''
      />
    </div>
  </div>
</div>
</section> */
}
