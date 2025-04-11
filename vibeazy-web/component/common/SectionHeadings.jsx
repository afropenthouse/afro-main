import { cn } from "@/lib/utils";

export const MainPageHeading = ({
    title,
    subtitle,
    description,
    mainCentered,
    className,
}) => {
    return (
        <div className={cn(
            "flex flex-col gap-y-6 w-full max-w-[500px] md:max-w-[600px] xl:max-w-[640px]",
            mainCentered && "mx-auto items-center text-center",
            className
        )}>
            <div className="flex flex-col-reverse gap-y-4">
                <h1 className="font-medium text-4xl sm:text-[2.625rem] lg:text-5xl xl:text-[3.375rem] xl:leading-[3.875rem] tracking-[-1.25px]">
                    {title}
                </h1>

                {subtitle && (
                    <h3 className="w-max h-9 flex justify-center items-center px-4 mx-auto font-medium text-sm bg-app_subtitle text-app_primary rounded-3xl capitalize">
                        {subtitle}
                    </h3>
                )}
            </div>

            {description && (
                <p className="text-app_tertiary_2f max-w-[600px]">{description}</p>
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
}) => {
    return (
        <div className={cn(
            "flex flex-col gap-y-6 w-full max-w-[500px] md:max-w-[640px]",
            mainCentered && "mx-auto items-center text-center",
            className
        )}>
            <div className="flex flex-col-reverse gap-y-4">
                <h2 className="font-normal text-3xl leading-[2.5rem] md:text-4xl lg:text-[2.5rem] lg:leading-[3rem] xl:text-[2.75rem]">
                    {title}
                </h2>

                {subtitle && (
                    <h3 className="w-max h-9 flex justify-center items-center px-4 mx-auto font-medium text-sm bg-app_subtitle text-app_primary rounded-3xl capitalize">
                        {subtitle}
                    </h3>
                )}
            </div>

            {description && (
                <p className="text-app_tertiary_2f">{description}</p>
            )}
        </div>
    );
};


export const SubSectionHeading = ({
    title,
    description,
    className,
}) => {
    return (
        <div className={cn(
            "flex flex-col gap-y-4",
            className
        )}>
            <h3 className="font-normal text-2xl sm:text-[1.625rem] sm:leading-8 md:text-3xl">
                {title}
            </h3>

            {description && (
                <p className="text-app_tertiary_2f">{description}</p>
            )}
        </div>
    );
};


export const PrivacyTermsSectionIntro = ({
    title,
    description,
}) => {
    return (
        <div className="flex flex-col gap-y-4">
            <h2 className="font-normal text-3xl leading-[2.5rem] md:text-4xl">
                {title}
            </h2>

            {description && (
                <p className="text-sm text-app_tertiary_2f">{description}</p>
            )}
        </div>
    );
};