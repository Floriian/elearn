import { axiosBaseQuery } from "@/utils";
import { createApi } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  reducerPath: "api",
  baseQuery: axiosBaseQuery,
  endpoints: () => ({}),
  tagTypes: ["Courses"],
});
