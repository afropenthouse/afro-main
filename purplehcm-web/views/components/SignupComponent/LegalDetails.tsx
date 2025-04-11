import { ISignupProps } from "@/pages/signup";
import Image from "next/image";
import React, { useEffect } from "react";
import PurpleBlack from "../../assets/images/purple-black.svg";
import { OutlineButton, PrimaryButton } from "../Button/Button";
import CustomInputField from "../CustomHTMLElements/CustomInputField";
import CustomSelect from "../CustomHTMLElements/CustomSelect";
import { useForm } from "react-hook-form";
import AlertIcon from "../../assets/images/alert-icon.svg";
import ChevronLeft from "../../assets/images/chevron-left.svg";
import { useTranslation } from "next-i18next";
import { useAllIndustry } from "../../hooks/useAllIndustry";
import PageLoaderModal from "../Loader/PageLoaderModal";
import { useAllCountry } from "../../hooks/useAllCountry";
import model from "../../helpers/model";
import { useAllCompanyType } from "../../hooks/useAllCompanyType";
import { useUserProfile } from "../../hooks/useUserProfile";

const LegalDetails = (props: ISignupProps) => {
  const { details, handlePageQuery, setDetails } = props;
  const { control } = useForm();
  const { t: translate } = useTranslation("onboarding");
  const { data: industryData, isLoading: industryLoading } = useAllIndustry();
  const { data: profileData, isLoading: profileLoading } = useUserProfile({
    isUserExist: true,
  });
  const { data: countryData, isLoading: countryLoading } = useAllCountry();
  const { data: companyTypeData, isLoading: companyTypeLoading } =
    useAllCompanyType();

  useEffect(() => {
    setDetails({ ...details, organizationId: profileData?.organization?.id });
  }, [profileData]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      setDetails({ ...details, [name]: checked });
    } else {
      setDetails({ ...details, [name]: value });
    }
  };

  const handleChange = (target: any, name: any) => {
    setDetails({ ...details, [name]: target?.value });
  };

  const companyTypeOption = translate("legalDetailsCompanyTypeOption", {
    returnObjects: true,
  }) as { label: string; value: string }[];

  const countryOption = [
    { label: "Nigeria", value: "Nigeria" },
    { label: "Ghana", value: "Ghana" },
    { label: "Kenya", value: "Kenya" },
    { label: "Morocco", value: "Morocco" },
  ];

  // const sample = {
  //   companyName: "string",
  //   organizationType: 0,
  //   address: "string",
  //   state: "string",
  //   country: 49518,
  //   zipCode: "string",
  //   phoneNumber: "string",
  //   cac: "string",
  //   taxId: "string",
  //   countryOfIncorporation: 49518,
  //   companyDomain: "string",
  //   companyLinkedInUrl: "string",
  //   industryId: 0,
  //   organizationId: 0,
  //   featureId: 0,
  //   referralSource: 0,
  // };

  return (
    <>
      <div className="w-full flex justify-between items-center px-[16px] py-[18px] lg:pt-6 lg:pb-7 lg:px-10 fixed top-0 bg-[#ffffff] border-[1px] border-b-[#EAECF0] ">
        <Image
          src={PurpleBlack}
          alt="purple-logo"
          className="w-[100px] lg:w-[136px] "
        />
        <div className="hidden lg:flex items-center gap-1">
          <div className="flex items-center gap-2 px-4 rounded-[12px] py-[10px] bg-[#F2F4F7] ">
            <div className="h-5 w-5 rounded-[50%] border-[1px] border-[#EAECF0] bg-purpleWhite flex items-center justify-center text-[12px] font-[500] text-[#667085] ">
              1
            </div>
            <p className="text-[14px] font-[700] text-[#6544C5] ">
              {translate("legalDetailsHeaderText1")}
            </p>
          </div>
          <Image src={ChevronLeft} alt="chevron-left" />
          <div className="flex items-center gap-2 px-4 rounded-[12px] py-[10px] ">
            <div className="h-5 w-5 rounded-[50%] border-[1px] border-[#EAECF0] bg-purpleWhite flex items-center justify-center text-[12px] font-[500] text-[#667085] ">
              2
            </div>
            <p className="text-[14px] font-[700] text-[#667085] ">
              {translate("legalDetailsHeaderText2")}
            </p>
          </div>
        </div>
        <div className="items-center gap-4 hidden lg:flex">
          <button
            className="hidden border-[1px] border-primaryColor text-primaryColor lg:flex lg:py-[9px] px-6 rounded-[12px] "
            onClick={() => handlePageQuery("successful")}
          >
            {translate("legalDetailsSkipText")}
          </button>
          <button
            className="hidden bg-primaryColor disabled:bg-disabled text-purpleWhite lg:flex lg:py-2.5 lg:px-6 lg:rounded-[12px] "
            onClick={() => handlePageQuery("entity-address")}
            disabled={
              !details?.legalCompanyName ||
              (!details?.legalCompanyType && details?.legalCompanyType !== 0) ||
              !details?.industry ||
              !details?.legalPhoneNumber ||
              !details?.companyCountryOfIncorporation
            }
          >
            {translate("legalDetailsButtonText")}
          </button>
        </div>
      </div>

      <div className="flex items-center justify-center pt-[74px] pb-[100px] lg:py-[144px] flex-col gap-[16px] lg:gap-[50px] ">
        <div className="flex lg:hidden items-center gap-1">
          <div className="flex items-center gap-2 px-4 rounded-[12px] py-[10px] bg-[#F2F4F7] ">
            <div className="h-5 w-5 rounded-[50%] border-[1px] border-[#EAECF0] bg-purpleWhite flex items-center justify-center text-[12px] font-[500] text-[#667085] ">
              1
            </div>
            <p className="text-[14px] font-[700] text-[#6544C5] ">
              {translate("legalDetailsHeaderText1")}
            </p>
          </div>
          <Image src={ChevronLeft} alt="chevron-left" />
          <div className="flex items-center gap-2 px-4 rounded-[12px] py-[10px] ">
            <div className="h-5 w-5 rounded-[50%] border-[1px] border-[#EAECF0] bg-purpleWhite flex items-center justify-center text-[12px] font-[500] text-[#667085] ">
              2
            </div>
            <p className="text-[14px] font-[700] text-[#667085] ">
              {translate("legalDetailsHeaderText2")}
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-4 lg:gap-6 w-full md:max-w-[500px] px-4 lg:px-0">
          <div className="flex flex-col gap-2 lg:gap-1 lg:items-center">
            <p className="text-[16px] font-[700] text-[#394753] ">
              {translate("legalDetailsHeader")}
            </p>
            <p className="text-[14px] font-[500] text-[#678196] ">
              {translate("legalDetailsSubHeader")}
            </p>
          </div>
          <div className="bg-[#EAEDF1] items-start flex gap-2.5 p-6 lg:p-3 rounded-[8px] overflow-hidden w-full ">
            <Image src={AlertIcon} alt="alert" className="hidden lg:block" />
            <div className="flex flex-col gap-2">
              <p className="text-[14px] font-[700] leading-5 text-[#394753] ">
                {translate("legalDetailsCautionHeader")} <br />
                <span className="font-[400]">
                  {translate("legalDetailsCautionSubHeader")}
                </span>
              </p>
              <p className="text-[12px] font-[700] leading-[15px] text-[#0B7B69] ">
                {translate("legalDetailsCautionSupportingText")}
              </p>
            </div>
          </div>
          <p className="text-[14px] font-[700] text-[#576E80] ">
            {translate("legalDetailsText")}
          </p>
          <CustomInputField
            extraLabel={translate("legalDetailsOrganizationName")}
            type="text"
            label=" "
            placeholder={translate("legalDetailsOrganizationNamePlaceholder")}
            name="legalCompanyName"
            defaultValue={details?.legalCompanyName}
            onChange={(e: any) => handleInputChange(e)}
          />
          <CustomSelect
            extraLabel={translate("legalDetailsCompanyType")}
            name="legalCompanyType"
            handleChange={(e, a) => handleChange(e, a)}
            defaultValue={details?.legalCompanyType}
            options={companyTypeData}
            control={control}
          />
          <CustomSelect
            extraLabel={translate("legalDetailsCountryOfIncorporation")}
            name="companyCountryOfIncorporation"
            handleChange={(e, a) => handleChange(e, a)}
            defaultValue={details?.companyCountryOfIncorporation}
            options={model(countryData, "name", "code")}
            control={control}
          />
          <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
            <CustomInputField
              extraLabel={translate("legalDetailsPhoneNumber")}
              type="text"
              label=" "
              placeholder={translate("legalDetailsPhoneNumberPlaceholder")}
              name="legalPhoneNumber"
              defaultValue={details?.legalPhoneNumber}
              onChange={(e: any) => handleInputChange(e)}
            />
            <CustomSelect
              extraLabel={translate("legalDetailsIndustry")}
              name="industry"
              handleChange={(e, a) => handleChange(e, a)}
              defaultValue={details?.industry}
              options={model(industryData, "Name", "Uuid")}
              control={control}
            />
          </div>
          {/* <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
            <CustomInputField
              extraLabel={translate("legalDetailsCACNumber")}
              type="text"
              label=" "
              placeholder={translate("legalDetailsCACNumberPlaceholder")}
              name="cacRegistrationNumber"
              defaultValue={details?.cacRegistrationNumber}
              onChange={(e: any) => handleInputChange(e)}
            />
            <CustomInputField
              extraLabel={translate("legalDetailsTaxId")}
              type="text"
              label=" "
              placeholder={translate("legalDetailsTaxIdPlaceholder")}
              name="taxId"
              defaultValue={details?.taxId}
              onChange={(e: any) => handleInputChange(e)}
            />
          </div> */}
        </div>
      </div>
      <div className="lg:hidden w-full flex gap-3 justify-center items-center p-4 fixed bottom-0 shadow-premium bg-[#ffffff] border-[1px] border-t-[#EAECF0]  ">
        <OutlineButton
          title={translate("legalDetailsSkipText")}
          className="w-full py-[9px] px-6 rounded-[12px] "
          onClick={() => handlePageQuery("successful")}
        />
        <PrimaryButton
          title={translate("legalDetailsButtonText")}
          className="w-full py-2.5 px-6 rounded-[12px] "
          onClick={() => handlePageQuery("entity-address")}
          disabled={
            !details?.legalCompanyName ||
            (!details?.legalCompanyType && details?.legalCompanyType !== 0) ||
            !details?.industry ||
            !details?.legalPhoneNumber ||
            !details?.companyCountryOfIncorporation
          }
        />
      </div>
      {(industryLoading ||
        countryLoading ||
        companyTypeLoading ||
        profileLoading) && <PageLoaderModal />}
    </>
  );
};

export default LegalDetails;
