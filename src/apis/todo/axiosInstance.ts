import axios, { InternalAxiosRequestConfig } from "axios";
import { storage } from "utils";

export const instance = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_URL,
  headers: { "Content-Type": "application/json" },
});

instance.interceptors.request.use((config) => {
  const token = storage.get("access_token");

  if (!token) {
    return Promise.reject(new Error("no token"));
  }

  return {
    ...config,
    headers: { ...config.headers, Authorization: `Bearer ${token}` },
  } as InternalAxiosRequestConfig;
});
