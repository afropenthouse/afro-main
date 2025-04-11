import { useQuery } from "react-query";
import { getData } from "../apis/apiMethods";
import CONFIG from "../helpers/config";

export const getEmployeeDetails = async ({ queryKey }: { queryKey: any }) => {
  const { id } = queryKey[1];
  const res = await getData(`${CONFIG.BASE_URL}Employee/${id}`);
  return res;
};

export const useEmployeeDetails = ({ id }: { id: any }) => {
  return useQuery(["EmployeeDetails", { id }], getEmployeeDetails, {
    refetchOnWindowFocus: false, // Refetch on window focus
    enabled: id ? true : false,
    retry: 1,
  });
};
