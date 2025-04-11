import { ISignupProps } from "@/pages/signup";
import Image from "next/image";
import React, { useState } from "react";
import PurpleBlack from "../../assets/images/purple-black.svg";
import { OutlineButton, PrimaryButton } from "../Button/Button";
import CustomInputField from "../CustomHTMLElements/CustomInputField";
import CustomSelect from "../CustomHTMLElements/CustomSelect";
import { useForm } from "react-hook-form";
import ChevronLeft from "../../assets/images/chevron-left.svg";
import CheckGreen from "../../assets/images/green-check-circle.svg";
import { useTranslation } from "react-i18next";
import { useAllCountry } from "../../hooks/useAllCountry";
import model from "../../helpers/model";
import PageLoaderModal from "../Loader/PageLoaderModal";
import { postData } from "../../apis/apiMethods";
import CONFIG from "../../helpers/config";
import { apiEndpoints } from "../../apis/apiEndpoints";
import { toast } from "react-toastify";
import { errorHandler } from "../../helpers/errorHander";
import AccountConfirmation from "./AccountConfirmation";
import { useAllState } from "../../hooks/useAllStates";

const EntityAddress = (props: ISignupProps) => {
  const { details, handlePageQuery, setDetails } = props;
  const { control } = useForm();
  const { t: translate } = useTranslation("onboarding");
  const { data: countryData, isLoading: countryLoading } = useAllCountry();
  const { data: stateData, isLoading: stateLoading } = useAllState({
    code: details?.entityCountry,
  });
  const [loading, setLoading] = useState(false);
  const [anotherEntityLoading, setAnotherEntityLoading] = useState(false);

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

  const countryOption = [
    { label: "Nigeria", value: "Nigeria" },
    { label: "Ghana", value: "Ghana" },
    { label: "Kenya", value: "Kenya" },
    { label: "Morocco", value: "Morocco" },
  ];

  const handleProceed = async (anotherEntity?: boolean) => {
    anotherEntity ? setAnotherEntityLoading(true) : setLoading(true);

    // {
    //   "companyName": "string",
    //   "organizationType": 0,
    //   "address": "string",
    //   "state": "string",
    //   "country": 49518,
    //   "phoneNumber": "string",
    //   "countryOfIncorporation": 49518,
    //   "companyDomain": "string",
    //   "companyLinkedInUrl": "string",
    //   "industryId": 0,
    //   "organizationId": 0,
    //   "features": "string",
    //   "referralSource": 0
    // }

    const reqBody = {
      companyName: details?.legalCompanyName,
      organizationType: details?.legalCompanyType,
      address: details?.entityRegisteredAddress,
      state: details?.entityState,
      country: details?.entityCountry,
      companyEmail: details?.entityEmail,
      // zipCode: details?.zipCode,
      phoneNumber: details?.legalPhoneNumber,
      // cac: details?.cacRegistrationNumber,
      // taxId: details?.taxId,
      countryOfIncorporation: details?.companyCountryOfIncorporation,
      companyDomain: details?.websiteUrl,
      companyLinkedInUrl: details?.companyLinkedInUrl,
      industryId: details?.industry,
      organizationId: details?.organizationId,
      // featureId: 0,
      // referralSource: 0,
    };
    try {
      const res = await postData(
        `${CONFIG.BASE_URL}${apiEndpoints.ONBOARDING_COMPANY}`,
        reqBody
      );

      if (res.isSuccessful) {
        // toast.success(res.message);
        if (anotherEntity === true) {
          setDetails({});
          handlePageQuery("legal-details");
        } else {
          setDetails({});
          handlePageQuery("successful");
        }
      }
      if (!res.isSuccessful) {
        toast.error(res.data);
      }
    } catch (error) {
      toast.error(errorHandler(error));
    }
    anotherEntity ? setAnotherEntityLoading(false) : setLoading(false);
  };

  return (
    <>
      {loading ? (
        <AccountConfirmation
          details={details}
          handlePageQuery={handlePageQuery}
          setDetails={setDetails}
        />
      ) : (
        <>
          <div className="w-full flex justify-between items-center px-[16px] py-[18px] lg:pt-6 lg:pb-7 lg:px-10 fixed top-0 bg-[#ffffff] border-[1px] border-b-[#EAECF0] ">
            <Image
              src={PurpleBlack}
              alt="purple-logo"
              className="w-[100px] lg:w-[136px] "
            />
            <div className="hidden lg:flex items-center gap-1">
              <div
                className="flex items-center gap-2 px-4 rounded-[12px] py-[10px] "
                onClick={() => handlePageQuery("legal-details")}
              >
                <Image src={CheckGreen} alt="check-green" />
                <p className="text-[14px] font-[700] text-[#667085] ">
                  {translate("legalDetailsHeaderText1")}
                </p>
              </div>
              <Image src={ChevronLeft} alt="chevron-left" />
              <div className="flex items-center gap-2 px-4 rounded-[12px] py-[10px] bg-[#F2F4F7] ">
                <div className="h-5 w-5 rounded-[50%] border-[1px] border-[#EAECF0] bg-purpleWhite flex items-center justify-center text-[12px] font-[500] text-[#667085] ">
                  2
                </div>
                <p className="text-[14px] font-[700] text-[#6544C5] ">
                  {translate("legalDetailsHeaderText2")}
                </p>
              </div>
            </div>
            <div className="items-center gap-4 hidden lg:flex">
              <button
                className="hidden border-[1px] border-primaryColor text-primaryColor lg:flex lg:py-[9px] px-6 rounded-[12px] disabled:border-disabled disabled:text-disabled "
                onClick={() => handleProceed(true)}
                disabled={
                  !details?.entityEmail ||
                  !details?.entityRegisteredAddress ||
                  !details?.entityCountry ||
                  !details?.entityState
                }
              >
                {translate("entityAddressAnotherEntity")}
              </button>
              <button
                className="hidden bg-primaryColor disabled:bg-disabled text-purpleWhite lg:flex lg:py-2.5 lg:px-6 lg:rounded-[12px] "
                onClick={() => handleProceed(false)}
                disabled={
                  !details?.entityEmail ||
                  !details?.entityRegisteredAddress ||
                  !details?.entityCountry ||
                  !details?.entityState
                }
              >
                {translate("entityAddressButtonText")}
              </button>
            </div>
          </div>

          <div className="flex items-center justify-center pt-[74px] pb-[100px] lg:py-[144px] flex-col gap-[16px] lg:gap-[50px] ">
            <div className="flex lg:hidden items-center gap-1">
              <div
                className="flex items-center gap-2 px-4 rounded-[12px] py-[10px] "
                onClick={() => handlePageQuery("legal-details")}
              >
                <Image src={CheckGreen} alt="check-green" />
                <p className="text-[14px] font-[700] text-[#667085] ">
                  {translate("legalDetailsHeaderText1")}
                </p>
              </div>
              <Image src={ChevronLeft} alt="chevron-left" />
              <div className="flex items-center gap-2 px-4 rounded-[12px] py-[10px] bg-[#F2F4F7] ">
                <div className="h-5 w-5 rounded-[50%] border-[1px] border-[#EAECF0] bg-purpleWhite flex items-center justify-center text-[12px] font-[500] text-[#667085] ">
                  2
                </div>
                <p className="text-[14px] font-[700] text-[#6544C5] ">
                  {translate("legalDetailsHeaderText2")}
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-4 lg:gap-6 w-full md:max-w-[500px] px-4 lg:px-0">
              <div className="flex flex-col gap-2 lg:gap-1 lg:items-center">
                <p className="text-[16px] font-[700] text-[#394753] ">
                  {translate("entityAddressHeader")}
                </p>
                <p className="text-[14px] font-[500] text-[#678196] ">
                  {translate("entityAddressSubHeader")}
                </p>
              </div>
              <p className="text-[14px] font-[700] text-[#576E80] ">
                {translate("entityAddressText")}
              </p>
              <CustomInputField
                extraLabel={translate("entityAddressEmail")}
                type="text"
                label=" "
                placeholder={translate("entityAddressEmailPlaceholder")}
                name="entityEmail"
                defaultValue={details?.entityEmail}
                onChange={(e: any) => handleInputChange(e)}
              />
              <CustomInputField
                extraLabel={translate("entityAddressAddress")}
                type="text"
                label=" "
                placeholder={translate("entityAddressAddressPlaceholder")}
                name="entityRegisteredAddress"
                defaultValue={details?.entityRegisteredAddress}
                onChange={(e: any) => handleInputChange(e)}
              />
              <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
                <CustomSelect
                  extraLabel={translate("entityAddressCountry")}
                  name="entityCountry"
                  handleChange={(e, a) => handleChange(e, a)}
                  defaultValue={details?.entityCountry}
                  options={model(countryData, "name", "code")}
                  control={control}
                />
                <CustomSelect
                  extraLabel={translate("entityAddressState")}
                  name="entityState"
                  handleChange={(e, a) => handleChange(e, a)}
                  defaultValue={details?.entityState}
                  options={stateData}
                  control={control}
                />
              </div>
              {/* <CustomInputField
                extraLabel={translate("entityAddressZipCodes")}
                type="text"
                label=" "
                placeholder={translate("entityAddressZipCodesPlaceholder")}
                name="zipCode"
                defaultValue={details?.zipCode}
                onChange={(e: any) => handleInputChange(e)}
              /> */}
              <CustomInputField
                extraLabel={`${translate("entityAddressLinkedIn")} (Optional)`}
                type="text"
                label=" "
                placeholder="www.linkedin.com/example"
                name="companyLinkedInUrl"
                defaultValue={details?.companyLinkedInUrl}
                onChange={(e: any) => handleInputChange(e)}
              />
              <CustomInputField
                extraLabel={`${translate(
                  "entityAddressWebsiteUrl"
                )} (Optional)`}
                type="text"
                label=" "
                placeholder="www.example.com"
                name="websiteUrl"
                defaultValue={details?.websiteUrl}
                onChange={(e: any) => handleInputChange(e)}
              />
            </div>
          </div>
          <div className="lg:hidden w-full flex gap-3 justify-center items-center p-4 fixed bottom-0 shadow-premium bg-[#ffffff] border-[1px] border-t-[#EAECF0]  ">
            <OutlineButton
              title={translate("entityAddressAnotherEntity")}
              className="w-full py-[9px] px-6 rounded-[12px] "
              onClick={() => handleProceed(true)}
              disabled={
                !details?.entityEmail ||
                !details?.entityRegisteredAddress ||
                !details?.entityCountry ||
                !details?.entityState
              }
            />
            <PrimaryButton
              title={translate("entityAddressButtonText")}
              className="w-full py-2.5 px-6 rounded-[12px] "
              onClick={() => handleProceed(false)}
              disabled={
                !details?.entityEmail ||
                !details?.entityRegisteredAddress ||
                !details?.entityCountry ||
                !details?.entityState
              }
            />
          </div>
          {(countryLoading || stateLoading || anotherEntityLoading) && (
            <PageLoaderModal />
          )}
        </>
      )}
    </>
  );
};

export default EntityAddress;
