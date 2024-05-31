import axiosInstance from "@/axiosinterceptors";
import { Generic } from "@/types/typs";
import { SERVER_URL } from "@/utils/apiUrl";
import handleAxiosError from "@/utils/error";
import { getItemFromStorage } from "@/utils/locaStorage";

const authToken = getItemFromStorage("access_token");

function confirmPaymentApi(data: { id: string | undefined }) {
  //user: { email: string; password: string }
  const url = `${SERVER_URL}/payment-verify/${data.id}`;
  const options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${authToken}`,
    },
  };
  return axiosInstance(url, options);
}

function bookFlighttApi(data: Generic) {
  //user: { email: string; password: string }
  const url = `${SERVER_URL}/flight-booking`;
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${authToken}`,
    },
    data: JSON.stringify(data),
  };
  return axiosInstance(url, options);
}

export const confirmPayment = async (data: { id: string | undefined }) => {
  const response: any = await confirmPaymentApi(data);

  return { success: { ...response.data } };
};

export const bookFlight = async (data: Generic) => {
  try {
    const response: any = await bookFlighttApi(data);
    return { success: { ...response.data } };
  } catch (error) {
    const response = handleAxiosError(error);
    return { error: { response } };
  }
};
