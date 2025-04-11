import ServicesGrid from "@/components/services/Services"
import CTAComponent from "@/components/about/CTA"
import ServicesHero from "@/components/services/ServicesHero"

export default function page() {
  return (
    <div>
         <ServicesHero />
        <ServicesGrid />
        {/* <CTAComponent /> */}
       
    </div>
  )
}
