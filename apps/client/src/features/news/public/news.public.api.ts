import { News } from "@/features";
import { axiosBaseQuery } from "@/utils";
import { createApi } from "@reduxjs/toolkit/query/react";

export const newsPublicApi = createApi({
  reducerPath: "newsPublicApi",
  baseQuery: axiosBaseQuery({ path: "/news" }),
  endpoints: (builder) => ({
    getAllNews: builder.query<News[], void>({
      query: () => ({ method: "get" }),
    }),
    getNews: builder.query<News, string>({
      query: (id) => ({ url: `/${id}`, method: "get" }),
    }),
  }),
});
export const { useGetAllNewsQuery, useGetNewsQuery } = newsPublicApi;
