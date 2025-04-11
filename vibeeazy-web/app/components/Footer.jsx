import { TiSocialTwitter } from "react-icons/ti";
import { FaInstagram, FaTiktok, FaTwitter, FaTwitterSquare } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import "../../styles/Footer.scss";
import Image from "next/image";
import Link from "next/link";

function Footer() {
  return (
    // <footer className="footer">
    //   <div className="main">
    //     <div className="box1">
    //       <div className="logos">
    //         <Image src="/images/Hero/white logo.png" alt="" width={100} height={100} quality={100}/>
    //       </div>
    //       <div className="textBox">
    //         <div className="top">
    //           <h1>WhatsApp: (234) 999-9000 000</h1>
    //         </div>
    //         <div className="bottom">
    //           <p>3, Immam Dauda Street, Eric-Moore,</p>
    //           <p>Surulere, Lagos State.</p>
    //         </div>
    //       </div>
    //     </div>
    //     <div className="box2">
    //         <div className="top">
    //             <h1>Quick Link</h1>
    //         </div>
    //         <div className="bottom">
    //             <p>About</p>
    //             <p>Contact</p>
    //             <p>Pricing</p>
    //             <p>Blog</p>
    //         </div>
    //     </div>
    //     <div className="box3">
    //     <div className="top">
    //             <h1>Partners</h1>
    //         </div>
    //         <div className="bottom">
    //             <p>Become a partner</p>
    //             <p>Browse Partners</p>
    //             <p>Partners Account</p>
    //             <p>Promotions</p>
    //         </div>
    //     </div>
    //     <div className="box4">
    //         <p>Faqs</p>
    //         <p>Privacy Policy</p>
    //         <p>Terms and Conditions</p>
    //     </div>
    //   </div>
    //   <div className="bottom">
    //     <div className="text">
    //         <p>&copy; 2024 Vibeazy</p>
    //     </div>
    //     <div className="icons">
    //     <FaFacebookF />
    //     <FaYoutube />
    //     <FaInstagram />
    //     <TiSocialTwitter />
    //     </div>
    //   </div>
    // </footer>
    <footer className="footer">
      <div className="top-main">
        <div className="box1">
          <div className="top">
            <Image
              src="/images/Hero/white logo.png"
              alt=""
              width={100}
              height={100}
              quality={100}
              className=""
            />
            <p>8, Chevy View Estate, Along Chevron drive
            </p>
            <p>off Lekki – Epe expressway Lagos.</p>
          </div>
          <div className="bottom">
            <p>Phone: +234 8104786490</p>
            <p>Email: support@vibeazy.com</p>
          </div>
        </div>
        <div className="box2">
          <div className="top">
            <h1>Useful Links</h1>
          </div>
          <div className="bottom">
            <p><Link href="">Home</Link></p>
            <p><Link href="">About</Link></p>
           <p> <Link href="">How it works</Link></p>
            <p> <Link href="">Contact Us</Link></p>
          </div>
        </div>
        <div className="box3">
        <div className="top">
            <h1>More Links</h1>
          </div>
          <div className="bottom">
            <p> <Link href="">FAQ</Link></p>
            <p> <Link href="/privacy">Privacy Policy</Link></p>
            <p> <Link href="/terms">Term & Conditions</Link></p>
          </div>
        </div>
        <div className="box4">
        <div className="top">
            <h1>Our Social Networks</h1>
          </div>
          <div className="bottom">
            <p>Stay connected with us on </p>
            <p>social media!</p>
            <div className="icons">
            <Link href="https://facebook.com/vibeazyapp"><FaFacebookF /></Link>
            <Link href="https://twitter.com/vibeazyapp"> <TiSocialTwitter /></Link>
            <Link href="https://instagram.com/vibeazyapp"> <FaInstagram /></Link>
            <Link href="https://tiktok.com/@vibeazyapp"> <FaTiktok /></Link>
            </div>
            <h3 className="copy">© Copyright Vibeazy. 2024. All Rights Reserved</h3>
          </div>
        </div>
      </div>
      <div className="bottom-main">
        <p>© Copyright Vibeazy. 2024. All Rights Reserved</p>
      </div>
    </footer>
  );
}

export default Footer;
