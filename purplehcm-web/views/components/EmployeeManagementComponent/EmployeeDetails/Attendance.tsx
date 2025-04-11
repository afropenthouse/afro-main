import React, { useState } from "react";
import Pagination from "../../Pagination/Pagination";
import { attendanceData } from "../../../helpers/data/Employee";

const Attendance = () => {
  const [postsPerPage, setPostsPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  return (
    <div className="flex flex-col w-full">
      <div className="w-full">
        <div className="flex items-center w-[100%] gap-x-4 md:gap-x-0 md:w-full px-3 h-[48px] text-[#667085] text-[14px] border-b border-[#EAECF0] ">
          <p className="text-[14px] font-[500] w-[30%]">Date</p>
          <p className="text-[14px] font-[500] w-[20%]">Check In</p>
          <p className="text-[14px] font-[500] w-[20%]">Check Out</p>
          <p className="text-[14px] font-[500] w-[20%]">Working Hours</p>
          <p className="text-[14px] font-[500] w-[10%]">Status</p>
        </div>

        {attendanceData.map((attendance: any, index: any) => {
          return (
            <div
              key={index}
              className="flex items-center bg-white w-[100%] gap-x-4  md:gap-x-0 md:w-full py-[14px] px-3 text-[#5B5B5B] text-sm font-light border-b cursor-pointer hover:bg-[#F2F4F7] "
            >
              <p className="font-[400] text-[14px] leading-5 text-[#0A0A0B] w-[30%]">
                {attendance?.date}
              </p>
              <p className="font-[400] text-[14px] leading-5 text-[#0A0A0B] w-[20%]">
                {attendance?.checkIn}
              </p>
              <p className="font-[400] text-[14px] leading-5 text-[#0A0A0B] w-[20%]">
                {attendance?.checkOut}
              </p>
              <p className="font-[400] text-[14px] leading-5 text-[#0A0A0B] w-[20%]">
                {attendance?.workingHours}
              </p>
              <div className="font-[400] text-[14px] leading-5 text-[#0A0A0B] w-[10%]">
                <p
                  className={`w-fit flex px-2 py-[2px] rounded-[8px] gap-2 items-center font-[500] text-[12px] leading-[18px] ${
                    attendance?.status === "ON TIME"
                      ? "bg-[#E3F2ED] text-[#0A0A0B]"
                      : attendance?.status === "LATE"
                      ? "bg-[#FEE4E2] text-[#0A0A0B]"
                      : ""
                  }`}
                >
                  {attendance?.status}
                </p>
              </div>
            </div>
          );
        })}
      </div>
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={attendanceData?.length}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        // totalPages={totalPages}
      />
    </div>
  );
};

export default Attendance;
