import React, { useState } from "react";
import { useRouter } from "next/router";
import CompanyDetails from "../../../views/components/SignupComponent/CompanyDetails";
import AccountCreated from "../../../views/components/SignupComponent/AccountCreated";
import EntryPoint from "../../../views/components/ForgotPasswordComponent/EntryPoint";
import OTPAuthentication from "../../../views/components/ForgotPasswordComponent/OTPAuthentication";
import NewPassword from "../../../views/components/ForgotPasswordComponent/NewPassword";
import Successful from "../../../views/components/ForgotPasswordComponent/Successful";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export interface ISignupProps {
  details: any;
  setDetails: any;
  handlePageQuery: any;
}

export const getStaticProps = async ({ locale }: { locale: any }) => {
    return {
      props: { ...(await serverSideTranslations(locale, ["onboarding"])) },
    };
  };

const index = () => {
  const router = useRouter();
  const [details, setDetails] = useState<any>();
  const { pageQuery } = router.query;

  const handlePageQuery = (pageQuery: string) => {
    router.push({
      pathname: "/forgot-password",
      query: { pageQuery },
    });
  };
  return (
    <>
      {(!pageQuery || pageQuery === "entry") && (
        <EntryPoint
          details={details}
          handlePageQuery={handlePageQuery}
          setDetails={setDetails}
        />
      )}
      {pageQuery === "otp-auth" && (
        <OTPAuthentication
          details={details}
          handlePageQuery={handlePageQuery}
          setDetails={setDetails}
        />
      )}
      {pageQuery === "new-password" && (
        <NewPassword
          details={details}
          handlePageQuery={handlePageQuery}
          setDetails={setDetails}
        />
      )}
      {pageQuery === "successful" && <Successful />}
    </>
  );
};

export default index;
