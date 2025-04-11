"use client";

import { cn } from "@/lib/utils";
import ElementLoader from "./Loader";

const ButtonComponent = ({
    label,
    ariaLabel,
    type,
    onClick,
    disabled,
    outline,
    outline_primary,
    outline_secondary,
    primary,
    // danger,
    small,
    medium,
    isLoading,
    className,
    icon: Icon,
}) => {
    return (
        <button
            type={type ? type : "button"}
            disabled={disabled}
            onClick={onClick}
            className={cn(
                "w-max h-11 flex justify-center items-center relative py-2 px-5 font-medium text-sm text-app_tertiary border-[1.5px] border-transparent rounded-3xl disabled:bg-app_gray_cec disabled:opacity-70 transition active:scale-[0.97] app_focus",
                outline && "border-app_gray_e9e hover:bg-app_gray_e9e",
                outline_secondary && "border-app_primary_f0/40 hover:bg-app_primary hover:text-white hover:border-app_primary",
                outline_primary && "border-app_primary text-app_primary hover:bg-app_primary hover:text-white",
                primary && "bg-app_primary text-white hover:bg-app_primary/70",
                // danger && "bg-app_red text-white hover:bg-app_red/70 hover:text-app_red/70 border-app_red/70",
                small && "h-9 text-xs py-1 px-2.5 border",
                medium && "h-10 text-xs py-1 px-3.5 border",
                className
            )}
            aria-label={ariaLabel ? ariaLabel : label}
        >
            {Icon && (
                <Icon
                    size={20}
                    className={cn(small ? "mr-1" : "mr-2")}
                />
            )}
            {isLoading ? (
                <ElementLoader />
            ) : label}
        </button>
    );
}

export default ButtonComponent;