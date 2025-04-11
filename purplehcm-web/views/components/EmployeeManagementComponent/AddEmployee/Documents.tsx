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
import ModalClose from "../../../assets/images/modal-close-icon.svg";
import GrayDelete from "../../../assets/images/gray-delete-icon.svg";
import FileUploaded from "../../../assets/images/successful-file-upload.svg";
import GrayUploadIcon from "../../../assets/images/gray-file-upload.svg";
import { toast } from "react-toastify";
import { convertToBase64 } from "../../../helpers/convertToBase64";
import { uploadPhoto } from "../../../helpers/uploadPhoto";

const Documents = ({
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
  const fileInputRef = useRef<any>(null);
  const fileInputRef2 = useRef<any>(null);
  const fileInputRef3 = useRef<any>(null);
  const [isDragOver, setIsDragOver] = useState(false);
  const [fileAvailable, setFileAvailable] = useState(false);
  const [isUploading, setIsUploading] = useState(false);

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

  const handleDragEnter = (e: any) => {
    e.preventDefault();
    setIsDragOver(true);
  };

  const handleDragLeave = (e: any) => {
    e.preventDefault();
    setIsDragOver(false);
  };

  const handleDragOver = (e: any) => {
    e.preventDefault();
    setIsDragOver(true);
  };

  const handleDrop = (e: any) => {
    e.preventDefault();
    setIsDragOver(false);

    const file = e.dataTransfer.files[0];

    setDetails({ ...details, [e.target.name]: file });

    // Handle the dropped files (e.g., upload or process them)
    handleDroppedFiles(e?.target?.name, file);
  };

  const handleBrowseClick = (ref: string) => {
    // Trigger the file input click event
    if (ref === "1" && !details?.offerLetter) {
      fileInputRef.current.click();
    }
    if (ref === "2" && !details?.resume) {
      fileInputRef2.current.click();
    }
    if (ref === "3" && !details?.otherDocument) {
      fileInputRef3.current.click();
    }
  };

  const onFileChange = async ({
    e,
    field,
    fileName,
    fileDate,
    fileByte,
  }: {
    e: any;
    field?: any;
    fileName?: any;
    fileDate?: any;
    fileByte?: any;
  }) => {
    setIsUploading(true);
    const { target = {} } = e || {};
    const { name, files } = target;
    const fileSize = files[0]?.size;

    const maxSize = 2 * 1024 * 1024; // 10MB in bytes

    // If picture size is greater than maxSize
    if (fileSize <= maxSize) {
      try {
        const response = await uploadPhoto(files[0]);
        setDetails({
          ...details,
          [field]: response?.url,
          [fileName]: response?.originalFilename,
          [fileDate]: response?.createdAt,
          [fileByte]: response?.bytes,
        });
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

    handleDroppedFiles(e.target.name, file);
  };

  const handleDroppedFiles = (name: string, file: any) => {
    let fileTypes = [
      // PDF files
      "application/pdf",

      // Word documents
      "application/msword", // for older .doc files
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document", // for .docx files
    ];

    let selectedFile = file;

    if (selectedFile && fileTypes.includes(selectedFile.type)) {
      //function to upload document goes here
      setDetails({ ...details, [name]: file });
    } else {
      toast.error("File format not supported");
      if (name === "offerLetter") {
        fileInputRef.current.click();
      }
      if (name === "resume") {
        fileInputRef2.current.click();
      }
      if (name === "otherDocument") {
        fileInputRef3.current.click();
      }
    }
  };

  const handleClearFile = (name: string) => {
    setDetails({
      ...details,
      [name]: "",
    });

    // Reset the file input value to allow the same file to be re-uploaded
    if (name === "offerLetter" && fileInputRef.current) {
      fileInputRef.current.value = null;
    }
    if (name === "resume" && fileInputRef2.current) {
      fileInputRef2.current.value = null;
    }
    if (name === "otherDocument" && fileInputRef3.current) {
      fileInputRef.current.value = null;
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6 w-full md:max-w-[984px] px-4 lg:px-0 ">
          <div className="flex flex-col gap-[6px]">
            <p className="text-[14px] font-[500] text-[#394753] leading-5 ">
              Upload Offer Letter
            </p>
            <div
              className={`flex flex-col gap-4 px-6 py-8 items-center border-dashed h-full justify-center cursor-pointer ${
                details?.offerLetter
                  ? "border-[#5FC381] border-[1.5px]"
                  : "border-[#D0D5DD]"
              } ${
                isDragOver ? "border-[2px]" : "border-[1px]"
              } w-full bg-[#FFFFFF] rounded-[16px]`}
              onDragEnter={handleDragEnter}
              onDragLeave={handleDragLeave}
              onDragOver={handleDragOver}
              onDrop={handleDrop}
              onClick={() => handleBrowseClick("1")}
            >
              {/* <div className="flex gap-4 items-center"> */}
              <Image
                src={details?.offerLetter ? FileUploaded : GrayUploadIcon}
                alt="gray-doc"
                className="w-[56px]"
              />
              {details?.offerLetter ? (
                <p className="font-[400] text-[14px] leading-[20px] text-[#475367] text-center ">
                  <span className="text-[#1D2739] font-[600]">
                    Document Uploaded
                  </span>
                  <br />{" "}
                  <span className="text-[12px] text-[#98A2B3] font-[400]">
                    {details?.offerLetterName}
                  </span>
                </p>
              ) : (
                <p className="font-[400] text-[14px] leading-[20px] text-[#475367] text-center ">
                  <span className="text-primaryColor font-[600]">
                    Click to upload{" "}
                  </span>
                  or drag and drop <br />{" "}
                  <span className="text-[12px] text-[#98A2B3] font-[400]">
                    Doc Or PDF
                  </span>
                </p>
              )}
              {details?.offerLetter && (
                <div
                  className="flex gap-2 items-center"
                  onClick={() => handleClearFile("offerLetter")}
                >
                  <Image src={GrayDelete} alt="delete-icon" />
                  <p className="font-[400] text-[14px] leading-[20px] text-[#98A2B3] text-center ">
                    Clear Upload
                  </p>
                </div>
              )}
              {!details?.offerLetter && (
                <>
                  <div className="hidden lg:flex gap-[16px] items-center w-full">
                    <div className="h-[2px] w-full bg-[#F0F2F5]"></div>
                    <p className="text-[12px] leading-[17px] font-[600] text-[#98A2B3] whitespace-nowrap ">
                      OR
                    </p>
                    <div className="h-[2px] w-full bg-[#F0F2F5]"></div>
                  </div>
                  <PurpleButton title={"Browse Files"} />

                  {/* Invisible file input */}
                  <input
                    type="file"
                    name="offerLetter"
                    ref={fileInputRef}
                    style={{ display: "none" }}
                    onChange={(e) => {
                      onFileChange({
                        e,
                        field: "offerLetter",
                        fileName: "offerLetterName",
                        fileDate: "offerLetterCreatedAt",
                        fileByte: "offerLetterSize",
                      });
                    }}
                  />
                </>
              )}
              {/* </div> */}
            </div>
          </div>
          <div className="flex flex-col gap-[6px]">
            <p className="text-[14px] font-[500] text-[#394753] leading-5 ">
              Upload CV/Resume
            </p>
            <div
              className={`flex flex-col gap-4 px-6 py-8 items-center border-dashed h-full justify-center cursor-pointer ${
                details?.resume
                  ? "border-[#5FC381] border-[1.5px]"
                  : "border-[#D0D5DD]"
              } ${
                isDragOver ? "border-[2px]" : "border-[1px]"
              } w-full bg-[#FFFFFF] rounded-[16px]`}
              onDragEnter={handleDragEnter}
              onDragLeave={handleDragLeave}
              onDragOver={handleDragOver}
              onDrop={handleDrop}
              onClick={() => handleBrowseClick("2")}
            >
              {/* <div className="flex gap-4 items-center"> */}
              <Image
                src={details?.resume ? FileUploaded : GrayUploadIcon}
                alt="gray-doc"
                className="w-[56px]"
              />
              {details?.resume ? (
                <p className="font-[400] text-[14px] leading-[20px] text-[#475367] text-center ">
                  <span className="text-[#1D2739] font-[600]">
                    Document Uploaded
                  </span>
                  <br />{" "}
                  <span className="text-[12px] text-[#98A2B3] font-[400]">
                    {details?.resumeName}
                  </span>
                </p>
              ) : (
                <p className="font-[400] text-[14px] leading-[20px] text-[#475367] text-center ">
                  <span className="text-primaryColor font-[600]">
                    Click to upload{" "}
                  </span>
                  or drag and drop <br />{" "}
                  <span className="text-[12px] text-[#98A2B3] font-[400]">
                    Doc Or PDF
                  </span>
                </p>
              )}
              {details?.resume && (
                <div
                  className="flex gap-2 items-center"
                  onClick={() => handleClearFile("resume")}
                >
                  <Image src={GrayDelete} alt="delete-icon" />
                  <p className="font-[400] text-[14px] leading-[20px] text-[#98A2B3] text-center ">
                    Clear Upload
                  </p>
                </div>
              )}
              {!details?.resume && (
                <>
                  <div className="hidden lg:flex gap-[16px] items-center w-full">
                    <div className="h-[2px] w-full bg-[#F0F2F5]"></div>
                    <p className="text-[12px] leading-[17px] font-[600] text-[#98A2B3] whitespace-nowrap ">
                      OR
                    </p>
                    <div className="h-[2px] w-full bg-[#F0F2F5]"></div>
                  </div>
                  <PurpleButton title={"Browse Files"} />

                  {/* Invisible file input */}
                  <input
                    type="file"
                    name="resume"
                    ref={fileInputRef2}
                    style={{ display: "none" }}
                    onChange={(e) => {
                      onFileChange({
                        e,
                        field: "resume",
                        fileName: "resumeName",
                        fileDate: "resumeCreatedAt",
                        fileByte: "resumeSize",
                      });
                    }}
                  />
                </>
              )}
              {/* </div> */}
            </div>
          </div>
          <div className="flex flex-col gap-[6px]">
            <p className="text-[14px] font-[500] text-[#394753] leading-5 ">
              Upload Other Document
            </p>
            <div
              className={`flex flex-col gap-4 px-6 py-8 items-center border-dashed h-full justify-center cursor-pointer ${
                details?.otherDocument
                  ? "border-[#5FC381] border-[1.5px]"
                  : "border-[#D0D5DD]"
              } ${
                isDragOver ? "border-[2px]" : "border-[1px]"
              } w-full bg-[#FFFFFF] rounded-[16px]`}
              onDragEnter={handleDragEnter}
              onDragLeave={handleDragLeave}
              onDragOver={handleDragOver}
              onDrop={handleDrop}
              onClick={() => handleBrowseClick("3")}
            >
              {/* <div className="flex gap-4 items-center"> */}
              <Image
                src={details?.otherDocument ? FileUploaded : GrayUploadIcon}
                alt="gray-doc"
                className="w-[56px]"
              />
              {details?.otherDocument ? (
                <p className="font-[400] text-[14px] leading-[20px] text-[#475367] text-center ">
                  <span className="text-[#1D2739] font-[600]">
                    Document Uploaded
                  </span>
                  <br />{" "}
                  <span className="text-[12px] text-[#98A2B3] font-[400]">
                    {details?.otherDocumentName}
                  </span>
                </p>
              ) : (
                <p className="font-[400] text-[14px] leading-[20px] text-[#475367] text-center ">
                  <span className="text-primaryColor font-[600]">
                    Click to upload{" "}
                  </span>
                  or drag and drop <br />{" "}
                  <span className="text-[12px] text-[#98A2B3] font-[400]">
                    Doc Or PDF
                  </span>
                </p>
              )}
              {details?.otherDocument && (
                <div
                  className="flex gap-2 items-center"
                  onClick={() => handleClearFile("otherDocument")}
                >
                  <Image src={GrayDelete} alt="delete-icon" />
                  <p className="font-[400] text-[14px] leading-[20px] text-[#98A2B3] text-center ">
                    Clear Upload
                  </p>
                </div>
              )}
              {!details?.otherDocument && (
                <>
                  <div className="hidden lg:flex gap-[16px] items-center w-full">
                    <div className="h-[2px] w-full bg-[#F0F2F5]"></div>
                    <p className="text-[12px] leading-[17px] font-[600] text-[#98A2B3] whitespace-nowrap ">
                      OR
                    </p>
                    <div className="h-[2px] w-full bg-[#F0F2F5]"></div>
                  </div>
                  <PurpleButton title={"Browse Files"} />

                  {/* Invisible file input */}
                  <input
                    type="file"
                    name="otherDocument"
                    ref={fileInputRef3}
                    style={{ display: "none" }}
                    onChange={(e) => {
                      onFileChange({
                        e,
                        field: "otherDocument",
                        fileName: "otherDocumentName",
                        fileDate: "otherDocumentCreatedAt",
                        fileByte: "otherDocumentSize",
                      });
                    }}
                  />
                </>
              )}
              {/* </div> */}
            </div>
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

export default Documents;
