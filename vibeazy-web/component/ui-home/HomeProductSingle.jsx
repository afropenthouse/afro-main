"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Icons } from "../common/Icons";
import Link from "next/link";

const HomeServiceSingle = ({ restaurants }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const images = restaurants.venueImages || [];

    // Function to go to next image
    const nextImage = () => {
        setCurrentImageIndex((prevIndex) =>
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
    };

    // Function to go to previous image
    const prevImage = () => {
        setCurrentImageIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    // Auto slide images every 5 seconds
    useEffect(() => {
        if (images.length <= 1) return;

        const interval = setInterval(() => {
            nextImage();
        }, 5000);

        return () => clearInterval(interval);
    }, [images.length]);

    return (
        <div className="relative w-full h-full rounded-xl overflow-hidden group">
            {/* Image with overlay */}
            <div className="relative w-full h-[500px] lg:h-[550px]">
                {images.length > 0 ? (
                    <Image
                        src={images[currentImageIndex]}
                        alt={`image of ${restaurants.venueName}`}
                        width={430}
                        height={550}
                        className="w-full h-[500px] lg:h-[550px] bg-app_primary_f0 rounded-xl object-cover transition-opacity duration-500"
                    />
                ) : (
                    <div className="w-full h-[500px] lg:h-[550px] bg-app_primary_f0 rounded-xl" />
                )}

                {/* Dark overlay */}
                <div className="absolute inset-0 bg-black/25 rounded-xl" />
            </div>

            {/* Content overlay */}
            <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-between gap-y-8 px-4 py-5 lg:p-5 xl:p-6 2xl:p-10 text-white text-xs">
                <div className="flex flex-wrap-reverse justify-between items-center gap-x-6 gap-y-2.5">
                    <div className="space-y-1 w-full max-w-[220px] sm:max-w-[170px] lg:max-w-[240px] xl:max-w-[170px]">
                        <h3 className="font-medium text-lg leading-6 capitalize">{restaurants.venueName}</h3>
                        <p className="text-sm font-light">₦{restaurants.startAmount}/person</p>
                    </div>

                    <div className="w-auto h-8 flex justify-center items-center py-1 px-3.5 bg-white/70 backdrop-blur-2xl font-medium text-app_tertiary rounded-3xl">
                        {restaurants.category?.category}
                    </div>
                </div>

                {/* Navigation buttons - only show if there are multiple images */}
                {images.length > 1 && (
                    <div className="w-full h-max absolute bottom-0 top-0 left-0 my-auto px-4 lg:px-5 xl:px-6 2xl:px-10 flex justify-between items-center gap-3">
                        {currentImageIndex > 0 && (
                            <button
                                type="button"
                                className="w-10 h-10 flex justify-center items-center mr-auto bg-white/25 backdrop-blur-sm text-app_gray_e9e hover:bg-white hover:text-app_tertiary font-medium rounded-full app_focus transition-opacity"
                                onClick={prevImage}
                                aria-label="Previous image"
                            >
                                <Icons.chevronLeft size={14} />
                            </button>
                        )}

                        <button
                            type="button"
                            className="w-10 h-10 flex justify-center items-center ml-auto bg-white/25 backdrop-blur-sm text-app_gray_e9e hover:bg-white hover:text-app_tertiary font-medium rounded-full app_focus transition-opacity"
                            onClick={nextImage}
                            aria-label="Next image"
                        >
                            <Icons.chevronRight size={14} />
                        </button>
                    </div>
                )}

                <div className="flex flex-col gap-y-6">
                    <Link target="_blank" href={restaurants.webLink}>
                        <button
                            type="button"
                            className="w-10 h-10 flex justify-center items-center hover:bg-white/25 hover:backdrop-blur-sm ml-auto rounded-full app_focus"

                        >
                            <Icons.navigate size={20} />
                        </button>
                    </Link>

                    <div className="flex flex-wrap justify-between items-center gap-3 text-sm">
                        <div className="flex items-center gap-2 font-light">
                            <Icons.map />
                            {restaurants.location.city}
                        </div>

                        <div className="w-auto flex justify-center items-center gap-1 py-1 px-2 bg-white/25 backdrop-blur-sm rounded-full">
                            {restaurants.rating}
                            <Icons.starFill size={10} />
                        </div>
                    </div>
                </div>

                {/* Image indicator dots - only show if there are multiple images */}
                {images.length > 1 && (
                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-1.5">
                        {images.map((_, index) => (
                            <button
                                key={index}
                                className={`w-2 h-2 rounded-full transition-all ${currentImageIndex === index ? "bg-white w-4" : "bg-white/50"
                                    }`}
                                onClick={() => setCurrentImageIndex(index)}
                                aria-label={`Go to image ${index + 1}`}
                            />
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default HomeServiceSingle;