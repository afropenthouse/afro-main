import React, {
  Dispatch,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from "react";
import {
  OutlineButton,
  PrimaryButton,
  PurpleButton,
} from "../../Button/Button";
import CustomInputField from "../../CustomHTMLElements/CustomInputField";
import CustomSelect from "../../CustomHTMLElements/CustomSelect";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import Image from "next/image";
import { useRouter } from "next/router";

import UploadIcon from "../../../assets/images/add-photo-icon.svg";
import { toast } from "react-toastify";
import { convertToBase64 } from "../../../helpers/convertToBase64";
import { useAllCountry } from "../../../hooks/useAllCountry";
import model from "../../../helpers/model";
import PageLoaderModal from "../../Loader/PageLoaderModal";
import { uploadPhoto } from "../../../helpers/uploadPhoto";
import { useAllState } from "../../../hooks/useAllStates";
import { useAllGender } from "../../../hooks/useAllGender";
import { useAllMaritalStatus } from "../../../hooks/useAllMaritalStatus";
import CustomPhoneInput from "../../CustomHTMLElements/CustomPhoneInput";

const PersonalInformation = ({
  details,
  setupStep,
  setDetails,
  setSetupStep,
  setIsUploading,
  isEdit,
}: {
  setSetupStep: Dispatch<SetStateAction<number>>;
  setupStep: any;
  details: any;
  setDetails: any;
  setIsUploading: any;
  isEdit: any;
}) => {
  const router = useRouter();
  const { control } = useForm();
  const { t: translate } = useTranslation("");
  const fileInputRef = useRef<any>(null);

  const { data: countryData, isLoading: countryLoading } = useAllCountry();
  const { data: genderData, isLoading: genderLoading } = useAllGender();
  const { data: maritalData, isLoading: maritalLoading } =
    useAllMaritalStatus();
  const { data: stateData, isLoading: stateLoading } = useAllState({
    code: details?.country,
  });
  const [maxDate, setMaxDate] = useState("");

  const handlePhoneChange = (val: string) => {
    console.log("Phone number changed:", val);
    setDetails({ ...details, phoneNumber: val });
  };

  useEffect(() => {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, "0"); // Months are zero-indexed, so +1
    const day = String(today.getDate()).padStart(2, "0"); // Add leading zero if necessary
    setMaxDate(`${year}-${month}-${day}`);
  }, []);

  const handleBrowseClick = () => {
    // Trigger the file input click event
    fileInputRef.current.click();
  };

  const onFileChange = async ({ e }: { e: any }) => {
    setIsUploading(true);
    const { target = {} } = e || {};
    const { name, files } = target;
    const fileName = files[0]?.name;
    const fileSize = files[0]?.size;

    const maxSize = 2 * 1024 * 1024; // 10MB in bytes

    // If picture size is greater than maxSize
    if (fileSize <= maxSize) {
      try {
        const response = await uploadPhoto(files[0]);
        setDetails({ ...details, employeeAvatar: response?.url });
        console.log("Upload successful:", response);
      } catch (error) {
        console.error("Upload failed:", error);
      }
    }
    if (fileSize > maxSize) {
      toast.error("Please select a file that is smaller than 2MB.");
      return (e.target.value = null);
    }

    target.value = "";
    setIsUploading(false);
  };

  const handleFileInputChange = (e: any) => {
    // Handle the selected files when using the file input
    const file = e.target.files[0];

    setDetails({ ...details, employeeImageFile: file });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      setDetails({ ...details, [name]: checked });
    } else {
      setDetails({ ...details, [name]: value });
    }
  };

  const handleChange = (target: any, name: any) => {
    if (name === "gender") {
      setDetails({
        ...details,
        [name]: target?.value,
        genderName: target?.label,
      });
    } else if (name === "country") {
      setDetails({
        ...details,
        [name]: target?.value,
        countryName: target?.label,
      });
    } else if (name === "nationality") {
      setDetails({
        ...details,
        [name]: target?.value,
        nationalityName: target?.label,
      });
    } else if (name === "state") {
      setDetails({
        ...details,
        [name]: target?.value,
        stateName: target?.label,
      });
    } else if (name === "maritalStatus") {
      setDetails({
        ...details,
        [name]: target?.value,
        maritalName: target?.label,
      });
    } else {
      setDetails({ ...details, [name]: target?.value });
    }
  };

  return (
    <>
      <div className="flex items-center justify-center pt-[74px] pb-[100px] lg:py-[144px] flex-col gap-[16px] lg:gap-[50px] ">
        {/* <div className="flex lg:hidden items-center gap-1">
          <div
            className="flex items-center gap-2 px-4 rounded-[12px] py-[10px] "
            onClick={() => setSetupStep(1)}
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
        </div> */}
        <div className="flex gap-12 items-center flex-col lg:flex-row py-6 px-[66px] border border-[#E8E8E8] rounded-[10px]">
          <div
            className="w-[170px] h-[170px] p-[10px] rounded-[50%] border-dashed border-[1px] border-[#F2F2F2] "
            onClick={handleBrowseClick}
          >
            <div className="w-full h-full flex flex-col items-center justify-center bg-[#F2F2F2] rounded-[50%] overflow-hidden ">
              {details?.employeeAvatar ? (
                <img
                  src={details?.employeeAvatar}
                  alt="employee-image"
                  className="h-full w-full object-cover"
                />
              ) : (
                <>
                  <Image src={UploadIcon} alt="upload-icon" />
                  <p className="text-[14px] leading-[24px] font-[400] text-[#515151] ">
                    Upload photo
                  </p>
                </>
              )}
            </div>
            {/* Invisible file input */}
            <input
              name="employeeImage"
              type="file"
              ref={fileInputRef}
              style={{ display: "none" }}
              onChange={(e) => {
                onFileChange({
                  e,
                });
              }}
            />
          </div>
          <div className="flex flex-col items-center gap-6">
            <p className="text-center text-[14px] leading-[24px] font-[400] text-[#777777] ">
              Allowed format <br />
              <span className="text-[#272525]">JPG, JPEG, and PNG</span>
            </p>
            <p className="text-center text-[14px] leading-[24px] font-[400] text-[#777777] ">
              Max file size
              <br />
              <span className="text-[#272525]">2MB</span>
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-4 lg:gap-6 w-full md:max-w-[500px] px-4 lg:px-0 -mt-[24px] ">
          <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
            <CustomInputField
              extraLabel="First Name"
              type="text"
              label=" "
              placeholder="Enter name"
              name="firstName"
              defaultValue={details?.firstName}
              onChange={(e: any) => handleInputChange(e)}
            />
            <CustomInputField
              extraLabel="Last Name"
              type="text"
              label=" "
              placeholder="Enter last name"
              name="lastName"
              defaultValue={details?.lastName}
              onChange={(e: any) => handleInputChange(e)}
            />
          </div>
          <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
            <CustomSelect
              extraLabel="Gender"
              name="gender"
              handleChange={(e, a) => handleChange(e, a)}
              defaultValue={details?.gender}
              options={model(genderData, "name", "id")}
              control={control}
            />
            <CustomSelect
              extraLabel="Nationality"
              name="nationality"
              handleChange={(e, a) => handleChange(e, a)}
              defaultValue={details?.nationality}
              options={model(countryData, "name", "code")}
              control={control}
            />
          </div>
          {!isEdit && (
            <>
              <CustomInputField
                extraLabel="Street"
                type="text"
                label=" "
                placeholder="Enter street"
                name="street"
                defaultValue={details?.street}
                onChange={(e: any) => handleInputChange(e)}
              />
              <CustomSelect
                extraLabel="Country (Optional)"
                name="country"
                handleChange={(e, a) => handleChange(e, a)}
                defaultValue={details?.country}
                options={model(countryData, "name", "code")}
                control={control}
              />
              <CustomSelect
                extraLabel="State (Optional)"
                name="state"
                handleChange={(e, a) => handleChange(e, a)}
                defaultValue={details?.state}
                options={stateData}
                control={control}
              />
            </>
          )}
          <CustomPhoneInput
            extraLabel="Phone Number (Optional)"
            onChange={handlePhoneChange} // Pass the function to handle phone number change
            // onInfoClick={handleInfoClick} // Pass the function for the info button click
            defaultValue={details?.phoneNumber} // Provide a default value if needed
            // required={true} // Make the field required
          />
          {/* <CustomInputField
            extraLabel="Phone Number (Optional)"
            type="text"
            label=" "
            placeholder="Enter number"
            name="phoneNumber"
            defaultValue={details?.phoneNumber}
            onChange={(e: any) => handleInputChange(e)}
          /> */}
          <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
            <CustomInputField
              extraLabel="Date Of Birth (Optional)"
              type="date"
              label=" "
              placeholder="Select"
              name="dateOfBirth"
              defaultValue={details?.dateOfBirth}
              onChange={(e: any) => handleInputChange(e)}
              max={maxDate}
            />
            <CustomSelect
              extraLabel="Marital Status (Optional)"
              name="maritalStatus"
              handleChange={(e, a) => handleChange(e, a)}
              defaultValue={details?.maritalStatus}
              options={model(maritalData, "name", "id")}
              control={control}
            />
          </div>
        </div>
        {!isEdit && (
          <>
            <div className="border-[0.5px] w-full md:max-w-[500px] border-[#EAECF0] lg:-mt-[26px] "></div>
            <div className="flex flex-col gap-6 px-8 py-[14px] rounded-[10px] bg-[#F9FAFB] border-[0.5px] border-[#E8E8E8] w-full md:max-w-[500px] lg:-mt-[26px] ">
              <p className="text-[16px] leading-[28px] font-[700] text-[#0A0A0B] ">
                Emergency Contact
              </p>
              <CustomInputField
                extraLabel="Contact’s Full Name"
                type="text"
                label=" "
                placeholder="Enter name"
                name="emergencyContactName"
                defaultValue={details?.emergencyContactName}
                onChange={(e: any) => handleInputChange(e)}
              />
              <CustomInputField
                extraLabel="Relationship"
                type="text"
                label=" "
                placeholder="Input text"
                name="emergencyRelationship"
                defaultValue={details?.emergencyRelationship}
                onChange={(e: any) => handleInputChange(e)}
              />
              <CustomInputField
                extraLabel="Pnone Number"
                type="text"
                label=" "
                placeholder="+234 8020321105"
                name="emergencyPhoneNumber"
                defaultValue={details?.emergencyPhoneNumber}
                onChange={(e: any) => handleInputChange(e)}
              />
              <CustomInputField
                extraLabel="Email Address"
                type="text"
                label=" "
                placeholder="Enter email"
                name="emergencyEmail"
                defaultValue={details?.emergencyEmail}
                onChange={(e: any) => handleInputChange(e)}
              />
              <CustomInputField
                extraLabel="Home Address (optional)"
                type="text"
                label=" "
                placeholder="Enter address"
                name="emergencyAddress"
                defaultValue={details?.emergencyAddress}
                onChange={(e: any) => handleInputChange(e)}
              />
            </div>
          </>
        )}
      </div>
      <div className="lg:hidden w-full flex gap-3 justify-center items-center p-4 fixed bottom-0 shadow-premium bg-[#ffffff] border-[1px] border-t-[#EAECF0]   ">
        <OutlineButton
          title={translate("entityAddressAnotherEntity")}
          className="w-full py-[9px] px-6 rounded-[12px] "
          //   onClick={() => handlePageQuery("legal-details")}
        />
        <PrimaryButton
          title={translate("entityAddressButtonText")}
          className="w-full py-2.5 px-6 rounded-[12px] "
          onClick={() => setSetupStep(setupStep + 1)}
          //   disabled={
          //     !details?.entityEmail ||
          //     !details?.entityRegisteredAddress ||
          //     !details?.entityCountry ||
          //     !details?.entityState ||
          //     !details?.companyLinkedInUrl ||
          //     !details?.websiteUrl ||
          //     !details?.zipCode
          //   }
        />
      </div>
      {(countryLoading || stateLoading || genderLoading || maritalLoading) && (
        <PageLoaderModal />
      )}
    </>
  );
};

export default PersonalInformation;
