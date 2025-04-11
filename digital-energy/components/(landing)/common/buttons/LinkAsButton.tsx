import Link from "next/link"
import { cn } from "@/lib/utils";
import { IconsType } from "../Icons";

interface LinkProps {
    url: string;
    label: string;
    outline?: boolean;
    primary?: boolean;
    secondary?: boolean;
    openExternal?: boolean;
    className?: string;
    icon?: IconsType;
    iconWH?: string;
}

const LinkAsButton = ({
    url,
    label,
    outline,
    primary,
    secondary,
    openExternal,
    className,
    icon: Icon,
    iconWH,
}: LinkProps) => {
    return (
        <Link
            href={url}
            className={cn(
                "min-w-28 sm:min-w-32 h-10 sm:h-11 flex justify-center items-center py-3 px-4 border-[1.5px] text-sm font-medium shadow-none transition-colors active:scale-[0.97]",
                outline && "bg-transparent text-de_tertiary_0c",
                primary && "bg-de_red_c6 text-white border-transparent hover:bg-white hover:text-de_red_c6",
                secondary && "bg-de_gray_ef hover:bg-transparent border-transparent hover:border-de_gray_c5 dark:bg-de_tertiary_0c dark:hover:border-white/[.145]",
                className
            )}
            target={openExternal ? "_blank" : undefined}
        >
            {Icon && (
                <Icon
                    size={16}
                    className={iconWH ? iconWH : "min-w-4 min-h-4"}
                />
            )}
            {label}
        </Link>
    )
}

export default LinkAsButton
