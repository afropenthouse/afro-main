import Image from "next/image";
import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import CloseIcon from "../../../../assets/images/modal-close-icon.svg";
import ErrorIcon from "../../../../assets/images/file-upload-error.svg";
import { OutlineBlackButton, PurpleButton } from "../../../Button/Button";
import { ModalContainer } from "../../../Modal/ModalContainer";
import CustomSelect from "../../../CustomHTMLElements/CustomSelect";
import CustomInputField from "../../../CustomHTMLElements/CustomInputField";
import { useForm } from "react-hook-form";
import { useAllInviteOption } from "../../../../hooks/useAllInviteOption";
import { postData } from "../../../../apis/apiMethods";
import CONFIG from "../../../../helpers/config";
import { apiEndpoints } from "../../../../apis/apiEndpoints";
import { toast } from "react-toastify";
import { errorHandler } from "../../../../helpers/errorHander";
import { ROUTES } from "../../../../helpers/routes";
import { useRouter } from "next/router";

const ConfirmationModal = ({
  showModal,
  closeModal,
  details,
  setDetails,
}: {
  showModal: boolean;
  details: any;
  setDetails: any;
  closeModal: Dispatch<SetStateAction<boolean>>;
}) => {
  const { control } = useForm();
  const router = useRouter();
  const { data: inviteOption, isLoading: inviteOptionLoading } =
    useAllInviteOption();
  const [minDate, setMinDate] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, "0"); // Months are zero-indexed, so +1
    const day = String(today.getDate()).padStart(2, "0"); // Add leading zero if necessary
    setMinDate(`${year}-${month}-${day}`);
  }, []);

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
      scheduleTimeName: event.target.id,
      [event.target.name]: parseInt(event.target.value),
    });
  };

  const onSubmit = async () => {
    setLoading(true);

    const reqBody = {
      employeeId: details?.employeeUUID,
      inviteOption: details?.scheduleTime,
      scheduledDateTime: details?.scheduleDate,
    };
    try {
      const res = await postData(
        `${CONFIG.BASE_URL}${apiEndpoints.SEND_INVITE}`,
        reqBody
      );

      if (res.isSuccessful) {
        setDetails({ ...details, isSuccessful: true });
        closeModal(!showModal);
      }
      if (!res.isSuccessful) {
        toast.error(res.data);
      }
    } catch (error) {
      toast.error(errorHandler(error));
    }
    setLoading(false);
  };

  return (
    <ModalContainer showModal={showModal} closeModal={closeModal}>
      <div
        className={`w-full lg:w-[400px] relative right-0 h-auto min-h-[30vh] max-h-[90vh] z-50 flex flex-col items-center rounded-[24px] bg-white overflow-auto`}
      >
        <div className="flex gap-1 flex-col w-full top-0 left-0 px-[24px] pt-[24px] pb-5 lg:px-[24px] sticky bg-white z-50 border-b border-[#EAECF0] ">
          <div className="flex justify-between items-center relative w-full">
            <p className="text-[18px] font-[700] leading-[28px] text-[#101828] ">
              Create Profile and Invite
            </p>
            <Image
              src={CloseIcon}
              alt="Close Icon"
              className="cursor-pointer absolute right-0 -top-[44px] lg:top-[unset] lg:relative"
              onClick={() => router.push(ROUTES?.EMPLOYEES)}
            />
          </div>
          <p className="text-[16px] font-[500] leading-[24px] text-[#678196] ">
            When do you want{" "}
            <span className="text-[#29343C] font-[700] ">
              {details?.firstName + " " + details?.lastName}
            </span>{" "}
            to receive the invitation?
          </p>
        </div>
        <div className="flex flex-col gap-5 pt-4 pb-10 px-6 w-full">
          <div className="flex flex-col gap-1.5 w-full">
            {inviteOptionLoading ? (
              <div
                role="status"
                className="flex flex-col gap-7 w-full animate-pulse"
              >
                <div className="h-[58px] bg-gray-200 rounded-2xl w-full "></div>
                <div className="h-[58px] bg-gray-200 rounded-2xl w-full "></div>
                <div className="h-[58px] bg-gray-200 rounded-2xl w-full "></div>
                <span className="sr-only">Loading...</span>
              </div>
            ) : (
              <ul className="flex flex-col gap-7 w-full">
                {inviteOption?.map((option: any, index: any) => (
                  <li key={index}>
                    <input
                      type="radio"
                      id={option?.name}
                      name="scheduleTime"
                      value={option?.id}
                      //   defaultChecked={details?.scheduleTime === {option?.name} && false}
                      className="hidden peer"
                      onChange={handleRadioChange}
                    />
                    <label
                      htmlFor={option?.name}
                      className={`flex gap-[12px] w-full items-center px-3 py-4 bg-[#FCFCFD] border rounded-[12px] cursor-pointer peer-checked:border-primaryColor ${
                        details?.scheduleTime === option?.id
                          ? "border-primaryColor"
                          : "border-[#EAECF0]"
                      }`}
                    >
                      <div
                        className={`w-[18px] h-[18px] border-[1px] ${
                          details?.scheduleTime === option?.id
                            ? "border-[#E7EBFC] bg-[#E7EBFC]"
                            : "border-[#D0D5DD]"
                        } rounded-[50%] flex justify-center items-center `}
                      >
                        {details?.scheduleTime === option?.id && (
                          <div className="w-[12px] h-[12px] bg-primaryColor rounded-[50%] "></div>
                        )}
                      </div>
                      <div className="flex items-center gap-4">
                        <p
                          className={` text-[14px] leading-5 font-[700] ${
                            details?.scheduleTime === option?.id
                              ? "text-[#6544C5]"
                              : "text-[#0A0A0B]"
                          } `}
                        >
                          {option?.name}
                        </p>
                      </div>
                    </label>
                  </li>
                ))}
              </ul>
            )}
          </div>
          {details?.scheduleTimeName === "Schedule" && (
            <div className="flex flex-col gap-[14px] w-full border-t pt-3 border-[#EAEDF1] ">
              <p className="text-[14px] font-[700] leading-[28px] text-[#101828] ">
                Select Invitation Date
              </p>
              <CustomInputField
                extraLabel="Select date"
                type="date"
                label=" "
                min={minDate}
                placeholder="Select"
                name="scheduleDate"
                defaultValue={details?.scheduleDate}
                onChange={(e: any) => handleInputChange(e)}
              />
            </div>
          )}
        </div>
        <div className="flex gap-4 justify-between w-full top-0 left-0 px-[24px] pt-[24px] lg:py-[24px] lg:px-[24px] lg:border-t-[1px] border-[#EAECF0] sticky bg-white z-0">
          <div></div>
          <div className="flex gap-3 items-center">
            <OutlineBlackButton
              type="submit"
              title="Cancel"
              className="text-center lg:px-[14px] lg:py-[8px]"
              onClick={() => router.push(ROUTES?.EMPLOYEES)}
            />
            <PurpleButton
              type="submit"
              title="Continue"
              className="text-center lg:px-[14px] lg:py-[8px]"
              disabled={
                (!details?.scheduleTime  && details?.scheduleTime !== 0) ||
                (details?.scheduleTimeName === "Schedule" &&
                  !details?.scheduleDate)
              }
              onClick={onSubmit}
              loader={loading}
            />
          </div>
        </div>
      </div>
    </ModalContainer>
  );
};

export default ConfirmationModal;
