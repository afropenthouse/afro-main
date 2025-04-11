"use client";
import React from "react";
import { X } from "lucide-react";
import "./styles.scss";
import { LuLogOut } from "react-icons/lu";
import { useModalStore } from "@/store";
import Image from "next/image";
import { LogoutButton } from "../LogoutButton";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useSession } from "next-auth/react";
import { useProfileStore } from "@/store";

const MobileNavbar = () => {
  const { data: session } = useSession();
  const { username, email, image } = useProfileStore();
  const { isNavMenuOpen, toggleMemberModal, toggleNavMenu, toggleSignUpModal, toggleSignInModal } = useModalStore();
  const router = useRouter();

  if (!isNavMenuOpen) return null;

  return (
    <div className="nav-overlay">
      <div className="nav-backdrop" />

      <div className={!session ? "nav-content no-user" : "nav-content"}>
        <button
          onClick={() => toggleNavMenu()}
          className="nav-close"
          aria-label="Close menu"
        >
          <X size={32} />
        </button>

        {session && (
          <div className="mobileUserInfo">
            <div className="userInfo">
              <div className="img">
                <Image
                  src={session?.user?.image || image || "/dark avatar.png"}
                  alt=""
                  width={50}
                  height={50}
                />
              </div>
              <div className="others">
                <h1>{session?.user?.name || session?.user?.firstName || username || "User"}</h1>
                <p>{session?.user?.email || email || "No email available"}</p>
              </div>
            </div>
          </div>
        )}

        <nav>
          <ul className="nav-list">
            <li className="nav-item">
              <Link href="/" className="nav-link" onClick={() => toggleNavMenu()}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/about" className="nav-link" onClick={() => toggleNavMenu()}>
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/gallery" className="nav-link" onClick={() => toggleNavMenu()}>
                Gallery
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/my-givings" className="nav-link" onClick={() => toggleNavMenu()}>
                My Givings
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/#footer" className="nav-link" onClick={() => toggleNavMenu()}>
               Contact Us
              </Link>
            </li>
            {
              !session && !username && <li className="nav-item">
              <button className="nav-link" onClick={() => toggleNavMenu()}>
                Become a Member
              </button>
            </li>
            }
          </ul>
          <div className="auth">
            {!session ? (
              <>
                <button
                  className="in"
                  onClick={() => {
                    toggleNavMenu();
                    toggleSignInModal();
                  }}
                >
                  Sign In
                </button>
                <button
                  className="up"
                  onClick={() => {
                    toggleNavMenu();
                    toggleSignUpModal();
                  }}
                >
                  Sign Up
                </button>
              </>
            ) : (
              <div className="log">
                <LuLogOut />
                <h2>
                  <LogoutButton onClick={() => toggleNavMenu()}>
                    <p>Logout</p>
                  </LogoutButton>
                </h2>
              </div>
            )}
          </div>
        </nav>
      </div>
    </div>
  );
};

export default MobileNavbar;
