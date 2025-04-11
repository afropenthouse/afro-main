import React from "react";
import { formatDate } from "../../../../helpers/converter";
import { findNameById } from "../../../../helpers";
import { useAllMaritalStatus } from "../../../../hooks/useAllMaritalStatus";
import PageLoaderModal from "../../../Loader/PageLoaderModal";
import { useAllGender } from "../../../../hooks/useAllGender";
import { useAllCountry } from "../../../../hooks/useAllCountry";

const PersonalInformation = ({ pageDetails }: { pageDetails: any }) => {
  const { data: maritalData, isLoading: maritalDataLoading } =
    useAllMaritalStatus();
  const { data: gender, isLoading: genderDataLoading } =
    useAllGender();
  const { data: countryData, isLoading: countryDataLoading } =
    useAllCountry();

    console.log(countryData)
  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 ">
        <div className="flex flex-col gap-1 border-b-[1px] border-[#A2A1A833] pb-[10px] ">
          <p className="text-[14px] font-[400] leading-[22px] text-[#394753] ">
            First Name
          </p>
          <p className="text-[16px] font-[600] leading-[24px] text-[#394753] ">
            {pageDetails?.firstName}
          </p>
        </div>
        <div className="flex flex-col gap-1 border-b-[1px] border-[#A2A1A833] pb-[10px] ">
          <p className="text-[14px] font-[400] leading-[22px] text-[#394753] ">
            Last Name
          </p>
          <p className="text-[16px] font-[600] leading-[24px] text-[#394753] ">
            {pageDetails?.lastName}
          </p>
        </div>
        <div className="flex flex-col gap-1 border-b-[1px] border-[#A2A1A833] pb-[10px] ">
          <p className="text-[14px] font-[400] leading-[22px] text-[#394753] ">
            Mobile Number
          </p>
          <p className="text-[16px] font-[600] leading-[24px] text-[#394753] ">
            {pageDetails?.phoneNumber}
          </p>
        </div>
        <div className="flex flex-col gap-1 border-b-[1px] border-[#A2A1A833] pb-[10px] ">
          <p className="text-[14px] font-[400] leading-[22px] text-[#394753] ">
            Email Address
          </p>
          <p className="text-[16px] font-[600] leading-[24px] text-[#394753] ">
            {pageDetails?.email}
          </p>
        </div>
        <div className="flex flex-col gap-1 border-b-[1px] border-[#A2A1A833] pb-[10px] ">
          <p className="text-[14px] font-[400] leading-[22px] text-[#394753] ">
            Date of Birth
          </p>
          <p className="text-[16px] font-[600] leading-[24px] text-[#394753] ">
            {formatDate(pageDetails?.dateOfBirth)}
          </p>
        </div>
        <div className="flex flex-col gap-1 border-b-[1px] border-[#A2A1A833] pb-[10px] ">
          <p className="text-[14px] font-[400] leading-[22px] text-[#394753] ">
            Marital Status
          </p>
          <p className="text-[16px] font-[600] leading-[24px] text-[#394753] ">
            {findNameById(maritalData, pageDetails?.maritalStatus)}
          </p>
        </div>
        <div className="flex flex-col gap-1 border-b-[1px] border-[#A2A1A833] pb-[10px] ">
          <p className="text-[14px] font-[400] leading-[22px] text-[#394753] ">
            Gender
          </p>
          <p className="text-[16px] font-[600] leading-[24px] text-[#394753] ">
            {/* {findNameById(gender, pageDetails?.gender)} */}
            {pageDetails?.gender}
          </p>
        </div>
        <div className="flex flex-col gap-1 border-b-[1px] border-[#A2A1A833] pb-[10px] ">
          <p className="text-[14px] font-[400] leading-[22px] text-[#394753] ">
            Nationality
          </p>
          <p className="text-[16px] font-[600] leading-[24px] text-[#394753] ">
          {/* {findNameById(countryData, pageDetails?.nationality)} */}
          {pageDetails?.nationality}
          </p>
        </div>
        <div className="flex flex-col gap-1 border-b-[1px] border-[#A2A1A833] pb-[10px] ">
          <p className="text-[14px] font-[400] leading-[22px] text-[#394753] ">
            Address
          </p>
          <p className="text-[16px] font-[600] leading-[24px] text-[#394753] ">
          {pageDetails?.addresses[0]?.street}
          </p>
        </div>
        <div className="flex flex-col gap-1 border-b-[1px] border-[#A2A1A833] pb-[10px] ">
          <p className="text-[14px] font-[400] leading-[22px] text-[#394753] ">
            City
          </p>
          <p className="text-[16px] font-[600] leading-[24px] text-[#394753] ">
          {pageDetails?.addresses[0]?.state}
          </p>
        </div>
        <div className="flex flex-col gap-1 border-b-[1px] border-[#A2A1A833] pb-[10px] ">
          <p className="text-[14px] font-[400] leading-[22px] text-[#394753] ">
            Country
          </p>
          <p className="text-[16px] font-[600] leading-[24px] text-[#394753] ">
          {pageDetails?.addresses[0]?.country}
          </p>
        </div>
      </div>
      {(maritalDataLoading || genderDataLoading || countryDataLoading) && <PageLoaderModal />}
    </>
  );
};

export default PersonalInformation;
