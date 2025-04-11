"use client";

import { Images } from "@/public/images";
import { MainSectionHeading } from "../common/ContainerSectionHeadings";
import LinkAsButton from "../common/buttons/LinkAsButton";

const RequestQuoteBanner = () => {
    return (
        <section
            className="relative py-16 sm:py-20 bg-center bg-no-repeat bg-cover before:bg-de_tertiary_09/30 before:w-full before:h-full before:absolute before:top-0 before:left-0 before:z-[1]"
            style={{
                backgroundImage: `url(${Images.RequestQuoteBannerBgImage})`
            }}
        >
            <div className="flex flex-col items-center gap-y-8 p-6">
                <MainSectionHeading
                    title="Future-proof sustainable energy operations"
                    description="Digital Energy is ready to help your company needs in energy optimization"
                    mainCentered
                    className="z-[2] [&>div>*]:text-white [&>p]:text-white [&>p]:max-w-[480px]"
                />

                <LinkAsButton
                    label="Request a quote"
                    url="mailto:info@digitalenergyng.com"
                    primary
                    className="z-[2] min-w-44 capitalize"
                />
            </div>
        </section>
    );
};

export default RequestQuoteBanner;
