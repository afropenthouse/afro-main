import React, { useState } from "react";
import AuthenticationLayout from "../AuthenticationLayout/AuthenticationLayout";
import CustomInputField from "../CustomHTMLElements/CustomInputField";
import Link from "next/link";
import { PrimaryButton } from "../Button/Button";
import { ISignupProps } from "@/pages/signup";
import SignupBack from "../../assets/images/signup-back.jpg";
import GoogleIcon from "../../assets/images/google-icon.svg";
import MicrosoftIcon from "../../assets/images/microsoft-icon.svg";
import ShowPasswordIcon from "../../assets/images/eye-open.svg";
import HidePasswordIcon from "../../assets/images/eye-slash.svg";
import Image from "next/image";
import CustomCheckboxInput from "../CustomHTMLElements/CustomCheckboxInput";
import { ROUTES } from "../../helpers/routes";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import { postData } from "../../apis/apiMethods";
import CONFIG from "../../helpers/config";
import { apiEndpoints } from "../../apis/apiEndpoints";
import { toast } from "react-toastify";
import { errorHandler } from "../../helpers/errorHander";
import { getProviders, signIn, useSession } from "next-auth/react";
import Toast from "../ToastComponent/Toast";

export default function EntryPoint(props: ISignupProps) {
  const { details, handlePageQuery, setDetails } = props;
  const [passwordType, setPasswordType] = useState("password");
  const [confirmPasswordType, setConfirmPasswordType] = useState("password");
  const [strength, setStrength] = useState("");
  const { t: translate } = useTranslation("onboarding");
  const { locale, locales, push } = useRouter();
  const [loading, setLoading] = useState(false);
  const [showToast, setShowToast] = useState(false);

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

  const handleChange = (target: any, name: any) => {
    setDetails({ ...details, [name]: target?.value });
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

  const onSubmit = async () => {
    setLoading(true);
    const reqBody = {
      firstName: details?.firstName,
      lastName: details?.lastName,
      email: details?.email,
      password: details?.password,
      phoneNumber: details?.phoneNumber,
    };
    try {
      const res = await postData(
        `${CONFIG.BASE_URL}${apiEndpoints.ONBOARDING_USER}`,
        reqBody
      );

      if (res.isSuccessful) {
        // toast.success(res.message);
        handlePageQuery("email-auth");
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
    <AuthenticationLayout sideBack={SignupBack} mobileLogo>
      <div className="flex flex-col gap-6 md:gap-10 w-full pb-[110px]">
        <div className="flex flex-col gap-2">
          <h1 className="text-[24px] md:text-[32px] leading-[28px] md:leading-[32px] lg:text-[40px] font-[700] lg:leading-[48px] ">
            {translate("signupEntryHeader")}
          </h1>
          <p className="text-[14px] leading-[18px] lg:text-[18px] font-[400] lg:leading-[21px] text-[#394753] ">
            {translate("signupEntrySubHeading")}
          </p>
        </div>

        <div className="flex lg:hidden items-center gap-[13px] md:gap-6 flex-col md:flex-row w-full">
          <div className="cursor-pointer flex flex-1 items-center justify-center gap-[18px] border-[1px] rounded-[8px] border-[#D0D5DD] p-[14px] w-full" onClick={() => {
            signIn("google");
          }}
        >
            <Image src={GoogleIcon} alt="google-icon" />
            <p className="font-[500] text-[14px] text-black ">
              {translate("googleSignUp")}
            </p>
          </div>
          <div onClick={() => { signIn('azure-ad') }} className="cursor-pointer flex flex-1 items-center justify-center gap-[18px] border-[1px] rounded-[8px] border-[#D0D5DD] p-[14px] w-full ">
            <Image src={MicrosoftIcon} alt="google-icon" />
            <p className="font-[500] text-[14px] text-black ">
              {translate("microsoftSignUp")}
            </p>
          </div>
        </div>
        <div className="flex lg:hidden gap-[50px] items-center w-full">
          <div className="h-[2px] w-full bg-[#D9D9D9]"></div>
          <p className="text-[14px] leading-[20px] font-[500] text-black whitespace-nowrap ">
            {translate("OR")}
          </p>
          <div className="h-[2px] w-full bg-[#D9D9D9]"></div>
        </div>
        <div className="flex flex-col gap-6 md:gap-10 items-center">
          <div className="flex flex-col gap-[13px] md:gap-6 w-full">
            <div className="flex items-center gap-[13px] md:gap-6 flex-col lg:flex-row">
              <CustomInputField
                extraLabel={translate("signUpFirstName")}
                type="text"
                label=" "
                placeholder={translate("signUpFirstNamePlaceholder")}
                name="firstName"
                onChange={(e: any) => handleInputChange(e)}
                required
              />
              <CustomInputField
                extraLabel={translate("signUpLastName")}
                type="text"
                label=" "
                placeholder={translate("signUpLastNamePlaceholder")}
                name="lastName"
                onChange={(e: any) => handleInputChange(e)}
                required
              />
            </div>
            <div className="flex items-center gap-[13px] md:gap-6 flex-col lg:flex-row">
              <CustomInputField
                extraLabel={translate("signUpPhoneNumber")}
                type="text"
                label=" "
                placeholder={translate("signUpPhoneNumberPlaceholder")}
                name="phoneNumber"
                onChange={(e: any) => handleInputChange(e)}
                required
              />
              <CustomInputField
                extraLabel={translate("signUpEmailAddress")}
                type="text"
                label=" "
                placeholder={translate("signUpEmailAddressPlaceholder")}
                name="email"
                onChange={(e: any) => handleInputChange(e)}
                required
              />
            </div>
            <div className="flex gap-[13px] md:gap-6 flex-col lg:flex-row">
              <div className="flex flex-col gap-1.5 flex-1">
                <CustomInputField
                  extraLabel={translate("signUpSetPassword")}
                  type={passwordType}
                  label=" "
                  placeholder={translate("signUpPasswordPlaceholder")}
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
                  {strength?.length > 0
                    ? strength
                    : translate("passwordAltText")}
                </p>
              </div>
              <div className="flex flex-col gap-1.5 flex-1">
                <CustomInputField
                  extraLabel={translate("signUpConfirmPassword")}
                  type={confirmPasswordType}
                  label=" "
                  placeholder={translate("signUpPasswordPlaceholder")}
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
            <CustomCheckboxInput
              name="terms"
              label={translate("termsAndPrivacy")}
              checked={details?.terms}
              onChange={(e: any) => handleInputChange(e)}
            />
          </div>
          <PrimaryButton
            title={translate("signUpEntryButtonText")}
            className="mt-8 w-full"
            onClick={onSubmit}
            loader={loading}
            disabled={
              !details?.firstName ||
              !details?.lastName ||
              !details?.phoneNumber ||
              !details?.email ||
              !details?.password ||
              !details?.terms ||
              loading ||
              details?.password !== details?.confirmPassword
            }
          />
          <div className="hidden lg:flex gap-[50px] items-center w-full">
            <div className="h-[2px] w-full bg-[#D9D9D9]"></div>
            <p className="text-[14px] leading-[20px] font-[500] text-black whitespace-nowrap ">
              {translate("OR")}
            </p>
            <div className="h-[2px] w-full bg-[#D9D9D9]"></div>
          </div>
          <div className="hidden lg:flex items-center gap-[13px] md:gap-6 flex-col md:flex-row w-full">
            <div className="cursor-pointer flex flex-1 items-center justify-center gap-[18px] border-[1px] rounded-[8px] border-[#D0D5DD] p-[14px] w-[289px] md:w-full" onClick={() => {
            signIn("google");
          }}
        >
              <Image src={GoogleIcon} alt="google-icon" />
              <p className="font-[500] text-[14px] text-black ">
                {translate("googleSignUp")}
              </p>
            </div>
            <div onClick={() => { signIn('azure-ad') }} className="cursor-pointer flex flex-1 items-center justify-center gap-[18px] border-[1px] rounded-[8px] border-[#D0D5DD] p-[14px] w-[289px] md:w-full ">
              <Image src={MicrosoftIcon} alt="google-icon" />
              <p className="font-[500] text-[14px] text-black ">
                {translate("microsoftSignUp")}
              </p>
            </div>
          </div>
          <p className="text-[16px] leading-[20px] font-[500] text-black text-center mt-12 lg:mt-[98px]">
            {translate("entryLevelExistingUser")}{" "}
            <Link href={ROUTES?.SIGNIN} className="text-primaryColor">
              {translate("entryLevelExistingUserCTA")}
            </Link>
          </p>
        </div>
      </div>
      {/* <button
        onClick={() => setShowToast(true)}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Show Toast
      </button>
      {showToast && (
        <Toast
          message="This is a toast notification!"
          position="top-right" // You can change this to any position
          duration={5000} // Duration in milliseconds (optional)
        />
      )} */}
    </AuthenticationLayout>
  );
}
