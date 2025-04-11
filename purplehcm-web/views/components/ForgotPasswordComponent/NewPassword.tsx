import React, { useState } from "react";
import AuthenticationLayout from "../AuthenticationLayout/AuthenticationLayout";
import CustomInputField from "../CustomHTMLElements/CustomInputField";
import Link from "next/link";
import { PrimaryButton } from "../Button/Button";
import { ISignupProps } from "@/pages/signup";
import SignupBack from "../../assets/images/signup-back.jpg";
import BackArrow from "../../assets/images/black-arrow-left.svg";
import ShowPasswordIcon from "../../assets/images/eye-open.svg";
import HidePasswordIcon from "../../assets/images/eye-slash.svg";
import Image from "next/image";
import { ROUTES } from "../../helpers/routes";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import { postData } from "../../apis/apiMethods";
import CONFIG from "../../helpers/config";
import { apiEndpoints } from "../../apis/apiEndpoints";
import { toast } from "react-toastify";
import { errorHandler } from "../../helpers/errorHander";

const NewPassword = (props: ISignupProps) => {
  const { details, handlePageQuery, setDetails } = props;
  const router = useRouter();
  const [passwordType, setPasswordType] = useState("password");
  const [confirmPasswordType, setConfirmPasswordType] = useState("password");
  const { t: translate } = useTranslation("onboarding");
  const [strength, setStrength] = useState("");
  const [loading, setLoading] = useState(false);

  const onSubmit = async () => {
    setLoading(true);
    const reqBody = {
      token: details?.token,
      newPassword: details?.password,
      confirmPassword: details?.confirmPassword,
    };
    try {
      const res = await postData(
        `${CONFIG.BASE_URL}${apiEndpoints.RESET_PASSWORD}`,
        reqBody
      );

      if (res.isSuccessful) {
        toast.success(res.message);
        handlePageQuery("successful");
      }
      if (!res.isSuccessful) {
        toast.error(res.message);
      }
    } catch (error) {
      toast.error(errorHandler(error));
    }
    setLoading(false);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;

    const checkPasswordStrength = (password: any) => {
      const minLength = password.length >= 8;
      const hasLowerCase = /[a-z]/.test(password);
      const hasUpperCase = /[A-Z]/.test(password);
      const hasNumber = /\d/.test(password);

      // if (minLength) {
      //   setMinLength(true);
      // } else {
      //   setMinLength(false);
      // }
      // if (hasLowerCase) {
      //   setLowerCase(true);
      // } else {
      //   setLowerCase(false);
      // }
      // if (hasUpperCase) {
      //   setUpperCase(true);
      // } else {
      //   setUpperCase(false);
      // }
      // if (hasNumber) {
      //   setNumber(true);
      // } else {
      //   setNumber(false);
      // }

      if (password === "") {
        return "";
      } else if (minLength && hasLowerCase && hasUpperCase && hasNumber) {
        return "Strong";
      } else if (
        (minLength && hasLowerCase && hasUpperCase) ||
        (minLength && hasLowerCase && hasNumber) ||
        (minLength && hasUpperCase && hasNumber)
      ) {
        return "Okay";
      } else {
        return "Weak";
      }
    };

    if (name === "password") {
      const strength = checkPasswordStrength(value);
      setStrength(strength);
      if (strength === "Weak") {
        setDetails({ ...details, password: "" });
      }
      if (strength === "Strong") {
        setDetails({ ...details, [name]: value });
      }
    } else if (type === "checkbox") {
      setDetails({ ...details, [name]: checked });
    } else {
      setDetails({ ...details, [name]: value });
    }
  };

  const togglePasswordField = () => {
    if (passwordType === "password") {
      setPasswordType("text");
    } else {
      setPasswordType("password");
    }
  };

  const toggleConfirmPasswordField = () => {
    if (confirmPasswordType === "password") {
      setConfirmPasswordType("text");
    } else {
      setConfirmPasswordType("password");
    }
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
            {translate("createPasswordHeader")}
          </h1>
          <p className="text-[14px] leading-[18px] lg:text-[18px] font-[400] lg:leading-[21px] text-[#394753] ">
            {translate("createPasswordSubHeader")}
          </p>
        </div>
        <div className="flex flex-col gap-6 md:gap-10 items-center">
          <div className="flex flex-col gap-[13px] md:gap-6 w-full">
            <div className="flex flex-col gap-1">
              <CustomInputField
                extraLabel={translate("createPasswordPassword")}
                type={passwordType}
                label=" "
                placeholder={translate("createPasswordPasswordPlaceholder")}
                name="password"
                onChange={(e: any) => handleInputChange(e)}
                required
                hasActionButton={true}
                actionButtonText={
                  passwordType === "password" ? (
                    <Image src={ShowPasswordIcon} alt="" />
                  ) : (
                    <Image src={HidePasswordIcon} alt="" />
                  )
                }
                onClickActionButton={togglePasswordField}
              />
              <p className="text-[12px] font-[500] leading-4.5 text-[#667085] ">
                {strength?.length > 0 ? strength : translate("passwordAltText")}
              </p>
            </div>
            <div className="flex flex-col gap-1">
              <CustomInputField
                extraLabel={translate("createPasswordConfirmPassword")}
                type={confirmPasswordType}
                label=" "
                placeholder={translate(
                  "createPasswordConfirmPasswordPlaceholder"
                )}
                name="confirmPassword"
                onChange={(e: any) => handleInputChange(e)}
                required
                hasActionButton={true}
                actionButtonText={
                  confirmPasswordType === "password" ? (
                    <Image src={ShowPasswordIcon} alt="" />
                  ) : (
                    <Image src={HidePasswordIcon} alt="" />
                  )
                }
                onClickActionButton={toggleConfirmPasswordField}
              />
              <p className="text-[12px] font-[500] leading-4.5 text-[#667085] ">
                {!details?.confirmPassword || details?.confirmPassword === ""
                  ? translate("confirmPasswordAltText")
                  : details?.confirmPassword === details?.password
                  ? "Password match"
                  : "Password not match"}
              </p>
            </div>
          </div>
          <PrimaryButton
            title={translate("submit")}
            className="mt-8 w-full"
            onClick={onSubmit}
            disabled={
              !details?.password ||
              details?.password !== details?.confirmPassword
            }
          />

          {/* <p className="text-[16px] leading-[20px] font-[500] text-black text-center mt-12 lg:mt-[98px]">
            {translate("entryLevelNewUser")}{" "}
            <Link href={ROUTES?.SIGNUP} className="text-primaryColor">
              {translate("entryLevelNewUserCTA")}
            </Link>
          </p> */}
        </div>
      </div>
    </AuthenticationLayout>
  );
};

export default NewPassword;
