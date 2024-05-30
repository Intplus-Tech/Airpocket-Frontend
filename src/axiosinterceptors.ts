// axiosConfig.ts
import axios, { AxiosError } from "axios";
import { clearStorage } from "./utils/locaStorage";

// Create an instance of Axios
const axiosInstance = axios.create({
  baseURL: "https://flight-booking-api-wkpn.onrender.com/api/v1", // Replace with your API's base URL
});

// Add a response interceptor
axiosInstance.interceptors.response.use(
  (response) => {
    console.log("hey");
    // If the response is successful, simply return it
    return response;
  },
  (error: AxiosError) => {
    // If the response has a status of 401, redirect to the home page
    if (error.response && error.response.status === 401) {
      console.log(error);
      clearStorage();
      // window.location.href = "/";
    }
    // Otherwise, return the error
    return Promise.reject(error);
  }
);

export default axiosInstance;
