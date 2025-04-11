import ProjectHero from "@/components/project/ProjectHero"
import PortfolioCard from "@/components/project/Projects"
import CTAComponent from "@/components/about/CTA"

export default function page() {
  return (
    <div>
        <ProjectHero />
        <PortfolioCard />
        {/* <CTAComponent /> */}
    </div>
  )
}
