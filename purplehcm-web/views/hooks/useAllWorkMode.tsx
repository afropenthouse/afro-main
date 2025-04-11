import { useQuery } from "react-query";
import { apiEndpoints } from "../apis/apiEndpoints";
import { getData } from "../apis/apiMethods";
import CONFIG from "../helpers/config";
import { parseMessageToArray } from "../helpers/formatStringResponse";

export const getAllWorkMode = async () => {
  const data = await getData(
    `${CONFIG.BASE_URL}${apiEndpoints.GET_ALL_WORK_MODE}`
  );
  return data?.data?.data;
};

export const useAllWorkMode = () => {
  return useQuery(["AllWorkMode"], getAllWorkMode, {
    refetchOnWindowFocus: false, // Refetch on window focus
    retry: 1,
  });
};
