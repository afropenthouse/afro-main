import React, { useEffect, useState } from "react";
import PersonalInformation from "./PersonalInformation";
import ProfessionalInformation from "./ProfessionalInformation";
import Documents from "./Documents";
import Preview from "./Preview";
import Image from "next/image";
import { PurpleButton } from "../../Button/Button";
import ModalClose from "../../../assets/images/modal-close-icon.svg";
import CheckGreen from "../../../assets/images/green-check-circle.svg";
import ChevronLeft from "../../../assets/images/chevron-left.svg";
import { useRouter } from "next/router";
import Compensation from "./Compensation";
import AccountInfo from "./AccountInfo";
import Deduction from "./Deduction";
import ConfirmationModal from "./Modals/ConfirmationModal";
import SuccessfulModal from "./Modals/SuccessfulModal";
import { patchData, postData } from "../../../apis/apiMethods";
import CONFIG from "../../../helpers/config";
import { apiEndpoints } from "../../../apis/apiEndpoints";
import { toast } from "react-toastify";
import { errorHandler } from "../../../helpers/errorHander";
import { LOCAL_STORAGE_KEYS } from "../../../helpers/localStorageKeys";
import PageLoaderModal from "../../Loader/PageLoaderModal";
import { useEmployeeDetails } from "../../../hooks/useEmployeeDetails";
import { useAllWorkingDays } from "../../../hooks/useAllWorkingDays";

const AddNewEmployee = ({ isEdit }: { isEdit?: boolean }) => {
  const [details, setDetails] = useState<any>();
  const [setupStep, setSetupStep] = useState(1);
  const [confirmationModal, setConfirmationModal] = useState(false);
  const [successfulModal, setSuccessfulModal] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const { id } = router.query;
  const { data: workingDays, isLoading: workingDaysLoading } =
    useAllWorkingDays();
  const { data: employeeDetails, isLoading: employeeDetailsLoading } =
    useEmployeeDetails({
      id,
    });

  function getDaysByIds(ids: Array<string>) {
    if (workingDays) {
      return workingDays
        .filter((day: any) => ids?.includes(day?.id)) // Filter by IDs
        .map((day: any) => ({ label: day?.name, value: day?.id })); // Map to desired format
    }
  }

  console.log(employeeDetails, "employee");

  console.log(id, "id");

  console.log(details, "details");

  useEffect(() => {
    if (isEdit) {
      setDetails({
        firstName: employeeDetails?.firstName,
        lastName: employeeDetails?.lastName,
        workEmailAddress: employeeDetails?.email,
        phoneNumber: employeeDetails?.phoneNumber,
        employeeAvatar: employeeDetails?.photoUrl,
        gender: employeeDetails?.genderId || 0,
        department: employeeDetails?.departments?.map((dept: any) => {
          return { label: dept.name, value: dept.id };
        }),
        employeeJobRole: employeeDetails?.jobRoles?.map((role: any) => {
          return { label: role.name, value: role.id };
        }),
        dateOfBirth: employeeDetails?.dateOfBirth.slice(0, 10),
        maritalStatus: employeeDetails?.maritalStatus || 0,
        workType: employeeDetails?.workMode || 0,
        workingDays: getDaysByIds(employeeDetails?.workingDays),
        dateOfResumption: employeeDetails?.dateJoined.slice(0, 10),
        resume: employeeDetails?.cvUrl,
        offerLetter: employeeDetails?.offerLetterUrl,
        nationality: employeeDetails?.nationalityId,
        employeeId: employeeDetails?.employeeId,
        state: employeeDetails?.addresses[0]?.state,
        street: employeeDetails?.addresses[0]?.street,
        country: employeeDetails?.nationalityId,
        officeLocation: employeeDetails?.officeLocation,
        jobType: employeeDetails?.employmentTypeId,
      });
    }
  }, [employeeDetails]);

  const user =
    typeof window !== "undefined"
      ? localStorage?.getItem(LOCAL_STORAGE_KEYS.USER)
      : null;

  const users = user ? JSON.parse(user) : null;

  const onSubmit = async () => {
    setLoading(true);
    const reqBody = {
      firstName: details?.firstName,
      lastName: details?.lastName,
      email: details?.workEmailAddress,
      phoneNumber: details?.phoneNumber,
      photoUrl: details?.employeeAvatar,
      gender: details?.gender || 0,
      departments: details?.departmentId,
      newDepartments: details?.departmentName,
      employeeJobRoles: details?.selectedJobRoles,
      newEmployeeJobRoles: details?.newJobRoles,
      employmentType: details?.jobType,
      companyId: users?.companies[0]?.id,
      dateOfBirth: details?.dateOfBirth,
      maritalStatus: details?.maritalStatus || 0,
      workType: details?.workType || 0,
      workingDays: details?.workingDaysIds,
      dateJoined: details?.dateOfResumption,
      cvUrl: details?.resume,
      offerLetterUrl: details?.offerLetter,
      nationality: details?.nationality,
      employeeID: details?.employeeId,
      addresses: [
        {
          state: details?.state,
          street: details?.street,
          country: details?.country,
        },
      ],
      officeLocation: details?.officeLocation,

      // inviteOption: 0,
    };
    try {
      const res = await postData(
        `${CONFIG.BASE_URL}${apiEndpoints.CREATE_EMPLOYEE}`,
        reqBody
      );

      if (res.isSuccessful) {
        console.log(res);
        setDetails({ ...details, employeeUUID: res?.data?.id });
        setConfirmationModal(true);
      }
      if (!res.isSuccessful) {
        toast.error(res.data);
      }
    } catch (error) {
      toast.error(errorHandler(error));
    }
    setLoading(false);
  };

  const onEdit = async () => {
    setLoading(true);

    const reqBody = {
      firstName: details?.firstName,
      lastName: details?.lastName,
      email: details?.workEmailAddress,
      nationality: details?.nationality,
      employeeID: details?.employeeId,
      phoneNumber: details?.phoneNumber,
      photoUrl: details?.employeeAvatar,
      gender: details?.gender || 0,
      officeLocation: details?.officeLocation,
      companyId: users?.companies[0]?.id,
      dateOfBirth: details?.dateOfBirth,
      maritalStatus: details?.maritalStatus || 0,
      workMode: details?.workType || 0,
      dateJoined: details?.dateOfResumption,
      cvUrl: details?.resume,
      offerLetterUrl: details?.offerLetter,
    };
    try {
      const res = await patchData(
        `${CONFIG.BASE_URL}${apiEndpoints.GET_EMPLOYEE}/${id}`,
        reqBody
      );

      if (res.isSuccessful) {
        console.log(res);
        setSuccessfulModal(true);
      }
      if (!res.isSuccessful) {
        toast.error(res.data);
      }
    } catch (error) {
      toast.error(errorHandler(error));
    }
    setLoading(false);
  };

  console.log(isUploading, "isUp");

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
            {isEdit && setupStep === 1
              ? "Edit Personal info"
              : isEdit && setupStep === 2
              ? "Edit Professional info"
              : isEdit && setupStep === 3
              ? "Update Document"
              : "Add Employee"}
          </p>
        </div>
        {!isEdit && (
          <div className="hidden lg:flex items-center gap-1">
            <div
              className={`flex items-center gap-2 px-4 rounded-[12px] py-[10px] cursor-pointer ${
                setupStep === 1 && "bg-[#F2F4F7]"
              } `}
              onClick={() => setSetupStep(1)}
            >
              {details?.firstStepCompleted ? (
                <Image src={CheckGreen} alt="check-green" />
              ) : (
                <div className="h-5 w-5 rounded-[50%] border-[1px] border-[#EAECF0] bg-purpleWhite flex items-center justify-center text-[12px] font-[500] text-[#667085] ">
                  1
                </div>
              )}

              <p
                className={`text-[14px] leading-5 font-[500] ${
                  setupStep === 1 ? "text-[#6544C5]" : "text-[#667085]"
                } `}
              >
                Personal Information
              </p>
            </div>
            <Image src={ChevronLeft} alt="chevron-left" />

            <div
              className={`flex items-center gap-2 px-4 rounded-[12px] py-[10px] cursor-pointer ${
                setupStep === 2 && "bg-[#F2F4F7]"
              } `}
              onClick={details?.firstStepCompleted && (() => setSetupStep(2))}
            >
              {details?.secondStepCompleted ? (
                <Image src={CheckGreen} alt="check-green" />
              ) : (
                <div className="h-5 w-5 rounded-[50%] border-[1px] border-[#EAECF0] bg-purpleWhite flex items-center justify-center text-[12px] font-[500] text-[#667085] ">
                  2
                </div>
              )}

              <p
                className={`text-[14px] leading-5 font-[500] ${
                  setupStep === 2 ? "text-[#6544C5]" : "text-[#667085]"
                } `}
              >
                Professional Information
              </p>
            </div>
            <Image src={ChevronLeft} alt="chevron-left" />
            {/* <div className="flex items-center gap-2 px-4 rounded-[12px] py-[10px] ">
            <div className="h-5 w-5 rounded-[50%] border-[1px] border-[#EAECF0] bg-purpleWhite flex items-center justify-center text-[12px] font-[500] text-[#667085] ">
              3
            </div>
            <p className="text-[14px] leading-5 font-[500] text-[#667085]">
              Compensation
            </p>
          </div>
          <Image src={ChevronLeft} alt="chevron-left" />
          <div className="flex items-center gap-2 px-4 rounded-[12px] py-[10px] ">
            <div className="h-5 w-5 rounded-[50%] border-[1px] border-[#EAECF0] bg-purpleWhite flex items-center justify-center text-[12px] font-[500] text-[#667085] ">
              4
            </div>
            <p className="text-[14px] leading-5 font-[500] text-[#667085]">
              Account Info
            </p>
          </div>
          <Image src={ChevronLeft} alt="chevron-left" />
          <div className="flex items-center gap-2 px-4 rounded-[12px] py-[10px] ">
            <div className="h-5 w-5 rounded-[50%] border-[1px] border-[#EAECF0] bg-purpleWhite flex items-center justify-center text-[12px] font-[500] text-[#667085] ">
              5
            </div>
            <p className="text-[14px] leading-5 font-[500] text-[#667085]">Deduction</p>
          </div> */}
            {/* <Image src={ChevronLeft} alt="chevron-left" /> */}
            <div
              className={`flex items-center gap-2 px-4 rounded-[12px] py-[10px] cursor-pointer ${
                setupStep === 3 && "bg-[#F2F4F7]"
              } `}
              onClick={details?.secondStepCompleted && (() => setSetupStep(3))}
            >
              {details?.thirdStepCompleted ? (
                <Image src={CheckGreen} alt="check-green" />
              ) : (
                <div className="h-5 w-5 rounded-[50%] border-[1px] border-[#EAECF0] bg-purpleWhite flex items-center justify-center text-[12px] font-[500] text-[#667085] ">
                  3
                </div>
              )}

              <p
                className={`text-[14px] leading-5 font-[500] ${
                  setupStep === 3 ? "text-[#6544C5]" : "text-[#667085]"
                } `}
              >
                Documents
              </p>
            </div>

            <Image src={ChevronLeft} alt="chevron-left" />
            <div
              className={`flex items-center gap-2 px-4 rounded-[12px] py-[10px] cursor-pointer ${
                setupStep === 4 && "bg-[#F2F4F7]"
              } `}
              onClick={details?.thirdStepCompleted && (() => setSetupStep(4))}
            >
              {details?.forthStepCompleted ? (
                <Image src={CheckGreen} alt="check-green" />
              ) : (
                <div className="h-5 w-5 rounded-[50%] border-[1px] border-[#EAECF0] bg-purpleWhite flex items-center justify-center text-[12px] font-[500] text-[#667085] ">
                  4
                </div>
              )}

              <p
                className={`text-[14px] leading-5 font-[500] ${
                  setupStep === 4 ? "text-[#6544C5]" : "text-[#667085]"
                } `}
              >
                Preview
              </p>
            </div>
          </div>
        )}
        <PurpleButton
          title={"Next"}
          disabled={
            isEdit
              ? false
              : (setupStep === 1 &&
                  (!details?.firstName ||
                    !details?.lastName ||
                    !details?.street ||
                    (!details?.gender && details?.gender !== 0) ||
                    !details?.nationality ||
                    isUploading)) ||
                (setupStep === 2 &&
                  (!details?.employeeId ||
                    (!details?.workType && details?.workType !== 0) ||
                    !details?.workEmailAddress ||
                    !details?.department ||
                    !details?.jobRoles ||
                    !details?.jobType ||
                    !details?.workingDays ||
                    !details?.dateOfResumption))
          }
          onClick={
            !isEdit && setupStep === 1
              ? () => {
                  setDetails({ ...details, firstStepCompleted: true });
                  setSetupStep(setupStep + 1);
                }
              : !isEdit && setupStep === 2
              ? () => {
                  // Restructure department
                  const departmentId: any = [];
                  const departmentName: any = [];

                  details?.department.forEach((item: any) => {
                    if (item.isSearch) {
                      departmentName.push(item.label);
                    } else {
                      departmentId.push(item.value);
                    }
                  });

                  // Restructure job roles
                  const selectedJobRoles: any = [];
                  const newJobRoles: any = [];

                  details?.jobRoles.forEach((item: any) => {
                    if (item.isSearch) {
                      newJobRoles.push({ title: item?.label });
                    } else {
                      selectedJobRoles.push({
                        title: item?.label,
                        id: item?.value,
                      });
                    }
                  });

                  // Restructure workingDays to only contain value
                  const workingDaysIds = details?.workingDays.map(
                    (day: any) => day.value
                  );
                  setDetails({
                    ...details,
                    departmentId,
                    departmentName,
                    selectedJobRoles,
                    newJobRoles,
                    workingDaysIds,
                    secondStepCompleted: true,
                  });
                  setSetupStep(setupStep + 1);
                }
              : !isEdit && setupStep === 3
              ? () => {
                  setDetails({ ...details, thirdStepCompleted: true });
                  setSetupStep(setupStep + 1);
                }
              : !isEdit && setupStep === 4
              ? onSubmit
              : isEdit && setupStep === 1
              ? () => {
                  setDetails({ ...details, firstStepCompleted: true });
                  setSetupStep(setupStep + 1);
                }
              : isEdit && setupStep === 2
              ? () => {
                  setDetails({ ...details, secondStepCompleted: true });
                  setSetupStep(setupStep + 1);
                }
              : onEdit
          }
          className="lg:px-8"
        />
      </div>
      {setupStep === 1 && (
        <PersonalInformation
          details={details}
          setDetails={setDetails}
          setSetupStep={setSetupStep}
          setupStep={setupStep}
          setIsUploading={setIsUploading}
          isEdit={isEdit}
        />
      )}
      {setupStep === 2 && (
        <ProfessionalInformation
          details={details}
          setDetails={setDetails}
          setSetupStep={setSetupStep}
          setupStep={setupStep}
          isEdit={isEdit}
        />
      )}
      {/* {setupStep === 3 && (
        <Compensation
          details={details}
          setDetails={setDetails}
          setSetupStep={setSetupStep}
          setupStep={setupStep}
        />
      )}
      {setupStep === 4 && (
        <AccountInfo
          details={details}
          setDetails={setDetails}
          setSetupStep={setSetupStep}
          setupStep={setupStep}
        />
      )}
      {setupStep === 5 && (
        <Deduction
          details={details}
          setDetails={setDetails}
          setSetupStep={setSetupStep}
          setupStep={setupStep}
        />
      )} */}
      {setupStep === 3 && (
        <Documents
          details={details}
          setDetails={setDetails}
          setSetupStep={setSetupStep}
          setupStep={setupStep}
        />
      )}
      {setupStep === 4 && (
        <Preview
          details={details}
          setDetails={setDetails}
          setSetupStep={setSetupStep}
          setupStep={setupStep}
        />
      )}
      {confirmationModal && (
        <ConfirmationModal
          details={details}
          setDetails={setDetails}
          closeModal={setConfirmationModal}
          showModal={confirmationModal}
        />
      )}
      {details?.isSuccessful && (
        <SuccessfulModal
          details={details}
          setDetails={setDetails}
          closeModal={setConfirmationModal}
          showModal={details?.isSuccessful}
        />
      )}
      {(loading || employeeDetailsLoading) && <PageLoaderModal />}
      {successfulModal && (
        <SuccessfulModal
          closeModal={setSuccessfulModal}
          showModal={successfulModal}
          title="Updated Successfully"
          subTitle="Account has been updated successfully "
        />
      )}
    </>
  );
};

export default AddNewEmployee;
