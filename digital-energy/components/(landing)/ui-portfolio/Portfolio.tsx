import { portfolioData } from "@/lib/data"
import Container from "../common/Container"
import PortfolioSingle from "./PortfolioSingle"

const Portfolio = () => {
    return (
        <section className="py-16 sm:py-20">
            <Container>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                    {portfolioData?.map((value, index) => (
                        <PortfolioSingle
                            key={index}
                            {...value}
                        />
                    ))}
                </div>
            </Container>
        </section>
    )
}

export default Portfolio