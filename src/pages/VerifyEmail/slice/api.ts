import { SERVER_URL } from "@/utils/apiUrl";
import { getItemFromStorage } from "@/utils/locaStorage";
import axios from "axios";

const authToken = getItemFromStorage("access_token");

function verifyEmailApi(data: { id: string | undefined }) {
  //user: { email: string; password: string }
  const url = `${SERVER_URL}//verify-email/${data.id}`;
  const options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${authToken}`,
    },
  };
  return axios(url, options);
}

export const verifyEmail = async (data: { id: string | undefined }) => {
  const response: any = await verifyEmailApi(data);

  return response.data;
};
