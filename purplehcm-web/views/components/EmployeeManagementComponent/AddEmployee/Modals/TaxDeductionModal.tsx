import Image from "next/image";
import React, { Dispatch, SetStateAction, useState } from "react";
import CloseIcon from "../../../../assets/images/modal-close-icon.svg";
import ErrorIcon from "../../../../assets/images/file-upload-error.svg";
import { OutlineBlackButton, PurpleButton } from "../../../Button/Button";
import { SideModalContainer } from "../../../Modal/SideModalContainer";
import CustomSelect from "../../../CustomHTMLElements/CustomSelect";
import CustomInputField from "../../../CustomHTMLElements/CustomInputField";
import { useForm } from "react-hook-form";
import CustomCheckboxInput from "../../../CustomHTMLElements/CustomCheckboxInput";

const TaxDeductionModal = ({
  showModal,
  closeModal,
  details,
  setDetails,
  selectedDetails,
  setSelectedDetails,
  isEdit,
}: {
  showModal: boolean;
  details: any;
  setDetails: any;
  isEdit: any;
  selectedDetails: any;
  setSelectedDetails: any;
  closeModal: Dispatch<SetStateAction<boolean>>;
}) => {
  const { control } = useForm();
  const [pageDetails, setPageDetails] = useState<any>(
    isEdit ? selectedDetails : {}
  );

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      setPageDetails({ ...pageDetails, [name]: checked });
    } else {
      setPageDetails({ ...pageDetails, [name]: value });
    }
  };

  const handleChange = (target: any, name: any) => {
    setPageDetails({ ...pageDetails, [name]: target?.value });
  };

  const handleAddDeduction = () => {
    const generateUniqueId = () => {
      return (
        Math.random().toString(36).substr(2, 9) + "-" + Date.now().toString(36)
      );
    };

    if (isEdit && selectedDetails?.id) {
      // If in edit mode and there is a selected deduction to edit
      const updatedDeductions = (details?.deduction || []).map(
        (deduction: any) => {
          if (deduction.id === selectedDetails.id) {
            // Replace the matching deduction with the new details
            return {
              ...deduction,
              deductionName: pageDetails?.deductionName,
              deductionAmount: pageDetails?.deductionAmount || 0,
              deductionPercentage: pageDetails?.deductionPercentage || 0,
              deductionProcessAs: pageDetails?.deductionProcessAs,
              frequency: pageDetails?.frequency,
            };
          }
          return deduction; // Return the original deduction if no match
        }
      );

      setDetails({
        ...details,
        deduction: updatedDeductions,
      });
    } else {
      // Adding a new deduction
      setDetails({
        ...details,
        deduction: [
          ...(details?.deduction || []),
          {
            id: generateUniqueId(),
            deductionName: pageDetails?.deductionName,
            deductionAmount: pageDetails?.deductionAmount || 0,
            deductionPercentage: pageDetails?.deductionPercentage || 0,
            deductionProcessAs: pageDetails?.deductionProcessAs,
            frequency: pageDetails?.frequency,
          },
        ],
      });
    }

    // Reset form and close modal
    setPageDetails({});
    setSelectedDetails({});
    closeModal(!showModal);
  };

  const handleRadioChange = (event: any) => {
    setPageDetails({
      ...pageDetails,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <SideModalContainer showModal={showModal} closeModal={closeModal}>
      <div
        className={`w-full lg:w-[440px] fixed right-0 min-h-[100vh] z-50 flex flex-col items-center bg-white overflow-auto`}
      >
        <div className="flex gap-1 flex-col w-full top-0 left-0 px-[24px] pt-[24px] lg:py-[20px] lg:px-[16px] sticky bg-white z-50 border-b border-[#EAECF0] ">
          <div className="flex justify-between items-center relative w-full">
            <p className="text-[18px] font-[700] leading-[28px] text-[#101828] ">
              Add Post-Tax Deduction
            </p>
            <Image
              src={CloseIcon}
              alt="Close Icon"
              className="cursor-pointer absolute right-0 -top-[44px] lg:top-[unset] lg:relative"
              onClick={() => {
                closeModal(!showModal);
                setSelectedDetails({});
                setPageDetails({});
              }}
            />
          </div>
        </div>
        <div className="flex flex-col gap-6 py-4 px-6 w-full">
          <CustomSelect
            extraLabel="Name"
            name="taxDeductionName"
            handleChange={(e, a) => handleChange(e, a)}
            defaultValue={pageDetails?.taxDeductionName}
            options={[
              { label: "Transport", value: "Transport" },
              { label: "Wardrobe", value: "Wardrobe" },
              { label: "Feeding", value: "Feeding" },
            ]}
            control={control}
          />

          <CustomInputField
            extraLabel="Amount"
            type="text"
            label=" "
            hasIcon={"₦"}
            placeholder="0.00"
            name="deductionAmount"
            defaultValue={pageDetails?.deductionAmount}
            onChange={(e: any) => handleInputChange(e)}
          />

          <CustomCheckboxInput
            label="Set as a continuous deduction"
            checked={pageDetails?.continousDeduction}
            onChange={(e: any) =>
              setPageDetails({
                ...pageDetails,
                continousDeduction: e.target?.checked,
              })
            }
          />

          {pageDetails?.continousDeduction && (
            <>
              <div className="flex flex-col gap-1.5 w-full">
                <p className="text-[14px] leading-[20px] font-[500] text-[#344054] ">
                  Frequency
                </p>
                <ul className="grid grid-cols-2 gap-4 w-full">
                  <li>
                    <input
                      type="radio"
                      id="oneTime"
                      name="frequency"
                      value="One-Time"
                      //   defaultChecked={details?.frequency === "One-Time" && false}
                      className="hidden peer"
                      onChange={handleRadioChange}
                    />
                    <label
                      htmlFor="oneTime"
                      className="flex gap-[12px] w-full items-center px-3 py-4 bg-[#FCFCFD] border border-[#EAECF0] rounded-[12px] cursor-pointer peer-checked:border-primaryColor"
                    >
                      <div
                        className={`w-[18px] h-[18px] border-[1px] ${
                          pageDetails?.frequency === "One-Time"
                            ? "border-[#E7EBFC] bg-[#E7EBFC]"
                            : "border-[#D0D5DD]"
                        } rounded-[50%] flex justify-center items-center `}
                      >
                        {pageDetails?.frequency === "One-Time" && (
                          <div className="w-[12px] h-[12px] bg-primaryColor rounded-[50%] "></div>
                        )}
                      </div>
                      <div className="flex items-center gap-4">
                        <p className="text-[#475467] text-[14px] leading-5 font-[500] ">
                          One-Time
                        </p>
                      </div>
                    </label>
                  </li>
                  <li>
                    <input
                      type="radio"
                      id="recurring"
                      name="frequency"
                      value="Recurring"
                      //   defaultChecked={pageDetails?.frequency === "Recurring" && true}
                      className="hidden peer"
                      onChange={handleRadioChange}
                    />
                    <label
                      htmlFor="recurring"
                      className="flex gap-[12px] w-full items-center px-3 py-4 bg-[#FCFCFD] border border-[#EAECF0] rounded-[12px] cursor-pointer peer-checked:border-primaryColor"
                    >
                      <div
                        className={`w-[18px] h-[18px] border-[1px] ${
                          pageDetails?.frequency === "Recurring"
                            ? "border-[#E7EBFC] bg-[#E7EBFC]"
                            : "border-[#D0D5DD]"
                        } rounded-[50%] flex justify-center items-center `}
                      >
                        {pageDetails?.frequency === "Recurring" && (
                          <div className="w-[12px] h-[12px] bg-primaryColor rounded-[50%] "></div>
                        )}
                      </div>
                      <div className="flex items-center gap-4">
                        <p className="text-[#475467] text-[14px] leading-5 font-[500] ">
                          Recurring
                        </p>
                      </div>
                    </label>
                  </li>
                </ul>
              </div>
              {pageDetails?.frequency === "One-Time" && (
                <CustomSelect
                  extraLabel="Select Payroll period"
                  name="payrollPeriod"
                  handleChange={(e, a) => handleChange(e, a)}
                  defaultValue={pageDetails?.payrollPeriod}
                  options={[
                    { label: "Transport", value: "Transport" },
                    { label: "Wardrobe", value: "Wardrobe" },
                    { label: "Feeding", value: "Feeding" },
                  ]}
                  control={control}
                />
              )}
              {pageDetails?.frequency === "Recurring" && (
                <>
                  <CustomSelect
                    extraLabel="Effective from"
                    name="effectiveFrom"
                    handleChange={(e, a) => handleChange(e, a)}
                    defaultValue={pageDetails?.effectiveFrom}
                    options={[
                      { label: "Transport", value: "Transport" },
                      { label: "Wardrobe", value: "Wardrobe" },
                      { label: "Feeding", value: "Feeding" },
                    ]}
                    control={control}
                  />
                  <CustomSelect
                    extraLabel="To"
                    name="effectiveTo"
                    handleChange={(e, a) => handleChange(e, a)}
                    defaultValue={pageDetails?.effectiveTo}
                    options={[
                      { label: "Transport", value: "Transport" },
                      { label: "Wardrobe", value: "Wardrobe" },
                      { label: "Feeding", value: "Feeding" },
                    ]}
                    control={control}
                  />
                </>
              )}
            </>
          )}
        </div>
        <div className="absolute flex w-full bottom-0 left-0 px-[24px] pt-[24px] lg:py-[24px] lg:px-[24px] lg:border-t-[1px] border-[#EAECF0] bg-white z-0">
          <PurpleButton
            type="submit"
            title="Save"
            className="lg:text-center lg:px-[14px] lg:py-[8px] w-full"
            onClick={handleAddDeduction}
          />
        </div>
      </div>
    </SideModalContainer>
  );
};

export default TaxDeductionModal;
