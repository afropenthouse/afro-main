import React, {
  Dispatch,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from "react";
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
import ModalClose from "../../../assets/images/modal-close-icon.svg";
import CheckGreen from "../../../assets/images/green-check-circle.svg";
import ChevronLeft from "../../../assets/images/filter-chevron-down.svg";
import SearchIcon from "../../../assets/images/filter-search.svg";
import { toast } from "react-toastify";
import { convertToBase64 } from "../../../helpers/convertToBase64";
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";
import { useAllDepartment } from "../../../hooks/useAllDepartment";
import model from "../../../helpers/model";
import CustomCheckboxInput from "../../CustomHTMLElements/CustomCheckboxInput";
import PageLoaderModal from "../../Loader/PageLoaderModal";
import CONFIG from "../../../helpers/config";
import { apiEndpoints } from "../../../apis/apiEndpoints";
import { postData } from "../../../apis/apiMethods";
import { errorHandler } from "../../../helpers/errorHander";
import { LOCAL_STORAGE_KEYS } from "../../../helpers/localStorageKeys";
import { useAllWorkMode } from "../../../hooks/useAllWorkMode";
import { useAllWorkingDays } from "../../../hooks/useAllWorkingDays";
import { useAllJobRoles } from "../../../hooks/useAllJobRoles";
import { useAllJobType } from "../../../hooks/useAllJobType";

const ProfessionalInformation = ({
  details,
  setupStep,
  setDetails,
  setSetupStep,
  isEdit,
}: {
  setSetupStep: Dispatch<SetStateAction<number>>;
  setupStep: any;
  details: any;
  setDetails: any;
  isEdit: any;
}) => {
  const router = useRouter();
  const { control } = useForm();
  const { t: translate } = useTranslation("");
  const [departmentSearch, setDepartmentSearch] = useState("");
  const [jobRoleSearch, setJobRoleSearch] = useState("");
  const [addDepartmentLoading, setAddDepartmentLoading] = useState(false);
  const { data: workMode, isLoading: workModeLoading } = useAllWorkMode();
  const { data: jobRoles, isLoading: jobRolesLoading } = useAllJobRoles();
  const { data: jobType, isLoading: jobTypeLoading } = useAllJobType();
  const { data: workingDays, isLoading: workingDaysLoading } =
    useAllWorkingDays();
  const { data: department, isLoading: departmentIsLoading } = useAllDepartment(
    {}
  );
  const [departmentList, setDepartmentList] = useState<any>(
    details?.departmentList || []
  );
  const [jobRoleList, setJobRoleList] = useState<any>(
    details?.jobRoleList || []
  );
  const [workingDaysList, setWorkingDaysList] = useState<any>([]);

  console.log(department);

  useEffect(() => {
    setDepartmentList([
      ...departmentList,
      { label: departmentSearch, value: departmentSearch, isSearch: true },
    ]);
  }, [departmentSearch]);

  useEffect(() => {
    setJobRoleList([
      ...jobRoleList,
      { label: jobRoleSearch, value: jobRoleSearch, isSearch: true },
    ]);
  }, [jobRoleSearch]);

  useEffect(() => {
    setDetails({ ...details, departmentList, jobRoleList });
  }, [departmentList, jobRoleList]);

  console.log(departmentList, "depat");

  const user =
    typeof window !== "undefined"
      ? localStorage?.getItem(LOCAL_STORAGE_KEYS.USER)
      : null;

  const users = user ? JSON.parse(user) : null;

  console.log(users, "user");

  useEffect(() => {
    if (workingDays?.length > 0) {
      setWorkingDaysList(model(workingDays, "name", "id"));
    }
  }, [workingDays]);

  useEffect(() => {
    if (department?.length > 0) {
      setDepartmentList(model(department, "name", "id"));
    }
  }, [department]);

  useEffect(() => {
    if (jobRoles?.length > 0) {
      setJobRoleList(model(jobRoles, "title", "id"));
    }
  }, [jobRoles]);

  // Function to filter department based on searchQuery
  const filteredDepartment = () => {
    if (!departmentSearch) {
      // If no search query, return the original department
      return departmentList;
    }

    // Convert search query to lowercase for case-insensitive search
    const query = departmentSearch.toLowerCase();

    // Filter department based on search query
    return departmentList.filter((item: any) =>
      item["label"].toLowerCase().includes(query)
    );
  };

  const departmentDataToMap = filteredDepartment();

  const filteredJobRole = () => {
    if (!jobRoleSearch) {
      // If no search query, return the original department
      return jobRoleList;
    }

    // Convert search query to lowercase for case-insensitive search
    const query = jobRoleSearch.toLowerCase();

    // Filter department based on search query
    return jobRoleList.filter((item: any) =>
      item["label"].toLowerCase().includes(query)
    );
  };

  const jobRolesDataToMap = filteredJobRole();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      setDetails({ ...details, [name]: checked });
    } else {
      setDetails({ ...details, [name]: value });
    }
  };

  const handleChange = (target: any, name: any) => {
    if (name === "workType") {
      setDetails({
        ...details,
        [name]: target?.value,
        workTypeName: target?.label,
      });
    } else {
      setDetails({ ...details, [name]: target?.value });
    }
  };

  // Handle department checkbox change
  const handleCheckboxChange = (department: any) => {
    setDetails((prevDetails: any) => {
      const prevSelectedDepartment = prevDetails.department || [];

      const updatedDepartment = prevSelectedDepartment?.includes(department)
        ? prevSelectedDepartment?.filter((f: any) => f !== department) // Remove department if already selected
        : [...prevSelectedDepartment, department]; // Add department if not selected

      return {
        ...prevDetails,
        department: updatedDepartment,
      };
    });
  };

  // Handle job roles checkbox change
  const handleJobRoleCheckboxChange = (jobRoles: any) => {
    setDetails((prevDetails: any) => {
      const prevSelectedJobRoles = prevDetails.jobRoles || [];

      const updatedDepartment = prevSelectedJobRoles?.includes(jobRoles)
        ? prevSelectedJobRoles?.filter((f: any) => f !== jobRoles) // Remove jobRoles if already selected
        : [...prevSelectedJobRoles, jobRoles]; // Add jobRoles if not selected

      return {
        ...prevDetails,
        jobRoles: updatedDepartment,
      };
    });
  };

  // Check if a department is selected
  const isDepartmentSelected = (department: any) =>
    details?.department?.some(
      (dept: any) =>
        dept.label === department.label && dept.value === department.value
    );

  // Check if a jobRole is selected
  const isJobRoleSelected = (jobRole: any) =>
    details?.jobRoles?.some(
      (dept: any) =>
        dept.label === jobRole.label && dept.value === jobRole.value
    );

  const handleWorkingDaysCheckboxChange = (workingDays: any) => {
    setDetails((prevDetails: any) => {
      const prevSelectedWorkingDays = prevDetails.workingDays || [];

      const updatedWorkingDays = prevSelectedWorkingDays?.includes(workingDays)
        ? prevSelectedWorkingDays?.filter((f: any) => f !== workingDays) // Remove workingDays if already selected
        : [...prevSelectedWorkingDays, workingDays]; // Add workingDays if not selected

      return {
        ...prevDetails,
        workingDays: updatedWorkingDays,
      };
    });
  };

  const isWorkingDaysSelected = (workingDay: any) =>
    details?.workingDays?.some(
      (day: any) =>
        day.label === workingDay.label && day.value === workingDay.value
    );

  const exists = details?.workingDays?.some(
    (item: any) => item.label === "Monday" && item.value === 1
  );

  console.log(
    (details?.workingDays ?? [])?.includes({ label: "Monday", value: 1 }),
    "check"
  );

  console.log(details?.workingDays, "working");

  console.log(workingDaysList, "list");
  console.log(details, "detail");

  return (
    <>
      <div className="flex items-center justify-center pt-[74px] pb-[100px] lg:py-[144px] flex-col gap-[16px] lg:gap-[50px] ">
        <div className="flex flex-col gap-4 lg:gap-6 w-full md:max-w-[500px] px-4 lg:px-0 ">
          <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
            <CustomInputField
              extraLabel="Employee ID"
              type="text"
              label=" "
              placeholder="Enter Id"
              name="employeeId"
              defaultValue={details?.employeeId}
              onChange={(e: any) => handleInputChange(e)}
            />
            <CustomSelect
              extraLabel="Work Type"
              name="workType"
              handleChange={(e, a) => handleChange(e, a)}
              defaultValue={details?.workType}
              options={model(workMode, "name", "id")}
              control={control}
            />
          </div>
          <CustomInputField
            extraLabel="Work Email Address"
            type="text"
            label=" "
            placeholder="Enter email address"
            name="workEmailAddress"
            defaultValue={details?.workEmailAddress}
            onChange={(e: any) => handleInputChange(e)}
          />
          {!isEdit && (
            <>
              <Popover className="relative w-full ">
                {({ open, close }) => (
                  <>
                    <PopoverButton
                      className={`flex flex-col gap-1 w-full items-start -mt-1`}
                    >
                      <div className="text-[14px] text-center lg:text-[14px] font-[500] text-[#394753] ">
                        Select Department
                      </div>
                      <div className="flex items-center justify-between  py-[10.5px] px-[14px] w-full border border-[#D0D5DD] rounded-[12px] ">
                        <p
                          className={`text-[14px] leading-[14px] text-center lg:text-[14px] font-[500] lg:leading-[14px] ${
                            details?.department?.length > 0
                              ? "text-[#29343C]"
                              : "text-[#BFCBD4]"
                          } `}
                        >
                          {details?.department?.length > 0
                            ? details?.department?.map(
                                (department: any) => department?.label
                              ) + ","
                            : "Select"}
                        </p>
                        <Image
                          src={ChevronLeft}
                          alt="search-icon"
                          className={`${open ? "rotate-180" : "rotate-0"}`}
                        />
                      </div>
                    </PopoverButton>

                    <PopoverPanel className="absolute left-[0] top-[72px] z-50  w-full md:w-full rounded-[12px] border-[1px] border-[#EAECF0] bg-[#FFFFFF] flex flex-col shadow-sm overflow-scroll min-h-[120px] max-h-[280px]">
                      <div className="flex items-center gap-2 p-4  ">
                        <div className="rounded-[12px] flex items-center gap-2 py-2.5 px-4 w-full bg-[#F2F4F7]">
                          <Image src={SearchIcon} alt="search-icon" />
                          <input
                            type="text"
                            placeholder="Search Department"
                            defaultValue={departmentSearch}
                            onChange={(e) =>
                              setDepartmentSearch(e.target.value)
                            }
                            className="outline-none border-none text-[#101828] font-[500] text-[14px] bg-transparent leading-5 placeholder:text-[#667085] w-full p-0 focus:outline-none focus:ring-0 focus:border-none overflow-hidden "
                          />
                        </div>
                      </div>
                      <div className="flex flex-col">
                        {departmentDataToMap?.length > 0 ? (
                          departmentDataToMap?.map(
                            (detail: any, index: any) => (
                              <div
                                className="flex gap-3 items-center px-3 lg:px-4 py-2 cursor-pointer"
                                key={index}
                                onClick={() => handleCheckboxChange(detail)} // Handle the click on the detail name or container
                              >
                                <CustomCheckboxInput
                                  checked={isDepartmentSelected(detail)}
                                  onChange={() => handleCheckboxChange(detail)}
                                />
                                <p className="text-[12px] lg:text-[14px] font-[500] text-[#29343C] ">
                                  {detail?.label}
                                </p>
                              </div>
                            )
                          )
                        ) : (
                          <div className="px-4 flex items-center justify-between w-full ">
                            <p className="text-[12px] lg:text-[14px] font-[500] text-[#29343C]">
                              No matched data
                            </p>
                            {/* <p
                          className="text-[14px] font-[700] leading-5 text-[#6544C5] cursor-pointer "
                          onClick={onAddDepartment}
                        >
                          Add Department
                        </p> */}
                          </div>
                        )}
                      </div>
                    </PopoverPanel>
                  </>
                )}
              </Popover>

              <Popover className="relative w-full ">
                {({ open, close }) => (
                  <>
                    <PopoverButton
                      className={`flex flex-col gap-1 w-full items-start -mt-1`}
                    >
                      <div className="text-[14px] text-center lg:text-[14px] font-[500] text-[#394753] ">
                        Select Job Roles
                      </div>
                      <div className="flex items-center justify-between  py-[10.5px] px-[14px] w-full border border-[#D0D5DD] rounded-[12px] ">
                        <p
                          className={`text-[14px] leading-[14px] text-center lg:text-[14px] font-[500] lg:leading-[14px] ${
                            details?.jobRoles?.length > 0
                              ? "text-[#29343C]"
                              : "text-[#BFCBD4]"
                          } `}
                        >
                          {details?.jobRoles?.length > 0
                            ? details?.jobRoles?.map(
                                (jobRoles: any) => jobRoles?.label
                              ) + ","
                            : "Select"}
                        </p>
                        <Image
                          src={ChevronLeft}
                          alt="search-icon"
                          className={`${open ? "rotate-180" : "rotate-0"}`}
                        />
                      </div>
                    </PopoverButton>

                    <PopoverPanel className="absolute left-[0] top-[72px] z-50  w-full md:w-full rounded-[12px] border-[1px] border-[#EAECF0] bg-[#FFFFFF] flex flex-col shadow-sm overflow-scroll min-h-[120px] max-h-[280px]">
                      <div className="flex items-center gap-2 p-4  ">
                        <div className="rounded-[12px] flex items-center gap-2 py-2.5 px-4 w-full bg-[#F2F4F7]">
                          <Image src={SearchIcon} alt="search-icon" />
                          <input
                            type="text"
                            placeholder="Search Job Roles"
                            defaultValue={jobRoleSearch}
                            onChange={(e) => setJobRoleSearch(e.target.value)}
                            className="outline-none border-none text-[#101828] font-[500] text-[14px] bg-transparent leading-5 placeholder:text-[#667085] w-full p-0 focus:outline-none focus:ring-0 focus:border-none overflow-hidden "
                          />
                        </div>
                      </div>
                      <div className="flex flex-col">
                        {jobRolesDataToMap?.length > 0 ? (
                          jobRolesDataToMap?.map((detail: any, index: any) => (
                            <div
                              className="flex gap-3 items-center px-3 lg:px-4 py-2 cursor-pointer"
                              key={index}
                              onClick={() =>
                                handleJobRoleCheckboxChange(detail)
                              } // Handle the click on the detail name or container
                            >
                              <CustomCheckboxInput
                                checked={isJobRoleSelected(detail)}
                                onChange={() =>
                                  handleJobRoleCheckboxChange(detail)
                                }
                              />
                              <p className="text-[12px] lg:text-[14px] font-[500] text-[#29343C] ">
                                {detail?.label}
                              </p>
                            </div>
                          ))
                        ) : (
                          <div className="px-4 flex items-center justify-between w-full ">
                            <p className="text-[12px] lg:text-[14px] font-[500] text-[#29343C]">
                              No matched data
                            </p>
                            {/* <p
                          className="text-[14px] font-[700] leading-5 text-[#6544C5] cursor-pointer "
                          onClick={onAddDepartment}
                        >
                          Add Department
                        </p> */}
                          </div>
                        )}
                      </div>
                    </PopoverPanel>
                  </>
                )}
              </Popover>
              <Popover className="relative w-full ">
                {({ open, close }) => (
                  <>
                    <PopoverButton
                      className={`flex flex-col gap-1 w-full items-start -mt-1`}
                    >
                      <div className="text-[14px] text-center lg:text-[14px] font-[500] text-[#394753] ">
                        Select Working Days
                      </div>
                      <div className="flex items-center justify-between  py-[10.5px] px-[14px] w-full border border-[#D0D5DD] rounded-[12px] ">
                        <p
                          className={`text-[14px] leading-[14px] text-center lg:text-[14px] font-[500] lg:leading-[14px] ${
                            details?.workingDays?.length > 0
                              ? "text-[#29343C]"
                              : "text-[#BFCBD4]"
                          } `}
                        >
                          {details?.workingDays?.length > 0
                            ? details?.workingDays?.map(
                                (workingDays: any) => workingDays?.label
                              ) + " "
                            : "Select"}
                        </p>
                        <Image
                          src={ChevronLeft}
                          alt="search-icon"
                          className={`${open ? "rotate-180" : "rotate-0"}`}
                        />
                      </div>
                    </PopoverButton>

                    <PopoverPanel className="absolute left-[0] top-[72px] z-50  w-full md:w-full rounded-[12px] border-[1px] border-[#EAECF0] bg-[#FFFFFF] flex flex-col shadow-sm overflow-scroll min-h-[120px] max-h-[280px]">
                      <div className="flex flex-col">
                        {workingDaysList?.length > 0 ? (
                          workingDaysList?.map((detail: any, index: any) => (
                            <div
                              className="flex gap-3 items-center px-3 lg:px-4 py-2 cursor-pointer"
                              key={index}
                              onClick={() =>
                                handleWorkingDaysCheckboxChange(detail)
                              } // Handle the click on the detail name or container
                            >
                              <CustomCheckboxInput
                                checked={isWorkingDaysSelected(detail)}
                                onChange={() =>
                                  handleWorkingDaysCheckboxChange(detail)
                                }
                              />
                              <p className="text-[12px] lg:text-[14px] font-[500] text-[#29343C] ">
                                {detail?.label}
                              </p>
                            </div>
                          ))
                        ) : (
                          <div className="px-4 flex items-center justify-between w-full ">
                            <p className="text-[12px] lg:text-[14px] font-[500] text-[#29343C]">
                              No matched data
                            </p>
                            {/* <p
                          className="text-[14px] font-[700] leading-5 text-[#6544C5] cursor-pointer "
                          onClick={onAddDepartment}
                        >
                          Add Department
                        </p> */}
                          </div>
                        )}
                      </div>
                    </PopoverPanel>
                  </>
                )}
              </Popover>
              <CustomSelect
                extraLabel="Job Type"
                name="jobType"
                handleChange={(e, a) => handleChange(e, a)}
                defaultValue={details?.jobType}
                options={model(jobType, "name", "id")}
                control={control}
              />
            </>
          )}

          <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6 items-start">
            {/* <CustomSelect
              extraLabel="Select Unit (Optional)"
              name="unit"
              handleChange={(e, a) => handleChange(e, a)}
              defaultValue={details?.unit}
              options={[
                { label: "Engineering", value: "Engineering" },
                { label: "Design", value: "Design" },
              ]}
              control={control}
            /> */}

            {/* <CustomInputField
              extraLabel="Total Work Hours"
              type="text"
              label=" "
              placeholder="Enter working hours"
              name="workingHours"
              defaultValue={details?.workingHours}
              onChange={(e: any) => handleInputChange(e)}
            /> */}
          </div>
          <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
            <CustomInputField
              extraLabel="Date of Resumption"
              type="date"
              label=" "
              placeholder="Select date"
              name="dateOfResumption"
              defaultValue={details?.dateOfResumption}
              onChange={(e: any) => handleInputChange(e)}
            />
            <CustomInputField
              extraLabel="Office Location (Optional)"
              type="text"
              label=" "
              placeholder="Enter office location"
              name="officeLocation"
              defaultValue={details?.officeLocation}
              onChange={(e: any) => handleInputChange(e)}
            />
          </div>
        </div>
      </div>
      <div className="lg:hidden w-full flex gap-3 justify-center items-center p-4 fixed bottom-0 shadow-premium bg-[#ffffff] border-[1px] border-t-[#EAECF0]  ">
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
      {(departmentIsLoading ||
        addDepartmentLoading ||
        jobRolesLoading ||
        jobTypeLoading ||
        workModeLoading ||
        workingDaysLoading) && <PageLoaderModal />}
    </>
  );
};

export default ProfessionalInformation;
