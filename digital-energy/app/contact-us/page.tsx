import PageHeaderBg from "@/components/(landing)/common/page-header/PageHeaderBg"
import { Images } from "@/public/images"
import Contact from "@/components/(landing)/ui-contact/Contact"
import RequestQuoteBanner from "@/components/(landing)/footer/RequestQuoteBanner"
import Direction from "@/components/(landing)/contact-direction/Direction"

export const metadata = {
    title: "Contact us",
    description: "Contact page of Digital Energies Ltd.",
}

export default function Page() {
    return (
        <>
            <PageHeaderBg
                title="Contact us"
                image={Images.ContactBanner}
            />
            <Contact />
            <Direction />
            <RequestQuoteBanner />
        </>
    )
}
