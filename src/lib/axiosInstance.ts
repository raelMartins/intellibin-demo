import axios from "axios";

import { getCookie, getCookies } from "cookies-next";
import { authRefresh } from "~/app/auth/actions";
// import { cookies } from "next/headers";

const baseURL = "https://intellibin-treekle-be-admin.onrender.com";

export const axiosInstance = axios.create({
  baseURL,
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token = getCookie("intellibin_token");
    console.log(token, "++++++++++<<<<<<<<");

    if (!token) return config;
    config.headers.Authorization = `Bearer ${token}`;
    config.headers["Content-Type"] = "application/json";
    return config;
  },
  (error) => Promise.reject(error),
);

axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      try {
        const newAccessToken = await authRefresh();
        console.log("newAccessToken", newAccessToken);
        // originalRequest.headers.Authorization =
        return axiosInstance(originalRequest);
      } catch (error) {
        console.log(
          error instanceof Error ? error.message : "interceptors errors",
        );
      }
    }
    return Promise.reject(error);
  },
);
