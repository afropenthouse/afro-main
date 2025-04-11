import PageHeaderBg from "@/components/(landing)/common/page-header/PageHeaderBg"
import { Images } from "@/public/images"
import Services from "@/components/(landing)/ui-services/Services"
import RequestQuoteBanner from "@/components/(landing)/footer/RequestQuoteBanner"

export const metadata = {
    title: "Our Services",
    description: "Services offered by Digital Energies Ltd.",
}

export default function Page() {
    return (
        <>
            <PageHeaderBg
                title="Our Services"
                image={Images.ServicesBanner}
            />
            <Services />
            <RequestQuoteBanner />
        </>
    )
}
