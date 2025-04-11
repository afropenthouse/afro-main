import Image from "next/image";
import React, { Dispatch, SetStateAction } from "react";
import { ModalContainer } from "../../Modal/ModalContainer";
import CloseIcon from "../../../assets/images/modal-close-icon.svg";
import ErrorIcon from "../../../assets/images/file-upload-error.svg";
import CustomInputField from "../../CustomHTMLElements/CustomInputField";
import {
  OutlineBlackButton,
  PrimaryButton,
  PurpleButton,
} from "../../Button/Button";

const ErrorModal = ({
  showModal,
  closeModal,
  details,
}: {
  showModal: boolean;
  details: any;
  closeModal: Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <ModalContainer showModal={showModal} closeModal={closeModal}>
      <div
        className={`w-full lg:w-[400px] relative right-0 h-auto min-h-[30vh] max-h-[90vh] z-50 flex flex-col items-center rounded-[24px] bg-white overflow-auto`}
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
              onClick={() => closeModal(!showModal)}
            />
          </div>
          <div className="flex flex-col gap-1">
            <p className="text-[18px] font-[700] leading-[28px] text-[#0A0A0B] ">
              Bulk Upload Failed...
            </p>
            <p className="text-[16px] font-[500] leading-[24px] text-[#678196] ">
              Because of these errors below. Try correcting them, then upload
              the document again.
            </p>
          </div>
        </div>
        <div className="flex flex-col py-4 px-6 w-full">
          <div className="flex pb-3 border-b border-[#EAECF0] w-[100%] gap-6 items-center ">
            <p className="w-[15%] text-[14px] font-[700] leading-[14px] text-[#678196]">
              Row
            </p>
            <p className="w-[85%] text-[14px] font-[700] leading-[14px] text-[#678196]">
              Error Details
            </p>
          </div>
          {/* {details?.map((error: any, index: any) => ( */}
          <div
            className="flex py-3 border-b border-[#EAECF0] last:border-b-transparent w-[100%] gap-6 items-center "
            //   key={index}
          >
            <p className="w-[15%] text-[14px] font-[500] leading-[20px] text-[#0A0A0B]">
              5
            </p>
            <p className="w-[85%] text-[14px] font-[500] leading-[20px] text-[#0A0A0B]">
              Wrong Number
            </p>
          </div>
          <div
            className="flex py-3 border-b border-[#EAECF0] last:border-b-transparent w-[100%] gap-6 items-center "
            //   key={index}
          >
            <p className="w-[15%] text-[14px] font-[500] leading-[20px] text-[#0A0A0B]">
              17
            </p>
            <p className="w-[85%] text-[14px] font-[500] leading-[20px] text-[#0A0A0B]">
              Missing Location, Name
            </p>
          </div>
          <div
            className="flex py-3 border-b border-[#EAECF0] last:border-b-transparent w-[100%] gap-6 items-center "
            //   key={index}
          >
            <p className="w-[15%] text-[14px] font-[500] leading-[20px] text-[#0A0A0B]">
              22
            </p>
            <p className="w-[85%] text-[14px] font-[500] leading-[20px] text-[#0A0A0B]">
              Invalid Input
            </p>
          </div>
          <div
            className="flex py-3 border-b border-[#EAECF0] last:border-b-transparent w-[100%] gap-6 items-center "
            //   key={index}
          >
            <p className="w-[15%] text-[14px] font-[500] leading-[20px] text-[#0A0A0B]">
              45
            </p>
            <p className="w-[85%] text-[14px] font-[500] leading-[20px] text-[#0A0A0B]">
              Incorrect Data Format
            </p>
          </div>

          {/* ))} */}
        </div>
        <div className="flex gap-4 justify-between w-full top-0 left-0 px-[24px] pt-[24px] lg:py-[24px] lg:px-[24px] lg:border-t-[1px] border-[#EAECF0] sticky bg-white z-50">
          <div></div>
          <div className="flex gap-3 items-center">
            <OutlineBlackButton
              type="submit"
              title="Cancel"
              className="text-center lg:px-[14px] lg:py-[8px]"
              onClick={() => closeModal(!showModal)}
            />
            <PurpleButton
              type="submit"
              title="Try again"
              className="text-center lg:px-[14px] lg:py-[8px]"
            />
          </div>
        </div>
      </div>
    </ModalContainer>
  );
};

export default ErrorModal;
