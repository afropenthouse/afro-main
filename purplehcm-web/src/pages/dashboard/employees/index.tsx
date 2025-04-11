import React, { useState } from "react";
import AuthenticatedLayout from "../../../../views/components/Layout/AuthenticatedLayout";
import CustomInputField from "../../../../views/components/CustomHTMLElements/CustomInputField";
import SearchIcon from "../../../../views/assets/images/filter-search.svg";
import FilterChevDown from "../../../../views/assets/images/filter-chevron-down.svg";
import PeopleWhite from "../../../../views/assets/images/people-white.svg";
import PeoplePurple from "../../../../views/assets/images/people-purple.svg";
import MoreIcon from "../../../../views/assets/images/more-icon.svg";
import Image from "next/image";
import {
  OutlinePurpleButton,
  PurpleButton,
} from "../../../../views/components/Button/Button";
import { employeeData } from "../../../../views/helpers/data/Employee";
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";
import { ROUTES } from "../../../../views/helpers/routes";
import { useRouter } from "next/router";
import Pagination from "../../../../views/components/Pagination/Pagination";
import UploadBulkEmployee from "../../../../views/components/EmployeeManagementComponent/UploadBulkEmployee/UploadBulkEmployee";
import AddNewEmployee from "../../../../views/components/EmployeeManagementComponent/AddEmployee/AddNewEmployee";
import { useAllEmployee } from "../../../../views/hooks/useAllEmployee";
import PageLoaderModal from "../../../../views/components/Loader/PageLoaderModal";
import { useAllWorkMode } from "../../../../views/hooks/useAllWorkMode";
import { findNameById } from "../../../../views/helpers";
import { useAllJobType } from "../../../../views/hooks/useAllJobType";

const index = () => {
  const router = useRouter();
  const [postsPerPage, setPostsPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const { pageQuery } = router.query;
  const { data: workMode, isLoading: workModeLoading } = useAllWorkMode();
  const { data: jobType, isLoading: jobTypeLoading } = useAllJobType();
  const { data: employeeList, isLoading: employeeIsLoading } = useAllEmployee({
    page: 1,
    size: 10,
  });

  const handlePageQuery = (pageQuery: string, id?: string) => {
    router.push({
      pathname: "/dashboard/employees",
      query: { pageQuery, id },
    });
  };

  return (
    <>
      {pageQuery === "bulk-upload" && <UploadBulkEmployee />}
      {pageQuery === "add-employee" && <AddNewEmployee />}
      {pageQuery === "edit-employee" && <AddNewEmployee isEdit />}
      {(!pageQuery || pageQuery === "" || pageQuery === undefined) && (
        <>
          {employeeIsLoading ? (
            <AuthenticatedLayout pageTitle={"Employees"}>
              <div></div>
            </AuthenticatedLayout>
          ) : (
            <AuthenticatedLayout pageTitle={"Employees"}>
              <div className="flex flex-col gap-2 pt-[22px]  ">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <CustomInputField
                      type="text"
                      placeholder={"Search by name, ID"}
                      hasIcon={<Image src={SearchIcon} alt="search-icon" />}
                      style="w-[296px] h-[40px] w-full placeholder:text-[#475467] placeholder:text-[14px] text-[14px] leading-5 font-[500] rounded-[12px] pl-[30px] border-[#EAECF0] "
                      originalWidth
                    />
                    {/* <div className="flex items-center gap-2 px-[14px] py-[10px] border-[1px] border-purpleAsh rounded-[12px] "></div> */}
                    <Popover className="">
                      <>
                        <PopoverButton
                          className={`flex items-center gap-2 px-[14px] py-[10px] border-[1px] border-purpleAsh rounded-[12px] focus:outline-none focus-visible:ring-2 focus-visible:ring-transparent `}
                        >
                          <p className="text-[14px] leading-5 font-[500] text-[#475467]">
                            Status
                          </p>
                          <div className="flex px-[8px] border-[1px] border-[#EAECF0] rounded-[24px] ">
                            <p className="text-[12px] leading-[18px] font-[500] text-[#475467]">
                              2/2
                            </p>
                          </div>
                          <Image src={FilterChevDown} alt="chevron-down" />
                        </PopoverButton>

                        {/* <PopoverPanel className="absolute z-50  w-screen md:w-[200px] px-4 sm:px-2">
                  <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                    <div className="items-center grid gap-4 bg-white px-5 py-4">
                      <div
                        // onClick={() =>
                        //   router.push({
                        //     pathname: ROUTES.MOTOR_INSURANCE_CLAIM_DETAILS,
                        //     query: {
                        //       id: employee?.id,
                        //     },
                        //   })
                        // }
                        className="flex items-center"
                      >
                        <p className="pl-2">View Details</p>
                      </div>
                      <div
                        // onClick={() => handleMotorInsurancePopup(index)}
                        className="flex items-center"
                      >
                        <p className="pl-2 text-[16px] ">Continue Claim</p>
                      </div>
                    </div>
                  </div>
                </PopoverPanel> */}
                      </>
                    </Popover>
                  </div>
                  <div className="flex items-center gap-[14px]">
                    <OutlinePurpleButton
                      title={"Upload Bulk"}
                      beforeIcon={PeoplePurple}
                      onClick={() => handlePageQuery("bulk-upload")}
                    />
                    <PurpleButton
                      title={"Add Employee"}
                      beforeIcon={PeopleWhite}
                      onClick={() => handlePageQuery("add-employee")}
                    />
                  </div>
                </div>
                <div className="w-full">
                  <div className="flex items-center w-[100%] gap-x-4 md:gap-x-0 md:w-full px-3 h-[48px] text-[#485A69] text-[14px] border-b border-[#EAECF0] ">
                    <p className="text-[14px] font-[500] w-[20%]">
                      Employee Name
                    </p>
                    <p className="text-[14px] font-[500] w-[15%]">
                      Employee ID
                    </p>
                    <p className="text-[14px] font-[500] w-[15%]">Department</p>
                    <p className="text-[14px] font-[500] w-[15%]">
                      Designation
                    </p>
                    <p className="text-[14px] font-[500] w-[15%]">Type</p>
                    <p className="text-[14px] font-[500] w-[10%]">Emp. Type</p>
                    <p className="w-[5%] text-right"> </p>
                  </div>

                  {employeeList?.data?.map((employee: any, index: any) => {
                    return (
                      <div
                        key={index}
                        className="flex items-center bg-white w-[100%] gap-x-4  md:gap-x-0 md:w-full py-1.5 px-3 text-[#5B5B5B] text-sm font-light border-b cursor-pointer hover:bg-[#F2F4F7] "
                      >
                        <div className="flex items-center gap-3 w-[20%]">
                          <div className="w-9 h-9 rounded-[50%] overflow-hidden ">
                            <img
                              src={employee?.photoUrl}
                              alt="avatar"
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <p className="font-[500] text-[14px] leading-5 text-[#0A0A0B] ">
                            {employee?.firstName + " " + employee?.lastName}
                          </p>
                        </div>
                        <p className="font-[400] text-[14px] leading-5 text-[#0A0A0B] w-[15%]">
                          {employee?.employeeId}
                        </p>
                        <p className="font-[400] text-[14px] leading-5 text-[#0A0A0B] w-[15%]">
                          {employee?.departments
                            ? employee?.departments[0]?.name
                            : "N/A"}
                        </p>
                        <p className="font-[400] text-[14px] leading-5 text-[#0A0A0B] w-[15%]">
                          {employee?.jobRoles
                            ? employee?.jobRoles[0]?.title
                            : "N/A"}
                        </p>
                        <p className="font-[400] text-[14px] leading-5 text-[#0A0A0B] w-[15%]">
                          {findNameById(workMode, employee?.workMode)}
                        </p>
                        <p className="font-[400] text-[14px] leading-5 text-[#0A0A0B] w-[15%]">
                          {employee?.employmentType}
                        </p>
                        {/* <div className="font-[400] text-[14px] leading-5 text-[#0A0A0B] w-[10%]">
                          <p
                            className={`w-fit flex px-2 py-1 rounded-[8px] gap-2 items-center font-[500] text-[12px] leading-[18px] 
                              ${
                              employee?.status === "Permanent"
                                ? "bg-[#E3F2ED] text-[#101828]"
                                : employee?.status === "Contract"
                                ? "bg-[#FEE4E2] text-[#101828]"
                                : ""
                            }
                            `}
                          >
                            {employee?.employmentType}
                          </p>
                        </div> */}
                        <Popover className="relative w-[5%]">
                          <>
                            <PopoverButton
                              className={`group inline-flex items-center text-center rounded-md text-base font-normal text-[#4D5154] hover:text-opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-transparent`}
                            >
                              <Image src={MoreIcon} alt="" />
                            </PopoverButton>

                            <PopoverPanel className="absolute w-[125px] right-0 z-50 p-1  ">
                              <div className="rounded-[12px] border-[1px] border-[#F2F4F7] shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                                <div className="flex flex-col bg-white">
                                  <div
                                    onClick={() =>
                                      router.push({
                                        pathname: ROUTES.EMPLOYEE_DETAILS,
                                        query: {
                                          id: employee?.id,
                                        },
                                      })
                                    }
                                    className="px-4 py-[10px]"
                                  >
                                    <p className="font-[500] text-[12px] leading-[18px] text-[#475467]">
                                      View Employee
                                    </p>
                                  </div>
                                  <div
                                    onClick={() => {
                                      handlePageQuery(
                                        "edit-employee",
                                        employee?.id
                                      );
                                    }}
                                    className="px-4 py-[10px]"
                                  >
                                    <p className="font-[500] text-[12px] leading-[18px] text-[#475467]">
                                      Edit Info
                                    </p>
                                  </div>
                                  <div
                                    // onClick={}
                                    className="px-4 py-[10px]"
                                  >
                                    <p className="font-[500] text-[12px] leading-[18px] text-[#BC6C17]">
                                      Deactivate
                                    </p>
                                  </div>
                                  <div
                                    // onClick={}
                                    className="px-4 py-[10px]"
                                  >
                                    <p className="font-[500] text-[12px] leading-[18px] text-[#D92D20]">
                                      Delete
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </PopoverPanel>
                          </>
                        </Popover>
                      </div>
                    );
                  })}
                </div>
                <Pagination
                  postsPerPage={postsPerPage}
                  totalPosts={employeeList?.totalRecords}
                  currentPage={currentPage}
                  setCurrentPage={setCurrentPage}
                  // totalPages={employeeList}
                />
              </div>
            </AuthenticatedLayout>
          )}
          {(employeeIsLoading || workModeLoading) && <PageLoaderModal />}
        </>
      )}
    </>
  );
};

export default index;
