"use client";

import { useState } from "react";

import { ServiceDetailsProp } from "@/lib/types/constant"
import { servicesData } from "@/lib/data";
import { Icons } from "../common/Icons";
import Container from "../common/Container"
import ServicesSingle from "./ServicesSingle";
import { CustomButtonIcon } from "../common/buttons/ButtonComponent";

type ServicesSingleDetailsType = {
    id: string
} & ServiceDetailsProp;

const ServicesSingleDetails = ({
    id,
    about,
    services
}: ServicesSingleDetailsType) => {
    const otherServices = servicesData.filter(service => service.id !== id);
    const visibleCount = 3
    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrevious = () => {
        if (currentIndex > 0) {
            setCurrentIndex((prev) => prev - 1);
        }
    };

    const handleNext = () => {
        if (currentIndex + visibleCount < otherServices.length) {
            setCurrentIndex((prev) => prev + 1);
        }
    };

    return (
        <>
            <section>
                <Container className="!max-w-full px-0 md:px-0">
                    <div className="w-full flex flex-col md:flex-row">
                        <div className="w-full flex flex-col gap-y-7 py-14 px-7 md:px-8 bg-de_tertiary_09 text-white">
                            <h2 className="w-auto font-normal text-2xl md:text-3xl">About</h2>

                            <div className="space-y-5 text-de_gray_c5">
                                <p>{about.pg1}</p>

                                {about.pg2 && (
                                    <p>{about.pg2}</p>
                                )}
                                {about.pg3 && (
                                    <p>{about.pg3}</p>
                                )}
                            </div>
                        </div>

                        <div className="w-full md:max-w-[595px] 2xl:max-w-[950px] flex flex-col gap-y-7 py-14 px-7 md:px-8 bg-de_gray_f7">
                            <h2 className="font-normal text-2xl md:text-3xl capitalize">
                                {services.title}
                            </h2>

                            <ul className="space-y-5 pl-0.5">
                                {services.values?.length > 0 && services.values.map((itm, index) => (
                                    <li
                                        key={index}
                                        className="flex gap-x-3 items-center"
                                    >
                                        {/* <Icons.chevronRight
                                            size={18}
                                            className="min-h-[1.125rem] min-w-[1.125rem] text-de_red_c6"
                                        /> */}
                                        <div className="h-[3px] min-w-3 bg-de_red_c6"></div>
                                        {itm}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </Container>
            </section>

            <section className="py-16 sm:py-20">
                <Container>
                    <div className="flex flex-col gap-y-12">
                        <div className="w-full flex flex-wrap justify-between gap-6">
                            <div className="flex flex-col-reverse gap-y-3">
                                <h2 className="w-auto font-normal text-2xl md:text-3xl">
                                    Other Services
                                </h2>
                                <h3 className="font-medium text-sm text-de_red_c6 uppercase">
                                    Services
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
                                    disabled={currentIndex + visibleCount >= otherServices.length}
                                    outline
                                    icon={Icons.chevronRight}
                                    className="h-10 w-10 sm:h-12 sm:w-12 p-0"
                                    iconWH="min-w-5 min-h-5"
                                />
                            </div>
                        </div>

                        <div className="flex gap-10 overflow-hidden">
                            {otherServices.slice(currentIndex, currentIndex + visibleCount)?.map((value) => (
                                <div key={value.id} className="min-w-[280px] md:min-w-[330px] xl:min-w-[378px]">
                                    <ServicesSingle
                                        {...value}
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

export default ServicesSingleDetails