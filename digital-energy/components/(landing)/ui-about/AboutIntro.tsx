import { Images } from "@/public/images"
import Container from "../common/Container"

const AboutIntro = () => {
    return (
        <section className="lg:pt-20">
            <Container className="!max-w-full px-0 md:px-0">
                <div className="relative w-full flex flex-col-reverse lg:flex-row lg:justify-end">
                    {/* -- width: 628px = 720px-(144/2) height = 516px-(144/2) -- */}
                    <div
                        className="z-10 lg:absolute lg:bottom-0 lg:left-0 w-full self-end lg:max-w-[calc(100%-648px)] xl:max-w-[calc(100%-828px)] h-[376px] lg:h-[calc(100%-72px)] bg-center bg-no-repeat bg-cover bg-fixed lg:bg-scroll"
                        style={{
                            backgroundImage: `url(${Images.RequestQuoteBannerBgImage})`
                        }}
                    ></div>

                    <div className="relative w-full lg:max-w-[720px] xl:max-w-[900px] py-14 pl-7 pr-7 sm:px-10 lg:pl-36 xl:pr-12  bg-de_tertiary_09 text-de_gray_c5">
                        <div className="absolute top-0 right-0 w-20 flex flex-wrap justify-end">
                            <div className="h-10 w-10 bg-white"></div>
                            <div className="h-10 w-10 bg-transparent"></div>
                            <div className="h-10 w-10 bg-white"></div>
                        </div>

                        <div className="w-full flex flex-col gap-y-7">
                            <div className="flex flex-col-reverse gap-y-3">
                                <h2 className="w-auto font-normal text-2xl md:text-3xl text-white">
                                    What we do in the oil sector
                                </h2>
                                <h3 className="font-medium text-sm uppercase">
                                    About
                                </h3>
                            </div>

                            <div className="space-y-5">
                                <p>
                                    Digital Energy and Integrated Services Limited was incorporated as a wholly indigenous provider of integrated engineering, Procurement, production and flow assurance solutions to operators of oil & gas and hydrocarbon processing facilities. Since its inception, Digital Energy has successfully executed projects for various companies including IOCs and local operators in the Nigerian Petroleum industry.
                                </p>
                                <p>
                                    Digital Energy and Integrated Services Limited was incorporated as a wholly indigenous provider of integrated engineering, Procurement, production and flow assurance solutions to operators of oil & gas and hydrocarbon processing facilities.
                                    Successfully executed projects for various companies including IOCs and local operators in the Nigerian Petroleum industry.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default AboutIntro