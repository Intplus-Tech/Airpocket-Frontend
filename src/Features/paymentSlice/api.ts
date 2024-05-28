import { Generic } from "@/types/typs";
import { SERVER_URL } from "@/utils/apiUrl";
import handleAxiosError from "@/utils/error";
import axios from "axios";
import { makePayment, paymentError, paymentSuccess } from "./reducer";
import { getItemFromStorage, storeItem } from "@/utils/locaStorage";
const authToken = getItemFromStorage("access_token");

function paymentApi(data: Generic) {
  const url = `${SERVER_URL}/payments`;
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${authToken}`,
    },
    data: JSON.stringify(data),
  };
  return axios(url, options);
}

export const payment = async (data: Generic, dispatch: any) => {
  dispatch(makePayment());
  try {
    const response: any = await paymentApi(data);
    if (response.data.paymentDetails) {
      storeItem("paymentData", response.data.data);
      const {
        paymentDetails: { data },
      } = response.data;
      window.location.href = data.authorization_url;
    }
    dispatch(paymentSuccess(response.data));

    return { success: { ...response } };
  } catch (error) {
    const response = handleAxiosError(error);
    dispatch(paymentError(response));
    return { error: { response } };
  }
};
