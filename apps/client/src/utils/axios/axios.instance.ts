import { BearerInterceptor, UserInterceptor } from "@/utils/axios/interceptors";
import axios from "axios";

let store;
export const injectStore = (_store: any) => {
  store = _store;
};

export const axiosInstance = axios.create();

axiosInstance.interceptors.request.use((config) => {
  console.log(config);
  return config;
});

axiosInstance.interceptors.request.use((config) =>
  BearerInterceptor(config, store!),
);
axiosInstance.interceptors.request.use((config) =>
  UserInterceptor(config, store!),
);

axiosInstance.interceptors.response.use((config) => {
  console.log(config);
  return config;
});
