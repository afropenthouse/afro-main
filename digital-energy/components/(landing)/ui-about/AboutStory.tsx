import Link from "next/link"
import { Icons } from "../common/Icons"
import Container from "../common/Container"

const AboutStory = () => {
    return (
        <section className="py-16 sm:py-20">
            <Container>
                <div className="relative w-full flex flex-col-reverse lg:flex-row lg:justify-between gap-y-10 lg:gap-x-10">
                    <div className="w-full lg:max-w-[800px] xl:max-w-[900px] flex flex-col gap-y-7 py-10 px-7 sm:p-10 xl:p-12 bg-de_gray_f7">
                        <div className="space-y-5">
                            <p>
                                We have an impressive track record for bringing a high level of responsiveness and competence to projects with demanding quality requirements and time constraints. Our industrial design expertise combined with our experienced team and a well-equipped fabrication shop allows us to create practical solutions to complex challenges.
                            </p>
                            <p>
                                Efficient project management, with close focus on resource allocation and time management, means we deliver premium quality fabrications at the best value.
                            </p>
                            <p>
                                The DIGITAL ENERGY facility is 10,000 square feet in area and 30 feet high, featuring a complete range of specialized machining equipment (lathes, milling machinery, boring mills and drill presses).
                            </p>
                        </div>

                        <Link
                            href="/"
                            className="max-w-max min-w-28 sm:min-w-32 h-10 sm:h-11 flex justify-center items-center gap-x-2.5 py-3 px-4 bg-de_red_c6 text-white border-transparent hover:bg-white hover:text-de_red_c6 border-[1.5px] text-sm font-medium shadow-none transition-colors active:scale-[0.97] capitalize"
                            target="_blank" rel="noopener noreferrer"
                        >
                            <Icons.downloadCloud />
                            Download company profile
                        </Link>
                    </div>

                    <div className="w-full lg:max-w-[250px] flex flex-col-reverse self-start gap-y-3 lg:pt-10">
                        <h2 className="w-auto font-normal text-2xl md:text-3xl">
                            Our Story &amp; Corporate Profile
                        </h2>
                        <h3 className="font-medium text-sm text-de_red_c6 uppercase">
                            Story
                        </h3>
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default AboutStory