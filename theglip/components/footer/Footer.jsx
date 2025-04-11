import Link from "next/link";
import "./style.scss";
import { TiSocialTwitter } from "react-icons/ti";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import Image from "next/image";

function Footer() {
  return (
    <footer className="footer">
      <section className="subscribe">
        <h1>Want to be a part of the growing community?</h1>
        <div className="sub">
          <input type="text" placeholder="Enter your email address" />
          <Link href="">Subscribe Now</Link>
        </div>
      </section>
      <section className="footer-main">
        <div className="top-main">
          <div className="box1">
            <div className="top">
              {/* <Image
                src="/logo.svg"
                alt=""
                width={100}
                height={100}
                quality={100}
                className=""
              /> */}
              <p>Stay Connected & </p>
              <p>Empowered with The Glip</p>
            </div>
            <div className="bottom">
              <p>
                Join our community and stay up-to-date on the latest mentorship
                opportunities, success stories, and insights from across Africa.
                Follow us on social media and subscribe to our newsletter.
              </p>
              {/* <p>Email: support@vibeazy.com</p> */}
            </div>
          </div>
          <div className="box2">
            <div className="top">
              <h1>Company</h1>
            </div>
            <div className="bottom">
              <p>
                <Link href="">Home</Link>
              </p>
              <p>
                <Link href="">About</Link>
              </p>
              <p>
                {" "}
                <Link href="">How it works</Link>
              </p>
              <p>
                {" "}
                <Link href="">Contact Us</Link>
              </p>
            </div>
          </div>
          <div className="box3">
            <div className="top">
              <h1>Support</h1>
            </div>
            <div className="bottom">
              <p>
                {" "}
                <Link href="">Help Center</Link>
              </p>
              <p>
                {" "}
                <Link href="">Communities</Link>
              </p>
              <p>
                {" "}
                <Link href="">FAQs</Link>
              </p>
            </div>
          </div>
          <div className="box3">
            <div className="top">
              <h1>Legal</h1>
            </div>
            <div className="bottom">
              <p>
                {" "}
                <Link href="">Privacy Policy</Link>
              </p>
              <p>
                {" "}
                <Link href="">Terms of Use</Link>
              </p>
            </div>
          </div>
          {/* <div className="box4">
            <div className="top">
              <h1>Our Social Networks</h1>
            </div>
            <div className="bottom">
              <p>Stay connected with us on </p>
              <p>social media!</p>
              <div className="icons">
                <Link href="">
                  <FaFacebookF />
                </Link>
                <Link href="">
                  {" "}
                  <TiSocialTwitter />
                </Link>
                <Link href="">
                  {" "}
                  <FaInstagram />
                </Link>
                <Link href="">
                  {" "}
                  <FaYoutube />
                </Link>
              </div>
              <h3 className="copy">
                © Copyright Vibeazy. 2024. All Rights Reserved
              </h3>
            </div>
          </div> */}
        </div>
        <div className="bottom-main">
          <p>© Copyright theGlip. 2024. All Rights Reserved</p>
          <div className="icons">
            <Link href="">
              <FaFacebookF />
            </Link>
            <Link href="">
              {" "}
              <TiSocialTwitter />
            </Link>
            <Link href="">
              {" "}
              <FaInstagram />
            </Link>
            <Link href="">
              {" "}
              <FaYoutube />
            </Link>
          </div>
        </div>
      </section>
    </footer>
  );
}

export default Footer;
