"use client";
import { RxHamburgerMenu } from "react-icons/rx";
import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useScroll, useMotionValueEvent } from "framer-motion";
import BurgerMenu from "../BurgerMenu";

export default function Nav() {
  const [activeBurger, setActiveBurger] = useState(false);
  const [contactUsWrap, setContactUsWrap] = useState(false);
  const [clickedBurgerMenu, setClickedBurgerMenu] = useState(false);

  const pathname = usePathname();

  useEffect(() => {
    if (activeBurger) {
      document.body.style.cssText = `overflowY: hidden; position:fixed;`;
    }
    if (!activeBurger) {
      document.body.style.cssText = `overflowY: visible ; position:relative; `;
    }
  }, [activeBurger]);

  const { scrollY } = useScroll();
  const [currentScrollPosition, setCurrentScrollPosition] = useState(0);
  function handleClickedBurgerMenu() {
    setClickedBurgerMenu(!clickedBurgerMenu);
  }

  useMotionValueEvent(scrollY, "change", (latest) => {
    setCurrentScrollPosition(latest);
  });
  return (
    <>
      {activeBurger ? (
        <BurgerMenu
          activeBurger={activeBurger}
          setActiveBurger={setActiveBurger}
          handleClickedBurgerMenu={handleClickedBurgerMenu}
        />
      ) : (
        <>
          <nav
            className={`w-full px-5 md:px-[50px] flex items-center justify-between ${
              currentScrollPosition > 100 && "hidden"
            } text-white text-base fixed top-0 left-0 z-50 ${
              pathname === "/products" && "hidden"
            } `}
          >
            {/* small screen nav */}
            <div
              className={`w-full flex navwrap:hidden justify-between items-center h-[15vh] md:h-[15vh] ${
                pathname === "/services" || pathname == "/what-we-do"
                  ? "text-[#004785]"
                  : "text-white"
              }`}
            >
              <Link href={"/"}>
                <h1 className="font-semibold text-base md:font-bold md:text-xl">
                  Bridge Waters G.S.
                </h1>
              </Link>
              <RxHamburgerMenu
                className="text-2xl"
                onClick={() => setActiveBurger(!activeBurger)}
              />
            </div>
            {/* big screen nav */}
            <div
              className={`hidden navwrap:flex w-full items-center justify-between h-[15vh] md:h-[15vh] ${
                (pathname == "/services" || pathname == "/what-we-do") &&
                "text-[#004785]"
              }`}
            >
              <Link href={"/"}>
                <h1 className="font-bold text-xl text-center">
                  Bridge Waters G.S.
                </h1>
              </Link>
              <ul className="flex text-sm font-bold">
                <Link href={"/"}>
                  <li
                    className={`mr-10 cursor-pointer ${
                      pathname === "/" && "opacity-[0.6]"
                    }`}
                  >
                    Home
                  </li>
                </Link>

                <Link href={"/services"}>
                  <li
                    className={`mr-10 cursor-pointer ${
                      pathname === "/services" && "opacity-[0.6]"
                    }`}
                  >
                    Services
                  </li>
                </Link>
                <Link href={"/experience"}>
                  <li
                    className={`mr-10 cursor-pointer ${
                      pathname === "/experience" && "opacity-[0.6]"
                    }`}
                  >
                    Experience
                  </li>
                </Link>
                <Link href={"/affiliates"}>
                  <li
                    className={`mr-10 cursor-pointer ${
                      pathname === "/affiliates" && "opacity-[0.6]"
                    }`}
                  >
                    Affiliates
                  </li>
                </Link>

                <Link href={"/gallery"}>
                  <li
                    className={`mr-10 cursor-pointer ${
                      pathname === "/gallery" && "opacity-[0.6]"
                    }`}
                  >
                    Gallery
                  </li>
                </Link>

                <Link href={"/what-we-do"}>
                  <li
                    className={`cursor-pointer ${
                      pathname === "/what-we-do" && "opacity-[0.6]"
                    } min-w-max `}
                  >
                    What We Do
                  </li>
                </Link>

                {/* <Link href={"/gallery"}>
                  <li
                    className={`cursor-pointer ${
                      pathname === "/gallery" && "opacity-[0.6]"
                    } min-w-max `}
                  >
                    Gallery
                  </li>
                </Link> */}
              </ul>
              <div className="flex flex-nowrap">
                <Link href="/connect-with-us">
                  <button className="bg-[#1795D4] w-[142px] h-[42px] text-white border border-[#1795D4] text-base rounded-full">
                    Connect with us
                  </button>
                </Link>
              </div>
            </div>
          </nav>
          {/* Blue Background */}
          {currentScrollPosition > 100 && (
            <nav
              className={`w-full h-[10vh] md:h-[15vh] px-5 md:px-[50px] flex items-center justify-between bg-white text-[#004785] text-base fixed top-0 left-0 z-50 shadow-lg ${
                pathname === "/connect-with-us" && "hidden"
              } ${pathname === "/products" && "hidden"} ${
                pathname === "/what-we-do" && "hidden"
              }${pathname === "/blog" && "hidden"}`}
            >
              {/* small screen nav */}
              <div className="w-full flex navwrap:hidden justify-between items-center">
                <Link href={"/"}>
                  <h1 className="font-semibold md:font-bold md:text-xl">
                    Bridge Waters G.S.
                  </h1>
                </Link>
                <RxHamburgerMenu
                  className="text-2xl"
                  onClick={() => setActiveBurger(!activeBurger)}
                />
              </div>
              {/* big screen nav */}
              <div className="hidden navwrap:flex w-full items-center justify-between h-[15vh] md:h-[15vh]">
                <Link href={"/"}>
                  <h1 className="font-bold text-xl text-center">
                    Bridge Waters G.S.
                  </h1>
                </Link>
                <ul className="flex text-sm font-bold">
                  <Link href={"/"}>
                    <li
                      className={`mr-10 cursor-pointer ${
                        pathname === "/" && "opacity-[0.6]"
                      }`}
                    >
                      Home
                    </li>
                  </Link>

                  <Link href={"/services"}>
                    <li
                      className={`mr-10 cursor-pointer ${
                        pathname === "/services" && "opacity-[0.6]"
                      }`}
                    >
                      Services
                    </li>
                  </Link>
                  <Link href={"/experience"}>
                    <li
                      className={`mr-10 cursor-pointer ${
                        pathname === "/experience" && "opacity-[0.6]"
                      }`}
                    >
                      Experience
                    </li>
                  </Link>

                  <Link href={"/affiliates"}>
                    <li
                      className={`mr-10 cursor-pointer ${
                        pathname === "/affiliates" && "opacity-[0.6]"
                      }`}
                    >
                      Affiliates
                    </li>
                  </Link>

                  <Link href={"/gallery"}>
                    <li
                      className={`mr-10 cursor-pointer ${
                        pathname === "/gallery" && "opacity-[0.6]"
                      }`}
                    >
                      Gallery
                    </li>
                  </Link>

                  <Link href={"/what-we-do"}>
                    <li
                      className={`cursor-pointer ${
                        pathname === "/what-we-do" && "opacity-[0.6]"
                      }`}
                    >
                      What We Do
                    </li>
                  </Link>
                </ul>
                <div>
                  <Link href="/connect-with-us">
                    <button className="bg-[#1795D4] w-[142px] h-[42px] text-white border border-[#1795D4] text-base rounded-full">
                      Connect with us
                    </button>
                  </Link>
                </div>
              </div>
            </nav>
          )}
        </>
      )}
      {(pathname === "/products" ||
        // pathname === '/what-we-do' ||
        pathname == "/blog") && (
        <nav
          className={`w-full h-[10vh] md:h-[15vh] px-5 md:px-[50px] flex items-center justify-between bg-white text-[#004785] text-base fixed top-0 left-0 z-50 shadow-lg ${
            pathname === "/connect-with-us" && "hidden"
          }`}
        >
          {/* small screen nav */}
          <div className="w-full flex navwrap:hidden justify-between items-center">
            <Link href={"/"}>
              <h1 className="font-semibold md:font-bold md:text-xl">
                Bridge Waters G.S.
              </h1>
            </Link>
            <RxHamburgerMenu
              className="text-2xl"
              onClick={() => setActiveBurger(!activeBurger)}
            />
          </div>
          {/* big screen nav */}
          <div className="hidden navwrap:flex w-full items-center justify-between h-[15vh] md:h-[15vh]">
            <Link href={"/"}>
              <h1 className="font-bold text-xl text-center mr-10">
                Bridge Waters G.S.
              </h1>
            </Link>
            <ul className="flex text-sm font-bold">
              <Link href={"/"}>
                <li
                  className={`mr-5 lg:mr-10 cursor-pointer ${
                    pathname === "/" && "opacity-[0.6]"
                  }`}
                >
                  Home
                </li>
              </Link>
              <Link href={"/solutions"}>
                <li
                  className={`mr-5 lg:mr-10 cursor-pointer ${
                    pathname === "/solutions" && "opacity-[0.6]"
                  }`}
                >
                  Solution
                </li>
              </Link>
              <Link href={"/services"}>
                <li
                  className={`mr-5 lg:mr-10 cursor-pointer ${
                    pathname === "/services" && "opacity-[0.6]"
                  }`}
                >
                  Services
                </li>
              </Link>
              <Link href={"/products"}>
                <li
                  className={`mr-5 lg:mr-10 cursor-pointer ${
                    pathname === "/products" && "opacity-[0.6]"
                  }`}
                >
                  Products
                </li>
              </Link>
              <Link href={"/blog"}>
                <li
                  className={`mr-5 lg:mr-10 cursor-pointer ${
                    pathname === "/blog" && "opacity-[0.6]"
                  }`}
                >
                  Blog
                </li>
              </Link>
              <Link href={"/what-we-do"}>
                <li
                  className={`cursor-pointer mr-5 lg:mr-10 text${
                    pathname === "/what-we-do" && "opacity-[0.6]"
                  }  min-w-max`}
                >
                  What We Do
                </li>
              </Link>
            </ul>
            <div className="flex flex-nowrap">
              <Link href="/connect-with-us">
                <button className="w-[162px] h-[42px] border border-[#1795D4] text-[#1795D4] text-base rounded-full mr-5">
                  Connect with us
                </button>
              </Link>
              <Link href="/connect-with-us">
                <button className="bg-[#1795D4] w-[142px] h-[42px] text-white border border-[#1795D4] text-base rounded-full">
                  Get Started
                </button>
              </Link>
            </div>
          </div>
        </nav>
      )}
    </>
  );
}
