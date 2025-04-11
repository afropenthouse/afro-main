import { useQuery } from "react-query";
import { apiEndpoints } from "../apis/apiEndpoints";
import { getData } from "../apis/apiMethods";
import CONFIG from "../helpers/config";

export const getUserProfile = async () => {
  const data = await getData(`${CONFIG.BASE_URL}${apiEndpoints.GET_ME}`);
  return data;
};

export const useUserProfile = ({ isUserExist }: { isUserExist?: boolean }) => {
  return useQuery(["UserProfile", { isUserExist }], getUserProfile, {
    refetchOnWindowFocus: false, // Refetch on window focus
    enabled: isUserExist ? true : false,
    retry: 1,
  });
};
