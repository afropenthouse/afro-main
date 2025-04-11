import React, { useState } from "react";
import AuthenticationLayout from "../AuthenticationLayout/AuthenticationLayout";
import CustomInputField from "../CustomHTMLElements/CustomInputField";
import Link from "next/link";
import { PrimaryButton } from "../Button/Button";
import { ISignupProps } from "@/pages/signup";
import SignupBack from "../../assets/images/signup-back.jpg";
import BackArrow from "../../assets/images/black-arrow-left.svg";
import GoogleIcon from "../../assets/images/google-icon.svg";
import MicrosoftIcon from "../../assets/images/microsoft-icon.svg";
import ShowPasswordIcon from "../../assets/images/eye-open.svg";
import HidePasswordIcon from "../../assets/images/eye-slash.svg";
import Image from "next/image";
import CustomCheckboxInput from "../CustomHTMLElements/CustomCheckboxInput";
import { ROUTES } from "../../helpers/routes";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import { postData } from "../../apis/apiMethods";
import CONFIG from "../../helpers/config";
import { apiEndpoints } from "../../apis/apiEndpoints";
import { toast } from "react-toastify";
import { errorHandler } from "../../helpers/errorHander";

const EntryPoint = (props: ISignupProps) => {
  const { details, handlePageQuery, setDetails } = props;
  const router = useRouter();
  const { t: translate } = useTranslation("onboarding");
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setDetails({ ...details, [name]: value });
  };

  const onSubmit = async () => {
    setLoading(true);
    const reqBody = {
      email: details?.email,
    };
    try {
      const res = await postData(
        `${CONFIG.BASE_URL}${apiEndpoints.FORGOT_PASSWORD}`,
        reqBody
      );

      if (res.isSuccessful) {
        toast.success(res.message);
        handlePageQuery("otp-auth");
      }
      if (!res.isSuccessful) {
        toast.error(res.message);
      }
    } catch (error) {
      toast.error(errorHandler(error));
    }
    setLoading(false);
  };

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
            {translate("forgotPasswordHeader")}
          </h1>
          <p className="text-[14px] leading-[18px] lg:text-[18px] font-[400] lg:leading-[21px] text-[#394753] ">
            {translate("forgotPasswordSubHeader")}
          </p>
        </div>
        <div className="flex flex-col gap-6 md:gap-10 items-center">
          <div className="flex flex-col gap-[13px] md:gap-6 w-full">
            <CustomInputField
              extraLabel={translate("forgotPasswordEmail")}
              type="text"
              label=" "
              placeholder={translate("forgotPasswordEmailPlaceholder")}
              name="email"
              onChange={(e: any) => handleInputChange(e)}
              required
            />
          </div>
          <PrimaryButton
            title={translate("submit")}
            className="mt-8 w-full"
            onClick={onSubmit}
            loader={loading}
            disabled={!details?.email || loading}
          />

          <p className="text-[16px] leading-[20px] font-[500] text-black text-center mt-12 lg:mt-[98px]">
            {translate("entryLevelNewUser")}{" "}
            <Link href={ROUTES?.SIGNUP} className="text-primaryColor">
              {translate("entryLevelNewUserCTA")}
            </Link>
          </p>
        </div>
      </div>
    </AuthenticationLayout>
  );
};

export default EntryPoint;
