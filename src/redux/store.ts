import { configureStore } from "@reduxjs/toolkit";
// import fetchApi from "./features/api/fetch.api";
import currentPageSlice from "./features/slices/currentPageSlice";
import currentPostSlice from "./features/slices/currentPostSlice";

export const store = configureStore({
  reducer: {
    // [fetchApi.reducerPath]: fetchApi.reducer,
    currentPage: currentPageSlice,
    currentPost: currentPostSlice,
  },
  // middleware: (getDefaultMiddleware) =>
  //   getDefaultMiddleware({}).concat([fetchApi.middleware]),
});

export type RootState = ReturnType<typeof store.getState>;
