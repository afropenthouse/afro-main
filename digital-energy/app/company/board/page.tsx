import PageHeaderBg from "@/components/(landing)/common/page-header/PageHeaderBg"
import { Images } from "@/public/images"
import Board from "@/components/(landing)/ui-company/Board"
import RequestQuoteBanner from "@/components/(landing)/footer/RequestQuoteBanner"

export const metadata = {
    title: "Board of Directors",
    description: "Board of Directors of Digital Energies Ltd.",
}

export default function Page() {
    return (
        <>
            <PageHeaderBg
                title="Board of Directors"
                image={Images.BoardBanner}
            />
            <Board />
            <RequestQuoteBanner />
        </>
    )
}
