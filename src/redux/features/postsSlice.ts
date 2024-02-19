import { createSlice } from "@reduxjs/toolkit";

export const postsSlice = createSlice({
  name: "posts",
  initialState: {
    posts: [
      {
        id: 0,
        title: "",
        tags: [""],
        reactions: 0,
        body: "",
        userId: 0,
      },
    ],
  },
  reducers: {
    setPosts: (state, action) => state = action.payload
  },
});

export const { setPosts } = postsSlice.actions;

export default postsSlice.reducer;
