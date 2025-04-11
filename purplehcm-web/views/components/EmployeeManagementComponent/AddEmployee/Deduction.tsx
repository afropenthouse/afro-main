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

import UploadIcon from "../../../assets/images/add-photo-icon.svg";
import MoreIcon from "../../../assets/images/more-icon.svg";
import { toast } from "react-toastify";
import { convertToBase64 } from "../../../helpers/convertToBase64";
import AllowanceModal from "./Modals/AllowanceModal";
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";
import DeleteModal from "./Modals/DeleteModal";
import CustomCheckboxInput from "../../CustomHTMLElements/CustomCheckboxInput";
import TaxDeductionModal from "./Modals/TaxDeductionModal";

const Deduction = ({
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
  const [allowanceModal, setAllowanceModal] = useState(false);
  const [taxDeductionModal, setDeductionModal] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [selectedData, setSelectedData] = useState({});
  const [deleteTitle, setDeleteTitle] = useState("");
  const [deleteDescription, setDeleteDescription] = useState("");
  const [deleteField, setDeleteField] = useState("");
  const [selectedDeduction, setSelectedDeduction] = useState<any>(
    details?.taxDeduction || []
  );

  const handleBrowseClick = () => {
    // Trigger the file input click event
    fileInputRef.current.click();
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
    setDetails({ ...details, [name]: target?.value });
  };

  const handleRadioChange = (event: any) => {
    setDetails({
      ...details,
      [event.target.name]: event.target.value,
    });
  };

  const taxDeductionData = [
    "Pension Contributions",
    "National Housing Fund [NHF] contributions",
    "Capital Gains Tax (CGT)",
    "Value Added Tax (VAT)",
    "Personal Income Tax (PAYE)",
  ];
  // Handle checkbox change
  const handleCheckboxChange = (deduction: any) => {
    setSelectedDeduction((prevSelectedTaxDeduction: any) => {
      if (prevSelectedTaxDeduction.includes(deduction)) {
        // If the deduction is already selected, remove it from the list
        return prevSelectedTaxDeduction.filter((f: any) => f !== deduction);
      } else {
        // If the deduction is not selected, add it to the list
        return [...prevSelectedTaxDeduction, deduction];
      }
    });
  };

  // Check if a deduction is selected
  const isFeatureSelected = (deduction: any) =>
    selectedDeduction?.includes(deduction);

  return (
    <>
      <div className="flex items-center justify-center pt-[74px] pb-[100px] lg:py-[144px] md:px-[166px] flex-col gap-[16px] lg:gap-[44px] ">
        <div className="flex flex-col gap-4 lg:gap-6 w-full ">
          <div className="flex flex-col gap-1">
            <p className="text-[14px] font-[700] leading-[20px] text-[#475467]">
              Select all Pre-Tax and Tax deductions that apply to this employee
            </p>
            <p className="text-[14px] font-[400] leading-[14px] text-[#475467]">
              You may select more than one.
            </p>
          </div>
          <div className="flex flex-col gap-[32px] w-full md:max-w-[432px] px-4 lg:px-0">
            <div className="flex flex-col gap-2 ">
              {taxDeductionData?.map((feature: any, index: any) => (
                <div
                  className="flex gap-2 border border-[#EAECF0] rounded-[8px] items-center px-3 lg:px-4 py-[16px] cursor-pointer"
                  key={index}
                  onClick={() => handleCheckboxChange(feature)} // Handle the click on the feature name or container
                >
                  <CustomCheckboxInput
                    checked={isFeatureSelected(feature)}
                    onChange={() => handleCheckboxChange(feature)}
                  />
                  <p className="text-[12px] lg:text-[14px] font-[500] text-[#29343C] ">
                    {feature}
                  </p>
                </div>
              ))}
            </div>
            <div className="h-[1px] w-full bg-[#EAECF0] "></div>
          </div>
        </div>

        <div className="flex flex-col gap-8 w-full">
          <div className="flex flex-col gap-1">
            <p className="text-[14px] font-[700] leading-[20px] text-[#475467]">
              Post-Tax Deductions
            </p>
            <p className="text-[14px] font-[400] leading-[14px] text-[#475467]">
              These include dues, contributions, etc,
            </p>
          </div>
          <div className="flex flex-col items-end gap-4 w-full">
            {/* {details?.deduction?.length > 0 && ( */}
              <div className="rounded-[12px] flex flex-col w-full ">
                <div className="flex py-[14px] px-3 border-b-[2px] border-[#EAECF0] w-[100%] gap-6 items-center ">
                  <p className="w-[35%] text-[14px] font-[500] leading-[14px] text-[#667085]">
                    Name
                  </p>
                  <p className="w-[30%] text-[14px] font-[500] leading-[14px] text-[#667085]">
                    Amount
                  </p>
                  <p className="w-[30%] text-[14px] font-[500] leading-[14px] text-[#667085]">
                    Frequency
                  </p>
                  <p className="w-[5%]"></p>
                </div>
                {details?.deduction?.map((deduction: any, index: any) => (
                  <div
                    className="flex py-[14px] px-3 border-b border-[#EAECF0] last:border-b-[2px] w-[100%] gap-6 items-center "
                    key={index}
                  >
                    <p className="w-[35%] text-[14px] font-[500] leading-[20px] text-[#475467]">
                      {deduction?.deductionName}
                    </p>
                    <p className="w-[30%] text-[14px] font-[500] leading-[20px] text-[#475467]">
                      {deduction?.deductionProcessAs}
                    </p>
                    <p className="w-[30%] text-[14px] font-[500] leading-[20px] text-[#475467]">
                      {deduction?.deductionProcessAs}
                    </p>
                    <Popover className="relative w-[5%] flex">
                      <>
                        <PopoverButton
                          className={`group inline-flex items-center text-center rounded-md text-base font-normal text-[#4D5154] hover:text-opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-transparent`}
                        >
                          <Image src={MoreIcon} alt="" />
                        </PopoverButton>

                        <PopoverPanel className="absolute w-[125px] right-[-10px] z-50 p-1 top-[20px]  ">
                          <div className="rounded-[12px] border-[1px] border-[#F2F4F7] shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                            <div className="flex flex-col bg-white">
                              <div
                                onClick={() => {
                                  setIsEdit(true);
                                  setSelectedData(deduction);
                                  setDeductionModal(true);
                                }}
                                className="px-4 py-[10px] cursor-pointer"
                              >
                                <p className="font-[500] text-[12px] leading-[18px] text-[#475467]">
                                  Edit
                                </p>
                              </div>
                              <div
                                onClick={() => {
                                  setDeleteModal(true);
                                  setDeleteDescription(
                                    "Are you sure you want to remove the deduction you’ve setup already?"
                                  );
                                  setDeleteTitle("Remove Deduction");
                                  setDeleteField("deduction");
                                  setSelectedData(deduction);
                                }}
                                className="px-4 py-[10px] cursor-pointer"
                              >
                                <p className="font-[500] text-[12px] leading-[18px] text-[#D92D20]">
                                  Remove
                                </p>
                              </div>
                            </div>
                          </div>
                        </PopoverPanel>
                      </>
                    </Popover>
                  </div>
                ))}
              </div>
            {/* )} */}
            <div
              className="flex items-center gap-2 w-fit cursor-pointer "
              onClick={() => {
                setDeductionModal(true);
                setIsEdit(false);
              }}
            >
              {/* <Image src={} alt="add" /> */}
              <p className="text-[14px] leading-[20px] font-[500] text-[#6544C5] ">
                Add Post-Tax Deduction
              </p>
            </div>
          </div>
        </div>

        <div className="border-[0.5px] w-full border-[#EAECF0] "></div>
      </div>
      {taxDeductionModal && (
        <TaxDeductionModal
          setDetails={setDetails}
          closeModal={setDeductionModal}
          showModal={taxDeductionModal}
          details={details}
          isEdit={isEdit}
          selectedDetails={selectedData}
          setSelectedDetails={setSelectedData}
        />
      )}
      {deleteModal && (
        <DeleteModal
          closeModal={setDeleteModal}
          details={details}
          selectedDetails={selectedData}
          setDetails={setDetails}
          setSelectedDetails={setSelectedData}
          showModal={deleteModal}
          title={deleteTitle}
          description={deleteDescription}
          field={deleteField}
        />
      )}
    </>
  );
};

export default Deduction;
