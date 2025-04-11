import { useQuery } from "react-query";
import { apiEndpoints } from "../apis/apiEndpoints";
import { getData } from "../apis/apiMethods";
import CONFIG from "../helpers/config";
import { parseMessageToArray } from "../helpers/formatStringResponse";

export const getAllWorkingDays = async () => {
  const data = await getData(
    `${CONFIG.BASE_URL}${apiEndpoints.GET_ALL_WORKING_DAYS}`
  );
  return data?.data?.data;
};

export const useAllWorkingDays = () => {
  return useQuery(["AllWorkingDays"], getAllWorkingDays, {
    refetchOnWindowFocus: false, // Refetch on window focus
    retry: 1,
  });
};
