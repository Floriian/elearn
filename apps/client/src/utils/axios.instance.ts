import axios from "axios";

export const axiosInstance = axios.create();

axiosInstance.interceptors.request.use((config) => {
  console.log(config);
  return config;
});
