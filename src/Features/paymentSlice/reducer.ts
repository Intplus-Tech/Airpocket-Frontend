import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface PaymentResponse {
  message: string;
  data: {
    email: string;
    access_code: string;
    amount: string;
    reference: string;
    status: string;
    _id: string;
    __v: number;
  };
  paymentDetails: {
    status: boolean;
    message: string;
    data: {
      authorization_url: string;
      access_code: string;
      reference: string;
    };
  };
}

interface PaymentState {
  result: PaymentResponse | null;
  isLoading: boolean;
  error: boolean | { [x: string]: any };
}

const initialState: PaymentState = {
  result: null,
  isLoading: false,
  error: false,
};

const paymentSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    makePayment: (state) => {
      state.isLoading = true;
      state.error = false;
    },
    paymentSuccess(state, action: PayloadAction<PaymentResponse>) {
      state.result = action.payload;
      state.isLoading = false;
      state.error = false;
    },
    paymentError(state, action: PayloadAction<boolean>) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const { makePayment, paymentSuccess, paymentError } =
  paymentSlice.actions;
export default paymentSlice.reducer;
