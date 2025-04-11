import Image from "next/image";
import Footer_instagram from "../../public/footer-instagram.png";
import Footer_twitter from "../../public/footer-twitter.png";
import Footer_facebook from "../../public/footer-facebook.png";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#004785] w-full py-20 text-white font-normal">
      <div className="w-full grid grid-cols-1 md:grid-cols-3 px-5 md:px-[100px]">
        <div className="hidden md:block">
          <h4 className="mb-5 font-semibold">Facilities</h4>
          <ul className="text-sm">
            <li className="mb-3">Fabrication Shops</li>

            <li className="mb-3">Sandblasting/Painting Shop</li>

            <li>Workshop Offices</li>
          </ul>
        </div>
        <div className="md:flex justify-center hidden">
          <div>
            <h4 className="mb-5 font-semibold">Services</h4>
            <ul className="text-sm">
              <Link href="/services">
                <li className="mb-3">Industrial Fabrication</li>
              </Link>
              <Link href="/services">
                <li className="mb-3">Sandblasting</li>
              </Link>
              <Link href="/services">
                <li className="mb-3">Painting</li>
              </Link>
              <Link href="/services">
                <li>Storage Solutions</li>
              </Link>
            </ul>
          </div>
        </div>
        <div className="md:flex justify-end">
          <div>
            <h4 className="mb-5 font-semibold">Contact Details</h4>
            <ul className="text-sm ">
              <li className="mb-3">Contact Number</li>
              <li className="mb-3">+234 84 55 66 80</li>
              <li className="mb-3">Email</li>
              <li className="mb-3">support@Bridge Waters G.S..com</li>
              <li className="mb-3">Head Office</li>
              <li className="">
                19B Da Silva Street, Lekki Phase 1, Lekki, Lagos Nigeria
              </li>
            </ul>
          </div>
        </div>
        <div className="md:hidden"></div>
      </div>
      <hr className="w-full my-10" />
      <div className="w-full grid grid-cols-1 md:grid-cols-3 md:px-[50px] ">
        <ul className="flex items-center text-xs md:text-base mx-auto">
          <Link href="/">
            <li className="mr-3">Home</li>
          </Link>
          <Link href="/what-we-do">
            <li className="mr-3">About Us</li>
          </Link>
          <Link href="/connect-with-us">
            <li className="mr-3">Contact Us</li>
          </Link>
        </ul>
        <div className="hidden justify-center md:flex">
          <p>@ 2024, All Rights Reserved</p>
        </div>
        <div className="flex justify-center md:justify-end my-5 md:my-0">
          <ul className="flex items-center">
            <li className="mr-3">
              <Image src={Footer_instagram} className="" />
            </li>
            <li className="mr-3">
              <Image src={Footer_twitter} className="" />
            </li>
            <li className="mr-3">
              <Image src={Footer_facebook} className="" />
            </li>
          </ul>
        </div>
        <div className="flex justify-center md:hidden">
          <p>@ 2023, All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
}
