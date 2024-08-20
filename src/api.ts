import axiosInstance from "./axiosinterceptors";
import { SERVER_URL } from "./utils/apiUrl";
import handleAxiosError from "./utils/error";

function verifyAcessTokenApi(access: string) {
  const url = `${SERVER_URL}/verify-access-token`;
  const options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${access}`,
    },
  };
  return axiosInstance(url, options);
}

export const verifyAccessToken = async (data: string) => {
  try {
    const response: any = await verifyAcessTokenApi(data);

    return { success: { ...response } };
  } catch (error) {
    const response = handleAxiosError(error);
    return { error: response };
  }
};
