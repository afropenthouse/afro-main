import { useQuery } from "react-query";
import { apiEndpoints } from "../apis/apiEndpoints";
import { getData } from "../apis/apiMethods";
import CONFIG from "../helpers/config";
import { parseMessageToArray } from "../helpers/formatStringResponse";

export const getAllState = async ({ queryKey }: { queryKey: any }) => {
  const { code } = queryKey[1];
  const res = await getData(
    `${CONFIG.BASE_URL}metadata/country/${code}/states`
  );
  const data = res.data?.data?.states?.map((res: any) => {
    return { label: res, value: res };
  });
  return data;
};

export const useAllState = ({ code }: { code: any }) => {
  return useQuery(["AllState", { code }], getAllState, {
    refetchOnWindowFocus: false, // Refetch on window focus
    enabled: code ? true : false,
    retry: 1,
  });
};
