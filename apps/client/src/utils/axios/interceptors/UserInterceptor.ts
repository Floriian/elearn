import { RootState } from "@/app";
import { InternalAxiosRequestConfig } from "axios";

export const UserInterceptor = (
  config: InternalAxiosRequestConfig,
  store: RootState,
): InternalAxiosRequestConfig => {
  config.headers["identifier"] = store.user.email;
  return config;
};
