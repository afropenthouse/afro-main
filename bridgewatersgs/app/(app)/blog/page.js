import Image from 'next/image';
import Home_machine_learning from '../../../public/blog-assets/machine-learning.png';
import python_img from '../../../public/blog-assets/python-img.png';
import data_analysis from '../../../public/blog-assets/data-analysis.png';
import data_img from '../../../public/blog-assets/data-img.png';
import Link from 'next/link';

export default function Home() {
  return (
    <main className='pt-[10vh] md:pt-[15vh]'>
      <div className='w-full md:hidden'>
        <Image
          src={Home_machine_learning}
          alt='home image'
          className='w-full object-cover'
        />
      </div>
      <section className='px-5 md:px-[50px]'>
        <div className='w-full hidden md:block '>
          <Image
            src={Home_machine_learning}
            alt='home image'
            className='w-full object-cover'
          />
        </div>
        <div className='max-w-[864px] mx-auto py-10'>
          <p className='text-xs '>SEPTEMBER 6, 2022</p>
          <h3 className='mt-3 font-semibold text-2xl md:text-5xl'>
            What is Machine Learning? ML Tutorial for Beginners
          </h3>
          <p className='text-base mt-5'>
            The term “Machine Learning” was coined by a computer gamer named
            Arthur Samuel in 1959. He defined it like this:
            <span className='block my-3 pl-10 italic'>
              "Machine learning is a Field of study that gives computers the
              ability to learn and make predictions without being explicitly
              programmed."
            </span>
            <span className='block mb-5'>
              ML is a sub-field of Artificial Intelligence. It's based on the
              idea that computers can learn from historical experiences, make
              vital decisions, and predict future happenings without human
              intervention.
            </span>
            <span className='block mb-5'>
              Machine Learning is behind product suggestions on e-commerce
              sites, your movie suggestions on Netflix, and so many more things.
              The computer is able to make these suggestions and predictions by
              learning from your previous data input and past experiences.
            </span>
            <span className='block mb-5'>
              In recent years, Machine Learning has garnered a lot of attention
              around the world, it has become one of the most important ways
              that people use Artificial Intelligence.
            </span>
          </p>
          <h3 className='my-5 font-semibold text-2xl md:text-4xl'>
            How Does Machine Learning Work?
          </h3>

          <p className='text-base mt-5'>
            Machine Learning involves building algorithms. Data Scientists build
            these algorithms, and the type of algorithm they build depends on
            the type of data they're working on.
            <span className='block my-5'>
              The Machine Learning process begins with gathering data (numbers,
              text, photos, comments, letters, and so on). These data, often
              called “training data,” are used in training the Machine Learning
              algorithm. Training essentially "teaches" the algorithm how to
              learn by using tons of data.
            </span>
            <span className='block mb-5'>
              Following the end of the “training”, new input data is then fed
              into the algorithm and the algorithm uses the previously developed
              model to make predictions.
            </span>
            <span className='block mb-5'>
              The algorithm is trained several times until it reaches a desired
              outcome. This enables the Machine Learning algorithms to
              continually learn on their own. This produces optimal answers and
              increasing accuracy and predictions over time.
            </span>
          </p>
          <h3 className='my-5 font-semibold text-2xl md:text-4xl'>
            Types Of Machine Learning
          </h3>
          <div className=''>
            <p>
              There are three types of Machine Learning, which include...
              <Link
                href='https://www.freecodecamp.org/news/what-is-machine-learning-for-beginners'
                target='_blank'
              >
                <button className='text-[#004785]'>read more</button>
              </Link>
            </p>
          </div>
        </div>
      </section>
      <section className='w-full px-5 md:px-[50px]'>
        <div className='w-full grid grid-cols-1 md:grid-cols-3 gap-x-10'>
          <div>
            <Link
              href='https://heyfunmi.hashnode.dev/python-the-master-tool-for-data-analysis'
              target='_blank'
            >
              <div className='w-full overflow-hidden'>
                <Image
                  src={python_img}
                  alt='home image'
                  className='w-full object-cover hover:scale-125 transition duration-300'
                />
              </div>
              <p className='text-xs mt-3 mb-2'>JUNE 11, 2022</p>
              <p className='font-semibold'>
                Python: The Master Tool For Data Analysis
              </p>
            </Link>
          </div>
          <div>
            <Link
              href='https://heyfunmi.hashnode.dev/understanding-the-various-professions-in-the-data-ecosystem'
              target='_blank'
            >
              <div className='w-full overflow-hidden'>
                <Image
                  src={data_analysis}
                  alt='home image'
                  className='w-full object-cover  hover:scale-125 transition duration-300'
                />
              </div>
              <p className='text-xs mt-3 mb-2'>JUNE 20, 2022</p>
              <p className='font-semibold'>
                Understanding the Various Professions in the Data Ecosystem.
              </p>
            </Link>
          </div>
          <div>
            <Link
              href='https://heyfunmi.hashnode.dev/how-to-clean-structured-data-using-python'
              target='_blank'
            >
              <div className='w-full overflow-hidden'>
                <Image
                  src={data_img}
                  alt='home image'
                  className='w-full object-cover hover:scale-125 transition duration-300'
                />
              </div>
              <p className='text-xs mt-3 mb-2'>AUGUST 15, 2022</p>
              <p className='font-semibold'>
                How to Clean Structured Data Using Python.
              </p>
            </Link>
          </div>
        </div>

        <div className='w-full py-20 grid grid-cols-1 navwrap:grid-cols-2 gap-5'>
          <h3 className='text-2xl lg:text-4xl font-semibold'>
            Subscribe to the Blog
          </h3>
          <div className='w-full'>
            <input
              type='text'
              placeholder='Your Email'
              className='h-[52px] w-full max-w-[387px] md:w-[387px] border border-[#A2A2A2] rounded-full mr-5 px-3 outline-none mb-5 md:mb-0'
            />
            <button className='bg-[#1795D4] text-white h-[52px] rounded-full w-[160px]'>
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
