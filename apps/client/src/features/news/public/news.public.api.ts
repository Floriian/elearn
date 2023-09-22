import { News } from "@/features";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const newsPublicApi = createApi({
  reducerPath: "newsPublicApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000" }),
  endpoints: (builder) => ({
    getAllNews: builder.query<News[], void>({
      query: () => ({ url: "/news", method: "get" }),
    }),
    getNews: builder.query<News, string>({
      query: (id) => ({ url: `/news/${id}`, method: "get" }),
    }),
  }),
});
export const { useGetAllNewsQuery, useGetNewsQuery } = newsPublicApi;
