import axios from 'axios';
import { storage } from '../storage';

const API_URL = 'https://pre-onboarding-selection-task.shop/';

export const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const tokenApi = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

tokenApi.interceptors.request.use(
  (config) => {
    const accessToken = storage.get('access_token');

    if (accessToken && config.headers) {
      config.headers['Authorization'] = `Bearer ${accessToken}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
