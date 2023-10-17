import { RootState, store as reduxStore } from "@/app";
import { setTokens } from "@/features";
import { AuthInterceptor } from "@/utils/axios/interceptors";
import axios from "axios";

let store: RootState;
export const injectStore = (_store: any) => {
  console.log("store injected.");
  store = _store;
};

export const axiosInstance = axios.create({
  baseURL: "http://localhost:3000/api",
});

axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      if (store) {
        const token = reduxStore.getState().auth.refreshToken;
        try {
          const response = await axiosInstance.get("/auth/refresh", {
            headers: {
              Authorization: "Bearer " + token,
            },
          });

          reduxStore.dispatch(setTokens(response.data));

          originalRequest.headers[
            "Authorization"
          ] = `Bearer ${response.data.accessToken}`;

          return axios(originalRequest);
        } catch (error) {
          console.error("Token refresh failed:", error);
        }
      }

      return Promise.reject(error);
    }
  },
);

axiosInstance.interceptors.request.use((config) => {
  console.log(config);
  return config;
});
axiosInstance.interceptors.response.use((config) => {
  console.log(config);
  return config;
});
