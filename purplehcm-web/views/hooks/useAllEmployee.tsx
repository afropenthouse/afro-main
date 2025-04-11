import { useQuery } from "react-query";
import { apiEndpoints } from "../apis/apiEndpoints";
import { getData } from "../apis/apiMethods";
import CONFIG from "../helpers/config";
import { LOCAL_STORAGE_KEYS } from "../helpers/localStorageKeys";

export const getAllEmployee = async ({ queryKey }: { queryKey: any }) => {
  const user = localStorage?.getItem(LOCAL_STORAGE_KEYS.USER);
  const users = user ? JSON.parse(user) : null;
  const { companyId, organisationId, userId, page, size } = queryKey[1];

  let queryParams = `?PageNumber=${page}&PageSize=${size}`;

  const res = await getData(
    `${CONFIG.BASE_URL}${apiEndpoints.GET_EMPLOYEE_LIST}${queryParams}`
  );
  return res?.data;
};

export const useAllEmployee = ({
  companyId,
  organisationId,
  userId,
  page,
  size,
}: {
  companyId?: string;
  organisationId?: string;
  userId?: string;
  page: number;
  size: number;
}) => {
  return useQuery(
    ["AllEmployee", { companyId, organisationId, userId, page, size }],
    getAllEmployee,
    {
      refetchOnWindowFocus: false, // Refetch on window focus
      retry: 1,
    }
  );
};
