import React, { Dispatch, SetStateAction, useRef, useState } from "react";
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
import EditIcon from "../../../assets/images/file-edit-icon.svg";
import CheckGreen from "../../../assets/images/green-check-circle.svg";
import ChevronLeft from "../../../assets/images/chevron-left.svg";
import UploadIcon from "../../../assets/images/calendar-icon.svg";
import { toast } from "react-toastify";
import { convertToBase64 } from "../../../helpers/convertToBase64";
import FileUploaded from "../../../assets/images/successful-file-upload.svg";
import DeleteIcon from "../../../assets/images/file-delete-icon.svg";
import DownloadIcon from "../../../assets/images/file-download-icon.svg";
import { formatBytes } from "../../../helpers/converter";
import { postData } from "../../../apis/apiMethods";
import CONFIG from "../../../helpers/config";
import { apiEndpoints } from "../../../apis/apiEndpoints";
import { errorHandler } from "../../../helpers/errorHander";

const Preview = ({
  details,
  setupStep,
  setDetails,
  setSetupStep,
}: {
  setSetupStep: Dispatch<SetStateAction<number>>;
  setupStep: any;
  details: any;
  setDetails: any;
}) => {
  const router = useRouter();
  const { control } = useForm();
  const { t: translate } = useTranslation("");
  const [loading, setLoading] = useState(false);

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

  const formatDate = (isoDateString: any) => {
    const dateObject = new Date(isoDateString);

    // Extract the day, month, and year
    const day = String(dateObject.getDate()).padStart(2, "0");
    const year = dateObject.getFullYear();

    // Get the month name abbreviation
    const monthNames = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    const month = monthNames[dateObject.getMonth()];

    // Format the date in the desired format
    const formattedDate = `${day} ${month}, ${year}`;

    return formattedDate;
  };

  const formatTime = (isoDateString: any) => {
    const dateObject = new Date(isoDateString);

    const formattedTime = dateObject.toLocaleTimeString("en-CA", {
      hour12: true,
    }); // Output: "16:34:29"

    return formattedTime;
  };

  return (
    <>
      <div className="flex items-center justify-center pt-[74px] pb-[100px] lg:py-[144px] flex-col gap-[16px] lg:gap-[50px] ">
        <div className="flex flex-col gap-4 lg:gap-6 w-full md:max-w-[480px] px-4 lg:px-0 ">
          <div className="flex flex-col gap-1">
            <p className="text-[18px] font-[700] leading-[28px] text-[#0A0A0B]">
              Review Employee Information
            </p>
            <p className="text-[14px] font-[500] leading-[20px] text-[#678196]">
              Review all the information you provided to ensure they are
              correct.
            </p>
          </div>

          {/* PERSONAL INFORMATION BEGIN */}

          <div className="flex flex-col gap-6">
            <div className="flex justify-between">
              <p className="text-[16px] font-[700] leading-[24px] text-[#0A0A0B]">
                Personal Information
              </p>
              <Image
                src={EditIcon}
                alt="edit-icon"
                className="cursor-pointer"
                onClick={() => setSetupStep(1)}
              />
            </div>
            <div className="flex flex-col gap-4">
              <div className="flex gap-6 items-center ">
                <div className="flex flex-col gap-[6px] w-[155px]">
                  <p className="text-[12px] font-[400] leading-[12px] text-[#394753]">
                    First Name
                  </p>
                  <p className="text-[14px] font-[500] leading-[14px] text-[#0A0A0B]">
                    {details?.firstName || "N/A"}
                  </p>
                </div>
                <div className="flex flex-col gap-[6px] w-[155px]">
                  <p className="text-[12px] font-[400] leading-[12px] text-[#394753]">
                    Last Name
                  </p>
                  <p className="text-[14px] font-[500] leading-[14px] text-[#0A0A0B]">
                    {details?.lastName || "N/A"}
                  </p>
                </div>
              </div>
              <div className="flex gap-6 items-center ">
                <div className="flex flex-col gap-[6px] w-[155px]">
                  <p className="text-[12px] font-[400] leading-[12px] text-[#394753]">
                    Gender
                  </p>
                  <p className="text-[14px] font-[500] leading-[14px] text-[#0A0A0B]">
                    {details?.genderName || "N/A"}
                  </p>
                </div>
                <div className="flex flex-col gap-[6px] w-[155px]">
                  <p className="text-[12px] font-[400] leading-[12px] text-[#394753]">
                    Nationality
                  </p>
                  <p className="text-[14px] font-[500] leading-[14px] text-[#0A0A0B]">
                    {details?.nationalityName || "N/A"}
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-[6px] w-full">
                <p className="text-[12px] font-[400] leading-[12px] text-[#394753]">
                  Street
                </p>
                <p className="text-[14px] font-[500] leading-[14px] text-[#0A0A0B]">
                  {details?.street || "N/A"}
                </p>
              </div>
              <div className="flex gap-6 items-center ">
                <div className="flex flex-col gap-[6px] w-[155px]">
                  <p className="text-[12px] font-[400] leading-[12px] text-[#394753]">
                    State
                  </p>
                  <p className="text-[14px] font-[500] leading-[14px] text-[#0A0A0B]">
                    {details?.stateName || "N/A"}
                  </p>
                </div>
                <div className="flex flex-col gap-[6px] w-[155px]">
                  <p className="text-[12px] font-[400] leading-[12px] text-[#394753]">
                    Country
                  </p>
                  <p className="text-[14px] font-[500] leading-[14px] text-[#0A0A0B]">
                    {details?.countryName || "N/A"}
                  </p>
                </div>
              </div>
              <div className="flex gap-6 items-center ">
                <div className="flex flex-col gap-[6px] w-[155px]">
                  <p className="text-[12px] font-[400] leading-[12px] text-[#394753]">
                    Phone Number
                  </p>
                  <p className="text-[14px] font-[500] leading-[14px] text-[#0A0A0B]">
                    {details?.phoneNumber || "N/A"}
                  </p>
                </div>
                <div className="flex flex-col gap-[6px] w-[155px]">
                  <p className="text-[12px] font-[400] leading-[12px] text-[#394753]">
                    Date of Birth
                  </p>
                  <p className="text-[14px] font-[500] leading-[14px] text-[#0A0A0B]">
                    {details?.dateOfBirth || "N/A"}
                  </p>
                </div>
              </div>
              <div className="flex gap-6 items-center ">
                <div className="flex flex-col gap-[6px] w-[155px]">
                  <p className="text-[12px] font-[400] leading-[12px] text-[#394753]">
                    Marital Status
                  </p>
                  <p className="text-[14px] font-[500] leading-[14px] text-[#0A0A0B]">
                    {details?.maritalName || "N/A"}
                  </p>
                </div>
                <div className="flex flex-col gap-[6px] w-[155px]">
                  {/* <p className="text-[12px] font-[400] leading-[12px] text-[#394753]">
                    Country
                  </p>
                  <p className="text-[14px] font-[500] leading-[14px] text-[#0A0A0B]">
                    {details?.countryName || "N/A"}
                  </p> */}
                </div>
              </div>
            </div>
          </div>

          <div className="h-[1px] bg-[#EAECF0] w-full"></div>

          {/* PROFESSIONAL INFORMATION BEGIN */}

          <div className="flex flex-col gap-6">
            <div className="flex justify-between">
              <p className="text-[16px] font-[700] leading-[24px] text-[#0A0A0B]">
                Professional Information
              </p>
              <Image
                src={EditIcon}
                alt="edit-icon"
                className="cursor-pointer"
                onClick={() => setSetupStep(2)}
              />
            </div>
            <div className="flex flex-col gap-4">
              <div className="flex gap-6 items-center ">
                <div className="flex flex-col gap-[6px] w-[155px]">
                  <p className="text-[12px] font-[400] leading-[12px] text-[#394753]">
                    Employee ID
                  </p>
                  <p className="text-[14px] font-[500] leading-[14px] text-[#0A0A0B]">
                    {details?.employeeId || "N/A"}
                  </p>
                </div>
                <div className="flex flex-col gap-[6px] w-[155px]">
                  <p className="text-[12px] font-[400] leading-[12px] text-[#394753]">
                    Work Type
                  </p>
                  <p className="text-[14px] font-[500] leading-[14px] text-[#0A0A0B]">
                    {details?.workTypeName || "N/A"}
                  </p>
                </div>
              </div>
              <div className="flex gap-6 items-center ">
                <div className="flex flex-col gap-[6px] w-[155px]">
                  <p className="text-[12px] font-[400] leading-[12px] text-[#394753]">
                    Date of Resumption
                  </p>
                  <p className="text-[14px] font-[500] leading-[14px] text-[#0A0A0B]">
                    {details?.dateOfResumption || "N/A"}
                  </p>
                </div>
                <div className="flex flex-col gap-[6px] w-[155px]">
                  <p className="text-[12px] font-[400] leading-[12px] text-[#394753]">
                    Office Location
                  </p>
                  <p className="text-[14px] font-[500] leading-[14px] text-[#0A0A0B]">
                    {details?.officeLocation || "N/A"}
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-[6px] w-full">
                <p className="text-[12px] font-[400] leading-[12px] text-[#394753]">
                  Work Email Address
                </p>
                <p className="text-[14px] font-[500] leading-[14px] text-[#0A0A0B]">
                  {details?.workEmailAddress || "N/A"}
                </p>
              </div>
              <div className="flex flex-col gap-[6px] w-full">
                <p className="text-[12px] font-[400] leading-[12px] text-[#394753]">
                  Department
                </p>
                <div className="flex gap-1 items-center">
                  {details?.department?.map((dept: any) => (
                    <p className="text-[14px] font-[500] leading-[14px] text-[#0A0A0B]">
                      {dept?.label + "," || "N/A"}
                    </p>
                  ))}
                </div>
              </div>
              <div className="flex flex-col gap-[6px] w-full">
                <p className="text-[12px] font-[400] leading-[12px] text-[#394753]">
                  Job Roles
                </p>
                <div className="flex gap-1 items-center">
                  {details?.jobRoles?.map((role: any) => (
                    <p className="text-[14px] font-[500] leading-[14px] text-[#0A0A0B]">
                      {role?.label + "," || "N/A"}
                    </p>
                  ))}
                </div>
              </div>
              <div className="flex flex-col gap-[6px] w-full">
                <p className="text-[12px] font-[400] leading-[12px] text-[#394753]">
                  Working Days
                </p>
                <div className="flex gap-1 items-center">
                  {details?.workingDays?.map((day: any) => (
                    <p className="text-[14px] font-[500] leading-[14px] text-[#0A0A0B]">
                      {day?.label.slice(0, 2) + "," || "N/A"}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="h-[1px] bg-[#EAECF0] w-full"></div>

          <div className="flex flex-col gap-6">
            <div className="flex justify-between">
              <p className="text-[16px] font-[700] leading-[24px] text-[#0A0A0B]">
                Documents
              </p>
              <Image
                src={EditIcon}
                alt="edit-icon"
                className="cursor-pointer"
                onClick={() => setSetupStep(3)}
              />
            </div>
            {details?.offerLetter && (
              <div className="flex flex-col gap-2">
                <p className="text-[14px] font-[400] leading-[20px] text-[#394753]">
                  Offer Letter
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <Image src={FileUploaded} alt="file-success" />
                    <div className="flex flex-col gap-1">
                      <p className="text-[16px] font-[500] leading-[24px] text-[#000000]">
                        {details?.offerLetterName}
                      </p>
                      <div className="flex items-center gap-2">
                        <p className="text-[14px] font-[400] leading-[20px] text-[#98A2B3]">
                          {formatDate(details?.offerLetterCreatedAt)} |{" "}
                          {formatTime(details?.offerLetterCreatedAt)}{" "}
                        </p>
                        <div className="w-1 h-1 rounded-[50%] bg-[#98A2B3] " />
                        <p className="text-[14px] font-[400] leading-[20px] text-[#98A2B3]">
                          {formatBytes(details?.offerLetterSize)}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <Image
                      src={DeleteIcon}
                      alt="file-delete"
                      className="cursor-pointer"
                      onClick={() =>
                        setDetails({ ...details, offerLetter: "" })
                      }
                    />
                    <Image
                      src={DownloadIcon}
                      alt="file-delete"
                      className="cursor-pointer"
                    />
                  </div>
                </div>
              </div>
            )}
            {details?.resume && (
              <div className="flex flex-col gap-2">
                <p className="text-[14px] font-[400] leading-[20px] text-[#394753]">
                  Resume
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <Image src={FileUploaded} alt="file-success" />
                    <div className="flex flex-col gap-1">
                      <p className="text-[16px] font-[500] leading-[24px] text-[#000000]">
                        {details?.resumeName}
                      </p>
                      <div className="flex items-center gap-2">
                        <p className="text-[14px] font-[400] leading-[20px] text-[#98A2B3]">
                          {formatDate(details?.resumeCreatedAt)} |{" "}
                          {formatTime(details?.resumeCreatedAt)}{" "}
                        </p>
                        <div className="w-1 h-1 rounded-[50%] bg-[#98A2B3] " />
                        <p className="text-[14px] font-[400] leading-[20px] text-[#98A2B3]">
                          {formatBytes(details?.resumeSize)}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <Image
                      src={DeleteIcon}
                      alt="file-delete"
                      className="cursor-pointer"
                      onClick={() => setDetails({ ...details, resume: "" })}
                    />
                    <Image
                      src={DownloadIcon}
                      alt="file-delete"
                      className="cursor-pointer"
                    />
                  </div>
                </div>
              </div>
            )}
            {details?.otherDocument && (
              <div className="flex flex-col gap-2">
                <p className="text-[14px] font-[400] leading-[20px] text-[#394753]">
                  Other Document
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <Image src={FileUploaded} alt="file-success" />
                    <div className="flex flex-col gap-1">
                      <p className="text-[16px] font-[500] leading-[24px] text-[#000000]">
                        {details?.otherDocumentName}
                      </p>
                      <div className="flex items-center gap-2">
                        <p className="text-[14px] font-[400] leading-[20px] text-[#98A2B3]">
                          {formatDate(details?.otherDocumentCreatedAt)} |{" "}
                          {formatTime(details?.otherDocumentCreatedAt)}{" "}
                        </p>
                        <div className="w-1 h-1 rounded-[50%] bg-[#98A2B3] " />
                        <p className="text-[14px] font-[400] leading-[20px] text-[#98A2B3]">
                          {formatBytes(details?.otherDocumentSize)}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <Image
                      src={DeleteIcon}
                      alt="file-delete"
                      className="cursor-pointer"
                      onClick={() =>
                        setDetails({ ...details, otherDocument: "" })
                      }
                    />
                    <Image
                      src={DownloadIcon}
                      alt="file-delete"
                      className="cursor-pointer"
                    />
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="lg:hidden w-full flex gap-3 justify-center items-center p-4 fixed bottom-0 shadow-premium bg-[#ffffff] border-[1px] border-t-[#EAECF0]  ">
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
    </>
  );
};

export default Preview;
