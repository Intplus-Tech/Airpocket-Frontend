import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface SearchResult {
  message: string;
  data: { [x: string]: any }[];
  meta: { [x: string]: any }[];
  // Add other properties as needed
}
[];

interface SearchState {
  query: object;
  result: SearchResult | null;
  isLoading: boolean;
  error: boolean | { [x: string]: any };
}

const initialState: SearchState = {
  query: {},
  // result: [{ message: "", data: [{}], meta: [{}] }],
  result: null,
  isLoading: false,
  error: false,
};

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setSearchQuery(state, action: PayloadAction<{ [key: string]: any }>) {
      state.query = { ...state.query, ...action.payload };
    },
    startSearch: (state) => {
      state.isLoading = true;
      state.error = false;
      console.log(state.isLoading);
    },
    searchResultSuccess(
      state,
      action: PayloadAction<{
        message: string;
        data: {}[];
        meta: { [x: string]: any }[];
        // Add other properties as needed
      }>
    ) {
      state.result = action.payload;
      state.isLoading = false;
      state.error = false;
      console.log(state.result, "redux");
      console.log(state.isLoading);
    },
    searchResultError(state, action: PayloadAction<boolean>) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const {
  setSearchQuery,
  searchResultSuccess,
  startSearch,
  searchResultError,
} = searchSlice.actions;
export default searchSlice.reducer;
