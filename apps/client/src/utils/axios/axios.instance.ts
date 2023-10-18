import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "http://localhost:3000/api",
});

axiosInstance.interceptors.request.use((config) => {
  console.log(config);
  return config;
});
axiosInstance.interceptors.response.use((config) => {
  console.log(config);
  return config;
});
