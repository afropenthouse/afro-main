"use client";
import { MdOutlineMedicalServices } from "react-icons/md";
import { SlOptions } from "react-icons/sl";
import { FaRegCalendarAlt } from "react-icons/fa";
import ProgressBar from "@/components/ProgressBar";
import { IoCaretUpCircle } from "react-icons/io5";
import Link from "next/link";
import "./styles.scss";
import Image from "next/image";
import dayjs from "dayjs";
import { useRouter } from "next/navigation";
import { usePaymentStore } from "@/store";
import { useModalStore } from "@/store";
import { Poppins } from "next/font/google";
import { CiCalendar } from "react-icons/ci";
import { Nunito } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const nunito = Nunito({
  // variable: "--font-nunito",
  subsets: ["latin"],
});

function Givings({ data }) {
  console.log("giving data", data);
  const formattedDate = (date) => dayjs(date).format("MMM D, YYYY");
  const router = useRouter();
  const { setPayment } = usePaymentStore();
  const { toggleIspaymentModalOpen } = useModalStore();
  const handleGiveNow = () => {
    router.push("/#projects"); // Navigate to home
    // Add a small delay to ensure the navigation happens before scrolling
    setTimeout(() => {
      const projectsSection = document.getElementById("projects");
      projectsSection?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  return (
    <section className={`giving ${nunito.className}`}>
      {data?.length === 0 ? (
        <div className="empty">
          <h1 className="empty-title">You are yet to give to a project</h1>
          <div onClick={handleGiveNow} className="action-button volunteer-now">
            Give Now
          </div>
        </div>
      ) : (
        data?.map((dat) => (
          <>
            <div className="flex Gmobile bg-[#FAF6E6] rounded-xl w-[90vw] relative">
              <div className="relative min-w-[200px] rounded-l-xl">
                <Image
                  width={200}
                  height={200}
                  src={dat?.project?.image}
                  alt="Project"
                  className="w-full h-full object-cover absolute inset-0"
                  style={{
                    borderRadius: "10px 0 0 10px",
                  }}
                />
                <div className="absolute bottom-4 left-4 bg-[#EBCC48] py-1 px-3 rounded flex items-center gap-1">
                  <span className="text-sm font-medium">
                    {dat?.project?.category}
                  </span>
                </div>
              </div>

              <div className="flex-1 flex flex-col gap-6 p-8">
                <div className="flex justify-between items-start">
                  <div className="flex flex-col gap-2">
                    <h1 className="text-xl font-medium tracking-wide">
                      {dat?.project?.title}
                    </h1>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaRegCalendarAlt className="w-5 h-5" />
                    <span className="text-base font-medium">
                      {formattedDate(dat.date)}
                    </span>
                  </div>
                </div>

                <div className="flex justify-between items-center">
                  <h1 className="text-base font-semibold tracking-wider">
                    Partnership with: {dat?.project?.partner}
                  </h1>
                  <h1 className="text-base font-semibold tracking-wider">
                    Amount Given: ₦
                    {Number(dat?.amount) >= 1_000_000
                      ? (Number(dat?.amount) / 1_000_000).toFixed(2) + "M"
                      : Number(dat?.amount) >= 1000
                      ? (Number(dat?.amount) / 1000).toFixed(2) + "K"
                      : Number(dat?.amount).toLocaleString("en-NG")}
                  </h1>
                </div>

                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2 w-1/2">
                    <div className="flex-1">
                      <ProgressBar
                        progress={
                          (+dat.project.achievedGoal / +dat.project.goal) *
                            100 || 0
                        }
                      />
                    </div>
                    <span className="min-w-[4rem] text-base font-medium">
                      {(
                        (dat.project.achievedGoal / dat.project.goal) *
                        100
                      ).toFixed(2) || 0}
                      %
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="text-base font-medium">My Impact</span>
                    <IoCaretUpCircle className="w-5 h-5 text-green-600" />
                    <span className="text-base font-medium">
                      {((+dat?.fimpact / +dat.project.goal) * 100).toFixed(2) ||
                        0}
                      %
                    </span>
                  </div>

                  <button
                    onClick={() => {
                      setPayment(dat?.project?.title, dat?.project?.id);
                      toggleIspaymentModalOpen();
                    }}
                    className="bg-[#EBCC48] px-5 py-2 rounded text-base font-semibold"
                  >
                    Give Again
                  </button>
                </div>
              </div>
            </div>

            <div className="w-full bg-[#FAF6E6] rounded-xl overflow-hidden shadow-md Glarge">
              {/* Image Section */}
              <div className="relative w-full h-48">
                <Image
                  src={dat?.project?.image}
                  alt="Project"
                  className="w-full h-full object-cover"
                  layout="fill"
                />
                <div className="absolute bottom-4 left-4 bg-[#EBCC48] py-1 px-3 rounded-full">
                  <span className="text-sm font-medium">
                    {dat?.project?.category}
                  </span>
                </div>
              </div>

              {/* Content Section */}
              <div className="p-4 flex flex-col gap-4">
                {/* Title and Date */}
                <div className="space-y-2">
                  <h1 className="text-lg font-medium tracking-wide">
                    {dat?.project?.title}
                  </h1>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <CiCalendar className="w-4 h-4" />
                    <span>{formattedDate(dat.date)}</span>
                  </div>
                </div>

                {/* Partnership and Amount */}
                <div className="space-y-2">
                  <div className="text-sm">
                    <span className="font-semibold">Partnership with: </span>
                    <span>{dat?.project?.partner}</span>
                  </div>
                  <div className="text-sm">
                    <span className="font-semibold">Amount Given: </span>
                    <span>
                      ₦{" "}
                      {Number(dat?.amount) >= 1_000_000
                        ? (Number(dat?.amount) / 1_000_000).toFixed(2) + "M"
                        : Number(dat?.amount) >= 1000
                        ? (Number(dat?.amount) / 1000).toFixed(2) + "K"
                        : Number(dat?.amount).toLocaleString("en-NG")}
                    </span>
                  </div>
                </div>

                {/* Progress Section */}
                <div className="space-y-3">
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-[#EBCC48] h-2 rounded-full"
                      style={{
                        width: `${
                          (+dat?.project?.achievedGoal / +dat?.project?.goal) *
                            100 || 0
                        }%`,
                      }}
                    />
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>
                      Progress:{" "}
                      {(
                        (dat?.project?.achievedGoal / dat?.project?.goal) *
                        100
                      ).toFixed(1)}
                      %
                    </span>
                    <div className="flex items-center gap-1">
                      <span>My Impact:</span>
                      <IoCaretUpCircle className="w-4 h-4 text-green-600" />
                      <span>
                        {((+dat?.fimpact / +dat?.project?.goal) * 100).toFixed(
                          1
                        )}
                        %
                      </span>
                    </div>
                  </div>
                </div>

                {/* Action Button */}
                <button
                  onClick={() => {
                    setPayment(dat?.project?.title, dat?.project?.id);
                    toggleIspaymentModalOpen();
                  }}
                  className="w-full bg-[#EBCC48] py-3 rounded-lg text-base font-semibold active:scale-95 transition-transform"
                >
                  Give Again
                </button>
              </div>
            </div>
          </>
        ))
      )}
    </section>
  );
}

export default Givings;
