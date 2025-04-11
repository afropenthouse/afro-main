"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Icons } from "../Icons";

const Breadcrumb = ({ withImage }: { withImage?: boolean }) => {
    const pathname = usePathname();

    const pathSegments = pathname.split("/").filter((segment) => segment !== "").map(link => link.replaceAll("-", " "));

    const constructPath = (index: number) => {
        return "/" + pathSegments.slice(0, index + 1).join("/");
    };

    return (
        <ul className={cn(
            "z-[2] flex flex-wrap gap-x-0.5 items-center font-medium text-sm capitalize pl-0.5",
            withImage ? "text-de_tertiary_5d" : "text-de_gray_c5"
        )}>
            <li className="flex items-center">
                <Link
                    href="/"
                    className={cn(
                        "underline-offset-4 hover:underline",
                        withImage ? "hover:text-de_tertiary_09" : "hover:text-white"
                    )}
                    aria-label="home"
                >
                    Home
                </Link>
            </li>

            <Icons.dot size={20} />

            {pathSegments.map((segment, index) => (
                <li key={index}>
                    <span className="flex flex-wrap items-center">
                        {index < pathSegments.length - 1 ? (
                            <>
                                {segment.toLowerCase() === "company" ? (
                                    <span className={cn(
                                        withImage ? "text-de_tertiary_09" : "text-de_gray_c5"
                                    )}>
                                        {segment}
                                    </span>
                                ) : (
                                    <Link
                                        href={constructPath(index).replaceAll(" ", "-")}
                                        className={cn(
                                            "underline-offset-4 hover:underline",
                                            withImage ? "hover:text-de_tertiary_09" : "hover:text-white"
                                        )}
                                        aria-label={segment}
                                    >
                                        {segment}
                                    </Link>
                                )}
                            </>
                        ) : (
                            <span className={cn(
                                withImage ? "text-de_tertiary_09" : "text-white"
                            )}>
                                {segment === "mission vision values" ? "Mission, Vision & Values" : segment}
                            </span>
                        )}

                        {index < pathSegments.length - 1 && (
                            <Icons.dot size={20} />
                        )}
                    </span>
                </li>
            ))}
        </ul>
    )
}

export default Breadcrumb