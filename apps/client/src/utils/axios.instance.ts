import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: import.meta.env.API_URL || "http://localhost:3000",
});

axiosInstance.interceptors.request.use((config) => {
  console.log(config);
  return config;
});
