import { useMutation } from "@tanstack/react-query";
import { resetPassword } from "./api";
import { ChangePassword } from "@/types/typs";

export const useResetPassword = () => {
  return useMutation({
    mutationFn: (data: ChangePassword) => resetPassword(data),
  });
};
