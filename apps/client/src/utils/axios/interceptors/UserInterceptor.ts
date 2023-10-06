import { RootState } from "@/app";
import { InternalAxiosRequestConfig } from "axios";

export const UserInterceptor = (
  config: InternalAxiosRequestConfig,
  store: RootState,
): InternalAxiosRequestConfig => {
  if (store) {
    config.headers["identifier"] = store?.user?.email;
  }
  return config;
};
