import { TeamsProp } from "@/lib/types/constant"

const TeamSingle = ({
    image,
    title,
    role,
    experience,
}: TeamsProp) => {
    return (
        <div
            className="w-full flex flex-col gap-y-5">
            <div className="relative h-auto min-h-[380px] sm:min-h-[420px] lg:min-h-[480px] flex flex-col justify-between px-5 py-6 sm:px-8 sm:pt-12 sm:pb-9 gap-y-8 group bg-[50%_15%] bg-no-repeat bg-cover"
                style={{
                    backgroundImage: `url(${image})`
                }}
            >
                {/* <div className="absolute top-0 left-0 w-20 flex flex-wrap">
                    <div className="h-10 w-10 bg-transparent"></div>
                    <div className="h-10 w-10 bg-white"></div>
                    <div className="h-10 w-10 bg-white"></div>
                </div> */}

                <div className="w-full max-w-80 flex flex-col justify-center gap-y-1 absolute bottom-0 left-0 p-4 lg:p-5 bg-de_tertiary_09/70 backdrop-blur-md">
                    <h3 className="font-semibold text-base text-white">
                        {title}
                    </h3>

                    <p className="text-sm text-de_gray_c5">
                        {role}
                    </p>
                </div>
            </div>

            <p className="text-sm leading-6 text-de_tertiary_09">
                {experience}
            </p>
        </div>
    )
}

export default TeamSingle