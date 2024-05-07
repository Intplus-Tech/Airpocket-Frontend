import { UserDetail } from "@/types/typs";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface userState {
  user: UserDetail | null;
  isLoading: boolean;
  error: boolean | { [x: string]: any };
}

const initialState: userState = {
  user: {
    _id: "",
    firstname: "",
    lastname: "",
    gender: "male",
    country: "",
    email: "",
    password: "",
    verified: false,
    role: "USER",
    phone: "",
    generalToken: "",
    generalTokenExpiration: null,
    createdAt: "",
    __v: 0,
    lastLogin: "",
  },
  isLoading: false,
  error: false,
};

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    login: (state) => {
      state.isLoading = true;
      state.error = false;
      console.log(state.isLoading);
    },
    loginSuccess: (state, action: PayloadAction<{ user: UserDetail }>) => {
      state.isLoading = false;
      state.user = action.payload.user;
      state.error = false;
      console.log(state.isLoading);
    },
    loginError(state, action: PayloadAction<boolean>) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const { loginSuccess, login, loginError } = searchSlice.actions;
export default searchSlice.reducer;
