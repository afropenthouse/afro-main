import PageHeaderBg from "@/components/(landing)/common/page-header/PageHeaderBg"
import { Images } from "@/public/images"
import Management from "@/components/(landing)/ui-company/Management"
import RequestQuoteBanner from "@/components/(landing)/footer/RequestQuoteBanner"

export const metadata = {
    title: "Management Team",
    description: "Management Team of Digital Energies Ltd.",
}

export default function Page() {
    return (
        <>
            <PageHeaderBg
                title="Management Team"
                image={Images.ManagementBanner}
            />
            <Management />
            <RequestQuoteBanner />
        </>
    )
}
