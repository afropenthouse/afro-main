"use client";

import { useState } from "react"
import Image from "next/image"

import { managementTeamData, teamSlidesData } from "@/lib/data"
import { Icons } from "../common/Icons"
import Container from "../common/Container"
import TeamSingle from "./TeamSingle"
import { CustomButtonIcon } from "../common/buttons/ButtonComponent"

const Management = () => {
    const visibleCount = 1
    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrevious = () => {
        if (currentIndex > 0) {
            setCurrentIndex((prev) => prev - 1);
        }
    };

    const handleNext = () => {
        if (currentIndex + visibleCount < teamSlidesData.
            length) {
            setCurrentIndex((prev) => prev + 1);
        }
    };

    return (
        <>
            <section className="py-16 sm:py-20">
                <Container>
                    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-10">
                        {managementTeamData?.map((value, index) => (
                            <TeamSingle
                                key={index}
                                {...value}
                            />
                        ))}
                    </div>
                </Container>
            </section>

            <section className="py-16 sm:py-20">
                <Container>
                    <div className="flex flex-col gap-y-12">
                        <div className="w-full flex flex-wrap justify-between gap-6">
                            <div className="flex flex-col-reverse gap-y-3">
                                <h2 className="w-auto font-normal text-2xl md:text-3xl">
                                    Digital Energy Group
                                </h2>
                                <h3 className="font-medium text-sm text-de_red_c6 uppercase">
                                    The team
                                </h3>
                            </div>

                            <div className="flex items-end gap-x-2">
                                <CustomButtonIcon
                                    label="previous"
                                    onClick={handlePrevious}
                                    disabled={currentIndex === 0}
                                    outline
                                    icon={Icons.chevronLeft}
                                    className="h-10 w-10 sm:h-12 sm:w-12 p-0"
                                    iconWH="min-w-5 min-h-5"
                                />
                                <CustomButtonIcon
                                    label="next"
                                    onClick={handleNext}
                                    disabled={currentIndex + visibleCount >= teamSlidesData.length}
                                    outline
                                    icon={Icons.chevronRight}
                                    className="h-10 w-10 sm:h-12 sm:w-12 p-0"
                                    iconWH="min-w-5 min-h-5"
                                />
                            </div>
                        </div>

                        <div className="flex gap-10 overflow-hidden">
                            {teamSlidesData.slice(currentIndex, currentIndex + visibleCount)?.map((itm, index) => (
                                <div key={index} className="w-full h-96 md:h-[28rem] lg:h-[32.5rem] 2xl:h-[35rem]">
                                    <Image
                                        src={itm.image}
                                        alt={itm.title || "team"}
                                        height={520}
                                        width={1600}
                                        className="w-full h-full object-cover object-[40%_30%]"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </Container>
            </section>
        </>
    )
}

export default Management