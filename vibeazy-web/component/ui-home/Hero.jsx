"use client";

import { Images } from "@/public"
import Container from "../common/Container"
import { MainPageHeading } from "../common/SectionHeadings"
import ButtonComponent from "../common/ButtonComponent"
import VibeazyAuthModal from "../common/AuthModal";
import { useState } from "react";
import { isauthmodalopenStore } from "@/store";

export const Hero = () => {
        const { isAuthModalOpen, setIsAuthModalOpen } = isauthmodalopenStore();
    return (
       <div>
         <section className="pt-4">
            <Container>
                <div
                    className="relative min-h-[436px] flex flex-col justify-center gap-y-10 lg:gap-y-12 py-16 sm:py-20 px-6 sm:px-8 lg:px-16 2xl:px-20 bg-app_primary bg-no-repeat bg-right-top 2xl:bg-[20%_8%] rounded-3xl"
                    style={{
                        backgroundImage: `url(${Images.heroImage})`
                    }}
                >
                    <MainPageHeading
                        title="Find A Place To Chill On Your Budget."
                        description="Enjoy More, Spend Less!"
                        className="max-w-[390px] md:max-w-[440px] xl:max-w-[540px] text-white"
                    />

                    <ButtonComponent
                        label="Discover Now"
                        className="min-w-40 bg-white text-app_tertiary hover:bg-white/70"
                        primary
                        // onClick={() => setIsAuthModalOpen(true)}
                    />

                    <div className="absolute top-8 left-8">
                        <svg width="42" height="36" viewBox="0 0 42 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M27.9996 0L30.1534 11.9996L41.9992 13.9995L29.9995 15.9995L27.9996 27.9991L25.9997 15.9995L14 13.9995L25.8458 11.9996L27.9996 0Z" fill="white" />
                            <path d="M7.99977 20L8.88864 27.1109L15.9995 27.9997L8.88864 28.8886L7.99977 35.9995L7.11091 28.8886L0 27.9997L7.11091 27.1109L7.99977 20Z" fill="white" />
                        </svg>
                    </div>
                </div>
            </Container>
        </section>
        <VibeazyAuthModal isOpen={isAuthModalOpen} onClose={() => setIsAuthModalOpen(false)} />
       </div>
    )
}
