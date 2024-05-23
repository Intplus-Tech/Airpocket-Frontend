import axiosInstance from "@/axiosinterceptors";
import { SERVER_URL } from "@/utils/apiUrl";
import handleAxiosError from "@/utils/error";
import { getItemFromStorage } from "@/utils/locaStorage";

const authToken = getItemFromStorage("access_token");

function getUserInfoApi(data: { id: string | undefined }) {
  //user: { email: string; password: string }
  const url = `${SERVER_URL}/get-user/${data.id}`;
  const options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${authToken}`,
    },
  };
  return axiosInstance(url, options);
}
function getUserHistoryApi() {
  //user: { email: string; password: string }
  const url = `${SERVER_URL}/user-history`;
  const options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${authToken}`,
    },
  };
  return axiosInstance(url, options);
}

export const getUserInfo = async (data: { id: string | undefined }) => {
  console.log(data);
  try {
    const response: any = await getUserInfoApi(data);

    return { success: { ...response.data } };
  } catch (error) {
    const response = handleAxiosError(error);

    return { error: { response } };
  }
};

export const getUserHistory = async () => {
  try {
    const response: any = await getUserHistoryApi();

    return { success: { ...response.data } };
  } catch (error) {
    const response = handleAxiosError(error);

    return { error: { response } };
  }
};
