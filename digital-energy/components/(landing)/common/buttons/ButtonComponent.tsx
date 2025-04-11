"use client";

import { Icons, IconsType } from "../Icons";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

type ButtonProps = {
    label: string;
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
    icon?: IconsType;
    className?: string;
    variant?:
    | "default"
    | "destructive"
    | "outline"
    | "secondary"
    | "ghost"
    | "link";
    iconWH?: string;
}

type CustomButtonProps = ButtonProps & {
    outline?: boolean;
    outline_primary?: boolean;
    primary?: boolean;
    danger?: boolean;
    small?: boolean;
    isLoading?: boolean;
    disabled?: boolean;
}

export const CustomButton = ({
    label,
    onClick,
    disabled,
    outline,
    outline_primary,
    primary,
    small,
    isLoading,
    className,
    variant,
    icon: Icon,
    iconWH,
}: CustomButtonProps) => {
    return (
        <Button
            type="button"
            variant={variant}
            disabled={disabled}
            onClick={onClick}
            aria-label={label}
            className={cn(
                "inline-flex items-center justify-center gap-2 relative font-medium text-de_tertiary_0c shadow-none rounded-lg transition-colors disabled:bg-de_gray_c5 disabled:border-de_gray_c5 active:scale-[0.97]",
                outline && "bg-transparent border-de_tertiary_5d",
                outline_primary && "bg-transparent text-de_red_c6 border-de_red_c6",
                primary && "bg-de_red_c6 text-white hover:text-de_red_c6 border-de_red_c6",
                small ? "text-xs py-1 px-2.5 border" : "text-sm h-12 py-3 px-4 border-[1.5px]",
                variant === "link" && "w-max h-6 p-0 border-0 underline hover:no-underline",
                className
            )}
        >
            {Icon && (
                <Icon
                    size={small || variant === "link" ? 16 : 20}
                    className={cn(
                        small || variant === "link" ? "mr-1" : "mr-2",
                        iconWH
                    )}
                />
            )}
            {isLoading ? (
                <span className="h-5 flex justify-center items-center">
                    <Icons.spinner className="animate-spin" />
                </span>
            ) : label}
        </Button>
    );
}

export const CustomButtonIcon = ({
    label,
    onClick,
    disabled,
    outline,
    primary,
    className,
    icon: Icon,
    iconWH,
}: CustomButtonProps) => {
    return (
        <Button
            type="button"
            disabled={disabled}
            onClick={onClick}
            aria-label={label}
            className={cn(
                "rounded-none shadow-none transition-colors active:scale-[0.97]",
                outline && "bg-transparent text-de_tertiary_09 border border-de_gray_ad hover:bg-de_red_c6 hover:text-white hover:border-transparent",
                primary && "bg-de_red_c6 text-white hover:bg-de_gray_dd hover:text-de_red_c6 border-transparent",
                className
            )}
        >
            {Icon && (
                <Icon className={iconWH} />
            )}
        </Button>
    );
}

type SubmitButtonProps = {
    label: string;
    isLoading?: boolean;
    disabled?: boolean;
    className?: string;
}

export const SubmitButton = ({
    label,
    isLoading,
    disabled,
    className
}: SubmitButtonProps) => {
    return (
        <Button
            type="submit"
            className={cn(
                "min-w-28 sm:min-w-32 h-10 sm:h-11 inline-flex justify-center items-center disabled:bg-de_gray_c5 disabled:text-de_tertiary_0c disabled:border-de_gray_c5 text-sm py-3 px-4 font-medium bg-de_red_c6 text-white hover:bg-white hover:text-de_red_c6 border-[1.5px] border-de_red_c6 shadow-none rounded-lg active:scale-[0.97]",
                className
            )}
            disabled={disabled}
        >
            {isLoading ? (
                <span className="h-5 flex justify-center items-center">
                    <Icons.spinner className="animate-spin" />
                </span>
            ) : label}
        </Button>
    )
};