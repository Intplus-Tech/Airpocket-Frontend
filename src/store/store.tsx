import { configureStore } from "@reduxjs/toolkit";
// import searchSlice from "@/Feature/Hero/slice/reducer";
// import searchSlice from "./features/searchSlice";
import searchSlice from "@/Features/searchslice/reducers";
import userSlice from "@/Features/userSlice/reducer";
import selectFlight from "@/Features/selectFlight/reducer";
import paymentSlice from "@/Features/paymentSlice/reducer";

export const store = configureStore({
  reducer: {
    search: searchSlice,
    user: userSlice,
    selectFlight: selectFlight,
    payment: paymentSlice,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
