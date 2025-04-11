import AboutHero from "@/components/about/AboutHero"
import ICTServicesComponent from "@/components/about/ICTServicesComponent"
import CompanyValues from "@/components/about/CompanyValues"
import TeamMembersComponent from "@/components/about/TeamMembers"
import CTAComponent from "@/components/about/CTA"

export default function page() {
  return (
    <div>
        <AboutHero />
        <ICTServicesComponent />
        <CompanyValues />
        <TeamMembersComponent />
        {/* <CTAComponent /> */}
    </div>
  )
}
