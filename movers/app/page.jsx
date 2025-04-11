import Image from "next/image";
import Hero from "@/components/home/Hero";
import Easy from "@/components/home/Easy";
import ServicesGrid from "@/components/home/ServiceGrid";
import MoveFaster from "@/components/home/MoveFaster";
import CompanyValues from "@/components/home/CompanyValues";
import ContactUs from "@/components/home/Contact";
import MovingForm from "@/components/common/Modal";
export default function Home() {
  return (
    <>
      <Hero />
      <Easy />
      <ServicesGrid />
      <MoveFaster />
      <CompanyValues />
      <ContactUs  />
    </>
  );
}
