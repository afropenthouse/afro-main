import React, { useState } from "react";
import AuthenticationLayout from "../AuthenticationLayout/AuthenticationLayout";
import SignupBack from "../../assets/images/signup-back.jpg";
import BackArrow from "../../assets/images/black-arrow-left.svg";
import { ISignupProps } from "@/pages/signup";
import { PrimaryButton } from "../Button/Button";
import CustomOtpInput from "../CustomHTMLElements/CustomOtpInput";
import Countdown from "../Countdown/Countdown";
import Image from "next/image";
import { useRouter } from "next/router";
import Link from "next/link";
import { ROUTES } from "../../helpers/routes";
import { useTranslation } from "next-i18next";
import CONFIG from "../../helpers/config";
import { postData, token } from "../../apis/apiMethods";
import { apiEndpoints } from "../../apis/apiEndpoints";
import { toast } from "react-toastify";
import { errorHandler } from "../../helpers/errorHander";

const OTPAuthentication = (props: ISignupProps) => {
  const { details, handlePageQuery, setDetails } = props;
  const router = useRouter();
  const [otpValue, setOtpValue] = useState("");
  const { t: translate } = useTranslation("onboarding");
  const [loading, setLoading] = useState(false);
  const [reconfirmLoading, setReconfirmLoading] = useState(false);

  const handleResendOtp = async () => {
    setReconfirmLoading(true);
    const reqBody = {
      email: details?.email,
    };
    try {
      const res = await postData(
        `${CONFIG.BASE_URL}${apiEndpoints.VALIDATE_OTP}`,
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

  const onSubmit = async () => {
    setLoading(true);
    const reqBody = {
      otp: otpValue,
    };
    try {
      const res = await postData(
        `${CONFIG.BASE_URL}${apiEndpoints.VERIFY_OTP}`,
        reqBody
      );

      if (res.isSuccessful) {
        toast.success(res.message);
        setDetails({ ...details, otp: otpValue, token: res.data });
        handlePageQuery("new-password");
      }
      if (!res.isSuccessful) {
        toast.error(res.message);
      }
    } catch (error) {
      toast.error(errorHandler(error));
    }
    setLoading(false);
  };

  const trimmedOTP = otpValue?.trim();
  return (
    <AuthenticationLayout sideBack={SignupBack}>
      <div className="flex items-center gap-1" onClick={() => router.back()}>
        <Image src={BackArrow} alt="back-arrow" />
        <p className="text-[14px] leading-[20px] lg:text-[16px] font-[500] text-black lg:leading-[20px] ">
          {translate("back")}
        </p>
      </div>
      <div className="flex flex-col gap-6 md:gap-10 w-full pb-[110px]">
        <div className="flex flex-col gap-2">
          <h1 className="text-[24px] md:text-[32px] leading-[28px] md:leading-[32px] lg:text-[40px] font-[700] lg:leading-[48px] ">
            {translate("otpAuthHeader")}
          </h1>
          <p className="text-[14px] leading-[18px] lg:text-[18px] font-[400] lg:leading-[21px] text-[#394753] ">
            {translate("otpAuthFirstSubHeader")}{" "}
            <span className="font-[700]">{details?.email},</span>{" "}
            {translate("otpAuthSecondSubHeader")}
          </p>
        </div>
        <div className="flex flex-col gap-6 md:gap-10">
          <CustomOtpInput
            onChange={setOtpValue}
            valueLength={6}
            value={otpValue}
          />
          <PrimaryButton
            title={translate("companyDetailsButtonText")}
            className="mt-8 max-w-[743px]"
            onClick={onSubmit}
            loader={loading}
            disabled={trimmedOTP?.length < 6 || loading}
          />

          <Countdown initialTime={60} onResendOtp={handleResendOtp} />
        </div>

        {/* <p className="text-[16px] leading-[20px] font-[500] text-black text-center mt-12 lg:mt-[98px]">
        {translate("entryLevelNewUser")}{" "}
          <Link href={ROUTES?.SIGNUP} className="text-primaryColor">
          {translate("entryLevelNewUserCTA")}
          </Link>
        </p> */}
      </div>
    </AuthenticationLayout>
  );
};

export default OTPAuthentication;
