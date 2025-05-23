import { FlightTableData } from "@/types/typs";
import { getItemFromStorage } from "@/utils/locaStorage";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface SearchResult {
  message: string;
  data: { [x: string]: any }[];
  meta: { [x: string]: any }[];
  dictionaries: {
    carriers: string;
  };
  // Add other properties as needed
}
[];

interface Query {
  adult: number;
  children: number;
  infants: number;
  depatureDate: string;
  destinationLocationCode?: string | null; // Optional property
  originLocationCode?: string | null; // Union type for string or null
  returnDate: string;
  travelClass: string;
}

interface SearchState {
  query: Query;
  result: SearchResult | null;
  tableData: FlightTableData[] | null;
  isLoading: boolean;
  error: boolean | { [x: string]: any };
}

const initialState: SearchState = {
  query: getItemFromStorage("flight-search-query")||
    {
      adult: 0,
      children: 0,
      infants: 0,
      depatureDate: "",
      destinationLocationCode: null,
      originLocationCode: null,
      returnDate: "",
      travelClass: "First class",
    } ,
  // result: [{ message: "", data: [{}], meta: [{}] }],
  result: null,
  tableData: null,
  isLoading: false,
  error: false,
};

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setSearchQuery(state, action: PayloadAction<Query>) {
      state.query = { ...state.query, ...action.payload };
    },
    startSearch: (state) => {
      state.isLoading = true;
      state.error = false;
    },
    searchResultSuccess(
      state,
      action: PayloadAction<{
        data: {
          message: string;
          data:[];
          meta: { [x: string]: any }[];
          dictionaries: { carriers: string };
        };
        table: FlightTableData[];
        dictionaries: { carriers: string };
        // Add other properties as needed
      }>
    ) {
      state.result = action.payload.data;
      state.isLoading = false;
      state.tableData = action.payload.table;
      state.error = false;
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
