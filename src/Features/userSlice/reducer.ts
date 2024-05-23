import { UserDetail } from "@/types/typs";
import { getItemFromStorage } from "@/utils/locaStorage";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface userState {
  user: UserDetail | null;
  isLoading: boolean;
  error: boolean | { [x: string]: any };
}

const initialState: userState = {
  user: getItemFromStorage("user") || {
    _id: "",
    firstname: "",
    lastname: "",
    email: "",
    verified: false,
  },
  isLoading: false,
  error: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state) => {
      state.isLoading = true;
      state.error = false;
    },
    loginSuccess: (state, action: PayloadAction<UserDetail | null>) => {
      state.isLoading = false;
      state.user = action.payload;
      state.error = false;
    },
    loginError: (state, action: PayloadAction<boolean>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    signUp: (state) => {
      state.isLoading = true;
      state.error = false;
    },
    signUpSuccess: (state, action: PayloadAction<UserDetail>) => {
      state.isLoading = false;
      state.user = action.payload;
      state.error = false;
    },
    signUpError: (state, action: PayloadAction<boolean>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const {
  loginSuccess,
  login,
  loginError,
  signUpSuccess,
  signUp,
  signUpError,
} = userSlice.actions;
export default userSlice.reducer;
