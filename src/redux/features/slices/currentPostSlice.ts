import { createSlice } from "@reduxjs/toolkit";
import { IPostProps } from "../../../types/APItypes/PostProps";

const currentPostSlice = createSlice({
  name: "currentPost",
  initialState: {
    post: {} as IPostProps,
  },
  reducers: {
    setPost: (state, action) => {
      state.post = action.payload;
    },
  },
});

export const { setPost } = currentPostSlice.actions;

export default currentPostSlice.reducer;
