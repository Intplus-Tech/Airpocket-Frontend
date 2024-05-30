import { Generic } from "@/types/typs";
import { useMutation } from "@tanstack/react-query";
import { forgotPassword } from "./api";

export const useForgotPassword = () => {
  return useMutation({
    mutationFn: (data: Generic) => forgotPassword(data),
  });
};
