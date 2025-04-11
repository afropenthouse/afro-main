import { FiPhone } from "react-icons/fi";
import { TfiEmail } from "react-icons/tfi";

export default function Contact() {
  return (
    <>
      <section className="grid gap-y-10 sm:gap-6 lg:gap-14 grid-cols-1 sm:grid-cols-2 py-16 sm:py-20">
        <form
          action=""
          className="relative w-full flex flex-col justify-center gap-y-8 p-6 py-10 sm:px-8 md:px-6 lg:px-10 bg-de_gray_f7"
        >
          <div className="block sm:hidden space-y-2">
            <h3 className="text-de_red_d3 text-sm uppercase">Contact Form</h3>

            <h2 className="text-de_tertiary_09 font-medium text-2xl lg:text-[1.75rem] lg:leading-9">Got Questions? <br /> Fill out the form</h2>
          </div>

          <div className="flex flex-col gap-y-1 text-sm">
            <label
              htmlFor="fullName"
              className=""
            >
              Full Name <span className="text-xs text-de_tertiary_5d italic">(required)</span>
            </label>
            <input
              id="fullName"
              type="text"
              aria-placeholder="Enter full name"
              className="w-full bg-transparent outline-none border-b border-b-de_gray_ad placeholder:text-de_tertiary_5d text-de_tertiary_5d p-2"
            />
          </div>

          <div className="flex flex-col gap-y-1 text-sm">
            <label
              htmlFor="email"
              className=""
            >
              Your Email <span className="text-xs text-de_tertiary_5d italic">(required)</span>
            </label>
            <input
              id="email"
              type="text"
              aria-placeholder="Enter email address"
              className="w-full bg-transparent outline-none border-b border-b-de_gray_ad placeholder:text-de_tertiary_5d text-de_tertiary_5d p-2"
            />
          </div>

          <div className="flex flex-col gap-y-1 text-sm">
            <label
              htmlFor="subject"
              className=""
            >
              Subject
            </label>
            <input
              id="subject"
              type="text"
              className="w-full bg-transparent outline-none border-b border-b-de_gray_ad placeholder:text-de_tertiary_5d text-de_tertiary_5d p-2"
            />
          </div>

          <div className="flex flex-col gap-y-1 text-sm">
            <label
              htmlFor="message"
              className=""
            >
              Message
            </label>
            <textarea
              name="message"
              id="message"
              className="w-full bg-transparent outline-none border-b border-b-de_gray_ad resize-none placeholder:text-de_tertiary_5d text-de_tertiary_5d p-2"
            ></textarea>
          </div>

          <button className="flex sm:hidden w-max h-10 text-sm font-medium bg-de_red_d3 text-white hover:bg-de_red_c6 px-4 py-1">Send Message</button>
        </form>

        <div className="w-full flex flex-col gap-y-20 px-5 md:px-6 sm:py-10 xl:pr-10">
          <div className="hidden sm:flex flex-col gap-y-10">
            <div className="space-y-2">
              <h3 className="text-de_red_d3 text-sm uppercase">Contact Form</h3>

              <div>
                <h2 className="text-de_tertiary_09 font-medium text-xl md:text-2xl lg:text-[1.75rem] lg:leading-9">Got Questions?</h2>
                <h2 className="text-de_tertiary_09 font-medium text-xl md:text-2xl lg:text-[1.75rem] lg:leading-9">Fill out the form</h2>
              </div>
            </div>

            <button className="w-max h-10 text-sm font-medium bg-de_red_d3 text-white hover:bg-de_red_c6 px-4 py-1">Send Message</button>
          </div>

          <div className="info w-full flex gap-6 xl:gap-x-10 flex-wrap p-6 sm:p-8 bg-de_tertiary_09">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 flex justify-center items-center text-white border border-white rounded-full">
                <TfiEmail size={18} />
              </div>

              <div className="flex flex-col gap-y-0.5">
                <h3 className="text-sm font-medium text-de_gray_c5">Email Address</h3>
                <p className="text-sm text-white">info@digitalenergyng.com</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="h-10 w-10 flex justify-center items-center text-white border border-white rounded-full">
                <FiPhone size={18} />
              </div>

              <div className="flex flex-col gap-y-0.5">
                <h3 className="text-sm font-medium text-de_gray_c5">Phone Number</h3>
                <p className="text-sm text-white">+2342014536157</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
