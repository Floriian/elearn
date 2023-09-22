import type { BaseQueryFn } from "@reduxjs/toolkit/query";
import axios from "axios";
import type { AxiosRequestConfig, AxiosError } from "axios";
export const axiosBaseQuery =
  (
    { endpoint }: { endpoint: string } = { endpoint: "" }
  ): BaseQueryFn<
    {
      method: AxiosRequestConfig["method"];
      data?: AxiosRequestConfig["data"];
      params?: AxiosRequestConfig["params"];
    },
    unknown,
    unknown
  > =>
  async ({ method, data, params }) => {
    try {
      const result = await axios({
        url: "http://localhost:3000" + endpoint,
        method,
        data,
        params,
      });
      return { data: result.data };
    } catch (axiosError) {
      let err = axiosError as AxiosError;
      return {
        error: {
          status: err.response?.status,
          data: err.response?.data || err.message,
        },
      };
    }
  };
