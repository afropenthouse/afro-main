"use client";

import { useState } from "react";
import Link from "next/link"
import { cn } from "@/lib/utils"
import { ServicesProp } from "@/lib/types/constant";

const ServicesSingle = ({
    icon: Icon,
    title,
    description,
    link
}: ServicesProp) => {
    const [isHovered, setIsHovered] = useState("");

    return (
        // sm:w-[280px] md:w-[330px] xl:w-[378px]
        <div
            className={cn(
                "relative h-auto min-h-[370px] sm:min-h-[420px] lg:min-h-[440px] flex flex-col justify-between px-5 py-6 sm:px-8 sm:pt-12 sm:pb-9 gap-y-8 group transition-colors",
                isHovered ? "bg-de_red_c6 text-white" : "bg-de_gray_f7 text-de_tertiary_09"
            )}
            onMouseOver={() => setIsHovered(title)}
            onMouseOut={() => setIsHovered("")}
        >
            <div className="absolute top-0 right-0 w-20 flex flex-wrap justify-end">
                <div className="h-10 w-10 bg-white"></div>
                <div
                    className={cn(
                        "h-10 w-10 transition-colors",
                        isHovered ? "bg-de_tertiary_09" : "bg-transparent"
                    )}
                ></div>
                <div className="h-10 w-10 bg-white"></div>
            </div>

            <div className="space-y-8">
                <div className={cn(
                    "h-16 w-16 flex justify-center items-center rounded-full transition-colors",
                    isHovered ? "bg-white [&>svg>*]:fill-de_red_c6" : "bg-de_red_c6"
                )}>
                    {Icon && <Icon size={32} />}
                </div>

                <div className="space-y-4">
                    <h2 className="font-medium text-xl md:text-2xl lg:text-[1.75rem] lg:leading-9">
                        <Link
                            href={link}
                            className="w-max transition-none"
                        >
                            {title}
                        </Link>
                    </h2>

                    <p className={cn(
                        "text-sm transition-colors",
                        isHovered ? "text-white" : "text-de_tertiary_0c"
                    )}>
                        {description}
                    </p>
                </div>
            </div>

            <Link
                href={link}
                className="w-max font-medium text-sm uppercase underline underline-offset-4 hover:no-underline transition-none"
            >
                See more
            </Link>
        </div>
    )
}

export default ServicesSingle