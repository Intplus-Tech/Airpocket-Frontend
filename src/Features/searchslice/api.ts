import handleAxiosError from "@/utils/error";
import axios from "axios";
import {
  searchResultError,
  searchResultSuccess,
  startSearch,
} from "./reducers";
import { SERVER_URL } from "@/utils/apiUrl";
import { User } from "@/types/typs";
import { getItemFromStorage } from "@/utils/locaStorage";

function getSearchResultsApi(data: User) {
  console.log(data);
  const url = `${SERVER_URL}/flight-search?originLocationCode=PAR&destinationLocationCode=EWR&departureDate=2024-10-21&adults=1&travelClass=FIRST&nonStop=false&max=2`;
  const options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      //   Authorization: `Bearer ${authToken}`,
    },
  };
  return axios(url, options);
}

function getsearchKeyWordApi(data: User) {
  const auto_complete_token = getItemFromStorage("auto_complete_token");

  const url = `https://test.api.amadeus.com/v1/reference-data/locations?subType=CITY,AIRPORT&keyword=${data.key}`;
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

    dispatch(searchResultSuccess(response.data.data));

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
    return { error: { response } };
  }
};

// IhSF3mhLY2l9xGDN0duCyuMXSgz0IGXr     Publie
//LDvU41Ybz9LIzEw4     private
