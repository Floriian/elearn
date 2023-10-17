import { RootState } from "@/app";
import { InternalAxiosRequestConfig } from "axios";

export const AuthInterceptor = (
  config: InternalAxiosRequestConfig,
  store: RootState,
): InternalAxiosRequestConfig => {
  config.headers.Authorization = "Bearer " + store?.user?.accessToken;
  return config;
};
