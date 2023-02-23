import axios from 'axios';

export const clientAuthAPI = axios.create({
    baseURL: 'https://pre-onboarding-selection-task.shop/',
    headers: {
        "Content-Type": "application/json",
    },
});