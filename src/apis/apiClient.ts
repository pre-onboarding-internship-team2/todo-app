import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'https://pre-onboarding-selection-task.shop/',
  headers: {
    'Content-Type': 'application/json',
  },
});

apiClient.interceptors.request.use((config) => {
  const accessToken = localStorage.getItem('user');

  if (accessToken && config.headers) {
    config.headers['Authorization'] = `Bearer ${accessToken}`;
  }
  return config;
});

export default apiClient;
