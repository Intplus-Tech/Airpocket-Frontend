import axiosInstance from "@/axiosinterceptors";
import { SERVER_URL } from "@/utils/apiUrl";
import handleAxiosError from "@/utils/error";

function subscribeNewLetterApi(data: { [x: string]: any }) {
  //   const authToken = getItemFromStorage("access_token");
  //user: { email: string; password: string }
  const url = `${SERVER_URL}//newsletter/subcribe`;
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      //   Authorization: `Bearer ${authToken}`,
    },
    data: JSON.stringify(data),
  };
  return axiosInstance(url, options);
}

export const subscribeNewLetter = async (data: { [x: string]: any }) => {
  try {
    const response: any = await subscribeNewLetterApi(data);

    return { success: { ...response.data } };
  } catch (error) {
    const response = handleAxiosError(error);

    return { error: { response } };
  }
};
