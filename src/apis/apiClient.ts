import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'https://pre-onboarding-selection-task.shop/',
});

export default apiClient;
