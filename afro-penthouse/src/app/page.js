import React from 'react'
import HomeHero from '@/components/home/HomeHero'
import TrustedBy from '@/components/home/HomeSlider'
import StatsSection from '@/components/home/Stats'
import ServicesSection from '@/components/home/Services'
import MissionSection from '@/components/home/Mission'
import CTASection from '@/components/home/Cta'

export default function page() {
  return (
    <div>
      <HomeHero />
      <TrustedBy />
      <StatsSection />
      <ServicesSection />
      <MissionSection/>
      {/* <CTASection /> */}
    </div>
  )
}
