import Image from "next/image"

const StepsSection = () => {
    return (
        <section className="relative w-full max-w-[100rem] mx-auto px-5 sm:px-6 lg:px-8 flex flex-wrap justify-center sm:justify-between gap-8 lg:gap-y-12 sm:gap-x-16 md:gap-x-14 lg:gap-x-20 xl:gap-x-32 py-16 sm:py-20 bg-[#BBD1EA38]">
            <div className="hidden sm:flex absolute top-1/2 -translate-y-5 -left-10 m-auto">
                <Image
                    src="/steps_line.png"
                    alt=""
                    width={1400}
                    height={200}
                    className="w-[1400px] xl:w-[1600px] sm:h-[100px] md:h-[150px] lg:h-[200px]"
                />
            </div>

            <div className="relative h-[145px] w-[145px] min-h-[145px] min-w-[145px] md:h-[180px] md:w-[180px] md:min-h-[180px] md:min-w-[180px] lg:h-[250px] lg:w-[250px] lg:min-h-[250px] lg:min-w-[250px] xl:min-h-[286px] xl:min-w-[286px] flex justify-center items-center text-center p-6 md:p-8 lg:p-14 bg-[#011A34] shadow-[0px_4px_4px_0px_#00000040] rounded-full">
                <h3 className="text-lg md:text-xl lg:text-2xl xl:text-3xl text-[#BBD1EA]">Create an Account</h3>

                <div className="h-[45px] w-[45px] md:h-[55px] md:w-[55px] lg:h-[75px] lg:w-[75px] xl:h-[90px] xl:w-[90px] absolute -top-2 -right-2 flex justify-center items-center bg-[#FCFCFC] text-[#262728] shadow-[0px_4px_4px_0px_#00000040] rounded-full">01</div>
            </div>

            <div className="relative h-[145px] w-[145px] min-h-[145px] min-w-[145px] md:h-[180px] md:w-[180px] md:min-h-[180px] md:min-w-[180px] lg:h-[250px] lg:w-[250px] lg:min-h-[250px] lg:min-w-[250px] xl:min-h-[286px] xl:min-w-[286px] flex justify-center items-center text-center p-6 md:p-8 lg:p-14 bg-[#011A34] shadow-[0px_4px_4px_0px_#00000040] rounded-full">
                <h3 className="text-lg md:text-xl lg:text-2xl xl:text-3xl text-[#BBD1EA]">Find a Mentor</h3>

                <div className="h-[45px] w-[45px] md:h-[55px] md:w-[55px] lg:h-[75px] lg:w-[75px] xl:h-[90px] xl:w-[90px] absolute -top-2 -right-2 flex justify-center items-center bg-[#FCFCFC] text-[#262728] shadow-[0px_4px_4px_0px_#00000040] rounded-full">02</div>
            </div>

            <div className="relative h-[145px] w-[145px] min-h-[145px] min-w-[145px] md:h-[180px] md:w-[180px] md:min-h-[180px] md:min-w-[180px] lg:h-[250px] lg:w-[250px] lg:min-h-[250px] lg:min-w-[250px] xl:min-h-[286px] xl:min-w-[286px] flex justify-center items-center text-center p-6 md:p-8 lg:p-14 bg-[#011A34] shadow-[0px_4px_4px_0px_#00000040] rounded-full">
                <h3 className="text-lg md:text-xl lg:text-2xl xl:text-3xl text-[#BBD1EA]">Book a Session</h3>

                <div className="h-[45px] w-[45px] md:h-[55px] md:w-[55px] lg:h-[75px] lg:w-[75px] xl:h-[90px] xl:w-[90px] absolute -top-2 -right-2 flex justify-center items-center bg-[#FCFCFC] text-[#262728] shadow-[0px_4px_4px_0px_#00000040] rounded-full">03</div>
            </div>
        </section>
    )
}

export default StepsSection