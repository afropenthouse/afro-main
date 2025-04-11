import React, { useEffect, useState } from "react";
import AuthenticationLayout from "../AuthenticationLayout/AuthenticationLayout";
import AuthenticationBack from "../../assets/images/authentication-back.jpg";
import BackArrow from "../../assets/images/black-arrow-left.svg";
import { ISignupProps } from "@/pages/signup";
import { PrimaryButton } from "../Button/Button";
import CustomOtpInput from "../CustomHTMLElements/CustomOtpInput";
import Countdown from "../Countdown/Countdown";
import Image from "next/image";
import { useTranslation } from "next-i18next";
import { postData } from "../../apis/apiMethods";
import CONFIG from "../../helpers/config";
import { apiEndpoints } from "../../apis/apiEndpoints";
import { toast } from "react-toastify";
import { errorHandler } from "../../helpers/errorHander";
import { LOCAL_STORAGE_KEYS } from "../../helpers/localStorageKeys";

const EmailAuthentication = (props: ISignupProps) => {
  const { details, handlePageQuery, setDetails } = props;
  const [otpValue, setOtpValue] = useState("");
  const { t: translate } = useTranslation("onboarding");
  const [loading, setLoading] = useState(false);
  const [reconfirmLoading, setReconfirmLoading] = useState(false);

  const userNotConfirmed = localStorage.getItem("userNotConfirmed");
  const userMail = localStorage.getItem("userMail");

  useEffect(() => {
    if (userNotConfirmed === "true") {
      handleResendOtp();
    }
  }, []);

  const onSubmit = async () => {
    setLoading(true);
    const reqBody = {
      otp: otpValue,
    };
    try {
      const res = await postData(
        `${CONFIG.BASE_URL}${apiEndpoints.CONFIRM_EMAIL}`,
        reqBody
      );

      if (res.isSuccessful) {
        // toast.success(res.message);
        setDetails({ ...details, otp: otpValue });
        localStorage.setItem(LOCAL_STORAGE_KEYS.IS_USER_EXIST, "true");
        localStorage.setItem(LOCAL_STORAGE_KEYS.TOKEN, res?.message);
        localStorage.removeItem("userMail");
        localStorage.removeItem("userNotConfirmed");
        handlePageQuery("company-details");
      }
      if (!res.isSuccessful) {
        toast.error(res.message);
      }
    } catch (error) {
      toast.error(errorHandler(error));
    }
    setLoading(false);
  };

  const handleResendOtp = async () => {
    setReconfirmLoading(true);
    const reqBody = {
      email: userNotConfirmed === "true" ? userMail : details?.email,
    };
    try {
      const res = await postData(
        `${CONFIG.BASE_URL}${apiEndpoints.RECONFIRM_EMAIL}`,
        reqBody
      );

      if (res.isSuccessful) {
        toast.success(res.message);
      }
      if (!res.isSuccessful) {
        toast.error(res.message);
      }
    } catch (error) {
      toast.error(errorHandler(error));
    }
    setReconfirmLoading(false);
  };

  const trimmedOTP = otpValue?.trim();
  return (
    <AuthenticationLayout sideBack={AuthenticationBack}>
      <div
        className="flex items-center gap-1"
        onClick={() => handlePageQuery("entry")}
      >
        <Image src={BackArrow} alt="back-arrow" />
        <p className="text-[14px] leading-[20px] lg:text-[16px] font-[500] text-black lg:leading-[20px] ">
          {translate("back")}
        </p>
      </div>
      <div className="flex flex-col gap-6 md:gap-10 w-full pb-[110px]">
        <div className="flex flex-col gap-2">
          <h1 className="text-[24px] md:text-[32px] leading-[28px] md:leading-[32px] lg:text-[40px] font-[700] lg:leading-[48px] ">
            {translate("emailAuthHeader")}
          </h1>
          <p className="text-[14px] leading-[18px] lg:text-[18px] font-[400] lg:leading-[21px] text-[#394753] ">
            {translate("emailAuthFirstSubHeader")}{" "}
            <span className="font-[700]">
              {userNotConfirmed === "true" ? userMail : details?.email},
            </span>{" "}
            {translate("emailAuthSecondSubHeader")}
          </p>
        </div>
        <div className="flex flex-col gap-6 md:gap-10">
          <CustomOtpInput
            onChange={setOtpValue}
            valueLength={6}
            value={otpValue}
          />
          <PrimaryButton
            title={translate("submit")}
            className="mt-8 max-w-[743px]"
            onClick={onSubmit}
            loader={loading}
            disabled={trimmedOTP?.length < 6}
          />

          <Countdown initialTime={60} onResendOtp={handleResendOtp} />
        </div>
      </div>
    </AuthenticationLayout>
  );
};

export default EmailAuthentication;
