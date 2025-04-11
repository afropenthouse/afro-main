import React from "react";

export const ModalContainer = ({
  children,
  showModal,
  closeModal,
}: {
  children: any;
  showModal: boolean;
  closeModal: any;
}): JSX.Element => {
  return (
    <div
      className={`fixed top-0 left-0 z-[100] w-full h-screen flex justify-center md:items-center animation pt-[32px] lg:pt-0  ${
        showModal ? "opacity-100 visible" : "hidden opacity-0 invisible"
      }`}
    >
      <div className="overflow-hidden rounded-[8px] w-full md:w-[unset]">{children}</div>
      <div
        className="absolute top-0 left-0 w-full h-full overflow-y-auto bg-[#FFF] z-20 md:bg-[#00000032] backdrop-blur-sm"
        onClick={closeModal}
      />
    </div>
  );
};
