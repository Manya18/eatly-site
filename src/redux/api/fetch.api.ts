import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import { RecipesProps } from '../../types/APItypes/RecipesProps'
import { PostProps } from '../../types/APItypes/PostProps'

export const fetchApi = createApi({
    reducerPath: "fetch/api",
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://dummyjson.com'
    }),
    endpoints: build => ({
        getRecipes: build.query<RecipesProps, string>({
            query: (search: string) => ({
                url: 'recipes/meal-type/lunch',
            })
        }),
        getPosts: build.query<PostProps, number>({
            query: (postId: number) => ({
                url: `posts/${postId}`,
            })
        })

    })
})

export const {useGetRecipesQuery, useGetPostsQuery} = fetchApi