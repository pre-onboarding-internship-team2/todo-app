import apiClient from '../apiClient';
import { AuthRequest, AuthResponse } from './auth.types';

export async function signin(data: AuthRequest): Promise<AuthResponse> {
  return apiClient
    .post('/auth/signin', data, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .then((data) => {
      const accessToken = data.data.access_token;
      localStorage.setItem('user', accessToken);
      return accessToken;
    })
    .catch((err) => {
      const status = err.response?.status;
      let message: string;

      if (status === 404) {
        message = err.response?.data.message;
      } else if (status === 401) {
        message = '비밀번호가 올바르지 않습니다.';
      } else {
        message = '알 수 없는 오류가 발생하였습니다. 잠시 후 다시 시도해주세요';
      }

      throw new Error(message);
    });
}

export async function signup(data: AuthRequest): Promise<null> {
  return apiClient
    .post('/auth/signup', data, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .then((data) => data.data)
    .catch((err) => {
      const status = err.response?.status;
      let message: string;
      if (status === 400) {
        message = err.response?.data.message;
      } else {
        message = '알 수 없는 오류가 발생하였습니다. 잠시 후 다시 시도해주세요';
      }

      throw new Error(message);
    });
}
