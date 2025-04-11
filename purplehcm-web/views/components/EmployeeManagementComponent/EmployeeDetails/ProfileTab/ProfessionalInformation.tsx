import React from "react";
import { formatDate } from "../../../../helpers/converter";
import { useAllWorkMode } from "../../../../hooks/useAllWorkMode";
import PageLoaderModal from "../../../Loader/PageLoaderModal";
import { filterByArrayIds, findNameById } from "../../../../helpers";
import { useAllWorkingDays } from "../../../../hooks/useAllWorkingDays";

const ProfessionalInformation = ({ pageDetails }: { pageDetails: any }) => {
  const { data: workMode, isLoading: workModeLoading } = useAllWorkMode();
  const { data: workingDays, isLoading: workingDaysLoading } =
    useAllWorkingDays();
  console.log(workingDays);
  // const workingDays = [
  //   "Monday",
  //   "Tuesday",
  //   "Wednessday",
  //   "Thursday",
  //   "Friday",
  //   "Saturday",
  //   "Sunday",
  // ];
  return (
    <>
      {workModeLoading || workingDaysLoading ? (
        <div></div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 ">
          <div className="flex flex-col gap-1 border-b-[1px] border-[#A2A1A833] pb-[10px] ">
            <p className="text-[14px] font-[400] leading-[22px] text-[#394753] ">
              Employee ID
            </p>
            <p className="text-[16px] font-[600] leading-[24px] text-[#394753] ">
              {pageDetails?.employeeId}
            </p>
          </div>
          <div className=""></div>
          <div className="flex flex-col gap-1 border-b-[1px] border-[#A2A1A833] pb-[10px] ">
            <p className="text-[14px] font-[400] leading-[22px] text-[#394753] ">
              Work Type
            </p>
            <p className="text-[16px] font-[600] leading-[24px] text-[#394753] ">
              {findNameById(workMode, pageDetails?.workMode)}
            </p>
          </div>
          <div className="flex flex-col gap-1 border-b-[1px] border-[#A2A1A833] pb-[10px] ">
            <p className="text-[14px] font-[400] leading-[22px] text-[#394753] ">
              Work Email Address
            </p>
            <p className="text-[16px] font-[600] leading-[24px] text-[#394753] ">
              {pageDetails?.email}
            </p>
          </div>
          <div className="flex flex-col gap-1 border-b-[1px] border-[#A2A1A833] pb-[10px] ">
            <p className="text-[14px] font-[400] leading-[22px] text-[#394753] ">
              Department
            </p>
            <p className="text-[16px] font-[600] leading-[24px] text-[#394753] ">
              {pageDetails?.departments
                ? pageDetails?.departments?.map((dept: any) => dept?.name + ",")
                : "N/A"}
            </p>
          </div>
          <div className="flex flex-col gap-1 border-b-[1px] border-[#A2A1A833] pb-[10px] ">
            <p className="text-[14px] font-[400] leading-[22px] text-[#394753] ">
              Designation
            </p>
            <p className="text-[16px] font-[600] leading-[24px] text-[#394753] ">
              {pageDetails?.jobRoles
                ? pageDetails?.jobRoles?.map((role: any) => role?.title + ",")
                : "N/A"}
            </p>
          </div>
          <div className="flex flex-col gap-1 border-b-[1px] border-[#A2A1A833] pb-[10px] ">
            <p className="text-[14px] font-[400] leading-[22px] text-[#394753] ">
              Working Days
            </p>
            {/* <p className="text-[16px] font-[600] leading-[24px] text-[#394753] ">
          8 Hours
        </p> */}
            <div className="flex items-center">
              {filterByArrayIds(pageDetails?.workingDays, workingDays)?.map(
                (day: any, index: any) => (
                  <p
                    className="text-[12px] text-center font-[600] leading-[18px] text-[#000000] px-[10px] py-[6.5px] "
                    key={index}
                  >
                    {day?.name?.slice(0, 2)}
                  </p>
                )
              )}
            </div>
          </div>
          <div className="flex flex-col gap-1 border-b-[1px] border-[#A2A1A833] pb-[10px] ">
            <p className="text-[14px] font-[400] leading-[22px] text-[#394753] ">
              Date Joined
            </p>
            <p className="text-[16px] font-[600] leading-[24px] text-[#394753] ">
              {formatDate(pageDetails?.dateJoined)}
            </p>
          </div>
          <div className="flex flex-col gap-1 border-b-[1px] border-[#A2A1A833] pb-[10px] ">
            <p className="text-[14px] font-[400] leading-[22px] text-[#394753] ">
              Office Location
            </p>
            <p className="text-[16px] font-[600] leading-[24px] text-[#394753] ">
              {pageDetails?.officeLocation}
            </p>
          </div>
        </div>
      )}
      {workModeLoading && <PageLoaderModal />}
    </>
  );
};

export default ProfessionalInformation;
