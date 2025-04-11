import React from "react";
import AdditionalMovingServices from "@/components/services/Additional";
import MovingServicesSection from "@/components/services/Moving";
import ServiceHero from "@/components/services/ServiceHero";
export const metadata = {
  title: "H&O Movers - Services",
  description: "Services",
};

export default function Services() {
  return (
    <div id="services">
      <ServiceHero />
      <MovingServicesSection />
      <AdditionalMovingServices />
    </div>
  );
}




