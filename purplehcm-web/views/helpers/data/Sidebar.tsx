import { ROUTES } from "../routes";

import DashboardIcon from "../../assets/images/dashboard-icon.svg";
import DepartmentIcon from "../../assets/images/department-icon.svg";
import EmployeesIcon from "../../assets/images/employee-icon.svg";
import PayrollIcon from "../../assets/images/payroll-icon.svg";
import CalendarIcon from "../../assets/images/calendar-icon.svg";
import ContractorIcon from "../../assets/images/contractor-icon.svg";
import TeamManagementIcon from "../../assets/images/team-management-icon.svg";

import ActiveDepartmentIcon from "../../assets/images/active-department.svg";
import ActiveEmployeesIcon from "../../assets/images/active-employee.svg";
import ActivePayrollIcon from "../../assets/images/active-payroll-icon.svg";

export const sidebar = [
  // {
  //   icon: DashboardIcon,
  //   activeIcon: DashboardIcon,
  //   menu: "Dashboard",
  //   path: ROUTES.DASHBOARD,
  //   subMenus: [],
  // },
  {
    icon: EmployeesIcon,
    activeIcon: ActiveEmployeesIcon,
    menu: "Employees",
    path: ROUTES.EMPLOYEES,
    subMenus: [],
  },
  {
    icon: DepartmentIcon,
    activeIcon: ActiveDepartmentIcon,
    menu: "Department",
    path: ROUTES.DEPARTMENT,
    subMenus: [],
  },
  {
    icon: PayrollIcon,
    activeIcon: ActivePayrollIcon,
    menu: "Payroll",
    path: ROUTES.PAYROLL,
    subMenus: [],
  },
  {
    icon: CalendarIcon,
    activeIcon: CalendarIcon,
    menu: "Calendar",
    path: ROUTES.CALENDAR,
    subMenus: [],
  },
  {
    icon: ContractorIcon,
    activeIcon: ContractorIcon,
    menu: "Contractor/Invoice mgt",
    path: ROUTES.CONTRACTOR,
    subMenus: [],
  },
  {
    icon: TeamManagementIcon,
    activeIcon: TeamManagementIcon,
    menu: "Team Management",
    path: ROUTES.TEAM_MANAGEMENT,
    subMenus: [],
  },
];
