import { useQuery } from "react-query";
import { apiEndpoints } from "../apis/apiEndpoints";
import { getData } from "../apis/apiMethods";
import CONFIG from "../helpers/config";
import { parseMessageToArray } from "../helpers/formatStringResponse";

export const getAllFeatures = async () => {
  const res = await getData(
    `${CONFIG.BASE_URL}${apiEndpoints.GET_ALL_FEATURES}`
  );
  const data = parseMessageToArray(res?.message);
  return data;
};

export const useAllFeatures = () => {
  return useQuery(["AllFeatures"], getAllFeatures, {
    refetchOnWindowFocus: false, // Refetch on window focus
    retry: 1,
  });
};
