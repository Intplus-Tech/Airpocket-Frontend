import { useQuery } from "@tanstack/react-query";
import { getSingleUserHistory, getUserHistory, getUserInfo } from "./api";

export const useGetUserInfo = (data: { id: string | undefined }) => {
  return useQuery({
    queryKey: ["getUserInfo", data.id],
    queryFn: () => getUserInfo(data),
  });
};

export const useGetUserHistory = () => {
  return useQuery({
    queryKey: ["getUserHistory"],
    queryFn: () => getUserHistory(),
  });
};
export const useGetSingleUserHistory = (id: string) => {
  return useQuery({
    queryKey: ["getUserHistory"],
    queryFn: () => getSingleUserHistory(id),
  });
};
