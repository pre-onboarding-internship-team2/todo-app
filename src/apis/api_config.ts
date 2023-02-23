import axios from "axios";

const API_URL = "https://pre-onboarding-selection-task.shop/";

export const client = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const todoInstance = axios.create({
  baseURL: API_URL,
  headers: {
    Authorization: `Bearer ${localStorage.getItem("token")}`,
    "Content-Type": "application/json",
  },
});

todoInstance.interceptors.request.use(
  (config) => {
    const access_token = localStorage.getItem("token");

    if (access_token && config.headers) {
      config.headers["Authorization"] = `Bearer ${access_token}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
