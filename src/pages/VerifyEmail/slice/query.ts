import { useQuery } from "@tanstack/react-query";
import { verifyEmail } from "./api";

export const useVerityEmail = (data: { id: string | undefined }) => {
  return useQuery({
    queryKey: ["verifyEmail", data.id],
    queryFn: () => verifyEmail(data),
  });
};

// export const useGetUserHistory = () => {
//   return useQuery({
//     queryKey: ["getUserHistory"],
//     queryFn: () => getUserHistory(),
//   });
// };
