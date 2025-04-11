import { useQuery } from "react-query";
import { apiEndpoints } from "../apis/apiEndpoints";
import { getData } from "../apis/apiMethods";
import CONFIG from "../helpers/config";
import { parseMessageToArray } from "../helpers/formatStringResponse";

export const getAllCountry = async () => {
  const data = await getData(
    `${CONFIG.BASE_URL}${apiEndpoints.GET_ALL_COUNTRY}`
  );
  return data?.data?.data;
};

export const useAllCountry = () => {
  return useQuery(["AllCountry"], getAllCountry, {
    refetchOnWindowFocus: false, // Refetch on window focus
    retry: 1,
  });
};
