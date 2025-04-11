import React, { Dispatch, SetStateAction, useRef, useState } from "react";
import {
  OutlineButton,
  PrimaryButton,
  PurpleButton,
} from "../../Button/Button";
import CustomInputField from "../../CustomHTMLElements/CustomInputField";
import CustomSelect from "../../CustomHTMLElements/CustomSelect";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import Image from "next/image";
import { useRouter } from "next/router";

import UploadIcon from "../../../assets/images/add-photo-icon.svg";
import MoreIcon from "../../../assets/images/more-icon.svg";
import { toast } from "react-toastify";
import { convertToBase64 } from "../../../helpers/convertToBase64";
import AllowanceModal from "./Modals/AllowanceModal";
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";
import DeleteModal from "./Modals/DeleteModal";
import DeductionModal from "./Modals/DeductionModal";

const Compensation = ({
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
  const router = useRouter();
  const { control } = useForm();
  const { t: translate } = useTranslation("");
  const fileInputRef = useRef<any>(null);
  const [allowanceModal, setAllowanceModal] = useState(false);
  const [deductionModal, setDeductionModal] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [selectedData, setSelectedData] = useState({});
  const [deleteTitle, setDeleteTitle] = useState("");
  const [deleteDescription, setDeleteDescription] = useState("");
  const [deleteField, setDeleteField] = useState("");

  const handleBrowseClick = () => {
    // Trigger the file input click event
    fileInputRef.current.click();
  };

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
    <>
      <div className="flex items-center justify-center pt-[74px] pb-[100px] lg:py-[144px] flex-col gap-[16px] lg:gap-[32px] ">
        <div className="flex flex-col gap-4 lg:gap-8 w-full md:max-w-[520px] p-4 border border-[#D0D5DD] rounded-[12px] ">
          <div className="flex flex-col gap-4 p-4 rounded-[10px] bg-[#F9FAFB] border-[1px] border-[#D0D5DD] w-full ">
            <p className="text-[14px] leading-[20px] font-[700] text-[#475467] ">
              Pay Type
            </p>
            <ul className="grid grid-cols-2 gap-4 w-full">
              <li>
                <input
                  type="radio"
                  id="salary"
                  name="payType"
                  value="Salary"
                  //   defaultChecked={details?.payType === "Salary" && false}
                  className="hidden peer"
                  onChange={handleRadioChange}
                />
                <label
                  htmlFor="salary"
                  className="flex gap-[12px] w-full items-center px-3 py-4 bg-[#FCFCFD] border border-[#EAECF0] rounded-[12px] cursor-pointer peer-checked:border-primaryColor"
                >
                  <div
                    className={`w-[18px] h-[18px] border-[1px] ${
                      details?.payType === "Salary"
                        ? "border-[#E7EBFC] bg-[#E7EBFC]"
                        : "border-[#D0D5DD]"
                    } rounded-[50%] flex justify-center items-center `}
                  >
                    {details?.payType === "Salary" && (
                      <div className="w-[12px] h-[12px] bg-primaryColor rounded-[50%] "></div>
                    )}
                  </div>
                  <div className="flex items-center gap-4">
                    <p className="text-[#475467] text-[14px] leading-5 font-[500] ">
                      Salary
                    </p>
                  </div>
                </label>
              </li>
              <li>
                <input
                  type="radio"
                  id="wages"
                  name="payType"
                  value="Wages"
                  //   defaultChecked={details?.payType === "Wages" && true}
                  className="hidden peer"
                  onChange={handleRadioChange}
                />
                <label
                  htmlFor="wages"
                  className="flex gap-[12px] w-full items-center px-3 py-4 bg-[#FCFCFD] border border-[#EAECF0] rounded-[12px] cursor-pointer peer-checked:border-primaryColor"
                >
                  <div
                    className={`w-[18px] h-[18px] border-[1px] ${
                      details?.payType === "Wages"
                        ? "border-[#E7EBFC] bg-[#E7EBFC]"
                        : "border-[#D0D5DD]"
                    } rounded-[50%] flex justify-center items-center `}
                  >
                    {details?.payType === "Wages" && (
                      <div className="w-[12px] h-[12px] bg-primaryColor rounded-[50%] "></div>
                    )}
                  </div>
                  <div className="flex items-center gap-4">
                    <p className="text-[#475467] text-[14px] leading-5 font-[500] ">
                      Wages
                    </p>
                  </div>
                </label>
              </li>
            </ul>

            <CustomInputField
              extraLabel="Actual Gross Amount"
              type="text"
              label=" "
              hasIcon={"₦"}
              placeholder="0.00"
              name="actualGrossAmount"
              defaultValue={details?.actualGrossAmount}
              onChange={(e: any) => handleInputChange(e)}
            />
          </div>
          <div className="flex flex-col gap-6 w-full">
            <div className="flex flex-col gap-4 p-4 rounded-[10px] border-[1px] border-[#D0D5DD] w-full ">
              <div className="flex justify-between items-center">
                <p className="text-[14px] leading-[20px] font-[500] text-[#344054] ">
                  Add allowances directly
                </p>
                <div className="flex items-center justify-center bg-gray-100">
                  {/* <!-- Toggle switch wrapper --> */}
                  <label
                    htmlFor="toggleSwitch"
                    className="relative inline-flex items-center cursor-pointer"
                  >
                    {/* <!-- Hidden checkbox input (the switch) --> */}
                    <input
                      type="checkbox"
                      id="toggleSwitch"
                      className="sr-only peer"
                      name="allowanceSwitch"
                      defaultChecked={details?.allowanceSwitch}
                      onChange={(e: any) => {
                        setDetails({
                          ...details,
                          allowanceSwitch: e.target?.checked,
                        });
                      }}
                    />

                    {/* <!-- Background of the switch --> */}
                    <div className="w-11 h-6 bg-gray-300 rounded-full peer-checked:bg-primaryColor peer-focus:ring-2 peer-focus:ring-primaryColor"></div>

                    {/* <!-- Circle of the switch --> */}
                    <div className="absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition-transform transform peer-checked:translate-x-5"></div>
                  </label>
                </div>
              </div>
              {details?.allowanceSwitch && (
                <div className="flex flex-col items-end gap-4 w-full">
                  {details?.allowance?.length > 0 && (
                    <div className="bg-[#F9FAFB] rounded-[12px] flex flex-col w-full ">
                      <div className="flex py-[14px] px-3 border-b border-[#EAECF0] w-[100%] gap-6 items-center ">
                        <p className="w-[40%] text-[14px] font-[500] leading-[14px] text-[#678196]">
                          Allowance Name
                        </p>
                        <p className="w-[55%] text-[14px] font-[500] leading-[14px] text-[#678196]">
                          Process As
                        </p>
                        <p className="w-[5%]"></p>
                      </div>
                      {details?.allowance?.map((allowance: any, index: any) => (
                        <div
                          className="flex  py-[14px] px-3 border-b border-[#EAECF0] last:border-b-transparent w-[100%] gap-6 items-center "
                          key={index}
                        >
                          <p className="w-[40%] text-[14px] font-[500] leading-[20px] text-[#344054]">
                            {allowance?.allowanceName}
                          </p>
                          <p className="w-[55%] text-[14px] font-[500] leading-[20px] text-[#344054]">
                            {allowance?.allowanceProcessAs}
                          </p>
                          <Popover className="relative w-[5%] flex">
                            <>
                              <PopoverButton
                                className={`group inline-flex items-center text-center rounded-md text-base font-normal text-[#4D5154] hover:text-opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-transparent`}
                              >
                                <Image src={MoreIcon} alt="" />
                              </PopoverButton>

                              <PopoverPanel className="absolute w-[125px] right-[-10px] z-50 p-1 top-[20px]  ">
                                <div className="rounded-[12px] border-[1px] border-[#F2F4F7] shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                                  <div className="flex flex-col bg-white">
                                    <div
                                      onClick={() => {
                                        setIsEdit(true);
                                        setSelectedData(allowance);
                                        setAllowanceModal(true);
                                      }}
                                      className="px-4 py-[10px] cursor-pointer"
                                    >
                                      <p className="font-[500] text-[12px] leading-[18px] text-[#475467]">
                                        Edit
                                      </p>
                                    </div>
                                    {/* <div
                                        // onClick={}
                                        className="px-4 py-[10px]"
                                      >
                                        <p className="font-[500] text-[12px] leading-[18px] text-[#BC6C17]">
                                          Deactivate
                                        </p>
                                      </div> */}
                                    <div
                                      onClick={() => {
                                        setDeleteModal(true);
                                        setDeleteDescription(
                                          "Are you sure you want to remove the allowance you’ve setup already?"
                                        );
                                        setDeleteTitle("Remove Allowance");
                                        setDeleteField("allowance");
                                        setSelectedData(allowance);
                                      }}
                                      className="px-4 py-[10px] cursor-pointer"
                                    >
                                      <p className="font-[500] text-[12px] leading-[18px] text-[#D92D20]">
                                        Remove
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </PopoverPanel>
                            </>
                          </Popover>
                        </div>
                      ))}
                    </div>
                  )}
                  <div
                    className="flex items-center gap-2 w-fit cursor-pointer "
                    onClick={() => {
                      setAllowanceModal(true);
                      setIsEdit(false);
                    }}
                  >
                    {/* <Image src={} alt="add" /> */}
                    <p className="text-[14px] leading-[20px] font-[500] text-[#6544C5] ">
                      Add allowance
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* //DEDUCTION STARTED */}
            <div className="flex flex-col gap-4 p-4 rounded-[10px] border-[1px] border-[#D0D5DD] w-full ">
              <div className="flex justify-between items-center">
                <p className="text-[14px] leading-[20px] font-[500] text-[#344054] ">
                  Add deductions directly
                </p>
                <div className="flex items-center justify-center bg-gray-100">
                  {/* <!-- Toggle switch wrapper --> */}
                  <label
                    htmlFor="deductionToggleSwitch"
                    className="relative inline-flex items-center cursor-pointer"
                  >
                    {/* <!-- Hidden checkbox input (the switch) --> */}
                    <input
                      type="checkbox"
                      id="deductionToggleSwitch"
                      className="sr-only peer"
                      name="deductionSwitch"
                      defaultChecked={details?.deductionToggleSwitch}
                      onChange={(e: any) => {
                        setDetails({
                          ...details,
                          deductionSwitch: e.target?.checked,
                        });
                      }}
                    />

                    {/* <!-- Background of the switch --> */}
                    <div className="w-11 h-6 bg-gray-300 rounded-full peer-checked:bg-primaryColor peer-focus:ring-2 peer-focus:ring-primaryColor"></div>

                    {/* <!-- Circle of the switch --> */}
                    <div className="absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition-transform transform peer-checked:translate-x-5"></div>
                  </label>
                </div>
              </div>
              {details?.deductionSwitch && (
                <div className="flex flex-col items-end gap-4 w-full">
                  {details?.deduction?.length > 0 && (
                    <div className="bg-[#F9FAFB] rounded-[12px] flex flex-col w-full ">
                      <div className="flex py-[14px] px-3 border-b border-[#EAECF0] w-[100%] gap-6 items-center ">
                        <p className="w-[40%] text-[14px] font-[500] leading-[14px] text-[#678196]">
                          Allowance Name
                        </p>
                        <p className="w-[55%] text-[14px] font-[500] leading-[14px] text-[#678196]">
                          Process As
                        </p>
                        <p className="w-[5%]"></p>
                      </div>
                      {details?.deduction?.map((deduction: any, index: any) => (
                        <div
                          className="flex  py-[14px] px-3 border-b border-[#EAECF0] last:border-b-transparent w-[100%] gap-6 items-center "
                          key={index}
                        >
                          <p className="w-[40%] text-[14px] font-[500] leading-[20px] text-[#344054]">
                            {deduction?.deductionName}
                          </p>
                          <p className="w-[55%] text-[14px] font-[500] leading-[20px] text-[#344054]">
                            {deduction?.deductionProcessAs}
                          </p>
                          <Popover className="relative w-[5%] flex">
                            <>
                              <PopoverButton
                                className={`group inline-flex items-center text-center rounded-md text-base font-normal text-[#4D5154] hover:text-opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-transparent`}
                              >
                                <Image src={MoreIcon} alt="" />
                              </PopoverButton>

                              <PopoverPanel className="absolute w-[125px] right-[-10px] z-50 p-1 top-[20px]  ">
                                <div className="rounded-[12px] border-[1px] border-[#F2F4F7] shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                                  <div className="flex flex-col bg-white">
                                    <div
                                      onClick={() => {
                                        setIsEdit(true);
                                        setSelectedData(deduction);
                                        setDeductionModal(true);
                                      }}
                                      className="px-4 py-[10px] cursor-pointer"
                                    >
                                      <p className="font-[500] text-[12px] leading-[18px] text-[#475467]">
                                        Edit
                                      </p>
                                    </div>
                                    {/* <div
                                        // onClick={}
                                        className="px-4 py-[10px]"
                                      >
                                        <p className="font-[500] text-[12px] leading-[18px] text-[#BC6C17]">
                                          Deactivate
                                        </p>
                                      </div> */}
                                    <div
                                      onClick={() => {
                                        setDeleteModal(true);
                                        setDeleteDescription(
                                          "Are you sure you want to remove the deduction you’ve setup already?"
                                        );
                                        setDeleteTitle("Remove Deduction");
                                        setDeleteField("deduction");
                                        setSelectedData(deduction);
                                      }}
                                      className="px-4 py-[10px] cursor-pointer"
                                    >
                                      <p className="font-[500] text-[12px] leading-[18px] text-[#D92D20]">
                                        Remove
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </PopoverPanel>
                            </>
                          </Popover>
                        </div>
                      ))}
                    </div>
                  )}
                  <div
                    className="flex items-center gap-2 w-fit cursor-pointer "
                    onClick={() => {
                      setDeductionModal(true);
                      setIsEdit(false);
                    }}
                  >
                    {/* <Image src={} alt="add" /> */}
                    <p className="text-[14px] leading-[20px] font-[500] text-[#6544C5] ">
                      Add deduction
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="border-[0.5px] w-full md:max-w-[520px] border-[#EAECF0] "></div>
        <div className="flex justify-between items-center max-w-[520px] w-full">
        <PurpleButton title={"Save Changes"} className="" />
        <div></div>
        </div>
      </div>
      <div className="lg:hidden w-full flex gap-3 justify-center items-center p-4 fixed bottom-0 shadow-premium bg-[#ffffff] border-[1px] border-t-[#EAECF0]   ">
        <OutlineButton
          title={translate("entityAddressAnotherEntity")}
          className="w-full py-[9px] px-6 rounded-[12px] "
          //   onClick={() => handlePageQuery("legal-details")}
        />
        <PrimaryButton
          title={translate("entityAddressButtonText")}
          className="w-full py-2.5 px-6 rounded-[12px] "
          onClick={() => setSetupStep(setupStep + 1)}
          //   disabled={
          //     !details?.entityEmail ||
          //     !details?.entityRegisteredAddress ||
          //     !details?.entityCountry ||
          //     !details?.entityState ||
          //     !details?.companyLinkedInUrl ||
          //     !details?.websiteUrl ||
          //     !details?.zipCode
          //   }
        />
      </div>
      {allowanceModal && (
        <AllowanceModal
          setDetails={setDetails}
          closeModal={setAllowanceModal}
          showModal={allowanceModal}
          details={details}
          isEdit={isEdit}
          selectedDetails={selectedData}
          setSelectedDetails={setSelectedData}
        />
      )}
      {deductionModal && (
        <DeductionModal
          setDetails={setDetails}
          closeModal={setDeductionModal}
          showModal={deductionModal}
          details={details}
          isEdit={isEdit}
          selectedDetails={selectedData}
          setSelectedDetails={setSelectedData}
        />
      )}
      {deleteModal && (
        <DeleteModal
          closeModal={setDeleteModal}
          details={details}
          selectedDetails={selectedData}
          setDetails={setDetails}
          setSelectedDetails={setSelectedData}
          showModal={deleteModal}
          title={deleteTitle}
          description={deleteDescription}
          field={deleteField}
        />
      )}
    </>
  );
};

export default Compensation;
