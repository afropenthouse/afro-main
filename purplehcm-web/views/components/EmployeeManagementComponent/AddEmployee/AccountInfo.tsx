import React, { Dispatch, SetStateAction } from "react";
import CustomInputField from "../../CustomHTMLElements/CustomInputField";
import { useForm } from "react-hook-form";
import CustomSelect from "../../CustomHTMLElements/CustomSelect";

const AccountInfo = ({
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
  const { control } = useForm();

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

  return (
    <div className="flex items-center justify-center pt-[74px] pb-[100px] lg:py-[144px] flex-col gap-[16px] lg:gap-[24px] w-full max-w-[478px] mx-auto ">
      <div className="flex flex-col gap-1.5 w-full">
        <p className="text-[14px] leading-[20px] font-[700] text-[#475467] ">
          Payment Option
        </p>
        <ul className="grid grid-cols-2 gap-4 w-full">
          <li>
            <input
              type="radio"
              id="directDebit"
              name="paymentOption"
              value="Direct Debit"
              //   defaultChecked={details?.paymentOption === "Direct Debit" && false}
              className="hidden peer"
              onChange={handleRadioChange}
            />
            <label
              htmlFor="directDebit"
              className="flex gap-[12px] w-full items-center px-3 py-4 bg-[#FCFCFD] border border-[#EAECF0] rounded-[12px] cursor-pointer peer-checked:border-primaryColor"
            >
              <div
                className={`w-[18px] h-[18px] border-[1px] ${
                  details?.paymentOption === "Direct Debit"
                    ? "border-[#E7EBFC] bg-[#E7EBFC]"
                    : "border-[#D0D5DD]"
                } rounded-[50%] flex justify-center items-center `}
              >
                {details?.paymentOption === "Direct Debit" && (
                  <div className="w-[12px] h-[12px] bg-primaryColor rounded-[50%] "></div>
                )}
              </div>
              <div className="flex items-center gap-4">
                <p className="text-[#475467] text-[14px] leading-5 font-[500] ">
                  Direct Debit
                </p>
              </div>
            </label>
          </li>
          <li>
            <input
              type="radio"
              id="paperCheque"
              name="paymentOption"
              value="Paper Cheque"
              //   defaultChecked={details?.paymentOption === "Paper Cheque" && true}
              className="hidden peer"
              onChange={handleRadioChange}
            />
            <label
              htmlFor="paperCheque"
              className="flex gap-[12px] w-full items-center px-3 py-4 bg-[#FCFCFD] border border-[#EAECF0] rounded-[12px] cursor-pointer peer-checked:border-primaryColor"
            >
              <div
                className={`w-[18px] h-[18px] border-[1px] ${
                  details?.paymentOption === "Paper Cheque"
                    ? "border-[#E7EBFC] bg-[#E7EBFC]"
                    : "border-[#D0D5DD]"
                } rounded-[50%] flex justify-center items-center `}
              >
                {details?.paymentOption === "Paper Cheque" && (
                  <div className="w-[12px] h-[12px] bg-primaryColor rounded-[50%] "></div>
                )}
              </div>
              <div className="flex items-center gap-4">
                <p className="text-[#475467] text-[14px] leading-5 font-[500] ">
                  Paper Cheque
                </p>
              </div>
            </label>
          </li>
        </ul>
      </div>
      <div className="flex flex-col gap-4 lg:gap-6 w-full md:max-w-[500px] px-4 lg:px-0 ">
        <CustomSelect
          extraLabel="Bank Name"
          name="bankName"
          handleChange={(e, a) => handleChange(e, a)}
          defaultValue={details?.bankName}
          options={[
            { label: "Remote", value: "Remote" },
            { label: "Onsite", value: "Onsite" },
            { label: "Hybrid", value: "Hybrid" },
          ]}
          control={control}
        />
        <CustomInputField
          extraLabel="Account Number"
          type="text"
          label=" "
          placeholder="Enter Account Number"
          name="accountNumber"
          defaultValue={details?.accountNumber}
          onChange={(e: any) => handleInputChange(e)}
        />
        <CustomInputField
          extraLabel="Account Name"
          type="text"
          label=" "
          placeholder="Enter Account Name"
          name="accountName"
          defaultValue={details?.accountName}
          onChange={(e: any) => handleInputChange(e)}
        />
      </div>
      <div className="border-[0.5px] w-full md:max-w-[520px] border-[#EAECF0] mt-1.5 "></div>
      <div className="flex flex-col gap-8 w-full">
        <p className="text-[16px] leading-[24px] font-[700] text-[#101828] ">
          Others
        </p>
        <CustomInputField
          extraLabel="Taxpayer’s Identification Number"
          type="text"
          label=" "
          placeholder="Enter TIN"
          name="tin"
          defaultValue={details?.tin}
          onChange={(e: any) => handleInputChange(e)}
        />
        <CustomInputField
          extraLabel="Pension Account Number"
          type="text"
          label=" "
          placeholder="Enter Pension Account Number"
          name="pensionAccountNumber"
          defaultValue={details?.pensionAccountNumber}
          onChange={(e: any) => handleInputChange(e)}
        />
        <CustomInputField
          extraLabel="NHF Number"
          type="text"
          label=" "
          placeholder="Enter NHF Number"
          name="nhfNumber"
          defaultValue={details?.nhfNumber}
          onChange={(e: any) => handleInputChange(e)}
        />
      </div>
    </div>
  );
};

export default AccountInfo;
