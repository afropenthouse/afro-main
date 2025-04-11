import PageHeaderBg from "@/components/(landing)/common/page-header/PageHeaderBg"
import { Images } from "@/public/images"
import Subsidiaries from "@/components/(landing)/ui-company/Subsidiaries"
import RequestQuoteBanner from "@/components/(landing)/footer/RequestQuoteBanner"

export const metadata = {
    title: "Tech subsidiaries",
    description: "Tech subsidiaries of Digital Energies Ltd.",
}

export default function Page() {
    return (
        <>
            <PageHeaderBg
                title="Tech subsidiaries"
                image={Images.SubsidiariesBanner}
            />
            <Subsidiaries />
            <RequestQuoteBanner />
        </>
    )
}
