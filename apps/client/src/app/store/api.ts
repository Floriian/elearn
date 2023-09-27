import { axiosBaseQuery } from "@/utils";
import { createApi } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  reducerPath: "api",
  baseQuery: axiosBaseQuery({ baseUrl: "http://localhost:3000/" }),
  endpoints: () => ({}),
});
