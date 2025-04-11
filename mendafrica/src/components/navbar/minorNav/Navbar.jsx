"use client"
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import './styles.scss'
import { usePathname } from 'next/navigation';
import { GiHamburgerMenu } from 'react-icons/gi'
import { useModalStore } from '@/store'
import { currentClientUser } from '@/helpers/current-client-user'
import { useSession } from "next-auth/react"
import { useProfileStore } from '@/store'

function Navbar() {
  const user = currentClientUser()
  const pathname = usePathname();
  const [color, setColor] = useState(false);
  const { data: session, status } = useSession()
  console.log("🚀 ~ Navbar Minor ~ session:", session)
  const {
    isSignUpModalOpen,
    toggleSignUpModal,
    toggleSignInModal,
    isSignInModalOpen,
    toggleIsemailVerificationSuccessOpen,
    toggleNavMenu,
    toggleMemberModal
  } = useModalStore();

  const { username, email, image, setCredentials, clearCredentials } = useProfileStore();


  console.log("🚀 ~ Navba22222r ~ username:", username)
  console.log("🚀 ~ Navbar ~ email:", email)
  console.log("🚀 ~ Navbar ~ image:", image)

  const changeColor = () => {
    if (typeof window !== 'undefined') {
      if (window.scrollY >= 70) {
        setColor(true);
      } else {
        setColor(false);
      }
    }
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', changeColor);
      return () => window.removeEventListener('scroll', changeColor);
    }
  }, []);
  return (
    <>
   <nav className={'minor-nav font-mukta'}>
    <div className="container">
      <div className="first">
        <Image src="/colored-logo.png" alt="" width={30} height={30} />
        <h1 className={'text-white font-font_poppins'}>MENDAFRICA</h1>
      </div>
      <div className="second">
        <Link href="/" className={`${pathname=== '/' && 'active'}`}>Home</Link>
        <Link  href="/about" className={`${pathname=== '/about' && 'active'}`}>About</Link>
        <Link  href="/gallery" className={`${pathname=== '/gallery' && 'active'}`}>Gallery</Link>
        <Link  href="/my-givings" className={`${pathname=== '/my-givings' && 'active'}`}>My Givings</Link>
        
        <Link  href="/#footer" className={`${pathname=== '/about' && 'active'}`}>Contact Us</Link>
        {
          !session && !username && <div style={{cursor: 'pointer'}} onClick={toggleMemberModal} className={`text-white`}>Become a Member</div>
        }
       
       
        {/* <Link  href="/partners" className={`${pathname=== '/partners' && 'active'}`}>Partners</Link> */}
        {/* <div style={{
          cursor: 'pointer'
        }}  href="/member" className={`member ${pathname=== '/member' && 'active'}`} onClick={toggleMemberModal}>Become a Member</div> */}
      </div>
      {
  !user && !username ? (
    <div className="third">
      <Link href="/" className="text-black in" onClick={toggleSignInModal}>
        Sign In
      </Link>
      <Link href="/" className="up" onClick={toggleSignUpModal}>
        Sign Up
      </Link>
    </div>
  ) : (
    <div className="third">
      <div className="userInfo">
        <div className="img">
          <Image
            src={session?.user?.image || image || "/avatar.png"}
            alt="User Avatar"
            width={50}
            height={50}
          />
        </div>
        <div className="others">
          <h1 className="text-white">
            {session?.user?.name || session?.user?.firstName || username || "User"}
          </h1>
          <p className="text-white">{session?.user?.email || email || "No email available"}</p>
        </div>
      </div>
    </div>
  )
}

    </div>
   </nav>
   <nav className={'mobileM-nav font-mukta'}>
   <div className="first">
     <Image src="/colored-logo.png" alt="" width={30} height={30} />
     <h1 className={"text-black"}>MENDAFRICA</h1>
   </div>
   <div onClick={toggleNavMenu} className="second">
   {!color ? <GiHamburgerMenu color="black" size={30}  /> : <GiHamburgerMenu color="black" size={30}  />}
   </div>
 </nav>
 </>
  )
}

export default Navbar