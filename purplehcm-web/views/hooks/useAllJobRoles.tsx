import { useQuery } from "react-query";
import { apiEndpoints } from "../apis/apiEndpoints";
import { getData } from "../apis/apiMethods";
import CONFIG from "../helpers/config";
import { parseMessageToArray } from "../helpers/formatStringResponse";

export const getAllJobRoles = async () => {
  const data = await getData(
    `${CONFIG.BASE_URL}${apiEndpoints.GET_ALL_JOB_ROLES}`
  );
  return data;
};

export const useAllJobRoles = () => {
  return useQuery(["AllJobRoles"], getAllJobRoles, {
    refetchOnWindowFocus: false, // Refetch on window focus
    retry: 1,
  });
};
