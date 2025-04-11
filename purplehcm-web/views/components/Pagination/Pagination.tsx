/* eslint-disable jsx-a11y/anchor-is-valid */
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import ActiveRightArrow from "../../assets/images/active-pagination-right.svg";
import DisabledLeftArrow from "../../assets/images/disabled-pagination-left.svg";
import paginateChevDown from "../../assets/images/pagination-chevron-down-1.svg";
import Image from "next/image";
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";

export default function Pagination({
  postsPerPage,
  totalPosts,
  currentPage,
  setCurrentPage,
  params = true,
}: {
  postsPerPage: number;
  totalPosts: number;
  setCurrentPage: Dispatch<SetStateAction<number>>;
  currentPage: number;
  // totalPages: number;
  params?: boolean;
}) {
  const [totalPages, setTotalPages] = useState(1);
  // Change page
  const paginateFront = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };
  const paginateBack = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  useEffect(() => {
    if (totalPosts >= 0) {
      const total_Pages = Math.ceil(totalPosts / postsPerPage);
      setTotalPages(total_Pages);
    }
  }, [totalPosts, postsPerPage]);

  return (
    <div className="w-full mt-6">
      <div className="hidden flex-1 justify-between md:hidden">
        <a
          className={`relative inline-flex items-center px-2 py-2 rounded border border-aellaBlue bg-aellaBlue text-sm font-[200] text-white hover:bg-opacity-90 cursor-pointer ${
            currentPage <= 1 ? "opacity-50" : ""
          }    `}
          onClick={() => {
            paginateBack();
          }}
          href="#"
          aria-disabled={currentPage <= 1}
        >
          <span>Previous</span>
        </a>
        <a
          href="#"
          className="relative inline-flex items-center border border-[#EDEFF5] bg-[#F6F8FA] px-4 py-2 text-sm font-[200]"
        >
          {currentPage}
        </a>
        <a
          onClick={(e) => {
            if (currentPage >= totalPages) {
              e.preventDefault();
            } else {
              paginateFront();
            }
          }}
          href=""
          aria-disabled={currentPage >= totalPages}
          className={`relative inline-flex items-center px-2 py-2 rounded border border-aellaBlue bg-aellaBlue text-sm font-[200] text-white hover:bg-opacity-90 cursor-pointer ${
            currentPage >= totalPages ? "opacity-50" : ""
          }`}
        >
          <span>Next</span>
        </a>
      </div>
      <div className="hidden flex-1 items-center w-full justify-between">
        <div>
          <p className="text-[12px] lg:text-[16px] leading[24px] font-[400] text-[#6F7174] tracking-[0.2px]">
            <span className="font-[500] text-[#4D5154]">Records: </span>
            <span className="">
              {totalPosts === 0
                ? "0"
                : currentPage * postsPerPage - (postsPerPage - 1)}
            </span>{" "}
            -{" "}
            <span className="">
              {" "}
              {currentPage < totalPages
                ? currentPage * postsPerPage
                : totalPosts}
            </span>{" "}
            of <span className="">{totalPosts}</span>
          </p>
        </div>
        <div>
          <nav
            className="isolate inline-flex items-center"
            aria-label="Pagination"
          >
            <a
              onClick={() => {
                paginateBack();
              }}
              className={`relative inline-flex items-center px-2 py-2  w-8 h-8 rounded-full hover:bg-opacity-90 cursor-pointer 
               
           ${currentPage <= 1 ? "bg-[#C8CCD0]" : "bg-[#ffffff]"}
                `}
              aria-disabled={currentPage <= 1}
            >
              <Image src={DisabledLeftArrow} alt="" height={16} width={16} />
            </a>
            <span className="ml-2 lg:ml-4 text-[12px] lg:text-[16px] leading[24px] font-[400] text-[#4D5154]">
              Page
            </span>
            <span className="relative inline-flex items-center border-[0.4px] text-[#6F7174]  border-[#6F7174] rounded-md bg-white px-1 lg:px-2 py-1 text-[12px] lg:text-[16px] leading-[24px] font-[400] mx-2 lg:mx-4">
              {currentPage}
            </span>
            <span className="mr-2 lg:mr-4 text-[12px] lg:text-[16px] leading[24px] font-[400] text-[#4D5154]">
              of {totalPages}
            </span>
            <a
              onClick={(e) => {
                if (currentPage >= totalPages) {
                  e.preventDefault();
                } else {
                  paginateFront();
                }
              }}
              aria-disabled={currentPage >= totalPages}
              className={`relative inline-flex items-center px-2 py-2 rounded-full w-8 h-8  text-sm font-[200] text-white hover:bg-opacity-90 cursor-pointer  ${
                currentPage >= totalPages ? "bg-[#C8CCD0]" : "bg-primaryColor"
              }`}
            >
              <Image src={ActiveRightArrow} alt="" height={16} width={16} />
            </a>
          </nav>
        </div>
      </div>
      <div className="flex flex-1 items-center w-full justify-between">
        <div>
          <div className="flex items-center gap-1">
            <span className="text-[12px] lg:text-[14px] leading[20px] text-[#98A2B3] font-[500] ">
              Show Records{" "}
            </span>
            <Popover className="">
              <>
                <PopoverButton
                  className={`flex items-center gap-2 pl-[12px] pr-[8px] py-[4px] border-[1px] border-purpleAsh rounded-[8px] focus:outline-none focus-visible:ring-2 focus-visible:ring-transparent `}
                >
                  <p className="text-[14px] leading-5 font-[500] text-[#667085]">
                    {postsPerPage}
                  </p>

                  <Image src={paginateChevDown} alt="chevron-down" />
                </PopoverButton>

                {/* <PopoverPanel className="absolute z-50  w-screen md:w-[200px] px-4 sm:px-2">
                  <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                    <div className="items-center grid gap-4 bg-white px-5 py-4">
                      <div
                        // onClick={() =>
                        //   router.push({
                        //     pathname: ROUTES.MOTOR_INSURANCE_CLAIM_DETAILS,
                        //     query: {
                        //       id: employee?.id,
                        //     },
                        //   })
                        // }
                        className="flex items-center"
                      >
                        <p className="pl-2">View Details</p>
                      </div>
                      <div
                        // onClick={() => handleMotorInsurancePopup(index)}
                        className="flex items-center"
                      >
                        <p className="pl-2 text-[16px] ">Continue Claim</p>
                      </div>
                    </div>
                  </div>
                </PopoverPanel> */}
              </>
            </Popover>
          </div>
        </div>
        <div>
          <nav
            className="isolate flex gap-2 items-center"
            aria-label="Pagination"
          >
            <p className="text-[12px] lg:text-[14px] leading[20px] font-[500] text-[#98A2B3] ">
              <span className="font-[500] ">Showing </span>
              <span className="">
                {totalPosts === 0
                  ? "0"
                  : currentPage * postsPerPage - (postsPerPage - 1)}
              </span>{" "}
              -{" "}
              <span className="">
                {" "}
                {currentPage < totalPages
                  ? currentPage * postsPerPage
                  : totalPosts}
              </span>{" "}
              of <span className="">{totalPosts}</span>
            </p>
            <a
              onClick={() => {
                paginateBack();
              }}
              className={`relative flex items-center cursor-pointer`}
              aria-disabled={currentPage <= 1}
            >
              <Image
                src={currentPage <= 1 ? DisabledLeftArrow : DisabledLeftArrow}
                alt="arrow"
              />
            </a>
            <a
              onClick={(e) => {
                if (currentPage >= totalPages) {
                  e.preventDefault();
                } else {
                  paginateFront();
                }
              }}
              aria-disabled={currentPage >= totalPages}
              className={`relative flex items-center cursor-pointer `}
            >
              <Image
                src={
                  currentPage >= totalPages
                    ? ActiveRightArrow
                    : ActiveRightArrow
                }
                alt="arrow"
              />
            </a>
          </nav>
        </div>
      </div>
    </div>
  );
}
