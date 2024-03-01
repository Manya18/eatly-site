import { configureStore } from "@reduxjs/toolkit";
import currentPageSlice from "./features/slices/currentPageSlice";
import currentPostSlice from "./features/slices/currentPostSlice";

export const store = configureStore({
  reducer: {
    currentPage: currentPageSlice,
    currentPost: currentPostSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
