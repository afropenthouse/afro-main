import { ISignupProps } from "@/pages/signup";
import Image from "next/image";
import React, { useState } from "react";
import PurpleBlack from "../../assets/images/purple-black.svg";
import { PrimaryButton } from "../Button/Button";
import CustomInputField from "../CustomHTMLElements/CustomInputField";
import CustomSelect from "../CustomHTMLElements/CustomSelect";
import { useForm } from "react-hook-form";
import CustomCheckboxInput from "../CustomHTMLElements/CustomCheckboxInput";
import { useTranslation } from "next-i18next";
import { postData } from "../../apis/apiMethods";
import CONFIG from "../../helpers/config";
import { apiEndpoints } from "../../apis/apiEndpoints";
import { toast } from "react-toastify";
import { errorHandler } from "../../helpers/errorHander";
import { useAllCountry } from "../../hooks/useAllCountry";
import PageLoaderModal from "../Loader/PageLoaderModal";
import { useAllFeatures } from "../../hooks/useAllFeatures";
import model from "../../helpers/model";
import { useAllCompanyType } from "../../hooks/useAllCompanyType";

const CompanyDetails = (props: ISignupProps) => {
  const { details, handlePageQuery, setDetails } = props;
  const { control } = useForm();
  const { t: translate } = useTranslation("onboarding");
  const [loading, setLoading] = useState(false);
  const [selectedFeatures, setSelectedFeatures] = useState<any>(
    details?.features || []
  );
  const { data: countryData, isLoading: countryLoading } = useAllCountry();
  const { data: featureData, isLoading: featureLoading } = useAllFeatures();
  const { data: companyTypeData, isLoading: companyTypeLoading } =
    useAllCompanyType();

  const companyTypeOptions = translate("companyDetailsCompanyTypeOption", {
    returnObjects: true,
  }) as { label: string; value: string }[];

  const features = translate("companyDetailsFeatures", {
    returnObjects: true,
  }) as string[];

  const countryOption = [
    { label: "Nigeria", value: "Nigeria" },
    { label: "Ghana", value: "Ghana" },
    { label: "Kenya", value: "Kenya" },
    { label: "Morocco", value: "Morocco" },
  ];

  // Handle checkbox change
  const handleCheckboxChange = (feature: any) => {
    setSelectedFeatures((prevSelectedFeatures: any) => {
      if (prevSelectedFeatures.includes(feature)) {
        // If the feature is already selected, remove it from the list
        return prevSelectedFeatures.filter((f: any) => f !== feature);
      } else {
        // If the feature is not selected, add it to the list
        return [...prevSelectedFeatures, feature];
      }
    });
  };

  // Check if a feature is selected
  const isFeatureSelected = (feature: any) =>
    selectedFeatures?.includes(feature);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      setDetails({ ...details, [name]: checked });
    } else {
      setDetails({ ...details, [name]: value });
    }
  };

  const handleChange = (target: any, name: any) => {
    if (name === "companyType") {
      setDetails({
        ...details,
        [name]: target?.value,
        companyTypeName: target?.label,
      });
    } else {
      setDetails({ ...details, [name]: target?.value });
    }
  };

  const handleProceed = async () => {
    setLoading(true);
    const featuresInterestedIn = selectedFeatures.join(", ");
    const reqBody =
      details?.companyTypeName === "Startup"
        ? {
            name: details?.organisationName,
            email: details?.companyEmail,
            organizationType: details?.companyType,
            countryOfIncorporation: details?.countryOfIncorporation,
            country: details?.country,
            featuresInterestedIn: featuresInterestedIn,
          }
        : {
            name: details?.organisationName,
            email: details?.companyEmail,
            organizationType: details?.companyType,
            country: details?.country,
            countryOfIncorporation: details?.country,
            featuresInterestedIn: featuresInterestedIn,
          };
    try {
      const res = await postData(
        `${CONFIG.BASE_URL}${apiEndpoints.ONBOARDING_ORGANISATION}`,
        reqBody
      );

      if (res.isSuccessful) {
        // toast.success(res.message);
        setDetails({ ...details, features: selectedFeatures });
        if (details?.companyTypeName === "Startup") {
          handlePageQuery("successful");
        } else {
          handlePageQuery("legal-details");
        }
      }
      if (!res.isSuccessful) {
        toast.error(res.data);
      }
    } catch (error) {
      toast.error(errorHandler(error));
    }
    setLoading(false);
  };

  return (
    <>
      <div className="w-full flex justify-between items-center px-[16px] py-[18px] lg:pt-6 lg:pb-7 lg:px-10 fixed top-0 bg-[#ffffff] border-[1px] border-b-[#EAECF0] z-[10] ">
        <Image
          src={PurpleBlack}
          alt="purple-logo"
          className="w-[100px] lg:w-[136px] "
        />
        <button
          className="hidden bg-primaryColor disabled:bg-disabled text-purpleWhite lg:flex lg:py-2.5 lg:px-6 lg:rounded-[12px] "
          onClick={
            handleProceed
            //   () => {
            //   setDetails({ ...details, features: selectedFeatures }),
            //     handlePageQuery("legal-details");
            // }
          }
          //   disabled
          disabled={
            !details?.organisationName ||
            (!details?.companyType && details?.companyType !== 0) ||
            !details?.country ||
            (details?.companyTypeName === "Startup" &&
              !details?.countryOfIncorporation)
          }
        >
          {translate("companyDetailsButtonText")}
        </button>
      </div>
      <div className="flex items-center justify-center py-[74px] lg:py-[144px] flex-col gap-[16px] lg:gap-[50px] ">
        <div className="flex flex-col gap-4 lg:gap-6 w-full md:max-w-[480px] px-4 lg:px-0">
          <div className="flex flex-col gap-2 lg:gap-1 lg:items-center">
            <p className="text-[16px] font-[700] text-[#394753] ">
              {translate("companyDetailsHeader")}
            </p>
            <p className="text-[14px] font-[500] text-[#678196] ">
              {translate("companyDetailsSubHeader")}
            </p>
          </div>
          <CustomInputField
            extraLabel={translate("companyDetailsOrganizationName")}
            type="text"
            label=" "
            placeholder={translate("companyDetailsOrganizationNamePlaceholder")}
            name="organisationName"
            onChange={(e: any) => handleInputChange(e)}
            required
            defaultValue={details?.organisationName}
          />
          <CustomSelect
            extraLabel={translate("companyDetailsCompanyType")}
            name="companyType"
            handleChange={(e, a) => handleChange(e, a)}
            defaultValue={details?.companyType}
            options={companyTypeData}
            control={control}
          />

          <CustomInputField
            extraLabel={translate("companyDetailsCompanyEmail")}
            type="text"
            label=" "
            placeholder={translate("companyDetailsCompanyEmailPlaceholder")}
            name="companyEmail"
            onChange={(e: any) => handleInputChange(e)}
            required
            defaultValue={details?.companyEmail}
          />

          <CustomSelect
            extraLabel={translate("companyDetailsCountry")}
            name="country"
            handleChange={(e, a) => handleChange(e, a)}
            defaultValue={details?.country}
            options={model(countryData, "name", "code")}
            control={control}
          />
          {details?.companyTypeName === "Startup" && (
            <CustomSelect
              extraLabel={translate("legalDetailsCountryOfIncorporation")}
              name="countryOfIncorporation"
              handleChange={(e, a) => handleChange(e, a)}
              defaultValue={details?.countryOfIncorporation}
              options={model(countryData, "name", "code")}
              control={control}
            />
          )}
        </div>
        <div className="flex flex-col gap-1.5 w-full md:max-w-[480px] px-4 lg:px-0">
          <p className="text-[14px] lg:text-[16px] font-[700] text-primaryColor ">
            {translate("companyDetailsFeaturesHeader")}
          </p>
          <div className="bg-[#F7F5FF] flex flex-col lg:rounded-[8px] overflow-hidden ">
            {featureData?.map((feature: any, index: any) => (
              <div
                className="flex justify-between items-center px-3 lg:px-4 py-[14px] cursor-pointer"
                key={index}
                onClick={() => handleCheckboxChange(feature?.Name)} // Handle the click on the feature name or container
              >
                <p className="text-[12px] lg:text-[14px] font-[500] text-[#29343C] ">
                  {feature?.Name}
                </p>
                <CustomCheckboxInput
                  checked={isFeatureSelected(feature?.Name)}
                  onChange={() => handleCheckboxChange(feature?.Name)}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="lg:hidden w-full flex justify-center items-center p-4 fixed bottom-0 shadow-premium bg-[#ffffff] border-[1px] border-t-[#EAECF0]  ">
        <PrimaryButton
          title="Continue"
          className="w-full py-2.5 px-6 rounded-[8px] "
          onClick={handleProceed}
          disabled={
            !details?.organisationName ||
            (!details?.companyType && details?.companyType !== 0) ||
            !details?.country ||
            (details?.companyTypeName === "Startup" &&
              !details?.countryOfIncorporation)
          }
        />
      </div>
      {(countryLoading || featureLoading || companyTypeLoading || loading) && (
        <PageLoaderModal />
      )}
    </>
  );
};

export default CompanyDetails;
