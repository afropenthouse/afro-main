"use client";

import { useState } from "react"
import Image from "next/image"
import { creativeHeadsData, subsidiarySlidesData } from "@/lib/data"
import { Icons } from "../common/Icons"
import Container from "../common/Container"
import TeamSingle from "./TeamSingle"
import { CustomButtonIcon } from "../common/buttons/ButtonComponent"
import LinkAsButton from "../common/buttons/LinkAsButton"

const Subsidiaries = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrevious = () => {
        if (currentIndex > 0) {
            setCurrentIndex((prev) => prev - 1);
        }
    };

    const handleNext = () => {
        if (currentIndex < subsidiarySlidesData.length - 1) {
            setCurrentIndex((prev) => prev + 1);
        }
    };

    return (
        <>
            <section className="py-8 sm:py-12 md:py-16">
                <Container>
                    <div className="flex flex-col gap-y-8 md:gap-y-12">
                        <div className="w-full flex flex-wrap justify-between gap-4">
                            <div className="flex flex-col-reverse gap-y-2">
                                <h2 className="w-auto font-normal text-xl sm:text-2xl md:text-3xl">
                                    Our Products
                                </h2>
                                <h3 className="font-medium text-sm text-de_red_c6 uppercase">
                                    Products
                                </h3>
                            </div>

                            <div className="flex items-end gap-x-2">
                                <CustomButtonIcon
                                    label="previous"
                                    onClick={handlePrevious}
                                    disabled={currentIndex === 0}
                                    outline
                                    icon={Icons.chevronLeft}
                                    className="h-8 w-8 sm:h-10 sm:w-10 p-0 transition-all duration-300 hover:bg-de_gray_f7 hover:border-de_gray_f7 disabled:opacity-50"
                                    iconWH="min-w-4 min-h-4 sm:min-w-5 sm:min-h-5"
                                />
                                <CustomButtonIcon
                                    label="next"
                                    onClick={handleNext}
                                    disabled={currentIndex >= subsidiarySlidesData.length - 1}
                                    outline
                                    icon={Icons.chevronRight}
                                    className="h-8 w-8 sm:h-10 sm:w-10 p-0 transition-all duration-300 hover:bg-de_gray_f7 hover:border-de_gray_f7 disabled:opacity-50"
                                    iconWH="min-w-4 min-h-4 sm:min-w-5 sm:min-h-5"
                                />
                            </div>
                        </div>

                        <div className="flex justify-center">
                            <div className="w-full max-w-4xl bg-de_gray_f7 rounded-lg transition-all duration-300 hover:shadow-lg">
                                <div className="flex flex-col md:flex-row gap-6 md:gap-10 items-center p-4 sm:p-6 md:p-8">
                                    <div className="w-full md:w-1/2 flex justify-center overflow-hidden rounded-lg group">
                                        <Image
                                            src={subsidiarySlidesData[currentIndex].image}
                                            alt={subsidiarySlidesData[currentIndex].product_name || "product image"}
                                            height={307}
                                            width={307}
                                            className="w-full max-w-[280px] md:max-w-[307px] h-auto object-cover transition-transform duration-300 group-hover:scale-105"
                                        />
                                    </div>

                                    <div className="w-full md:w-1/2 flex flex-col gap-y-6">
                                        <div className="flex flex-col gap-y-4 text-sm text-de_tertiary_0c">
                                            <div className="space-y-1 group cursor-default">
                                                <h3 className="font-medium text-lg sm:text-xl lg:text-2xl transition-colors duration-300 group-hover:text-de_red_c6">
                                                    {subsidiarySlidesData[currentIndex].product_name}
                                                </h3>
                                                <div>
                                                    <span className="capitalize opacity-80 transition-opacity duration-300 group-hover:opacity-100">
                                                        {subsidiarySlidesData[currentIndex].category}
                                                    </span>
                                                </div>
                                            </div>
                                            <p className="text-sm sm:text-base transition-colors duration-300 hover:text-black">
                                                {subsidiarySlidesData[currentIndex].product_info}
                                            </p>
                                        </div>

                                        <LinkAsButton
                                            label="Visit website"
                                            url={subsidiarySlidesData[currentIndex].link}
                                            primary
                                            className="w-max flex-row-reverse gap-x-2.5 transition-transform duration-300 hover:translate-x-1"
                                            icon={Icons.arrowUpRight}
                                            openExternal
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>

            <section className="pb-8 sm:pb-12 md:pb-16">
                <Container>
                    <div className="flex flex-col gap-y-8 md:gap-y-12">
                        <div className="flex flex-col-reverse gap-y-2">
                            <h2 className="w-auto font-normal text-xl sm:text-2xl md:text-3xl">
                                Creative Heads
                            </h2>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
                            {creativeHeadsData?.map((value, index) => (
                                <TeamSingle
                                    key={index}
                                    {...value}
                                />
                            ))}
                        </div>
                    </div>
                </Container>
            </section>
        </>
    )
}

export default Subsidiaries