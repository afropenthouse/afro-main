import React, { useEffect, useState } from "react";
import AuthenticationLayout from "../../../views/components/AuthenticationLayout/AuthenticationLayout";
import CustomInputField from "../../../views/components/CustomHTMLElements/CustomInputField";
import Image from "next/image";
import ShowPasswordIcon from "../../../views/assets/images/eye-open.svg";
import HidePasswordIcon from "../../../views/assets/images/eye-slash.svg";
import SigninBack from "../../../views/assets/images/signin-back.jpg";
import GoogleIcon from "../../../views/assets/images/google-icon.svg";
import MicrosoftIcon from "../../../views/assets/images/microsoft-icon.svg";
import { PrimaryButton } from "../../../views/components/Button/Button";
import Link from "next/link";
import { ROUTES } from "../../../views/helpers/routes";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { postData } from "../../../views/apis/apiMethods";
import CONFIG from "../../../views/helpers/config";
import { apiEndpoints } from "../../../views/apis/apiEndpoints";
import { LOCAL_STORAGE_KEYS } from "../../../views/helpers/localStorageKeys";
import { toast } from "react-toastify";
import { errorHandler } from "../../../views/helpers/errorHander";
import { useRouter } from "next/router";
import { useUserProfile } from "../../../views/hooks/useUserProfile";

export const getStaticProps = async ({ locale }: { locale: any }) => {
  return {
    props: { ...(await serverSideTranslations(locale, ["onboarding"])) },
  };
};

const index = () => {
  const [loading, setLoading] = useState(false);
  const [details, setDetails] = useState<any>();
  const [passwordType, setPasswordType] = useState("password");
  const [isUserExist, setIsUserExist] = useState(false);
  const { t: translate } = useTranslation("onboarding");
  const { data: userData, isLoading: isUserLoading } = useUserProfile({
    isUserExist,
  });
  const router = useRouter();
  console.log(userData, "user");

  useEffect(() => {
    if (isUserExist && !userData?.organization) {
      router.push({
        pathname: "/signup",
        query: { pageQuery: "company-details" },
      });
    } else if (
      isUserExist &&
      userData?.organization &&
      userData?.organization?.type !== "Startup" &&
      userData?.companies?.length < 1
    ) {
      router.push({
        pathname: "/signup",
        query: { pageQuery: "legal-details" },
      });
    } else if (isUserExist) {
      localStorage.setItem("user", JSON.stringify(userData));
      router.push(ROUTES.DASHBOARD);
    }
  }, [userData]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setDetails({ ...details, [name]: value });
  };

  const togglePasswordField = () => {
    if (passwordType === "password") {
      setPasswordType("text");
    } else {
      setPasswordType("password");
    }
  };

  const onSubmit = async () => {
    setLoading(true);
    const reqBody = {
      email: details?.email,
      password: details?.password,
    };
    try {
      const res = await postData(
        `${CONFIG.BASE_URL}${apiEndpoints.LOGIN}`,
        reqBody
      );

      if (!res.isSuccessful) {
        if (res.message === "Sign not allowed ,Email is not confirmed.") {
          localStorage.setItem("userMail", details?.email);
          localStorage.setItem("userNotConfirmed", "true");
          router.push({
            pathname: "/signup",
            query: { pageQuery: "email-auth" },
          });
        } else {
          toast.error(res.message);
        }
      }

      if (res.isSuccessful) {
        // toast.success(res?.message);
        setIsUserExist(true);
        localStorage.setItem(LOCAL_STORAGE_KEYS.IS_USER_EXIST, "true");
        localStorage.setItem(LOCAL_STORAGE_KEYS.TOKEN, res?.data);

        // return router.push(ROUTES.DASHBOARD);
      }
    } catch (error) {
      toast.error(errorHandler(error));
    }
    setLoading(false);
  };

  return (
    <AuthenticationLayout sideBack={SigninBack} mobileLogo>
      <div className="flex items-centet justify-center">
        <div className="flex flex-col gap-6 md:gap-10 w-full lg:max-w-[600px] pb-[110px]">
          <div className="flex flex-col gap-2">
            <h1 className="text-[24px] md:text-[32px] leading-[28px] md:leading-[32px] lg:text-[40px] font-[700] lg:leading-[48px] ">
              {translate("loginEntryHeader")}
            </h1>
            <p className="text-[14px] leading-[18px] lg:text-[18px] font-[400] lg:leading-[21px] text-[#394753] ">
              {translate("loginEntrySubHeading")}
            </p>
          </div>
          <div className="flex flex-col gap-6 md:gap-10 items-center">
            <div className="flex flex-col gap-[13px] md:gap-6 w-full">
              <CustomInputField
                extraLabel={translate("loginEmail")}
                type="text"
                label=" "
                placeholder={translate("loginEmailPlaceholder")}
                name="email"
                onChange={(e: any) => handleInputChange(e)}
                required
              />
              <CustomInputField
                extraLabel={translate("loginPassword")}
                type={passwordType}
                label=" "
                placeholder={translate("loginPasswordPlaceholder")}
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
            </div>
            <div className="flex justify-between w-full">
              <div></div>
              <Link
                href={ROUTES?.FORGOT_PASSWORD}
                className="text-[16px] leading-[20px] font-[500] text-black"
              >
                {translate("forgotPassword")}
              </Link>
            </div>
            <PrimaryButton
              title={translate("loginEntryButtonText")}
              className="mt-8 w-full"
              onClick={onSubmit}
              loader={loading || isUserLoading}
              disabled={
                !details?.email ||
                !details?.password ||
                loading ||
                isUserLoading
              }
            />
            <div className="flex gap-[50px] items-center w-full">
              <div className="h-[2px] w-full bg-[#D9D9D9]"></div>
              <p className="text-[14px] leading-[20px] font-[500] text-black whitespace-nowrap ">
                {translate("OR")}
              </p>
              <div className="h-[2px] w-full bg-[#D9D9D9]"></div>
            </div>
            <div className="flex items-center gap-[13px] md:gap-6 flex-col md:flex-row w-full">
              <div className="cursor-pointer flex flex-1 items-center justify-center gap-[18px] border-[1px] rounded-[8px] border-[#D0D5DD] p-[14px] w-[289px] md:w-full">
                <Image src={GoogleIcon} alt="google-icon" />
                <p className="font-[500] text-[14px] text-black ">
                  {translate("googleLogin")}
                </p>
              </div>
              <div className="cursor-pointer flex flex-1 items-center justify-center gap-[18px] border-[1px] rounded-[8px] border-[#D0D5DD] p-[14px] w-[289px] md:w-full ">
                <Image src={MicrosoftIcon} alt="google-icon" />
                <p className="font-[500] text-[14px] text-black ">
                  {translate("microsoftLogin")}
                </p>
              </div>
            </div>
            <p className="text-[16px] leading-[20px] font-[500] text-black text-center mt-12 lg:mt-[98px]">
              {translate("entryLevelNewUser")}{" "}
              <Link href={ROUTES?.SIGNUP} className="text-primaryColor">
                {translate("entryLevelNewUserCTA")}
              </Link>
            </p>
          </div>
        </div>
      </div>
    </AuthenticationLayout>
  );
};

export default index;
