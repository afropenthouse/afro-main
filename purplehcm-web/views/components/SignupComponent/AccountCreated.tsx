import { ISignupProps } from "@/pages/signup";
import Image from "next/image";
import React, { useState } from "react";
import PurpleBlack from "../../assets/images/purple-black.svg";
import { OtherButton, OutlineButton, PrimaryButton } from "../Button/Button";
import SuccessfulGif from "../../assets/gif/successful-gif.gif";
import { useTranslation } from "react-i18next";
import { ROUTES } from "../../helpers/routes";
import { useRouter } from "next/router";

const AccountCreated = (props: ISignupProps) => {
  const { details, handlePageQuery, setDetails } = props;
  const { t: translate } = useTranslation("onboarding");
  const router = useRouter();

  return (
    <>
      <div className="w-full flex justify-between items-center px-[16px] py-[18px] lg:pt-6 lg:pb-7 lg:px-10 fixed top-0 bg-[#ffffff] border-[1px] border-b-[#EAECF0] ">
        <Image
          src={PurpleBlack}
          alt="purple-logo"
          className="w-[100px] lg:w-[136px] "
        />
      </div>

      <div className="flex items-center justify-center pt-[74px] pb-[100px] px-4 lg:px-0 lg:py-[144px] flex-col gap-[16px] lg:gap-[50px] ">
        <div className="flex flex-col items-center gap-4 lg:gap-6 w-full md:max-w-[440px] pt-[54px]">
          <Image
            src={SuccessfulGif}
            alt="confirming-gif"
            className="w-[176px] lg:w-[300px]"
          />
          <div className="flex flex-col items-center gap-2 lg:gap-1 lg:items-center">
            <p className="text-[24px] lg:text-[28px] leading-[28px] lg:leading-[33px] text-center font-[700] text-[#394753] ">
              {translate("accountCreatedHeader")}
            </p>
            <p className="text-[14px] lg:text-[16px] lg:leading-[20px] font-[400] lg:font-[500] leading-4 text-[#394753] text-center ">
              {translate("accountCreatedSubHeader")}
            </p>
          </div>
        </div>
        <PrimaryButton
          title={translate("accountCreatedButtonText")}
          className="w-full py-2.5 lg:w-[248px] lg:py-3 lg:px-[60px] rounded-[12px] "
          onClick={() => router.push(ROUTES?.DASHBOARD)}
        />
      </div>
    </>
  );
};

export default AccountCreated;
