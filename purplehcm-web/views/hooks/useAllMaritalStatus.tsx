import { useQuery } from "react-query";
import { apiEndpoints } from "../apis/apiEndpoints";
import { getData } from "../apis/apiMethods";
import CONFIG from "../helpers/config";
import { parseMessageToArray } from "../helpers/formatStringResponse";

export const getAllMaritalStatus = async () => {
  const data = await getData(
    `${CONFIG.BASE_URL}${apiEndpoints.GET_ALL_MARITAL_STATUS}`
  );
  return data?.data?.data;
};

export const useAllMaritalStatus = () => {
  return useQuery(["AllMaritalStatus"], getAllMaritalStatus, {
    refetchOnWindowFocus: false, // Refetch on window focus
    retry: 1,
  });
};
