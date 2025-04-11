import { useQuery } from "react-query";
import { apiEndpoints } from "../apis/apiEndpoints";
import { getData } from "../apis/apiMethods";
import CONFIG from "../helpers/config";
import { parseMessageToArray } from "../helpers/formatStringResponse";

export const getAllIndustry = async () => {
  const res = await getData(
    `${CONFIG.BASE_URL}${apiEndpoints.GET_ALL_INDUSTRY}`
  );
  const data = parseMessageToArray(res?.message);
  return data;
};

export const useAllIndustry = () => {
  return useQuery(["AllIndustry"], getAllIndustry, {
    refetchOnWindowFocus: false, // Refetch on window focus
    retry: 1,
  });
};
