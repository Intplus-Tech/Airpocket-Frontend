import { ChangePassword } from "@/types/typs";
import { SERVER_URL } from "@/utils/apiUrl";
import { getItemFromStorage } from "@/utils/locaStorage";
import axios from "axios";

const authToken = getItemFromStorage("access_token");

function resetPasswordApi(data: ChangePassword) {
  const url = `${SERVER_URL}/change-password/${data.id}`;
  const options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${authToken}`,
    },
  };
  return axios(url, options);
}

export const resetPassword = async (data: ChangePassword) => {
  const response: any = await resetPasswordApi(data);

  return response.data;
};
