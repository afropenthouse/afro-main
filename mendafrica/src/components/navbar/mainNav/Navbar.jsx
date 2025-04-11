"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import "./styles.scss";
import { usePathname } from "next/navigation";
import { useModalStore } from "@/store";
import { GiHamburgerMenu } from "react-icons/gi";
import { currentClientUser } from "@/helpers/current-client-user";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { useProfileStore } from "@/store";
import { Mukta_Vaani } from "next/font/google";

const mukta = Mukta_Vaani({
  subsets: ['latin'],
  weight: '400'
})

function Navbar() {
  const router = useRouter();
  const pathname = usePathname();
  const [color, setColor] = useState(false);
  const { data: session, status } = useSession();
  const { username, email, image } = useProfileStore();

  const {
    toggleSignUpModal,
    toggleSignInModal,
    toggleNavMenu,
    toggleMemberModal,
  } = useModalStore();

  const changeColor = () => {
    if (typeof window !== "undefined") {
      if (window.scrollY >= 70) {
        setColor(true);
      } else {
        setColor(false);
      }
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", changeColor);
      return () => window.removeEventListener("scroll", changeColor);
    }
  }, []);

  return (
    <>
      <nav className={color ? "major-nav nav-bg font-mukta" : "major-nav font-mukta"}>
        <div className={`container ${mukta.className}`}>
          <div className="first">
            <Image src="/colored-logo.png" alt="" width={30} height={30} />
            <h1 className={color ? "font-font_poppins" : "text-white font-font_poppins"}>MENDAFRICA</h1>
          </div>
          <div className="second">
            <Link
            style={{
              fontSize: "16px"
            }}
              href="/"
              className={
                color
                  ? `${pathname === "/" && "active"}`
                  : `${pathname === "/" && "active"} text-white`
              }
            >
              Home
            </Link>

            <Link
             style={{
              fontSize: "16px"
            }}
              href="/about"
              className={
                color
                  ? `${pathname === "/about" && "active"}`
                  : `${pathname === "/about" && "active"} text-white`
              }
            >
              About
            </Link>
            <Link
             style={{
              fontSize: "16px"
            }}
              href="/gallery"
              className={
                color
                  ? `${pathname === "/gallery" && "active"}`
                  : `${pathname === "/gallery" && "active"} text-white`
              }
            >
              Gallery
            </Link>

            <div
              onClick={() => {
                session ? router.push("/my-givings") : toggleSignInModal();
              }}
              className={
                color
                  ? `cursor-pointer ${pathname === "/my-givings" && "active"}`
                  : `cursor-pointer ${
                      pathname === "/my-givings" && "active"
                    } text-white`
              }
            >
              My Givings
            </div>
            
           {
            !session && !username &&  <div
            style={{ cursor: "pointer" }}
            onClick={toggleMemberModal}
            className={
              color
                ? `${pathname === "" && "active"}`
                : `${pathname === "" && "active"} text-white`
            }
          >
            Become a Member
          </div>
           }
            <Link
             style={{
              fontSize: "16px"
            }}
              href="/#footer"
              className={
                color
                  ? `${pathname === "" && "active"}`
                  : `${pathname === "" && "active"} text-white`
              }
            >
              Contact Us
            </Link>

          </div>
          {!session ? (
            <div className="third">
              <button
                className={!color ? "in text-white" : "text-black in"}
                onClick={toggleSignInModal}
              >
                Sign In
              </button>
              <button className="up" onClick={toggleSignUpModal}>
                Sign Up
              </button>
            </div>
          ) : (
            <div className="third">
              <div className="userInfo">
                <div className="img">
                  <Image
                    src={
                      session?.user?.image ||
                      image ||
                      (color ? "/dark avatar.png" : "/avatar.png")
                    }
                    alt=""
                    width={50}
                    height={50}
                  />
                </div>
                <div className="others">
                  <h1 className={color ? "" : "text-white"}>
                    {session?.user?.name ||
                      session?.user?.firstName ||
                      username ||
                      "User"}
                  </h1>
                  <p className={color ? "" : "text-white"}>
                    {session?.user?.email || email || "No email available"}
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>
      <nav className={color ? "mobile-nav mobile-bg font-mukta" : "mobile-nav font-mukta"}>
        <div className="first">
          <Image src="/colored-logo.png" alt="" width={30} height={30} />
          <h1 className={color ? "" : "text-white"}>MENDAFRICA</h1>
        </div>
        <div className="second" onClick={toggleNavMenu}>
          {!color ? (
            <GiHamburgerMenu color="white" size={30} />
          ) : (
            <GiHamburgerMenu color="black" size={30} />
          )}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
