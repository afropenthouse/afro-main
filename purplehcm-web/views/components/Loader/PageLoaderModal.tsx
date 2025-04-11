import React from "react";
import { Oval, RotatingLines } from "react-loader-spinner";

export default function PageLoaderModal({ text }: { text?: string }) {
  return (
    <div
      className={`fixed top-0 left-0 z-50 w-full h-screen flex justify-center items-center animation 
      opacity-100 visible
      `}
    >
      <div className="relative w-full right-0 h-auto  z-50 flex flex-col items-center gap-3 ">
        {/* <Oval
          height="80"
          width="80"
          color="#006C33"
          ariaLabel="oval-loading"
          wrapperStyle={{}}
          wrapperClass="wrapper-class"
          visible={true}
          secondaryColor="white"
          strokeWidth={2}
          strokeWidthSecondary={2}
        /> */}
        <RotatingLines
          visible={true}
          width="30"
          strokeWidth="4"
          animationDuration="0.75"
          ariaLabel="rotating-lines-loading"
          strokeColor="#FFFFFF"
        />
        <p className="text-[14px] font-[500] leading-5 text-[#ffffff] ">{text}</p>
      </div>

      <div
        className="absolute top-0 left-0 w-full h-full overflow-y-auto bg-[#344054B2] z-20"
        // onClick={closeModal(false)}
      />
    </div>
  );
}
