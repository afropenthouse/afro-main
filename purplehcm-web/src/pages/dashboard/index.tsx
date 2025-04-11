import React, { useEffect } from "react";
import AuthenticatedLayout from "../../../views/components/Layout/AuthenticatedLayout";
import EmployeeIcon from "../../../views/assets/images/dashboard-employee-icon.svg";
import ContractorIcon from "../../../views/assets/images/dashboard-contractor-icon.svg";
import DepartmentIcon from "../../../views/assets/images/dashboard-department-icon.svg";
import FilledChevronDown from "../../../views/assets/images/filled-chevron-down.svg";
import RedDownArrow from "../../../views/assets/images/red-down-arrow.svg";
import GreenUpArrow from "../../../views/assets/images/green-up-arrow.svg";
import ViewIcon from "../../../views/assets/images/dashboard-view-icon.svg";
import PayrollIcon from "../../../views/assets/images/dashboard-paryroll-icon.svg";
import Image from "next/image";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { employeeData } from "../../../views/helpers/data/Employee";
import { ROUTES } from "../../../views/helpers/routes";
import { useRouter } from "next/router";
import { PrimaryButton } from "../../../views/components/Button/Button";
import { useUserProfile } from "../../../views/hooks/useUserProfile";
import { useAllEmployee } from "../../../views/hooks/useAllEmployee";
import { useAllWorkMode } from "../../../views/hooks/useAllWorkMode";
import { useAllJobType } from "../../../views/hooks/useAllJobType";
import { findNameById } from "../../../views/helpers";
import { useDashboardStat } from "../../../views/hooks/useDashboardStat";

// Register the necessary components in Chart.js
ChartJS.register(ArcElement, Tooltip, Legend);

const index = () => {
  const router = useRouter();
  const { data: workMode, isLoading: workModeLoading } = useAllWorkMode();
  const { data: dashboardData, isLoading: dashboardDataLoading } =
    useDashboardStat();
  const { data: employeeList, isLoading: employeeIsLoading } = useAllEmployee({
    page: 1,
    size: 10,
  });

  console.log(dashboardData, "dashboardData");

  // const { data: userData, isLoading: isUserLoading } = useUserProfile({
  //   isUserExist: true,
  // });

  // useEffect(() => {
  //   if (!userData?.organization) {
  //     router.push({
  //       pathname: "/signup",
  //       query: { pageQuery: "company-details" },
  //     });
  //   } else if (
  //     userData?.organization &&
  //     userData?.organization?.type !== "Startup" &&
  //     userData?.companies?.length < 1
  //   ) {
  //     router.push({
  //       pathname: "/signup",
  //       query: { pageQuery: "legal-details" },
  //     });
  //   } else {
  //     router.push(ROUTES.DASHBOARD);
  //   }
  // }, [userData]);

  const overviewCardDetails = [
    {
      title: dashboardData?.employeesCount,
      text: "No. of Employees",
      description: "12 more than last quarter",
      increase: true,
      icon: EmployeeIcon,
    },
    {
      title: "₦80,098,700",
      text: "Total Payroll",
      description: "0.2% lower than last quarter",
      increase: false,
      icon: PayrollIcon,
    },
    {
      title: dashboardData?.departmentsCount,
      text: "Total Department",
      description: "2% Added last quarter",
      increase: true,
      icon: DepartmentIcon,
    },
    {
      title: dashboardData?.contractorsCount,
      text: "No. of Contractor",
      description: "2% Added last quarter",
      increase: true,
      icon: ContractorIcon,
    },
  ];

  const doughnutData = [
    { color: "#3981F7", category: "Active Workers", number: "1005" },
    { color: "#C3B5FD", category: "Sick Leave", number: "95" },
    { color: "#51C6FB", category: "Day Off", number: "100" },
    { color: "#0A112F", category: "Resigning", number: "5" },
  ];

  const data = {
    labels: ["", "", "", ""],
    datasets: [
      {
        // label: "# of Votes",
        data: [300, 150, 115, 50],
        backgroundColor: ["#3981F7", "#51C6FB", "#C3B5FD", "#0A112F"],
        // borderColor: [
        //   "rgba(255, 99, 132, 1)",
        //   "rgba(54, 162, 235, 1)",
        //   "rgba(255, 206, 86, 1)",
        //   "rgba(75, 192, 192, 1)",
        //   "rgba(153, 102, 255, 1)",
        //   "rgba(255, 159, 64, 1)",
        // ],
        borderWidth: 0,
      },
    ],
  };

  const options = {
    responsive: true,
    cutout: "60%", // Creates a larger hole in the middle
    plugins: {
      legend: {
        display: false,
        position: "top" as const, // Adjust legend position if needed
      },
      tooltip: {
        enabled: false,
      },
    },
  };

  return (
    <AuthenticatedLayout pageTitle={"Overview"}>
      <div className="flex flex-col gap-8 w-full">
        {dashboardDataLoading ? (
          <div
            role="status"
            className="grid w-full grid-cols-4 gap-5 items-center animate-pulse"
          >
            <div className="h-[150px] bg-gray-200 rounded-2xl w-full "></div>
            <div className="h-[150px] bg-gray-200 rounded-2xl w-full "></div>
            <div className="h-[150px] bg-gray-200 rounded-2xl w-full "></div>
            <div className="h-[150px] bg-gray-200 rounded-2xl w-full "></div>
            <span className="sr-only">Loading...</span>
          </div>
        ) : (
          <div className="grid w-full grid-cols-4 gap-5 items-center">
            {overviewCardDetails.map((data, index) => (
              <div
                className="flex flex-col px-5 pt-6 pb-[30px] rounded-[20px] border border-[#EAECF0] gap-4 w-full "
                key={index}
              >
                <div className="flex justify-between items-start">
                  <div className="flex flex-col">
                    <p className="text-[28px] leading-[38px] font-[700] text-[#121212] ">
                      {data?.title}
                    </p>
                    <p className="text-[16px] leading-[19.2px] font-[400] text-[#121212] ">
                      {data?.text}
                    </p>
                  </div>
                  <Image src={data?.icon} alt="dashboard-icon" />
                </div>
                <div className="flex gap-2 items-center">
                  <Image
                    src={data?.increase ? GreenUpArrow : RedDownArrow}
                    alt="dashboard-arrow-icon"
                  />
                  <p className="text-[12px] leading-[20px] font-[400] text-[#515151] ">
                    {data?.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
        <div className="grid grid-cols-11 gap-8">
          <div className="flex flex-col p-6 rounded-[16px] border border-[#EAECF0] w-full h-fit col-span-6 items-center ">
            <div className="flex justify-between items-start w-full">
              <div className="flex flex-col gap-2">
                <p className="text-[20px] leading-[30px] font-[500] text-[#0A112F] ">
                  Attendance Rate
                </p>
                <p className="text-[16px] leading-[25px] font-[400] text-[#70707A] ">
                  From 1 Jan - 31 Jan, 2024
                </p>
              </div>
              <div className="flex gap-3 px-5 py-[10px] rounded-[100px] border border-[#EAECF0] cursor-pointer items-center  ">
                <p className="text-[14px] leading-[19px] font-[500] text-[#0A112F] ">
                  This Month
                </p>
                <Image src={FilledChevronDown} alt="chevron-icon" />
              </div>
            </div>
            <div className="grid grid-cols-11 gap-8 items-center w-full">
              <div className="w-full aspect-square rounded-full bg-[#EBF3FE] p-4 col-span-6">
                <div className="w-full h-full bg-white rounded-full">
                  <Doughnut data={data} options={options} />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-[49px] col-span-5">
                {doughnutData?.map((data, index) => (
                  <div className="flex gap-3 items-center" key={index}>
                    <div
                      className={`w-2 h-[64px] rounded-[4px]`}
                      style={{ backgroundColor: `${data?.color}` }}
                    />
                    <div className="flex flex-col gap-1">
                      <p className="text-[14px] leading-[22px] font-[400] text-[#70707A] ">
                        {data?.category}
                      </p>
                      <p className="text-[32px] leading-[42px] font-[500] text-[#0A112F] ">
                        {data?.number}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex gap-3 px-5 py-[10px] rounded-[100px] border border-[#EAECF0] cursor-pointer items-center  ">
              <Image src={ViewIcon} alt="view-icon" />
              <p className="text-[14px] leading-[19px] font-[500] text-[#0A112F] ">
                View Attendance Table
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-[32px] col-span-5 w-full">
            <div className="flex justify-between p-6 rounded-[16px] border border-[#EAECF0] w-full ">
              <div className="flex items-start gap-4">
                <Image src={PayrollIcon} alt="dashboard-icon" />
                <div className="flex flex-col gap-[14px]">
                  <p className="font-[500] text-[16px] leading-[25px] text-[#70707A] ">
                    Previous Payroll
                  </p>
                  <p className="font-[700] text-[28px] leading-[38px] text-[#121212] ">
                    N8,098,700
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-end gap-[14px]">
                <p className="font-[500] text-[16px] leading-[25px] text-[#70707A] ">
                  March 1, 2024
                </p>
                <div className="w-fit px-3 py-1 rounded-[100px] flex items-center gap-2 bg-[#CEEFDF] ">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#0AAF60]"></div>
                  <p className="font-[500] text-[14px] leading-[22px] text-[#0AAF60] ">
                    PAID
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-6 p-6 rounded-[16px] border border-[#EAECF0] w-full ">
              <div className="flex justify-between w-full">
                <div className="flex flex-col items-start gap-2">
                  <div className="flex gap-[8px] items-center ">
                    <Image src={PayrollIcon} alt="dashboard-icon" />
                    <p className="font-[500] text-[16px] leading-[25px] text-[#70707A] ">
                      Upcoming Payroll
                    </p>
                  </div>
                  <p className="font-[700] text-[28px] leading-[38px] text-[#121212] ">
                    N9,198,700
                  </p>
                </div>
                <div className="flex flex-col items-end gap-[14px]">
                  <p className="font-[400] text-[16px] leading-[25px] text-[#3981F7] ">
                    April 1, 2024
                  </p>
                  <div className="w-fit px-3 py-1 rounded-[100px] flex items-center gap-2 bg-[#FEEDDA] ">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#FAA745]"></div>
                    <p className="font-[500] text-[14px] leading-[22px] text-[#FAA745] ">
                      PENDING
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col p-4 rounded-[16px] gap-3 border border-[#EAECF0] w-full ">
                <p className="font-[500] text-[16px] leading-[25px] text-[#70707A] ">
                  Contractor
                </p>
                <div className="flex justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full overflow-hidden bg-[#EBF3FF] flex items-center justify-center ">
                      <Image src={PayrollIcon} alt="dashboard-icon" />
                    </div>
                    <div className="flex flex-col gap-1">
                      <p className="font-[500] text-[16px] leading-[25px] text-[#0A112F] ">
                        Idara Oke
                      </p>
                      <p className="font-[400] text-[14px] leading-[22px] text-[#70707A] ">
                        First Logistic Inc.
                      </p>
                    </div>
                  </div>
                  <PrimaryButton
                    title={"Send Invoice"}
                    className="lg:px-[30px] lg:py-[12px] rounded-[12px] lg:text-[12px]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        {employeeIsLoading || workModeLoading ? (
          <div
            role="status"
            className="grid w-full gap-1 items-center animate-pulse"
          >
            <div className="h-[40px] bg-gray-200 rounded-md w-full "></div>
            <div className="h-[40px] bg-gray-200 rounded-md w-full "></div>
            <div className="h-[40px] bg-gray-200 rounded-md w-full "></div>
            <div className="h-[40px] bg-gray-200 rounded-md w-full "></div>
            <div className="h-[40px] bg-gray-200 rounded-md w-full "></div>
            <div className="h-[40px] bg-gray-200 rounded-md w-full "></div>
            <div className="h-[40px] bg-gray-200 rounded-md w-full "></div>
            <div className="h-[40px] bg-gray-200 rounded-md w-full "></div>
            <span className="sr-only">Loading...</span>
          </div>
        ) : (
          <div className="flex flex-col p-6 gap-6 rounded-[16px] border border-[#EAECF0] w-full  ">
            <div className="flex justify-between items-center">
              <p className="font-[500] text-[20px] leading-[30px] text-[#0A112F] ">
                Employees
              </p>
              <p
                className="font-[500] text-[16px] leading-[25px] text-[#3981F7] cursor-pointer "
                onClick={() => router.push(ROUTES.EMPLOYEES)}
              >
                See all
              </p>
            </div>
            <div className="w-full">
              <div className="flex items-center w-[100%] gap-x-4 md:gap-x-0 md:w-full px-3 h-[48px] text-[#485A69] text-[14px] border-b border-[#EAECF0] ">
                <p className="text-[14px] font-[500] w-[20%]">Employee Name</p>
                <p className="text-[14px] font-[500] w-[15%]">Employee ID</p>
                <p className="text-[14px] font-[500] w-[15%]">Department</p>
                <p className="text-[14px] font-[500] w-[15%]">Designation</p>
                <p className="text-[14px] font-[500] w-[15%]">Type</p>
                <p className="text-[14px] font-[500] w-[10%]">Emp. Type</p>
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
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </AuthenticatedLayout>
  );
};

export default index;
