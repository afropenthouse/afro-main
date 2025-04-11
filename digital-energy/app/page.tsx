import Hero from "@/components/(landing)/hero/Hero";
import Innovation from "@/components/(landing)/innovation/Innovation";
import Mission from "@/components/(landing)/home-mission/Mission";
import { Mukta_Vaani } from "next/font/google";
import Service from "@/components/(landing)/home-service/Service";
import Portfolio from "@/components/(landing)/home-portfolio/Portfolio";
import LogoSlider from "@/components/(landing)/home-slider/Slider";
import RequestQuoteBanner from "@/components/(landing)/footer/RequestQuoteBanner";
import DigitalEnergyLanding from "../app/home/MobileLanding";

const mukta = Mukta_Vaani({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

export default function page() {
  return (
   <>
    <div className={`${mukta.className} show-desktop`}>
      <Hero />
      <Innovation />
      <Mission />
      <Service />
      <Portfolio />
      <LogoSlider />
      <RequestQuoteBanner />
    </div>
    <div className="show-mobile">
    <DigitalEnergyLanding />
    <RequestQuoteBanner />
  </div>
   </>
  );
}
