"use client";

import { Dispatch, SetStateAction, useState } from "react";
import { useRouter } from "next/navigation";

import { ContactDirectionProp } from "@/lib/types/constant"
import { Icons } from "../common/Icons"
import { CustomButton } from "../common/buttons/ButtonComponent"

type DirectionSingleType = ContactDirectionProp & {
    currentMap: string;
    setCurrentMap: Dispatch<SetStateAction<string>>;
};

const DirectionSingle = ({
    id,
    title,
    address,
    phone_numbers,
    // direction,
    currentMap,
    setCurrentMap
}: DirectionSingleType) => {
    const router = useRouter();
    const [isActive, setIsActive] = useState(false);

    const getDirection = () => {
        setCurrentMap(id);
        router.push("/contact-us#map", { scroll: false });
        setIsActive(true);

        const section = document.getElementById("map");
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <div className="relative h-auto min-h-[340px] sm:min-h-[370px] lg:min-h-[390px] flex flex-col justify-between px-5 py-6 sm:px-8 sm:pt-12 sm:pb-9 gap-y-8 bg-de_gray_f7 text-de_tertiary_09">
            <div className="absolute top-0 right-0 w-20 flex flex-wrap justify-end">
                <div className="h-10 w-10 bg-white"></div>
                <div className="h-10 w-10 bg-transparent"></div>
                <div className="h-10 w-10 bg-white"></div>
            </div>

            <div className="space-y-8">
                <div className="w-14 h-14 flex justify-center items-center bg-de_red_d3 text-white rounded-full">
                    <Icons.mapPin size={24} />
                </div>

                <div className="space-y-4">
                    <h3 className="font-medium text-xl md:text-2xl lg:text-[1.75rem] lg:leading-9">
                        {title}
                    </h3>
                    <div className="space-y-2">
                        <p className="text-sm text-de_tertiary_0c">
                            {address}
                        </p>
                        {phone_numbers.length > 0 && (
                            <ul className="flex flex-wrap text-sm text-de_tertiary_0c">
                                <span className="mr-1.5">Phone:</span>
                                {phone_numbers.map((ph, index) => (
                                    <li key={index}>{index > 0 ? `, ${ph}` : ph}</li>
                                ))}
                            </ul>
                        )}
                    </div>
                </div>
            </div>

            <CustomButton
                label="Get Direction"
                variant="link"
                onClick={getDirection}
                className={`${currentMap === id && isActive && "text-de_red_d3"}`}
            />
        </div>
    )
}

export default DirectionSingle