import { Generic } from "@/types/typs";
import { SERVER_URL } from "@/utils/apiUrl";
import handleAxiosError from "@/utils/error";
import axios from "axios";
import {
  selectFlight,
  selectFlightError,
  selectFlightSuccess,
} from "./reducer";

function flightSelectApi(data: Generic) {
  const url = `${SERVER_URL}/flight-select`;
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    data: JSON.stringify(data),
  };
  return axios(url, options);
}

export const flightSelect = async (data: Generic, dispatch: any) => {
  dispatch(selectFlight());
  try {
    const response: any = await flightSelectApi({ flightOffer: data });
    dispatch(selectFlightSuccess(response.data.data.data.flightOffers));
    console.log(response.data.data);

    return { success: { ...response } };
  } catch (error) {
    const response = handleAxiosError(error);
    dispatch(selectFlightError(response));
    return { error: { response } };
  }
};
