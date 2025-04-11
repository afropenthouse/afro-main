import PageHeaderBg from "@/components/(landing)/common/page-header/PageHeaderBg"
import { Images } from "@/public/images"
import Portfolio from "@/components/(landing)/ui-portfolio/Portfolio"
import RequestQuoteBanner from "@/components/(landing)/footer/RequestQuoteBanner"

export const metadata = {
    title: "Our Portfolio",
    description: "Portfolio of Digital Energies Ltd.",
}

export default function Page() {
    return (
        <>
            <PageHeaderBg
                title="Our Portfolio"
                image={Images.PortfolioBanner}
            />
            <Portfolio />
            <RequestQuoteBanner />
        </>
    )
}
