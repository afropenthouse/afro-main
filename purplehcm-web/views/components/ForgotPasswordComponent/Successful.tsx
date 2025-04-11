import React from "react";
import AuthenticationLayout from "../AuthenticationLayout/AuthenticationLayout";
import { PrimaryButton } from "../Button/Button";
import SuccessBack from "../../assets/images/success-back.jpg";
import SuccessfulGif from "../../assets/gif/successful-gif.gif";
import Image from "next/image";
import { ROUTES } from "../../helpers/routes";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";

const Successful = () => {
  const router = useRouter();
  const { t: translate } = useTranslation("onboarding");

  return (
    <AuthenticationLayout sideBack={SuccessBack} mobileLogo>
      <div className="flex flex-col items-center gap-6 md:gap-10 w-full pb-[110px]">
        <div className="flex flex-col gap-6 md:gap-10 items-center">
          <Image src={SuccessfulGif} alt="successful" />
          <div className="flex flex-col items-center gap-2">
            <h1 className="text-[24px] md:text-[32px] text-center leading-[28px] md:leading-[32px] lg:text-[36px] font-[700] lg:leading-[43px] text-purpleBlack ">
              {translate("passwordUpdatedHeader")}
            </h1>
            <p className="text-[14px] leading-[18px] lg:text-[18px] text-center max-w-[410px] font-[400] lg:leading-[28px] text-[#394753] ">
              {translate("passwordUpdatedSubHeader")}
            </p>
          </div>
          <PrimaryButton
            title={translate("passwordUpdatedButtonText")}
            className="mt-8 w-full"
            onClick={() => router.push(ROUTES?.SIGNIN)}
          />
        </div>
      </div>
    </AuthenticationLayout>
  );
};

export default Successful;
