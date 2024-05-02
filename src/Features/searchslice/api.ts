import handleAxiosError from "@/utils/error";
import axios from "axios";
import {
  searchResultError,
  searchResultSuccess,
  startSearch,
} from "./reducers";
import { SERVER_URL } from "@/utils/apiUrl";
import { User } from "@/types/typs";

function getSearchResultsApi(data: User) {
  const url = `${SERVER_URL}/flight-search?originLocationCode=SFO&destinationLocationCode=PRG&departureDate=2024-05-02&returnDate=2024-05-30&adults=1&travelClass=ECONOMY&nonStop=false&page=1&limit=2`;
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
  const url = `https://test.api.amadeus.com/v1/reference-data/locations?subType=CITY,AIRPORT&keyword=${data.key}`;
  const options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer DbGrHPrUQL9GSIyNGXbqQxOgMBd9`,
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
    dispatch(searchResultError);
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
