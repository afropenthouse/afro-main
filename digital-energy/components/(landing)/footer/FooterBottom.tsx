"use client";

import { useEffect, useState } from "react";
import Link from "next/link"
import { footLinks } from "@/lib/data/navigation"
import { Icons } from "../common/Icons"
import { CustomButtonIcon } from "../common/buttons/ButtonComponent"

const FooterBottom = () => {
    const [isVisible, setIsVisible] = useState(false);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", toggleVisibility);
        return () => {
            window.removeEventListener("scroll", toggleVisibility);
        };
    }, []);

    return (
        <div className="sm:h-20 py-4 sm:py-0 flex flex-col-reverse sm:flex-row sm:items-center justify-between gap-y-4 gap-x-10 text-sm text-de_tertiary_0c">
            <div className="flex flex-col sm:flex-row sm:items-center gap-y-2 gap-x-0.5">
                Copyright &copy; {new Date().getFullYear()}. Digital Energy
            </div>

            <div className="flex space-x-8">
                <menu className="flex items-center gap-x-1">
                    {footLinks?.map((item, index) => (
                        <li key={item.id} className="inline-flex items-center gap-x-1">
                            {index !== 0 && (
                                <Icons.dot
                                    size={20}
                                    className="text-de_gray_ad inline-flex" // hidden sm:inline-flex
                                />
                            )}
                            <Link
                                href={item.path}
                                className="hover:underline underline-offset-4"
                            >
                                {item.name}
                            </Link>
                        </li>
                    ))}
                </menu>

                {isVisible && (
                    <CustomButtonIcon
                        label="Back to top"
                        onClick={scrollToTop}
                        primary
                        icon={Icons.chevronUp}
                        className="h-14 w-14 md:h-20 md:w-20 p-0 fixed right-3 bottom-6 md:relative md:right-auto md:bottom-auto"
                        iconWH="min-w-6 min-h-6"
                    />
                )}
            </div>
        </div>
    )
}

export default FooterBottom