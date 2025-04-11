"use client"

import { Suspense, useCallback, useState } from "react"
import VideoModal from "./VideoModal"
import Link from "next/link";

const VideoSection = () => {
    const [video, setVideo] = useState({
        is_video_shown: null,
        video_url: ""
    });

    const handleClick = useCallback((video_url) => {
        setVideo({
            is_video_shown: true,
            video_url
        })
    }, [video.is_video_shown]);

    return (
        <section className="relative py-16 sm:py-20 flex flex-col justify-center gap-y-10 sm:gap-y-14 lg:gap-y-20">
            <div className="w-full max-w-[80rem] mx-auto px-5 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between gap-y-6 sm:gap-x-16 md:gap-x-14 lg:gap-x-20 xl:gap-x-32">
                <h2 className="font-medium text-3xl sm:text-4xl lg:text-5xl text-[#262728] capitalize">
                    Over 50K Top Mentors on TheGlip
                </h2>

                <div className="w-full md:max-w-[380px] lg:max-w-[480px]">
                    <p className="text-[#262728]">
                        Connect with industry leaders across Africa, where you can exchange ideas, collaborate on projects, and grow together through shared experiences and mentorship.
                    </p>
                </div>
            </div>

            <div className="video_list h-[540px] w-screen max-w-[100rem] mx-auto flex items-center gap-x-8 px-2.5 sm:px-3 overflow-x-scroll">
                <div
                    className="relative h-full min-w-[400px] flex flex-col justify-end gap-y-1 p-5 rounded-2xl bg-center bg-no-repeat"
                    style={{
                        background: "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.5) 67.41%, #000000 100%), url('/video1.png')"
                    }}
                >
                    <h3 className="text-xl text-white">John Doe</h3>
                    <p className="text-xs text-white">Business Strategist</p>

                    <div className="h-[120px] w-[120px] absolute top-0 bottom-0 left-0 right-0 m-auto flex justify-center items-center bg-[#FFFFFF2E] border-[3px] border-white rounded-full group will-change-auto transition duration-300">
                        <button
                            className="p-0 rounded-full outline-none custom_focus"
                            onClick={() => handleClick("/sample_video1.mp4")}
                        >
                            <svg className="group-hover:fill-white" width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 35.9997V25.3197C12 12.0597 21.39 6.62969 32.88 13.2597L42.15 18.5997L51.42 23.9397C62.91 30.5697 62.91 41.4297 51.42 48.0597L42.15 53.3997L32.88 58.7397C21.39 65.3697 12 59.9397 12 46.6797V35.9997Z" stroke="white" strokeWidth="4.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>
                    </div>
                </div>

                <div
                    className="relative h-full min-w-[400px] flex flex-col justify-end gap-y-1 p-5 rounded-2xl bg-center bg-no-repeat"
                    style={{
                        background: "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.5) 67.41%, #000000 100%), url('/video2.png')"
                    }}
                >
                    <h3 className="text-xl text-white">Jane Doe</h3>
                    <p className="text-xs text-white">Education</p>

                    <div className="h-[120px] w-[120px] absolute top-0 bottom-0 left-0 right-0 m-auto flex justify-center items-center bg-[#FFFFFF2E] border-[3px] border-white rounded-full group">
                        <button
                            className="p-0 rounded-full outline-none custom_focus"
                            onClick={() => handleClick("/sample_video2.mp4")}
                        >
                            <svg className="group-hover:fill-white" width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 35.9997V25.3197C12 12.0597 21.39 6.62969 32.88 13.2597L42.15 18.5997L51.42 23.9397C62.91 30.5697 62.91 41.4297 51.42 48.0597L42.15 53.3997L32.88 58.7397C21.39 65.3697 12 59.9397 12 46.6797V35.9997Z" stroke="white" strokeWidth="4.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>
                    </div>
                </div>

                <div
                    className="relative h-full min-w-[400px] flex flex-col justify-end gap-y-1 p-5 rounded-2xl bg-center bg-no-repeat"
                    style={{
                        background: "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.5) 67.41%, #000000 100%), url('/video1.png')"
                    }}
                >
                    <h3 className="text-xl text-white">John Doe</h3>
                    <p className="text-xs text-white">Business Strategist</p>

                    <div className="h-[120px] w-[120px] absolute top-0 bottom-0 left-0 right-0 m-auto flex justify-center items-center bg-[#FFFFFF2E] border-[3px] border-white rounded-full group will-change-auto transition duration-300">
                        <button
                            className="p-0 rounded-full outline-none custom_focus"
                            onClick={() => handleClick("/sample_video1.mp4")}
                        >
                            <svg className="group-hover:fill-white" width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 35.9997V25.3197C12 12.0597 21.39 6.62969 32.88 13.2597L42.15 18.5997L51.42 23.9397C62.91 30.5697 62.91 41.4297 51.42 48.0597L42.15 53.3997L32.88 58.7397C21.39 65.3697 12 59.9397 12 46.6797V35.9997Z" stroke="white" strokeWidth="4.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>
                    </div>
                </div>

                <div
                    className="relative h-full min-w-[400px] flex flex-col justify-end gap-y-1 p-5 rounded-2xl bg-center bg-no-repeat"
                    style={{
                        background: "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.5) 67.41%, #000000 100%), url('/video2.png')"
                    }}
                >
                    <h3 className="text-xl text-white">Jane Doe</h3>
                    <p className="text-xs text-white">Education</p>

                    <div className="h-[120px] w-[120px] absolute top-0 bottom-0 left-0 right-0 m-auto flex justify-center items-center bg-[#FFFFFF2E] border-[3px] border-white rounded-full group">
                        <button
                            className="p-0 rounded-full outline-none custom_focus"
                            onClick={() => handleClick("/sample_video2.mp4")}
                        >
                            <svg className="group-hover:fill-white" width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 35.9997V25.3197C12 12.0597 21.39 6.62969 32.88 13.2597L42.15 18.5997L51.42 23.9397C62.91 30.5697 62.91 41.4297 51.42 48.0597L42.15 53.3997L32.88 58.7397C21.39 65.3697 12 59.9397 12 46.6797V35.9997Z" stroke="white" strokeWidth="4.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            <div className="w-full max-w-[80rem] mx-auto px-5 sm:px-6 lg:px-8 flex justify-end items-center">
                <div className="w-full md:w-1/2 flex justify-between items-center">
                    <div className="flex gap-x-3">
                        <button className="h-9 w-9 flex justify-center items-center text-2xl p-1 rounded-full bg-[#BBD1EA38] hover:bg-[#BBD1EA] will-change-auto transition-colors duration-300 shadow-[0px_4px_4px_0px_#011A341A]">
                            {/* <RxCaretLeft /> */}
                            <svg stroke="currentColor" fill="none" strokeWidth="0" viewBox="0 0 15 15" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M8.81809 4.18179C8.99383 4.35753 8.99383 4.64245 8.81809 4.81819L6.13629 7.49999L8.81809 10.1818C8.99383 10.3575 8.99383 10.6424 8.81809 10.8182C8.64236 10.9939 8.35743 10.9939 8.1817 10.8182L5.1817 7.81819C5.09731 7.73379 5.0499 7.61933 5.0499 7.49999C5.0499 7.38064 5.09731 7.26618 5.1817 7.18179L8.1817 4.18179C8.35743 4.00605 8.64236 4.00605 8.81809 4.18179Z" fill="currentColor"></path></svg>
                        </button>

                        <button className="h-9 w-9 flex justify-center items-center text-2xl p-1 rounded-full bg-[#BBD1EA38] hover:bg-[#BBD1EA] will-change-auto transition-colors duration-300 shadow-[0px_4px_4px_0px_#011A341A] group">
                            {/* <RxCaretRight /> */}
                            <svg stroke="currentColor" fill="none" strokeWidth="0" viewBox="0 0 15 15" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M6.18194 4.18185C6.35767 4.00611 6.6426 4.00611 6.81833 4.18185L9.81833 7.18185C9.90272 7.26624 9.95013 7.3807 9.95013 7.50005C9.95013 7.6194 9.90272 7.73386 9.81833 7.81825L6.81833 10.8182C6.6426 10.994 6.35767 10.994 6.18194 10.8182C6.0062 10.6425 6.0062 10.3576 6.18194 10.1819L8.86374 7.50005L6.18194 4.81825C6.0062 4.64251 6.0062 4.35759 6.18194 4.18185Z" fill="currentColor"></path></svg>
                        </button>
                    </div>

                    <Link
                        href="/all-videos"
                        className="flex flex-col justify-center items-center gap-y-0.5 text-center hover:text-[#183f68] group"
                    >
                        Explore all
                        {/* <BsArrowRight /> */}

                        <svg className="max-w-28" width="118" height="16" viewBox="0 0 118 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M117.707 8.70711C118.098 8.31658 118.098 7.68342 117.707 7.29289L111.343 0.928932C110.953 0.538408 110.319 0.538408 109.929 0.928932C109.538 1.31946 109.538 1.95262 109.929 2.34315L115.586 8L109.929 13.6569C109.538 14.0474 109.538 14.6805 109.929 15.0711C110.319 15.4616 110.953 15.4616 111.343 15.0711L117.707 8.70711ZM0 9H117V7H0V9Z" fill="#011A34" />
                        </svg>
                    </Link>
                </div>
            </div>

            {video.is_video_shown && (
                // use skeleton for fallback
                <Suspense fallback={<p>Loading video...</p>}>
                    <VideoModal
                        video_url={video.video_url}
                        setVideo={setVideo}
                    />
                </Suspense>
            )}
        </section>
    )
}

export default VideoSection