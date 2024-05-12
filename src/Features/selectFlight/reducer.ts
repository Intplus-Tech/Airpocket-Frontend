import { Generic } from "@/types/typs";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface selectFlightResult {
  data: { [x: string]: any };
  dictionaries: { [x: string]: any };
  // Add other properties as needed
}

interface SelectFlightState {
  result: selectFlightResult | null;
  isLoading: boolean;
  error: boolean | { [x: string]: any };
}

const initialState: SelectFlightState = {
  result: null,
  isLoading: false,
  error: false,
};

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    selectFlight: (state) => {
      state.isLoading = true;
      state.error = false;
    },
    selectFlightSuccess(state, action: PayloadAction<selectFlightResult>) {
      state.result = action.payload;
      state.isLoading = false;
      state.error = false;
    },
    selectFlightError(state, action: PayloadAction<boolean>) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const { selectFlight, selectFlightSuccess, selectFlightError } =
  searchSlice.actions;
export default searchSlice.reducer;
