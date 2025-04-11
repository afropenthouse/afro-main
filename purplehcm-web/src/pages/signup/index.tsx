import React, { useState } from "react";
import AuthenticationLayout from "../../../views/components/AuthenticationLayout/AuthenticationLayout";
import CustomInputField from "../../../views/components/CustomHTMLElements/CustomInputField";
import Link from "next/link";
import { PrimaryButton } from "../../../views/components/Button/Button";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import EntryPoint from "../../../views/components/SignupComponent/EntryPoint";
import EmailAuthentication from "../../../views/components/SignupComponent/EmailAuthentication";
import CompanyDetails from "../../../views/components/SignupComponent/CompanyDetails";
import AccountCreated from "../../../views/components/SignupComponent/AccountCreated";
import LegalDetails from "../../../views/components/SignupComponent/LegalDetails";
import EntityAddress from "../../../views/components/SignupComponent/EntityAddress";
import AccountConfirmation from "../../../views/components/SignupComponent/AccountConfirmation";
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
  const { pageQuery } = router.query;
  const [details, setDetails] = useState<any>();
  const [error, setError] = useState(true);

  const handlePageQuery = (pageQuery: string) => {
    router.push({
      pathname: "/signup",
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
      {pageQuery === "email-auth" && (
        <EmailAuthentication
          details={details}
          handlePageQuery={handlePageQuery}
          setDetails={setDetails}
        />
      )}
      {pageQuery === "company-details" && (
        <CompanyDetails
          details={details}
          handlePageQuery={handlePageQuery}
          setDetails={setDetails}
        />
      )}
      {pageQuery === "legal-details" && (
        <LegalDetails
          details={details}
          handlePageQuery={handlePageQuery}
          setDetails={setDetails}
        />
      )}
      {pageQuery === "entity-address" && (
        <EntityAddress
          details={details}
          handlePageQuery={handlePageQuery}
          setDetails={setDetails}
        />
      )}
      {pageQuery === "confirming" && (
        <AccountConfirmation
          details={details}
          handlePageQuery={handlePageQuery}
          setDetails={setDetails}
        />
      )}
      {pageQuery === "successful" && (
        <AccountCreated
          details={details}
          handlePageQuery={handlePageQuery}
          setDetails={setDetails}
        />
      )}
    </>
  );
};

export default index;
