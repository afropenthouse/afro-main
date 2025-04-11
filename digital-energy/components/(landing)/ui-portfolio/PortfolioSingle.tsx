import { PortfolioProp } from "@/lib/types/constant"
import { Icons } from "../common/Icons"

const PortfolioSingle = ({
    image,
    title,
    description,
}: PortfolioProp) => {
    return (
        <div
            className="relative h-96 md:h-[28rem] lg:h-[31rem] 2xl:h-[34rem] flex flex-col justify-between px-5 py-6 sm:px-8 sm:pt-12 sm:pb-9 gap-y-8 group bg-[50%_10%] bg-no-repeat bg-cover"
            style={{
                backgroundImage: `url(${image})`
            }}
        >
            <div className="absolute top-0 left-0 w-20 flex flex-wrap">
                <div className="h-10 w-10 bg-transparent"></div>
                <div className="h-10 w-10 bg-white"></div>
                <div className="h-10 w-10 bg-white"></div>
            </div>

            <div className="w-full max-w-[25rem] absolute bottom-0 left-0 p-4 lg:p-5 space-y-2.5 bg-de_tertiary_09/70 backdrop-blur-md">
                <h3 className="font-semibold text-base md:text-lg !leading-6 text-white">
                    {title}
                </h3>

                <p className="inline-flex items-center gap-x-1 text-xs text-de_gray_c5">
                    <Icons.mapPin size={14} />
                    {description}
                </p>
            </div>
        </div>
    )
}

export default PortfolioSingle