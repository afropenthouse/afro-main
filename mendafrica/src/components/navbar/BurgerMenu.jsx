'use client';
import Link from 'next/link';
import { AiOutlineClose } from 'react-icons/ai';
import { BsChevronDown } from 'react-icons/bs';
import { usePathname } from 'next/navigation';
import { motion, LayoutGroup, AnimatePresence } from 'framer-motion';
import ToggleNav from './ToggleNav';

export default function BurgerMenu({
  activeBurger,
  setActiveBurger,
  handleClickedBurgerMenu,
}) {
  // const activeBurger = NavStore((state) => state.activeBurger);
  // const setActiveBurger = NavStore((state) => state.setActiveBurger);
  const pathname = usePathname();

  return (
    <div className='fixed top-0 left-0 w-full h-[100vh] bg-white z-[100] px-5 md:px-[50px] navwrap:hidden'>
      <div className='h-[100vh] w-full relative'>
        <div className='w-full font-semibold text-base flex md:font-bold md:text-xl navwrap:hidden justify-between items-center h-[10vh] md:h-[15vh]'>
          <Link href={'/'}>
            <h1
              className='text-[#004785] '
              onClick={() => setActiveBurger(!activeBurger)}
            >
              Salami <span className='block'>Financial</span>
            </h1>
          </Link>
          <AiOutlineClose
            className='text-2xl text-black'
            onClick={() => setActiveBurger(!activeBurger)}
          />
        </div>
        <LayoutGroup>
          <ul className='text-base text-black font-normal mt-10'>
            <Link href={'/'}>
              <div
                onClick={() => setActiveBurger(!activeBurger)}
                className='mb-3'
              >
                <li>Home</li>
              </div>
            </Link>
            {/* </Link> */}
            <ToggleNav question='Solutions'>
              <motion.div
                animate={{ opacity: 1 }}
                initial={{ opacity: 0 }}
                exit={{ opacity: 1 }}
                transition={{ ease: 'easeOut', duration: 0.5 }}
              >
                <Link href={'/solutions/predictive-analysis-dashboard'}>
                  <motion.div
                    className='flex w-full items-center border-b border-[#D0D4DA] justify-between p-4'
                    onClick={() => setActiveBurger(!activeBurger)}
                  >
                    <motion.p className='text-sm mr-5'>
                      Predictive Analytic Dashboard
                    </motion.p>
                  </motion.div>
                </Link>
              </motion.div>
              <motion.div
                animate={{ opacity: 1 }}
                initial={{ opacity: 0 }}
                exit={{ opacity: 1 }}
                transition={{ ease: 'easeOut', duration: 0.5 }}
              >
                <Link href={'/solutions/tech-consulting'}>
                  <motion.div
                    className='flex w-full items-center border-b border-[#D0D4DA] justify-between p-4'
                    onClick={() => setActiveBurger(!activeBurger)}
                  >
                    <motion.p className='text-sm mr-5'>
                      Tech Consulting
                    </motion.p>
                  </motion.div>
                </Link>
              </motion.div>
              <motion.div>
                <Link href='/solutions/cloud-academy'>
                  <motion.div
                    className='flex w-full items-center border-b border-[#D0D4DA] justify-between p-4'
                    onClick={() => setActiveBurger(!activeBurger)}
                  >
                    <motion.p className='text-sm mr-5'>Cloud Academy</motion.p>
                  </motion.div>
                </Link>
              </motion.div>
            </ToggleNav>
            <Link href={'/services'}>
              <motion.div layout onClick={() => setActiveBurger(!activeBurger)}>
                <motion.li layout className='mt-3'>
                  Services
                </motion.li>
              </motion.div>
            </Link>
            <Link href={'/products'}>
              <motion.div layout onClick={() => setActiveBurger(!activeBurger)}>
                <motion.li className='mt-3'>Products</motion.li>
              </motion.div>
            </Link>
            <Link href={'/blog'}>
              <motion.div layout onClick={() => setActiveBurger(!activeBurger)}>
                <motion.li className='mt-3'>Blog</motion.li>
              </motion.div>
            </Link>
            <Link href={'/what-we-do'}>
              <motion.div layout onClick={() => setActiveBurger(!activeBurger)}>
                <motion.li className='mt-3'>What We Do</motion.li>
              </motion.div>
            </Link>
          </ul>
          <motion.div layout className='mt-20 '>
            <Link href='/connect-with-us'>
              <motion.button
                layout
                className='block h-[58px] w-full font-bold text-base text-[#1795D4] border border-[#1795D4] rounded-full'
                onClick={() => setActiveBurger(!activeBurger)}
              >
                Contact with us
              </motion.button>
            </Link>
            <Link href='/sign-up'>
              <motion.button
                layout
                className='block  h-[58px] w-full font-bold text-base text-white  bg-[#1795D4] rounded-full mt-10'
                onClick={() => setActiveBurger(!activeBurger)}
              >
                Get started
              </motion.button>
            </Link>
          </motion.div>
        </LayoutGroup>
      </div>
    </div>
  );
}
