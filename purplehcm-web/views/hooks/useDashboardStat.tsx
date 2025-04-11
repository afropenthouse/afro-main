import { useQuery } from "react-query";
import { apiEndpoints } from "../apis/apiEndpoints";
import { getData } from "../apis/apiMethods";
import CONFIG from "../helpers/config";

export const getDashboardStat = async () => {
  const data = await getData(
    `${CONFIG.BASE_URL}${apiEndpoints.GET_DASHBOARD_STAT}`
  );
  return data?.data;
};

export const useDashboardStat = () => {
  return useQuery(["DashboardStat"], getDashboardStat, {
    refetchOnWindowFocus: false, // Refetch on window focus
    retry: 1,
  });
};
