import { ISignupProps } from "@/pages/signup";
import Image from "next/image";
import React, { useState } from "react";
import PurpleBlack from "../../assets/images/purple-black.svg";
import ChevronLeft from "../../assets/images/chevron-left.svg";
import CheckGreen from "../../assets/images/green-check-circle.svg";
import ConfirmingGif from "../../assets/gif/processing-gif.gif";
import { useTranslation } from "react-i18next";

const AccountConfirmation = (props: ISignupProps) => {
  const { details, handlePageQuery, setDetails } = props;
  const { t: translate } = useTranslation("onboarding");

  return (
    <>
      <div className="w-full flex justify-between items-center px-[16px] py-[18px] lg:pt-6 lg:pb-7 lg:px-10 fixed top-0 bg-[#ffffff] border-[1px] border-b-[#EAECF0] ">
        <Image
          src={PurpleBlack}
          alt="purple-logo"
          className="w-[100px] lg:w-[136px] "
        />
        <div className="hidden lg:flex items-center gap-1">
          <div className="flex items-center gap-2 px-4 rounded-[12px] py-[10px] ">
            <Image src={CheckGreen} alt="check-green" />
            <p className="text-[14px] font-[700] text-[#667085]">
              {translate("legalDetailsHeaderText1")}
            </p>
          </div>
          <Image src={ChevronLeft} alt="chevron-left" />
          <div className="flex items-center gap-2 px-4 rounded-[12px] py-[10px] ">
            <Image src={CheckGreen} alt="check-green" />
            <p className="text-[14px] font-[700] text-[#667085] ">
              {translate("legalDetailsHeaderText2")}
            </p>
          </div>
        </div>
        <div></div>
      </div>

      <div className="flex items-center justify-center pt-[74px] pb-[100px] lg:py-[144px] flex-col gap-[16px] lg:gap-[50px] ">
        <div className="flex lg:hidden items-center gap-1">
          <div className="flex items-center gap-2 px-4 rounded-[12px] py-[10px] ">
            <Image src={CheckGreen} alt="check-green" />
            <p className="text-[14px] font-[700] text-[#667085] ">
              {translate("legalDetailsHeaderText1")}
            </p>
          </div>
          <Image src={ChevronLeft} alt="chevron-left" />
          <div className="flex items-center gap-2 px-4 rounded-[12px] py-[10px] ">
            <Image src={CheckGreen} alt="check-green" />
            <p className="text-[14px] font-[700] text-[#667085] ">
              {translate("legalDetailsHeaderText2")}
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center gap-4 lg:gap-6 w-full md:max-w-[440px] px-4 lg:px-0 pt-[54px]">
          <Image
            src={ConfirmingGif}
            alt="confirming-gif"
            className="w-[176px] lg:w-[358px]"
          />
          <div className="flex flex-col items-center gap-2 lg:gap-1 lg:items-center">
            <p className="text-[24px] lg:text-[28px] leading-[28px] lg:leading-[33px] text-center font-[700] text-[#394753] ">
              {translate("accountConfirmationHeader")}
            </p>
            <p className="text-[14px] lg:text-[16px] lg:leading-[20px] font-[400] lg:font-[500] leading-4 text-[#394753] text-center ">
              {translate("accountConfirmationSubHeader")}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AccountConfirmation;
