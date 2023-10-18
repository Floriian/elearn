import axios, { HttpStatusCode } from "axios";
import { store as reduxStore } from "../../app/store/store";
import { string } from "zod";
import { setTokens } from "@/features";
export const axiosInstance = axios.create({
  baseURL: "http://localhost:3000/api",
});

let store: typeof reduxStore;
export const injectStore = (_store: any) => (store = _store);

axiosInstance.interceptors.request.use((config) => {
  return config;
});

axiosInstance.interceptors.request.use(async (config) => {
  const { accessToken } = store.getState().auth;

  config.headers.Authorization = `Bearer ${accessToken}`;

  return config;
});

axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    const { refreshToken } = store.getState().auth;

    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      const { data } = await axios.get<{
        accessToken: string;
        refreshToken: string;
      }>("http://localhost:3000/api/auth/refresh", {
        headers: {
          Authorization: "Bearer " + refreshToken,
        },
      });

      axios.defaults.headers.common["Authorization"] =
        "Bearer " + data.accessToken;

      store.dispatch(setTokens(data));

      return axiosInstance(originalRequest);
    }
    return Promise.reject(error);
  },
);

axiosInstance.interceptors.response.use((config) => {
  console.log("STORE", store.getState());
  return config;
});
