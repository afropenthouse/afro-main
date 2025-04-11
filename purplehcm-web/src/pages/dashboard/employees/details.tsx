import React from "react";
import AuthenticatedLayout from "../../../../views/components/Layout/AuthenticatedLayout";
import { useRouter } from "next/router";
import Image from "next/image";
import BackIcon from "../../../../views/assets/images/black-arrow-left.svg";
import EmployeeImage from "../../../../views/assets/images/employee-image.svg";
import DesignationIcon from "../../../../views/assets/images/designation-icon.svg";
import MailIcon from "../../../../views/assets/images/mail-icon.svg";
import EditIcon from "../../../../views/assets/images/edit-profile-icon.svg";
import ActiveProfileIcon from "../../../../views/assets/images/active-profile-icon.svg";
import ProfileIcon from "../../../../views/assets/images/profile-icon.svg";
import CompanyIcon from "../../../../views/assets/images/company-rep-icon.svg";
import { PurpleButton } from "../../../../views/components/Button/Button";
import Attendance from "../../../../views/components/EmployeeManagementComponent/EmployeeDetails/Attendance";
import ProfileTab from "../../../../views/components/EmployeeManagementComponent/EmployeeDetails/ProfileTab/ProfileTab";
import AddNewEmployee from "../../../../views/components/EmployeeManagementComponent/AddEmployee/AddNewEmployee";
import { useEmployeeDetails } from "../../../../views/hooks/useEmployeeDetails";
import PageLoaderModal from "../../../../views/components/Loader/PageLoaderModal";

const Details = () => {
  const router = useRouter();
  const { id, tab, pageQuery, edit }: any = router.query;
  const { data: employeeDetails, isLoading: employeeDetailsLoading } =
    useEmployeeDetails({
      id,
    });

  console.log(employeeDetails, "details");

  const handlePageQuery = (
    tab?: string,
    pageQuery?: string,
    edit?: boolean
  ) => {
    router.push({
      pathname: "/dashboard/employees/details",
      query: { id: id, tab, pageQuery, edit },
    });
  };

  return (
    <>
      {(!edit || edit === "" || edit === "false") &&
        (employeeDetailsLoading ? (
          <div></div>
        ) : (
          <AuthenticatedLayout
            pageTitle={
              <div
                className="flex gap-[2px] items-center cursor-pointer w-fit"
                onClick={() => router.back()}
              >
                <Image src={BackIcon} alt="back-icon" />
                <p className="text-[16px] font-[500] ">Back</p>
              </div>
            }
          >
            <div className="flex flex-col gap-8">
              <div className="flex justify-between items-start pr-[30px] ">
                <div className="flex gap-4 items-center">
                  <div className="w-[100px] h-[100px] rounded-[10px] bg-purpleBlack overflow-hidden ">
                    <img src={employeeDetails?.photoUrl} alt="employee" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <p className="text-[24px] font-[700] leading-8 text-[#16151C] ">
                      {employeeDetails?.firstName +
                        " " +
                        employeeDetails?.lastName}
                    </p>
                    <div className="flex items-center gap-[10px] ">
                      <Image src={DesignationIcon} alt="designation" />
                      <p className="text-[16px] font-[500] leading-6 text-[#16151C] ">
                        {employeeDetails?.jobRoles
                          ? employeeDetails?.jobRoles?.map(
                              (role: any) => role?.title + ","
                            )
                          : "N/A"}
                      </p>
                    </div>
                    <div className="flex items-center gap-[10px] ">
                      <Image src={MailIcon} alt="mail" />
                      <p className="text-[16px] font-[500] leading-6 text-[#16151C] ">
                        {employeeDetails?.email}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-[52px]">
                  <div className="cursor-pointer flex gap-2.5 items-center">
                    <Image src={CompanyIcon} alt="mail" />
                    <p className="text-[16px] font-[900] leading-6 text-[#16151C] ">
                      RECODER LTD
                    </p>
                  </div>
                  <PurpleButton
                    title={"Edit Profile"}
                    beforeIcon={EditIcon}
                    className=""
                    onClick={() => handlePageQuery(tab, pageQuery, true)}
                  />
                </div>
              </div>
              <div className="pt-2 lg:pr-15 flex gap-9 border-[1px] border-t-[#A2A1A833] border-b-transparent border-x-transparent w-full">
                <div className="flex flex-col h-fit rounded-[10px] overflow-hidden max-w-[240px] w-full border-[1px] border-[#A2A1A833] ">
                  <div
                    className={`flex items-center px-5 py-4 gap-[10px] ${
                      (tab === undefined || tab === "profile") && "bg-[#9982D9]"
                    }`}
                    onClick={() => {
                      handlePageQuery("profile");
                    }}
                  >
                    <Image
                      src={
                        tab === undefined || tab === "profile"
                          ? ActiveProfileIcon
                          : ProfileIcon
                      }
                      alt="profile-icon"
                    />
                    <p
                      className={`text-[16px] font-[500] leading-6  ${
                        tab === undefined || tab === "profile"
                          ? "text-[#FFFFFF]"
                          : "text-[#16151C]"
                      }`}
                    >
                      Profile
                    </p>
                  </div>
                  <div
                    className={`flex items-center px-5 py-4 gap-[10px] ${
                      tab === "attendance" && "bg-[#9982D9]"
                    }`}
                    onClick={() => {
                      handlePageQuery("attendance");
                    }}
                  >
                    <Image
                      src={
                        tab === "attendance" ? ActiveProfileIcon : ProfileIcon
                      }
                      alt="attendance-icon"
                    />
                    <p
                      className={`text-[16px] font-[500] leading-6  ${
                        tab === "attendance"
                          ? "text-[#FFFFFF]"
                          : "text-[#16151C]"
                      }`}
                    >
                      Attendance
                    </p>
                  </div>
                </div>
                {(tab === undefined || tab === "profile") && (
                  <ProfileTab
                    pageQuery={pageQuery}
                    handlePageQuery={handlePageQuery}
                    pageDetails={employeeDetails}
                    // pageDetailsLoading={employeeDetails}
                  />
                )}
                {tab === "attendance" && <Attendance />}
              </div>
            </div>
          </AuthenticatedLayout>
        ))}
      {(edit || edit === "true") && <AddNewEmployee isEdit />}
      {employeeDetailsLoading && <PageLoaderModal />}
    </>
  );
};

export default Details;
