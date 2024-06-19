import { ChangePassword } from "@/types/typs";
import { SERVER_URL } from "@/utils/apiUrl";
import handleAxiosError from "@/utils/error";
import { getItemFromStorage } from "@/utils/locaStorage";
import axios from "axios";

const authToken = getItemFromStorage("access_token");

function resetPasswordApi(data: ChangePassword) {
  const { id, ...rest } = data;
  const url = `${SERVER_URL}/change-password/${id}`;
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${authToken}`,
    },
    data: JSON.stringify(rest),
  };
  return axios(url, options);
}

export const resetPassword = async (data: ChangePassword) => {
  try {
    const response: any = await resetPasswordApi(data);
    return { success: response.data };
  } catch (error) {
    const response = handleAxiosError(error);
    return { error: response.error };
  }
};
