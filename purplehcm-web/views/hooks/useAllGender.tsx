import { useQuery } from "react-query";
import { apiEndpoints } from "../apis/apiEndpoints";
import { getData } from "../apis/apiMethods";
import CONFIG from "../helpers/config";
import { parseMessageToArray } from "../helpers/formatStringResponse";

export const getAllGender = async () => {
  const data = await getData(
    `${CONFIG.BASE_URL}${apiEndpoints.GET_ALL_GENDER}`
  );
  return data?.data?.data;
};

export const useAllGender = () => {
  return useQuery(["AllGender"], getAllGender, {
    refetchOnWindowFocus: false, // Refetch on window focus
    retry: 1,
  });
};
