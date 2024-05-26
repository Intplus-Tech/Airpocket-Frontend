import { useQuery } from "@tanstack/react-query";
import { confirmPayment } from "./api";

export const useConfirmPaypment = (data: { id: string | undefined }) => {
  return useQuery({
    queryKey: ["confirmPayment", data.id],
    queryFn: () => confirmPayment(data),
  });
};
