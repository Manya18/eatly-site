import { createSlice } from "@reduxjs/toolkit";

const currentPageSlice = createSlice({
  name: "currentPage",
  initialState: {
    page: 0,
  },
  reducers: {
    setPage: (state, action) => {
      state.page = action.payload;
    },
  },
});

export const { setPage } = currentPageSlice.actions;

export default currentPageSlice.reducer;
