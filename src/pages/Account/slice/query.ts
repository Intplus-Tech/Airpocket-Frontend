import { useQuery } from "@tanstack/react-query";
import { getUserInfo } from "./api";

export const useGetUserInfo = (data: { id: string | undefined }) => {
  return useQuery({
    queryKey: ["getUserInfo", data.id],
    queryFn: () => getUserInfo(data),
  });
};
