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

const searchSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state) => {
      state.isLoading = true;
      state.error = false;
    },
    loginSuccess: (state, action: PayloadAction<{ user: UserDetail }>) => {
      state.isLoading = false;
      state.user = action.payload.user;
      state.error = false;
    },
    loginError: (state, action: PayloadAction<boolean>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const { loginSuccess, login, loginError } = searchSlice.actions;
export default searchSlice.reducer;
