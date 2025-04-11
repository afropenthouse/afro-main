import Image from "next/image";
import React, { Dispatch, SetStateAction, useState } from "react";
import CloseIcon from "../../../../assets/images/modal-close-icon.svg";
import ErrorIcon from "../../../../assets/images/file-upload-error.svg";
import { OutlineBlackButton, PurpleButton } from "../../../Button/Button";
import { ModalContainer } from "../../../Modal/ModalContainer";
import CustomSelect from "../../../CustomHTMLElements/CustomSelect";
import CustomInputField from "../../../CustomHTMLElements/CustomInputField";
import { useForm } from "react-hook-form";

const AllowanceModal = ({
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

  const handleAddAllowance = () => {
    const generateUniqueId = () => {
      return (
        Math.random().toString(36).substr(2, 9) + "-" + Date.now().toString(36)
      );
    };

    if (isEdit && selectedDetails?.id) {
      // If in edit mode and there is a selected allowance to edit
      const updatedAllowances = (details?.allowance || []).map(
        (allowance: any) => {
          if (allowance.id === selectedDetails.id) {
            // Replace the matching allowance with the new details
            return {
              ...allowance,
              allowanceName: pageDetails?.allowanceName,
              allowanceAmount: pageDetails?.allowanceAmount || 0,
              allowancePercentage: pageDetails?.allowancePercentage || 0,
              allowanceProcessAs: pageDetails?.allowanceProcessAs,
            };
          }
          return allowance; // Return the original allowance if no match
        }
      );

      setDetails({
        ...details,
        allowance: updatedAllowances,
      });
    } else {
      // Adding a new allowance
      setDetails({
        ...details,
        allowance: [
          ...(details?.allowance || []),
          {
            id: generateUniqueId(),
            allowanceName: pageDetails?.allowanceName,
            allowanceAmount: pageDetails?.allowanceAmount || 0,
            allowancePercentage: pageDetails?.allowancePercentage || 0,
            allowanceProcessAs: pageDetails?.allowanceProcessAs,
          },
        ],
      });
    }

    // Reset form and close modal
    setPageDetails({});
    setSelectedDetails({});
    closeModal(!showModal);
  };

  return (
    <ModalContainer showModal={showModal} closeModal={closeModal}>
      <div
        className={`w-full lg:w-[520px] relative right-0 h-auto min-h-[30vh] max-h-[90vh] z-50 flex flex-col items-center rounded-[24px] bg-white overflow-auto`}
      >
        <div className="flex gap-1 flex-col w-full top-0 left-0 px-[24px] pt-[24px] lg:py-[24px] lg:pb-0 lg:px-[24px] sticky bg-white z-50">
          <div className="flex justify-between items-center relative w-full">
            <p className="text-[18px] font-[700] leading-[28px] text-[#101828] ">
              Add Allowance
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
          <p className="text-[16px] font-[400] leading-[24px] text-[#475467] ">
            Select all the allowances that should apply to this profile.
          </p>
        </div>
        <div className="flex flex-col gap-6 py-4 px-6 w-full">
          <CustomSelect
            extraLabel="Allowance Name"
            name="allowanceName"
            handleChange={(e, a) => handleChange(e, a)}
            defaultValue={pageDetails?.allowanceName}
            options={[
              { label: "Transport", value: "Transport" },
              { label: "Wardrobe", value: "Wardrobe" },
              { label: "Feeding", value: "Feeding" },
            ]}
            control={control}
          />
          <CustomSelect
            extraLabel="Process As"
            name="allowanceProcessAs"
            handleChange={(e, a) => handleChange(e, a)}
            defaultValue={pageDetails?.allowanceProcessAs}
            options={[
              { label: "After Tax Allowance ", value: "After Tax Allowance " },
              {
                label: "Before Tax allowance ",
                value: "Before Tax allowance ",
              },
              { label: "Percentage of Gross", value: "Percentage of Gross" },
            ]}
            control={control}
          />
          {pageDetails?.allowanceProcessAs === "Percentage of Gross" ? (
            <CustomInputField
              extraLabel="Percentage (%)"
              type="text"
              label=" "
              placeholder="Enter value"
              name="allowancePercentage"
              defaultValue={pageDetails?.allowancePercentage}
              onChange={(e: any) => handleInputChange(e)}
            />
          ) : (
            <CustomInputField
              extraLabel="Amount"
              type="text"
              label=" "
              hasIcon={"₦"}
              placeholder="0.00"
              name="allowanceAmount"
              defaultValue={pageDetails?.allowanceAmount}
              onChange={(e: any) => handleInputChange(e)}
            />
          )}
        </div>
        <div className="flex gap-4 justify-between w-full top-0 left-0 px-[24px] pt-[24px] lg:py-[24px] lg:px-[24px] lg:border-t-[1px] border-[#EAECF0] sticky bg-white z-0">
          <div></div>
          <div className="flex gap-3 items-center">
            <OutlineBlackButton
              type="submit"
              title="Cancel"
              className="text-center lg:px-[14px] lg:py-[8px]"
              onClick={() => {
                closeModal(!showModal);
                setSelectedDetails({});
                setPageDetails({});
              }}
            />
            <PurpleButton
              type="submit"
              title="Save"
              className="text-center lg:px-[14px] lg:py-[8px]"
              onClick={handleAddAllowance}
            />
          </div>
        </div>
      </div>
    </ModalContainer>
  );
};

export default AllowanceModal;
