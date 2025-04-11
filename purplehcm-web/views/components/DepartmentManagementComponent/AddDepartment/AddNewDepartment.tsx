import React, { useState } from "react";
import Image from "next/image";
import {
  OutlineButton,
  PrimaryButton,
  PurpleButton,
} from "../../Button/Button";
import ModalClose from "../../../assets/images/modal-close-icon.svg";
import CheckGreen from "../../../assets/images/green-check-circle.svg";
import ChevronLeft from "../../../assets/images/chevron-left.svg";
import { useRouter } from "next/router";
import ConfirmationModal from "./Modals/SuccessfulModal";
import CustomInputField from "../../CustomHTMLElements/CustomInputField";
import CustomSelect from "../../CustomHTMLElements/CustomSelect";
import { useForm } from "react-hook-form";
import SuccessfulModal from "./Modals/SuccessfulModal";
import { postData } from "../../../apis/apiMethods";
import CONFIG from "../../../helpers/config";
import { apiEndpoints } from "../../../apis/apiEndpoints";
import { toast } from "react-toastify";
import { errorHandler } from "../../../helpers/errorHander";
import { LOCAL_STORAGE_KEYS } from "../../../helpers/localStorageKeys";
import PageLoaderModal from "../../Loader/PageLoaderModal";

type Unit = {
  name: string;
  lead: string;
};

const AddNewDepartment = ({ isEdit }: { isEdit?: boolean }) => {
  const { control } = useForm();
  const [details, setDetails] = useState<any>();
  const [setupStep, setSetupStep] = useState(1);
  const [isSuccessful, setIsSuccessful] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const [units, setUnits] = useState<Unit[]>([{ name: "", lead: "" }]);

  const user =
    typeof window !== "undefined"
      ? localStorage?.getItem(LOCAL_STORAGE_KEYS.USER)
      : null;

  const users = user ? JSON.parse(user) : null;

  // Function to handle adding a new unit
  const addUnit = () => {
    setUnits([...units, { name: "", lead: "" }]);
  };

  // Function to handle unit input changes
  const handleUnitChange = (
    index: number,
    field: keyof Unit,
    value: string
  ) => {
    const updatedUnits = units.map((unit, i) =>
      i === index ? { ...unit, [field]: value } : unit
    );
    setUnits(updatedUnits);
  };

  const handleSelectChange = (index: number, selectedOption: any) => {
    handleUnitChange(index, "lead", selectedOption.value);
  };

  // Optional: Function to remove a unit
  const removeUnit = (index: number) => {
    setUnits(units.filter((_, i) => i !== index));
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const departmentData = {
      units,
    };
    console.log(departmentData);
    // You can handle your form submission logic here
  };

  const onSubmit = async () => {
    setLoading(true);
    const reqBody = {
      name: details?.departmentName,
      // departmentId: "string",
      companyId: users?.companies[0]?.id,
      // leaderEmployeeId: "string",
    };
    try {
      const res = await postData(
        `${CONFIG.BASE_URL}${apiEndpoints.CREATE_DEPARTMENT}`,
        reqBody
      );

      if (res.isSuccessful) {
        console.log(res);
        // setDetails({ ...details, employeeUUID: res?.data?.id });
        setIsSuccessful(true);
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
    <>
      <div className="w-full flex justify-between items-center px-[16px] py-[18px] lg:pt-6 lg:pb-7 lg:px-10 fixed top-0 z-[50] bg-[#ffffff] border-[1px] border-b-[#EAECF0] ">
        <div className="flex gap-4 items-center">
          <Image
            src={ModalClose}
            alt="modal-close"
            className="cursor-pointer"
            onClick={() => router.back()}
          />
          <div className="w-[1.5px] h-6 bg-[#EAECF0]"></div>
          <p className="text-[18px] font-[700] leading-7 text-[#0A0A0B] ">
            Add Department
          </p>
        </div>

        <PurpleButton
          title={"Submit"}
          disabled={!details?.departmentName}
          onClick={onSubmit}
          className="lg:px-8"
        />
      </div>
      <div className="flex items-center justify-center pt-[74px] pb-[100px] lg:py-[144px] flex-col gap-[16px] lg:gap-[50px] ">
        <div className="flex flex-col gap-4 lg:gap-6 w-full md:max-w-[500px] px-4 lg:px-0 ">
          <CustomInputField
            extraLabel="Department Name"
            type="text"
            label=" "
            placeholder="Enter Name"
            name="departmentName"
            defaultValue={details?.departmentName}
            onChange={(e: any) => handleInputChange(e)}
          />
          <CustomSelect
            extraLabel="Department Lead (s) (Optional)"
            name="departmentLeads"
            handleChange={(e, a) => handleChange(e, a)}
            defaultValue={details?.departmentLeads}
            options={[
              { label: "Remote", value: "Remote" },
              { label: "Onsite", value: "Onsite" },
              { label: "Hybrid", value: "Hybrid" },
            ]}
            control={control}
          />
          {units.map((unit, index) => (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4" key={index}>
              <CustomInputField
                extraLabel="Unit Under Department (Optional)"
                type="text"
                label=" "
                placeholder="Enter Name"
                // name="departmentName"
                value={unit.name}
                // defaultValue={details?.departmentName}
                onChange={(e: any) =>
                  handleUnitChange(index, "name", e.target.value)
                }
              />
              <CustomSelect
                extraLabel="Unit Lead (Optional)"
                name={`unitLead_${index}`}
                handleChange={(e, a) => handleSelectChange(index, e)}
                defaultValue={unit.lead}
                options={[
                  { label: "Remote", value: "Remote" },
                  { label: "Onsite", value: "Onsite" },
                  { label: "Hybrid", value: "Hybrid" },
                ]}
                control={control}
              />
            </div>
          ))}
          <OutlineButton
            title={"+ Add Unit"}
            onClick={addUnit}
            className="w-fit lg:rounded-[12px] lg:py-2 lg:px-4  "
          />
          {/* <h2>Units</h2>
          {units.map((unit, index) => (
            <div key={index}>
              <div>
                <label>Unit Name:</label>
                <input
                  type="text"
                  value={unit.name}
                  onChange={(e) =>
                    handleUnitChange(index, "name", e.target.value)
                  }
                  required
                />
              </div>
              <div>
                <label>Unit Lead:</label>
                <input
                  type="text"
                  value={unit.lead}
                  onChange={(e) =>
                    handleUnitChange(index, "lead", e.target.value)
                  }
                  required
                />
              </div>
              <button type="button" onClick={() => removeUnit(index)}>
                Remove Unit
              </button>
            </div>
          ))}

          <button type="button" onClick={addUnit}>
            Add More Unit
          </button>
          <br />
          <button type="submit">Submit</button> */}
        </div>
      </div>
      <div className="hidden w-full gap-3 justify-center items-center p-4 fixed bottom-0 shadow-premium bg-[#ffffff] border-[1px] border-t-[#EAECF0]  ">
        <OutlineButton
          title="Back"
          className="w-full py-[9px] px-6 rounded-[12px] "
          //   onClick={() => handlePageQuery("legal-details")}
        />
        <PrimaryButton
          title="Submit"
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
      {isSuccessful && (
        <SuccessfulModal
          closeModal={setIsSuccessful}
          details={details}
          setDetails={setDetails}
          showModal={isSuccessful}
        />
      )}
      {loading && <PageLoaderModal />}
    </>
  );
};

export default AddNewDepartment;
