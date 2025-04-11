import Image from "next/image";
import React, { Dispatch, SetStateAction } from "react";
import CloseIcon from "../../../assets/images/modal-close-icon.svg";
import SuccessfulIcon from "../../../assets/images/successful-icon.svg";
import { useRouter } from "next/router";
import { ModalContainer } from "../../Modal/ModalContainer";
import { ROUTES } from "../../../helpers/routes";
import { PurpleButton } from "../../Button/Button";

const SuccessfulModal = ({
  showModal,
  closeModal,
  subTitle,
  title,
}: {
  showModal: boolean;
  title?: string;
  subTitle?: string;
  closeModal: Dispatch<SetStateAction<boolean>>;
}) => {
  const router = useRouter();
  return (
    <ModalContainer showModal={showModal} closeModal={closeModal}>
      <div
        className={`w-full lg:w-[400px] relative right-0 h-auto min-h-[20vh] max-h-[90vh] z-50 flex flex-col items-center rounded-[24px] bg-white overflow-auto`}
      >
        <div className="flex gap-4 flex-col w-full top-0 left-0 px-[24px] pt-[24px] pb-5 lg:px-[24px] sticky bg-white z-50 border-b border-[#EAECF0] ">
          <div className="flex justify-between items-center relative w-full">
            <p className="text-[18px] font-[700] leading-[28px] text-[#101828] "></p>
            <Image
              src={CloseIcon}
              alt="Close Icon"
              className="cursor-pointer absolute right-0 -top-[44px] lg:top-[unset] lg:relative"
              onClick={() => router.push(ROUTES?.EMPLOYEES)}
            />
          </div>
          <div className="flex flex-col items-center gap-2">
            <Image src={SuccessfulIcon} alt="Close Icon" className="" />
            <p className="text-[18px] font-[700] leading-[28px] text-[#101828] ">
              {title ? title : "Successful"}
            </p>
            <p className="text-[16px] font-[500] leading-[24px] text-[#475467] text-center ">
              {subTitle
                ? subTitle
                : "Uploaded successfully"}
            </p>
          </div>
        </div>

        <div className="flex gap-4 justify-between w-full top-0 left-0 px-[24px] pt-[24px] lg:py-[24px] lg:px-[24px] lg:border-t-[1px] border-[#EAECF0] sticky bg-white z-0">
          <PurpleButton
            type="submit"
            title="Okay"
            className="text-center lg:px-[14px] lg:py-[8px] w-full "
            onClick={() => router.push(ROUTES?.EMPLOYEES)}
          />
        </div>
      </div>
    </ModalContainer>
  );
};

export default SuccessfulModal;
