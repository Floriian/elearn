import { axiosInstance } from "@/utils/axios.instance";
import type { BaseQueryFn } from "@reduxjs/toolkit/query";
import type { AxiosRequestConfig, AxiosError } from "axios";
export const axiosBaseQuery =
  (
    { url }: { url: string } = { url: "" }
  ): BaseQueryFn<
    {
      method: AxiosRequestConfig["method"];
      data?: AxiosRequestConfig["data"];
      params?: AxiosRequestConfig["params"];
      path?: string;
    },
    unknown,
    unknown
  > =>
  async ({ method, data, params }) => {
    console.log({ params, method });
    try {
      const result = await axiosInstance({
        url,
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
