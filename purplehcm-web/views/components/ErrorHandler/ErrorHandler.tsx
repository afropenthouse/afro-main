import Image from "next/image";
import React from "react";
import ExclamationIcon from "../../assets/images/exclamation.svg";

const ErrorHandler = ({ errors }: { errors: any }) => {
  return (
    <div className="text-[#D92D20] text-[14px] leading-5 font-[400] flex mt-1 ">
      {/* {errors && <Image src={ExclamationIcon} alt="" />} */}
      {errors && (
        <>
          {(() => {
            switch (errors) {
              case errors.type === "required":
                return (
                  <span className="">
                    {errors.message ? errors.message : "This field is required"}
                  </span>
                );
              case errors.type === "maxLength" || errors.type === "max":
                return (
                  <span className="">
                    {errors.message
                      ? errors.message
                      : "Your input exceeded the maximum length"}
                  </span>
                );
              case errors.type === "minLength" || errors.type === "min":
                return (
                  <span className="">
                    {errors.message
                      ? errors.message
                      : "Your input is not up to the minimum length"}
                  </span>
                );
              case errors.type === "matches":
                return <span className="">{errors.message}</span>;
              case errors.type === "typeError":
                return <span className="">Invalid value entered</span>;
              default:
                return (
                  <span className="">
                    {errors
                      ? errors
                      : errors.message
                      ? errors.message
                      : "The value entered into this field is invalid"}
                  </span>
                );
            }
          })()}
        </>
      )}
    </div>
  );
};

export default ErrorHandler;
