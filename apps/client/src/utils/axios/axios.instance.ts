import { RootState } from "@/app";
import { AuthInterceptor, UserInterceptor } from "@/utils/axios/interceptors";
import axios from "axios";

let store: RootState;
export const injectStore = (_store: any) => {
  store = _store;
};

export const axiosInstance = axios.create();

axiosInstance.interceptors.request.use((config) => {
  console.log(config);
  return config;
});

axiosInstance.interceptors.request.use((config) =>
  AuthInterceptor(config, store),
);
axiosInstance.interceptors.request.use((config) =>
  UserInterceptor(config, store),
);

axiosInstance.interceptors.response.use((config) => {
  console.log(config);
  return config;
});
