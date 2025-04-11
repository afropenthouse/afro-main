import { useQuery } from "react-query";
import { apiEndpoints } from "../apis/apiEndpoints";
import { getData } from "../apis/apiMethods";
import CONFIG from "../helpers/config";

export const getAllInviteOption = async () => {
  const data = await getData(
    `${CONFIG.BASE_URL}${apiEndpoints.GET_ALL_INVITE_OPTION}`
  );
  return data?.data?.data;
};

export const useAllInviteOption = () => {
  return useQuery(["AllInviteOption"], getAllInviteOption, {
    refetchOnWindowFocus: false, // Refetch on window focus
    retry: 1,
  });
};
