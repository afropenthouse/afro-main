"use client";

import Container from "../Container";
import Breadcrumb from "./Breadcrumb";

type PageHeaderBgType = {
    title: string;
    image: string;
}

const PageHeaderBg = ({ title, image }: PageHeaderBgType) => {
    return (
        <section
            className="h-[25rem] flex items-center py-16 sm:py-20 bg-center bg-no-repeat bg-cover text-white before:bg-de_tertiary_09/30 before:w-full before:max-w-[1600px] before:h-[25rem] before:absolute before:top-20 before:left-0 before:right-0 before:mx-auto before:z-[1]"
            style={{
                backgroundImage: `url(${image})`
            }}
        >
            <Container>
                <div className="flex flex-col-reverse gap-y-5">
                    <h1 className="z-[2] font-normal text-3xl sm:text-4xl lg:text-5xl xl:text-[3.5rem] xl:leading-[3.75rem] tracking-[-1.25px]">{title}</h1>

                    {/* <div className="flex gap-x-0.5 items-center font-normal text-base text-de_gray_c5 capitalize pl-0.5">
                        <span>Home</span>
                        <Icons.dot />
                        <span>{pathname.replace("/", "")}</span>
                    </div> */}

                    <Breadcrumb />
                </div>
            </Container>
        </section>
    );
};

export default PageHeaderBg;