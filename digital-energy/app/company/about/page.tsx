import PageHeaderBg from "@/components/(landing)/common/page-header/PageHeaderBg"
import { Images } from "@/public/images"
import AboutIntro from "@/components/(landing)/ui-about/AboutIntro"
import AboutStory from "@/components/(landing)/ui-about/AboutStory"
import RequestQuoteBanner from "@/components/(landing)/footer/RequestQuoteBanner"
import AboutSlider from "@/components/(about)/about-slider/AboutSlider"

export const metadata = {
    title: "About us",
    description: "About Digital Energies Ltd.",
}

export default function Page() {
    return (
        <>
            <PageHeaderBg
                title="About us"
                image={Images.AboutBanner}
            />
            <AboutIntro />
            <AboutStory />
            <AboutSlider />
            {/* <Awards /> */}
            <RequestQuoteBanner />
        </>
    )
}
