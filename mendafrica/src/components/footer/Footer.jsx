"use client"
import Image from "next/image";
import "./styles.scss";
import { FaLinkedin } from "react-icons/fa6";
import { BsTwitterX } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
import { LuInstagram } from "react-icons/lu";
import { LogoutButton } from "../LogoutButton";
import { currentClientUser } from "@/helpers/current-client-user";

function Footer() {
  const user = currentClientUser()
  return (
    <div className="footer" id="footer">
      <div className="top-main">
        <div className="box1">
          <div className="tops">
            <div className="top">
              <Image width={40} height={40} src="/tiny-logo.png" alt="" />
              <h1>MENDAFRICA</h1>
            </div>
            <p>Impacting Africa - One outreach at a time!</p>
          </div>
          <div className="bottom">
            
            <p> Chevy View Estate, Along Chevron drive, </p>
            <p>off Lekki – Epe expressway,</p>
            <p> Lagos State.</p>
            <p
              style={{
                marginTop: ".8rem",
              }}
            >
              Email: support@mendafrica.org
            </p>
            <p>Phone: +2348056679806</p>
            <LogoutButton>
              <p>{user? "Sign Out" : ""}</p>
            </LogoutButton>
          </div>
        </div>
        <div className="box2">
          <h1>Company</h1>
          <p>About</p>
          <p>Contact Us</p>
        </div>
        <div className="box2">
          <h1>Quick Link</h1>
          <p>Ongoing Projects</p>
          <p>Give to MendAfrica</p>
        </div>
        <div className="box2">
          <h1>Legal</h1>
          <p>Terms & conditions</p>
          <p>Privacy Policy</p>
        </div>
      </div>
      <div className="bottoms">
        <div className="left">
          <h4>© MendAfrica. 2025. All Rights Reserved</h4>
        </div>
        <div className="right">
          <div className="box">
            <LuInstagram size={22}/>
            <h1>Instagram</h1>
          </div>
          <div className="box">
            <FaFacebook size={22} />
            <h1>Facebook</h1>
          </div>
          <div className="box">
            <BsTwitterX size={22} />
            <h1>Twitter</h1>
          </div>
          <div className="box">
            <FaLinkedin size={22} />
            <h1>LinkedIn</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
