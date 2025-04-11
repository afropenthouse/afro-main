import Link from "next/link";
import Image from "next/image";

import HeroCta from "./HeroCta";

const Hero = () => {
    return (
        <section className="relative h-screen w-screen bg-[#011A34] pb-10 mb-[7rem]">
            <div className="max-w-[80rem] mx-auto flex flex-col md:flex-row justify-between items-center gap-y-10 sm:gap-y-14 sm:gap-x-10 py-6 px-5 sm:px-6 lg:px-8">
                <div className="flex flex-col gap-y-10">
                    <div className="flex flex-col gap-y-6">
                        <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl text-white">Empowering the Next Generation of Global Leaders</h1>
                        <p className="text-base text-[#EBFBFF]">Find top mentors in any field.  We're launching soon!</p>
                    </div>

                    <div className="flex gap-3.5 flex-wrap">
                        <Link
                            href="/join-as-mentor"
                            className="h-11 flex justify-center items-center py-2.5 px-5 bg-[#BBD1EA] hover:bg-[#EBFBFF] text-[#262728] rounded-[1.25rem] transition-colors duration-300"
                        >
                            Join as a mentor
                        </Link>
                        <Link
                            href="/find-a-mentor"
                            className="h-11 flex justify-center items-center py-2.5 px-5 bg-[#EBFBFF] hover:bg-[#BBD1EA] text-[#262728] rounded-[1.25rem] transition-colors duration-300"
                        >
                            Find a mentor
                        </Link>
                    </div>
                </div>

                <Image
                    src="/ceo4.png"
                    alt="hero banner"
                    width={700}
                    height={700}
                    className="heroImage"
                />
            </div>

            <HeroCta />
        </section>
    )
}

export default Hero