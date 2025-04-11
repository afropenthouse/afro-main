"use client";
import "./styles.scss"
import Container from "@/components/(landing)/common/Container";
import Breadcrumb from "@/components/(landing)/common/page-header/Breadcrumb";


const PageHeaderBg = () => {
    return (
        <section
            className="h-[25rem] flex items-center py-16 sm:py-20 mission-pageHeader bg-center bg-no-repeat bg-cover text-white"
            
        >
            <Container>
                <div className="flex flex-col-reverse gap-y-5">
                    <h1 className="font-normal text-3xl sm:text-4xl lg:text-5xl xl:text-[3.5rem] xl:leading-[3.75rem] tracking-[-1.25px]">Mission, Values & Visions</h1>

                    {/* <div className="flex gap-x-0.5 items-center font-normal text-base tenavbxt-de_gray_c5 capitalize pl-0.5">
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