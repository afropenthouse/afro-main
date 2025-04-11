import React, { useEffect, useRef, useState } from "react";
import { PrimaryButton, PurpleButton } from "../../Button/Button";
import Image from "next/image";
import ModalClose from "../../../assets/images/modal-close-icon.svg";
import FileUploadIcon from "../../../assets/images/document-upload-icon.svg";
import SuccessfulIcon from "../../../assets/images/successful-icon.svg";
import GrayFile from "../../../assets/images/document-gray-icon.svg";
import CloseRedBg from "../../../assets/images/red-bg-close.svg";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import Papa from "papaparse";
import * as XLSX from "xlsx";
import { formatBytes } from "../../../helpers/converter";
import PageLoaderModal from "../../Loader/PageLoaderModal";
import { ROUTES } from "../../../helpers/routes";
import ErrorModal from "./ErrorModal";
import DuplicateModal from "./DuplicateModal";
import CONFIG from "../../../helpers/config";
import { postData } from "../../../apis/apiMethods";
import { apiEndpoints } from "../../../apis/apiEndpoints";
import { LOCAL_STORAGE_KEYS } from "../../../helpers/localStorageKeys";
import SuccessfulModal from "./SuccessfulModal";

const UploadBulkEmployee = () => {
  const router = useRouter();
  const [data, setData] = useState<any>();
  const [fileDetails, setFileDetails] = useState<any>();
  const [errorDetails, setErrorDetails] = useState<any>();
  const [duplicateDetails, setDuplicateDetails] = useState<any>();
  const [isDragOver, setIsDragOver] = useState(false);
  const [fileAvailable, setFileAvailable] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadingSuccessful, setUploadingSuccessful] = useState(false);
  const [uploadingError, setUploadingError] = useState(false);
  const [uploadingDuplicate, setUploadingDuplicate] = useState(false);
  const [uploadingResponse, setUploadingResponse] = useState("");
  const [isSuccessful, setIsSuccessful] = useState(false);
  const fileInputRef = useRef<any>(null);

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

    setFileDetails(file);

    // Handle the dropped files (e.g., upload or process them)
    handleDroppedFiles(file);
  };

  console.log(fileDetails, "fileDetails");

  const handleBrowseClick = () => {
    // Trigger the file input click event
    fileInputRef.current.click();
  };

  const handleFileInputChange = (e: any) => {
    // Handle the selected files when using the file input
    const file = e.target.files[0];

    setFileDetails(file);
    handleDroppedFiles(file);
  };

  console.log(data, "data");

  const handleDroppedFiles = (file: any) => {
    let fileTypes = [
      "application/vnd.ms-excel",
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      "text/csv",
    ];

    let selectedFile = file;

    if (selectedFile) {
      if (selectedFile && fileTypes.includes(selectedFile.type)) {
        setData(selectedFile);
      } else {
        toast.error("File format not supported");
        setData(null);
      }
    }
  };

  console.log(fileAvailable, "fileAva");

  useEffect(() => {
    if (data !== undefined && data !== null) {
      setFileAvailable(true);
    } else {
      setFileAvailable(false);
    }
  }, [data]);

  const handleClearFile = () => {
    setData(undefined);
    setFileDetails({});
    setFileAvailable(false); // Clear the flag that indicates a file is available

    // Reset the file input value to allow the same file to be re-uploaded
    if (fileInputRef.current) {
      fileInputRef.current.value = null;
    }
  };

  const user =
    typeof window !== "undefined"
      ? localStorage?.getItem(LOCAL_STORAGE_KEYS.USER)
      : null;

  const users = user ? JSON.parse(user) : null;

  // Function to upload a photo
  async function uploadFile() {
    setIsUploading(true);
    const formData = new FormData();
    formData.append("File", data);
    formData.append("CompanyId", users?.companies[0]?.id);
    // formData.append("UserId", users?.id);

    try {
      const response = await postData(
        `${CONFIG.BASE_URL}${apiEndpoints.UPLOAD_BULK_EMPLOYEE}`,
        formData
      );

      console.log(response, "uploading response");

      if (response?.isSuccessful) {
        setIsUploading(false);
        setIsSuccessful(true);
        setUploadingResponse(response?.message);
      }
      if (!response?.isSuccessful) {
        setIsUploading(false);
      }
    } catch (error) {
      toast.error("Upload failed. Please try again.");
      setIsUploading(false);
      throw error; // rethrow the error for further handling if needed
    }
    setIsUploading(false);
  }

  console.log(isSuccessful, 'success')
  console.log(uploadingResponse, 'resp da')

  return (
    <>
      <div>
        <div className="w-full flex justify-between items-center px-[16px] py-[18px] lg:pt-6 lg:pb-7 lg:px-10 fixed top-0 bg-[#ffffff] border-[1px] border-b-[#EAECF0] ">
          <div className="flex gap-4 items-center">
            <Image
              src={ModalClose}
              alt="modal-close"
              className="cursor-pointer"
              onClick={() => router.back()}
            />
            <div className="w-[1.5px] h-6 bg-[#EAECF0]"></div>
            <p className="text-[18px] font-[700] leading-7 text-[#0A0A0B] ">
              Bulk Upload
            </p>
          </div>
          {!uploadingSuccessful && (
            <PurpleButton
              title={"Upload Items"}
              disabled={!fileAvailable}
              onClick={uploadFile}
            />
          )}
        </div>
        {uploadingSuccessful ? (
          <div className="flex flex-col items-center gap-10 mt-[148px] ">
            <Image src={SuccessfulIcon} alt="successful-icon" />
            <div className="flex flex-col items-center gap-2">
              <p className="text-[20px] font-[700] leading-[30px] text-[#0A0A0B] ">
                {data?.length} Items uploaded successfully.
              </p>
              <p className="text-[14px] font-[500] leading-[20px] text-[#394753] ">
                You can edit each item with the{" "}
                <span className="font-[700]">Edit</span> option on the item
                menu.
              </p>
            </div>
            <div className="flex items-center gap-6">
              <div
                className="flex cursor-pointer px-[46.25px] py-[10px] border border-[#D0D5DD] rounded-[12px] hover:shadow-sm "
                onClick={() => router.push(ROUTES?.EMPLOYEES)}
              >
                <p className="text-[14px] font-[700] leading-5 text-[#344054] text-center ">
                  Back to All List
                </p>
              </div>
              <PurpleButton
                title={"New Upload"}
                className="lg:px-[53px]"
                onClick={() => {
                  handleClearFile;
                  setUploadingSuccessful(false);
                }}
              />
            </div>
          </div>
        ) : (
          <div>
            <div className="flex items-center flex-col gap-[74px] mt-[148px]">
              <div className="flex items-center flex-col gap-[32px]">
                <Image src={FileUploadIcon} alt="purple-logo" className="" />
                <p className="text-[16px] font-[500] leading-6 text-[#678196] max-w-[480px] text-center ">
                  We have created a template for you to easily upload the items.
                  You can use this template anytime.
                </p>
                <div className="flex cursor-pointer px-[14px] py-2 border border-[#D0D5DD] rounded-[8px] hover:shadow-sm ">
                  <p className="text-[14px] font-[700] leading-5 text-[#344054] text-center ">
                    Download Template
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-1">
                <p className="text-[14px] font-[500] leading-5 text-[#344054] ">
                  <span className="text-[#EB1805]">*</span> Upload Bulk Items
                </p>

                {/* <div className="flex flex-col lg:flex-row justify-center gap-6 items-center"> */}
                <div
                  className={`flex items-center border-dashed  border-[#6544C5] ${
                    isDragOver ? "border-[2px]" : "border-[1px]"
                  } p-4 w-full lg:w-[512px] bg-[#E7EBFC] rounded-[12px] justify-between ${
                    !fileAvailable && "cursor-pointer"
                  } ${fileAvailable && "py-[9px]"}`}
                  onDragEnter={handleDragEnter}
                  onDragLeave={handleDragLeave}
                  onDragOver={handleDragOver}
                  onDrop={handleDrop}
                  onClick={
                    !fileAvailable
                      ? handleBrowseClick
                      : () => console.log("first")
                  }
                >
                  <div className="flex gap-4 items-center">
                    <Image src={GrayFile} alt="gray-doc" />
                    <div className="flex flex-col gap-1">
                      {fileAvailable ? (
                        <p className="font-[700] text-[12px] leading-[18px] text-[#0B1D45] ">
                          {fileDetails?.name}
                        </p>
                      ) : (
                        <p className="font-[400] text-[12px] leading-[18px] text-[#29343C] ">
                          {isDragOver
                            ? "Drop your files here"
                            : "Select a file to upload or drag and drop (.CSV or .XLS). Maximum file size is 2MB"}
                        </p>
                      )}
                      {fileAvailable && (
                        <p className="font-[400] text-[12px] leading-[18px] text-[#0B1D45] ">
                          {formatBytes(fileDetails?.size)}
                        </p>
                      )}
                    </div>

                    {/* Invisible file input */}
                    <input
                      type="file"
                      ref={fileInputRef}
                      style={{ display: "none" }}
                      onChange={handleFileInputChange}
                    />
                  </div>
                  {fileAvailable && (
                    <Image
                      src={CloseRedBg}
                      alt="closee"
                      className="cursor-pointer"
                      onClick={handleClearFile}
                    />
                  )}
                </div>
                {/* </div> */}
              </div>
            </div>
            <div className="lg:hidden w-full flex justify-center items-center p-4 fixed bottom-0 shadow-premium bg-[#ffffff] border-[1px] border-t-[#EAECF0]  ">
              <PrimaryButton
                title="Continue"
                className="w-full py-2.5 px-6 rounded-[8px] "
                //   onClick={() => {
                //     setDetails({ ...details, features: selectedFeatures }),
                //       handlePageQuery("legal-details");
                //   }}
                //   disabled={
                //     !details?.organisationName ||
                //     !details?.companyType ||
                //     !details?.country
                //   }
              />
            </div>
          </div>
        )}
      </div>
      {isUploading && <PageLoaderModal text="Uploading data. Please wait" />}
      {uploadingError && (
        <ErrorModal
          closeModal={setUploadingError}
          showModal={uploadingError}
          details={errorDetails}
        />
      )}
      {uploadingDuplicate && (
        <DuplicateModal
          closeModal={setUploadingDuplicate}
          showModal={uploadingDuplicate}
          details={duplicateDetails}
        />
      )}
      {isSuccessful && (
        <SuccessfulModal
          closeModal={setIsSuccessful}
          showModal={isSuccessful}
          subTitle={uploadingResponse}
        />
      )}
    </>
  );
};

export default UploadBulkEmployee;
