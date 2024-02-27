import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RecipesProps } from "../../../types/APItypes/RecipesProps";
import { IPostProps, PostProps } from "../../../types/APItypes/PostProps";
import { CommentsProps } from "../../../types/APItypes/CommentsProps";
import { AuthorProps } from "../../../types/APItypes/AuthorProps";

const fetchApi = createApi({
  reducerPath: "fetch/api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://dummyjson.com",
  }),
  endpoints: (build) => ({
    getRecipes: build.query<RecipesProps, string>({
      query: (search: string) => ({
        url: "recipes/meal-type/lunch",
      }),
    }),
    getAllPosts: build.query<PostProps, number>({
      query: (skip: number) => ({
        url: `posts/?limit=12&skip=${skip}`,
      }),
    }),
    getSinglePost: build.query<IPostProps, string>({
      query: (id: string) => ({
        url: `posts/${id}`,
      }),
    }),
    getAuthor: build.query<AuthorProps, string>({
      query: (id: string) => ({
        url: `users/${id}`,
      }),
    }),
    getSomeComments: build.query<CommentsProps, number>({
      query: (count: number) => ({
        url: `comments?limit=${count}`,
      }),
    }),
    getCommentsByPostId: build.query<CommentsProps, string>({
      query: (id: string) => ({
        url: `comments/post/${id}`,
      }),
    }),
    addComment: build.mutation({
      query: (commentBody) => ({
        url: "comments/add",
        method: "POST",
        body: commentBody,
      }),
    }),
  }),
});

export const {
  useGetRecipesQuery,
  useGetAllPostsQuery,
  useGetSinglePostQuery,
  useGetAuthorQuery,
  useGetSomeCommentsQuery,
  useGetCommentsByPostIdQuery,
  useAddCommentMutation,
} = fetchApi;

export default fetchApi;
