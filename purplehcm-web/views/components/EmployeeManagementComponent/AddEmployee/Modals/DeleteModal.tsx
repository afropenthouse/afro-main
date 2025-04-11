import Image from "next/image";
import React, { Dispatch, SetStateAction } from "react";
import { ModalContainer } from "../../../Modal/ModalContainer";
import CloseIcon from "../../../../assets/images/modal-close-icon.svg";
import ErrorIcon from "../../../../assets/images/file-upload-error.svg";
import { OutlineBlackButton, PurpleButton } from "../../../Button/Button";

const DeleteModal = ({
  showModal,
  closeModal,
  details,
  setDetails,
  selectedDetails,
  setSelectedDetails,
  description,
  field,
  title,
}: {
  title: string;
  description: string;
  field: string;
  showModal: boolean;
  details: any;
  setDetails: any;
  selectedDetails: any;
  setSelectedDetails: any;
  closeModal: Dispatch<SetStateAction<boolean>>;
}) => {
  const handleDeleteDetails = (selectedId: any) => {
    // Filter out the allowance with the matching id
    const updatedDetails = (
      field === "allowance"
        ? details?.allowance || []
        : details?.deduction || []
    ).filter((details: any) => details.id !== selectedId);

    // Update the state with the remaining allowances
    if (field === "allowance") {
      setDetails({
        ...details,
        allowance: updatedDetails,
      });
    } else {
      setDetails({
        ...details,
        deduction: updatedDetails,
      });
    }

    // Optionally, reset page details and selected details if necessary
    setSelectedDetails({});

    // Close the modal if it's open
    closeModal(!showModal);
  };

  return (
    <ModalContainer showModal={showModal} closeModal={closeModal}>
      <div
        className={`w-full lg:w-[400px] relative right-0 h-auto min-h-[20vh] max-h-[90vh] z-50 flex flex-col items-center rounded-[24px] bg-white overflow-auto`}
      >
        <div className="flex gap-4 flex-col w-full top-0 left-0 px-[24px] pt-[24px] lg:py-[24px] lg:px-[24px] lg:border-b-[1px] border-[#EAECF0] sticky bg-white z-50">
          <div className="flex justify-between items-center relative w-full">
            <Image
              src={ErrorIcon}
              alt="Error Icon"
              className="cursor-pointer absolute right-0 -top-[44px] lg:top-[unset] lg:relative"
            />
            <Image
              src={CloseIcon}
              alt="Close Icon"
              className="cursor-pointer absolute right-0 -top-[44px] lg:top-[unset] lg:relative"
              onClick={() => {
                closeModal(!showModal);
                setSelectedDetails({});
              }}
            />
          </div>
          <div className="flex flex-col gap-1">
            <p className="text-[18px] font-[700] leading-[28px] text-[#0A0A0B] ">
              {title}
            </p>
            <p className="text-[16px] font-[500] leading-[24px] text-[#678196] ">
              {description}
            </p>
          </div>
        </div>
        <div className="flex gap-4 justify-between w-full top-0 left-0 px-[24px] pt-[24px] lg:py-[24px] lg:px-[24px] lg:border-t-[1px] border-[#EAECF0] sticky bg-white z-50">
          <div></div>
          <div className="flex gap-3 items-center">
            <OutlineBlackButton
              type="submit"
              title="Cancel"
              className="text-center lg:px-[14px] lg:py-[8px]"
              onClick={() => {
                closeModal(!showModal);
                setSelectedDetails({});
              }}
            />
            <PurpleButton
              type="submit"
              title={
                field === "allowance" ? "Remove Allowance" : "Remove Deduction"
              }
              className="text-center lg:px-[14px] lg:py-[8px] bg-[#D92D20] "
              onClick={() => handleDeleteDetails(selectedDetails?.id)}
            />
          </div>
        </div>
      </div>
    </ModalContainer>
  );
};

export default DeleteModal;
