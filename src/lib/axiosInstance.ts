import axios from "axios";
import { cookies } from "next/headers";

const baseURL = "https://intellibin-treekle-be.onrender.com";

export const axiosInstance = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token = cookies().get("intellibin_token");
    if (!token) return config;
    config.headers.Authorization = `Bearer ${token}`;
    config.headers["Content-Type"] = "application/json";
    return config;
  },
  (error) => Promise.reject(error),
);
