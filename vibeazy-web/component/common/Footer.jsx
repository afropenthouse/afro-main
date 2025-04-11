import { TiSocialTwitter } from "react-icons/ti";
import { FaInstagram, FaTiktok, FaTwitterSquare } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

function Footer() {
  return (
    <footer className="flex flex-col bg-[#650928] text-[#FEFEFE] pt-8 gap-[50px]">
      <div className="flex justify-between px-24 md:px-8 sm:px-8 sm:gap-8 sm:flex-col sm:justify-center sm:items-center sm:text-center">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col">
            <Image
              src="/images/images/Hero/white logo.png"
              alt=""
              width={100}
              height={100}
              quality={100}
              className="mb-4 sm:self-center"
            />
            <p className="text-base font-normal leading-5 text-left text-[#DBDBDB] sm:text-center">
              8, Chevy View Estate, Along Chevron drive
            </p>
            <p className="text-base font-normal leading-5 text-left text-[#DBDBDB] sm:text-center">
              off Lekki – Epe expressway Lagos.
            </p>
          </div>
          <div className="flex flex-col gap-[0.6rem]">
            <p className="text-base font-normal leading-5 text-left text-[#DBDBDB] sm:text-center">
              Phone: +234 8104786490
            </p>
            <p className="text-base font-normal leading-5 text-left text-[#DBDBDB] sm:text-center">
              Email: support@vibeazy.com
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-8 mt-[0.8rem]">
          <div className="flex flex-col">
            <h1 className="text-[#DBDBDB] text-xl font-semibold leading-5 text-left sm:text-center">
              Useful Links
            </h1>
          </div>
          <div className="flex flex-col gap-4">
            <p className="text-base font-normal leading-5 text-left text-[#DBDBDB] sm:text-center">
              <Link href="">Home</Link>
            </p>
            <p className="text-base font-normal leading-5 text-left text-[#DBDBDB] sm:text-center">
              <Link href="">About</Link>
            </p>
            <p className="text-base font-normal leading-5 text-left text-[#DBDBDB] sm:text-center">
              <Link href="">How it works</Link>
            </p>
            <p className="text-base font-normal leading-5 text-left text-[#DBDBDB] sm:text-center">
              <Link href="">Contact Us</Link>
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-8 mt-[0.8rem]">
          <div className="flex flex-col">
            <h1 className="text-[#DBDBDB] text-xl font-semibold leading-5 text-left sm:text-center">
              More Links
            </h1>
          </div>
          <div className="flex flex-col gap-4">
            <p className="text-base font-normal leading-5 text-left text-[#DBDBDB] sm:text-center">
              <Link href="">FAQ</Link>
            </p>
            <p className="text-base font-normal leading-5 text-left text-[#DBDBDB] sm:text-center">
              <Link href="/privacy">Privacy Policy</Link>
            </p>
            <p className="text-base font-normal leading-5 text-left text-[#DBDBDB] sm:text-center">
              <Link href="/terms">Term & Conditions</Link>
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-8 mt-[0.8rem]">
          <div className="flex flex-col">
            <h1 className="text-[#DBDBDB] text-xl font-semibold leading-5 text-left sm:text-center">
              Our Social Networks
            </h1>
          </div>
          <div className="flex flex-col">
            <p className="text-base font-medium leading-5 text-left text-[#DBDBDB] sm:text-center">
              Stay connected with us on
            </p>
            <p className="text-base font-medium leading-5 text-left text-[#DBDBDB] sm:text-center">
              social media!
            </p>
            <div className="flex gap-4 mt-8 sm:justify-center sm:items-center">
              <Link href="https://facebook.com/vibeazyapp">
                <FaFacebookF />
              </Link>
              <Link href="https://twitter.com/vibeazyapp">
                <TiSocialTwitter />
              </Link>
              <Link href="https://instagram.com/vibeazyapp">
                <FaInstagram />
              </Link>
              <Link href="https://tiktok.com/@vibeazyapp">
                <FaTiktok />
              </Link>
            </div>
            <h3 className="text-sm mt-6 mb-6 sm:block hidden">
              © Copyright Vibeazy. 2024. All Rights Reserved
            </h3>
          </div>
        </div>
      </div>
      <div className="bg-[#F080801A] py-8 px-24 sm:hidden">
        <p className="text-base font-normal leading-4 text-left">
          © Copyright Vibeazy. 2024. All Rights Reserved
        </p>
      </div>
    </footer>
  );
}

export default Footer;