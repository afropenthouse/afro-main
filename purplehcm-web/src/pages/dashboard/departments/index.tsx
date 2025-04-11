import React, { useState } from "react";
import AuthenticatedLayout from "../../../../views/components/Layout/AuthenticatedLayout";
import CustomInputField from "../../../../views/components/CustomHTMLElements/CustomInputField";
import SearchIcon from "../../../../views/assets/images/filter-search.svg";
import FilterChevDown from "../../../../views/assets/images/filter-chevron-down.svg";
import PeopleWhite from "../../../../views/assets/images/people-white.svg";
import EmployeeAvatar from "../../../../views/assets/images/employee-avatar.png";
import ChevronRight from "../../../../views/assets/images/chevron-right.svg";
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
import AddNewDepartment from "../../../../views/components/DepartmentManagementComponent/AddDepartment/AddNewDepartment";
import { useAllDepartment } from "../../../../views/hooks/useAllDepartment";

const index = () => {
  const router = useRouter();
  const [postsPerPage, setPostsPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const { pageQuery } = router.query;
  const { data: departmentList, isLoading: departmentIsLoading } =
    useAllDepartment({
      page: 1,
      size: 100,
    });

  console.log(departmentList, "depart");

  const handlePageQuery = (pageQuery: string) => {
    router.push({
      pathname: "/dashboard/departments",
      query: { pageQuery },
    });
  };

  return (
    <>
      {pageQuery === "add-department" && <AddNewDepartment />}
      {(!pageQuery || pageQuery === "" || pageQuery === undefined) && (
        <AuthenticatedLayout pageTitle={"Departments"}>
          <div className="flex flex-col gap-2 pt-[22px]  ">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <CustomInputField
                  type="text"
                  placeholder={"Search by dept"}
                  hasIcon={<Image src={SearchIcon} alt="search-icon" />}
                  style="w-[296px] h-[40px] w-full placeholder:text-[#475467] placeholder:text-[14px] text-[14px] leading-5 font-[500] rounded-[12px] pl-[30px] border-[#EAECF0] z-0 "
                  originalWidth
                />
              </div>
              <div className="flex items-center gap-[14px]">
                <PurpleButton
                  title={"Add Department"}
                  beforeIcon={PeopleWhite}
                  onClick={() => handlePageQuery("add-department")}
                />
              </div>
            </div>
            {departmentIsLoading ? (
              <div
                role="status"
                className="w-full grid grid-cols-1 lg:grid-cols-2 gap-5 animate-pulse"
              >
                <div className="h-[400px] bg-gray-200 rounded-2xl w-full "></div>
                <div className="h-[400px] bg-gray-200 rounded-2xl w-full "></div>
                <div className="h-[400px] bg-gray-200 rounded-2xl w-full "></div>
                <div className="h-[400px] bg-gray-200 rounded-2xl w-full "></div>
                <span className="sr-only">Loading...</span>
              </div>
            ) : (
              <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-5">
                {departmentList?.map((department: any, index: any) => (
                  <div
                    className="border border-[#A2A1A833] rounded-[10px] p-5 gap-4 flex flex-col"
                    key={index}
                  >
                    <div className="flex justify-between items-center">
                      <div className="flex flex-col">
                        <p className="text-[20px] leading-6 font-[700] text-[#16151C]">
                          {department?.name}
                        </p>
                        <p className="text-[14px] leading-5 font-[400] text-[#A2A1A8]">
                          20 Members
                        </p>
                      </div>
                      <p className="text-[14px] leading-6 font-[500] text-[#6544C5] cursor-pointer ">
                        View All
                      </p>
                    </div>
                    <div className="h-[1px] w-full bg-[#A2A1A833] "></div>
                    <div className="flex flex-col w-full gap-4">
                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-2.5">
                          <div className="w-10 h-10 bg-black rounded-full">
                            <Image
                              src={EmployeeAvatar}
                              alt="avatar"
                              className="object-cover w-full"
                            />
                          </div>
                          <div className="flex flex-col">
                            <p className="text-[14px] leading-6 font-[500] text-[#0A0A0B]">
                              Dianne Russell
                            </p>
                            <p className="text-[12px] leading-[18px] font-[400] text-[#485A69]">
                              Lead UI/UX Designer
                            </p>
                          </div>
                        </div>
                        <Image
                          src={ChevronRight}
                          alt="avatar"
                          className="cursor-pointer"
                        />
                      </div>
                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-2.5">
                          <div className="w-10 h-10 bg-black rounded-full">
                            <Image
                              src={EmployeeAvatar}
                              alt="avatar"
                              className="object-cover w-full"
                            />
                          </div>
                          <div className="flex flex-col">
                            <p className="text-[14px] leading-6 font-[500] text-[#0A0A0B]">
                              Dianne Russell
                            </p>
                            <p className="text-[12px] leading-[18px] font-[400] text-[#485A69]">
                              Lead UI/UX Designer
                            </p>
                          </div>
                        </div>
                        <Image
                          src={ChevronRight}
                          alt="avatar"
                          className="cursor-pointer"
                        />
                      </div>
                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-2.5">
                          <div className="w-10 h-10 bg-black rounded-full">
                            <Image
                              src={EmployeeAvatar}
                              alt="avatar"
                              className="object-cover w-full"
                            />
                          </div>
                          <div className="flex flex-col">
                            <p className="text-[14px] leading-6 font-[500] text-[#0A0A0B]">
                              Dianne Russell
                            </p>
                            <p className="text-[12px] leading-[18px] font-[400] text-[#485A69]">
                              Lead UI/UX Designer
                            </p>
                          </div>
                        </div>
                        <Image
                          src={ChevronRight}
                          alt="avatar"
                          className="cursor-pointer"
                        />
                      </div>
                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-2.5">
                          <div className="w-10 h-10 bg-black rounded-full">
                            <Image
                              src={EmployeeAvatar}
                              alt="avatar"
                              className="object-cover w-full"
                            />
                          </div>
                          <div className="flex flex-col">
                            <p className="text-[14px] leading-6 font-[500] text-[#0A0A0B]">
                              Dianne Russell
                            </p>
                            <p className="text-[12px] leading-[18px] font-[400] text-[#485A69]">
                              Lead UI/UX Designer
                            </p>
                          </div>
                        </div>
                        <Image
                          src={ChevronRight}
                          alt="avatar"
                          className="cursor-pointer"
                        />
                      </div>
                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-2.5">
                          <div className="w-10 h-10 bg-black rounded-full">
                            <Image
                              src={EmployeeAvatar}
                              alt="avatar"
                              className="object-cover w-full"
                            />
                          </div>
                          <div className="flex flex-col">
                            <p className="text-[14px] leading-6 font-[500] text-[#0A0A0B]">
                              Dianne Russell
                            </p>
                            <p className="text-[12px] leading-[18px] font-[400] text-[#485A69]">
                              Lead UI/UX Designer
                            </p>
                          </div>
                        </div>
                        <Image
                          src={ChevronRight}
                          alt="avatar"
                          className="cursor-pointer"
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
            {/* <Pagination
          postsPerPage={postsPerPage}
          totalPosts={employeeData?.length}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          // totalPages={totalPages}
        /> */}
          </div>
        </AuthenticatedLayout>
      )}
    </>
  );
};

export default index;
