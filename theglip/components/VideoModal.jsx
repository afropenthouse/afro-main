const VideoModal = ({ video_url, setVideo }) => {
    const handleCloseVideo = () => setVideo({
        is_video_shown: null,
        video_url: ""
    })

    return (
        <div className="h-full w-full fixed top-0 bottom-0 left-0 right-0 m-auto flex justify-center items-center bg-[#011A342E] backdrop-blur-[10px] transition duration-300">
            <div className="relative h-[85vh] w-[80vw] p-4 sm:p-5">
                <video
                    src={video_url}
                    className="h-full w-full rounded-2xl bg-[#011A342E]"
                    controls
                ></video>

                <button
                    className="absolute -top-2.5 -right-2.5 text-2xl p-1.5 hover:bg-[#FFFFFF2E] rounded-full transition-colors duration-300 custom_focus"
                    onClick={handleCloseVideo}
                >
                    {/* <AiOutlineClose /> */}

                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 1024 1024" fillRule="evenodd" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M799.855 166.312c.023.007.043.018.084.059l57.69 57.69c.041.041.052.06.059.084a.118.118 0 0 1 0 .069c-.007.023-.018.042-.059.083L569.926 512l287.703 287.703c.041.04.052.06.059.083a.118.118 0 0 1 0 .07c-.007.022-.018.042-.059.083l-57.69 57.69c-.041.041-.06.052-.084.059a.118.118 0 0 1-.069 0c-.023-.007-.042-.018-.083-.059L512 569.926 224.297 857.629c-.04.041-.06.052-.083.059a.118.118 0 0 1-.07 0c-.022-.007-.042-.018-.083-.059l-57.69-57.69c-.041-.041-.052-.06-.059-.084a.118.118 0 0 1 0-.069c.007-.023.018-.042.059-.083L454.073 512 166.371 224.297c-.041-.04-.052-.06-.059-.083a.118.118 0 0 1 0-.07c.007-.022.018-.042.059-.083l57.69-57.69c.041-.041.06-.052.084-.059a.118.118 0 0 1 .069 0c.023.007.042.018.083.059L512 454.073l287.703-287.702c.04-.041.06-.052.083-.059a.118.118 0 0 1 .07 0Z"></path></svg>
                </button>
            </div>
        </div>
    )
}

export default VideoModal