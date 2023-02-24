import axios from 'axios';

export const clientAuthAPI = axios.create({
    baseURL: 'https://pre-onboarding-selection-task.shop/',
    headers: {
        "Content-Type": "application/json",
    },
});

export const clientTodoAPI = axios.create({
    baseURL: 'https://pre-onboarding-selection-task.shop/',
    headers: {
        Authorization: `Bearer ${localStorage.getItem("ACCESS_TOKEN")}`,
        "Content-Type": "application/json"
    },
});

clientTodoAPI.interceptors.request.use(
    (config) => {
      const access_token = localStorage.getItem("ACCESS_TOKEN");
  
      if (access_token && config.headers) {
        config.headers["Authorization"] = `Bearer ${access_token}`;
      }
  
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );
