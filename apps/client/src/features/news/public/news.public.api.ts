import { api } from "@/app";
import { News } from "@/features";

export const newsPublicApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getPublicNews: builder.query<News[], void>({
      query: () => ({ method: "GET", url: "/news" }),
    }),
    getPublicNewsById: builder.query<News, number>({
      query: (id: number) => ({ method: "GET", url: `/news/${id}` }),
    }),
  }),
  overrideExisting: false,
});

export const { useGetPublicNewsByIdQuery, useGetPublicNewsQuery } =
  newsPublicApi;
