import { useQuery } from "react-query";
import { apiEndpoints } from "../apis/apiEndpoints";
import { getData } from "../apis/apiMethods";
import CONFIG from "../helpers/config";
import { parseMessageToArray } from "../helpers/formatStringResponse";

export const getAllJobType = async () => {
  const data = await getData(
    `${CONFIG.BASE_URL}${apiEndpoints.GET_ALL_JOB_TYPE}`
  );
  return data?.data?.data;
};

export const useAllJobType = () => {
  return useQuery(["AllJobType"], getAllJobType, {
    refetchOnWindowFocus: false, // Refetch on window focus
    retry: 1,
  });
};
