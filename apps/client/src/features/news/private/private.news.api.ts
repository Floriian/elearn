import { api } from "@/app";
import { News } from "@/features";

export const newsPrivateApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getPrivateNews: builder.query<News[], void>({
      query: () => ({ method: "GET", url: "/news/private" }),
    }),
  }),
  overrideExisting: false,
});

export const { useGetPrivateNewsQuery } = newsPrivateApi;
