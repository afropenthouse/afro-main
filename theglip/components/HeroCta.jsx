import Link from "next/link"

const HeroCta = () => {
    return (
        <div className="px-1 sm:px-6 lg:px-8 absolute -bottom-14 left-0 right-0 mx-auto flex justify-center items-center">
            <div className="h-28 w-full max-w-[61.25rem] flex flex-col md:flex-row justify-center items-center gap-y-3 sm:gap-x-20 bg-[#FCFCFC] shadow-[0px_4px_4px_0px_#001D3D17] rounded-lg">
                <select
                    name="mentorship_type"
                    id="mentorship_type"
                    className="pr-3"
                >
                    <option value="">What kind of mentorship do you need?</option>
                    <option value="career">Career</option>
                    <option value="business">Business</option>
                    <option value="startup">Startup</option>
                </select>

                <Link href="/search" className="h-10 flex justify-center items-center py-2.5 px-6 bg-[#BBD1EA] hover:bg-[#EBFBFF] text-[#262728] rounded-[1.25rem] transition-colors duration-300">Submit</Link>
            </div>
        </div>
    )
}

export default HeroCta