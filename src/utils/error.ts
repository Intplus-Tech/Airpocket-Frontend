import axios from "axios";

const handleAxiosError = (error: any) => {
  let errorResponse;
  if (axios.isCancel(error)) {
    errorResponse = error.message;
    return errorResponse;
  } else if (error.response) {
    // The request was made, but the server responded with an error status

    errorResponse = error.response.data;
    return errorResponse;

    // toast.error(`Error: ${status} - ${data.message}`);
  } else if (error.request) {
    // The request was made, but no response was received
    errorResponse = `${error.message},Check your internet connection`;
    return errorResponse;

    // toast.error('No response received. Check your internet connection.');
  } else {
    // Something happened in setting up the request that triggered an Error
    errorResponse = error.message;
    return errorResponse;

    // toast.error(`Error: ${error.message}`);
  }
};

export default handleAxiosError;
