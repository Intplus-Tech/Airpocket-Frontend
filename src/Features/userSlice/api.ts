import handleAxiosError from "@/utils/error";
import axios from "axios";
import { loginSuccess, login, loginError } from "./reducer";
import { SERVER_URL } from "@/utils/apiUrl";
import { User } from "@/types/typs";
import { storeItem } from "@/utils/locaStorage";

function loginApi(data: User) {
  const url = `${SERVER_URL}/login`;
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      //   Authorization: `Bearer ${authToken}`,
    },
    data: JSON.stringify(data),
  };
  return axios(url, options);
}

export const loginAccount = async (data: User, dispatch: any) => {
  dispatch(login());

  try {
    const response: any = await loginApi(data);

    const cookies = response.headers["set-cookie"];
    console.log(cookies);

    const { access_token, data: userData, message } = response.data;
    if (response.data) {
      console.log(userData);
      document.cookie = `access_token=${access_token}`;
      // storeItem("access_token", access_token);
      storeItem("user", userData);
      dispatch(loginSuccess(userData));
    }
    return { success: { message } };
  } catch (error) {
    console.log(error);
    const response = handleAxiosError(error);
    dispatch(loginError(response.error));
    return { error: { response } };
  }
};
