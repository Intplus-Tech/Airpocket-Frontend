import handleAxiosError from "@/utils/error";
import axios from "axios";
import {
  searchResultError,
  searchResultSuccess,
  startSearch,
} from "./reducers";
import { SERVER_URL } from "@/utils/apiUrl";
import { Generic, User } from "@/types/typs";
import { getItemFromStorage } from "@/utils/locaStorage";
import { LIMIT_FIVE } from "@/utils/Constant";

function getSearchResultsApi(data: User) {
  console.log(data);
  let url;
  if (data.returnDate) {
    url = `${SERVER_URL}/flight-search?originLocationCode=${
      data.originLocationCode
    }&destinationLocationCode=${data.destinationLocationCode}&departureDate=${
      data.depatureDate
    }&returnDate=${data.returnDate}&adults=${data.adult}&children=${
      data.children
    }&infants=${
      data.infants
    }&travelClass=${data.travelClass.toUpperCase()}&nonStop=false&max=${LIMIT_FIVE}`;
  } else {
    url = `${SERVER_URL}/flight-search?originLocationCode=${
      data.originLocationCode
    }&destinationLocationCode=${data.destinationLocationCode}&departureDate=${
      data.depatureDate
    }&adults=${data.adult}&children=${data.children}&infants=${
      data.infants
    }&travelClass=${data.travelClass.toUpperCase()}&nonStop=false&max=${LIMIT_FIVE}`;
  }
  const options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      //   Authorization: `Bearer ${authToken}`,
    },
  };
  return axios(url, options);
}

function getsearchKeyWordApi(data: Generic) {
  const auto_complete_token = getItemFromStorage("auto_complete_token");

  const url = `https://test.api.amadeus.com/v1/reference-data/locations?subType=AIRPORT&keyword=${data.key}`;
  const options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${auto_complete_token}`,
    },
  };
  return axios(url, options);
}

export const searchFlight = async (data: User, dispatch: any) => {
  dispatch(startSearch());

  try {
    const response: any = await getSearchResultsApi(data);

    dispatch(searchResultSuccess(response.data));

    return { success: { ...response } };
  } catch (error) {
    const response = handleAxiosError(error);
    dispatch(searchResultError(response.error));
    return { error: { response } };
  }
};

export const searchKeyWord = async (data: User) => {
  try {
    const response: any = await getsearchKeyWordApi(data);

    return { success: { ...response } };
  } catch (error) {
    const response = handleAxiosError(error);
    return { error: response };
  }
};

// IhSF3mhLY2l9xGDN0duCyuMXSgz0IGXr     Publie
//LDvU41Ybz9LIzEw4     private
