import { cn } from "@/lib/utils";

export const MainPageHeading = ({
    subtitle,
    title,
    description,
    mainCentered,
    className,
}: {
    subtitle?: string;
    title: string;
    description?: string;
    mainCentered?: boolean;
    className?: string,
}) => {
    return (
        <div className={cn(
            "flex flex-col gap-5 w-full max-w-lg lg:max-w-[640px] xl:max-w-[740px]",
            mainCentered && "items-center mx-auto text-center",
            className
        )}>
            <div className="flex flex-col-reverse gap-4">
                <h1 className="font-semibold text-3xl sm:text-4xl lg:text-5xl xl:text-[3.5rem] xl:leading-[3.75rem] tracking-[-1.25px] text-de_tertiary_09">
                    {title}
                </h1>

                {subtitle && (
                    <h3 className="font-medium text-base text-de_red_c6 uppercase">
                        {subtitle}
                    </h3>
                )}
            </div>

            {description && (
                <p className="text-de_tertiary_0c max-w-[600px] mx-auto">{description}</p>
            )}
        </div>
    );
};

export const MainSectionHeading = ({
    subtitle,
    title,
    description,
    mainCentered,
    className,
}: {
    subtitle?: string;
    title: string;
    description?: string;
    mainCentered?: boolean;
    className?: string,
}) => {
    return (
        <div className={cn(
            "flex flex-col gap-4 w-full max-w-[460px]",
            mainCentered && "items-center max-w-[640px] mx-auto text-center",
            className
        )}>
            <div className="flex flex-col-reverse gap-4">
                <h2 className="font-normal text-3xl leading-[2.5rem] sm:text-4xl lg:text-[2.5rem] sm:leading-[3rem] text-de_tertiary_09">{title}</h2>

                {subtitle && (
                    <h3 className="font-medium text-base text-de_red_c6 uppercase">
                        {subtitle}
                    </h3>
                )}
            </div>

            {description && (
                <p className="text-de_tertiary_0c">{description}</p>
            )}
        </div>
    );
};


export const SubSectionHeading = ({
    title,
    description,
    className,
}: {
    title: string;
    description?: string;
    className?: string,
}) => {
    return (
        <div className={cn(
            "flex flex-col gap-4",
            className
        )}>
            <h2 className="font-normal text-[1.625rem] leading-8 md:text-[2rem] sm:leading-[2.375rem] text-de_tertiary_09">{title}</h2>
            {description && (
                <p className="text-de_tertiary_0c">{description}</p>
            )}
        </div>
    );
};


export const SectionListHeading = ({
    title,
    description,
    className,
}: {
    title: string;
    description?: string;
    className?: string,
}) => {
    return (
        <div className={cn(
            "flex flex-col gap-4",
            className
        )}>
            <h3 className="font-medium text-lg sm:text-xl text-de_tertiary_09">{title}</h3>
            {description && (
                <p className="text-de_tertiary_0c">{description}</p>
            )}
        </div>
    );
};

