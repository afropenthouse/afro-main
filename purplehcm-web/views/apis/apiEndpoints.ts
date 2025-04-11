export enum apiEndpoints {
  // endPoints

  // Authentication
  LOGIN = "auth/login",
  LOGOUT = "auth/logout",
  CONFIRM_EMAIL = "auth/confirm-email",
  VERIFY_OTP = "auth/verify-otp",
  FORGOT_PASSWORD = "auth/forgot-password",
  RESET_PASSWORD = "auth/reset-password",
  RECONFIRM_EMAIL = "auth/re-confirmmail-otp",
  VALIDATE_OTP = "auth/validate-otp",
  GET_ME = "auth/me",

  // Onboarding
  ONBOARDING_USER = "onboarding/user",
  ONBOARDING_ORGANISATION = "onboarding/organization",
  ONBOARDING_COMPANY = "onboarding/company",
  GET_ALL_INDUSTRY = "onboarding/industry-list",
  GET_ALL_FEATURES = "onboarding/feature-list",
  GET_ALL_REFERRAL_SOURCE = "onboarding/referralsource",

  // Enums
  GET_ALL_COUNTRY = "metadata/countries",
  GET_ALL_STAFF_SIZE = "metadata/staff-size",
  GET_ALL_COMPANY_TYPE = "metadata/organization-types",
  GET_ALL_GENDER = "metadata/gender",
  GET_ALL_WORK_MODE = "metadata/work-mode",
  GET_ALL_JOB_TYPE = "metadata/job-types",
  GET_ALL_WORKING_DAYS = "metadata/working-days",
  GET_ALL_INVITE_OPTION = "metadata/invite-option",
  GET_ALL_MARITAL_STATUS = "metadata/marital-status",

  // Employee
  GET_EMPLOYEE_LIST = "Employee/List",
  CREATE_EMPLOYEE = "Employee/Create",
  SEND_INVITE = "Employee/send-invite",
  GET_EMPLOYEE = "Employee",
  DELETE_EMPLOYEE = "Employee/delete",

  // Department
  GET_DEPARTMENT_LIST = "DepartmentControlller/list",
  CREATE_DEPARTMENT = "DepartmentControlller/Create",

  // Job roles
  GET_ALL_JOB_ROLES = "JobRole/List",

  // Dashboard
  GET_DASHBOARD_STAT = "Dashboard/Statistics",

  // Upload
  UPLOAD_IMAGE = "Image/upload",
  UPLOAD_BULK_EMPLOYEE = "api/BulkUpload/employees",
}
