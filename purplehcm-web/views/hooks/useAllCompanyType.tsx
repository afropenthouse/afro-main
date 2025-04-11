import { useQuery } from "react-query";
import { apiEndpoints } from "../apis/apiEndpoints";
import { getData } from "../apis/apiMethods";
import CONFIG from "../helpers/config";

export const getAllCompanyType = async () => {
  const res = await getData(
    `${CONFIG.BASE_URL}${apiEndpoints.GET_ALL_COMPANY_TYPE}`
  );
  const data = res?.data?.data;
  const formattedArray = data?.map((data: any) => ({
    label: data?.name,
    value: data?.id,
  }));
  return formattedArray;
};

export const useAllCompanyType = () => {
  return useQuery(["AllCompanyType"], getAllCompanyType, {
    refetchOnWindowFocus: false, // Refetch on window focus
    retry: 1,
  });
};
