import axios, { AxiosInstance, AxiosResponse, AxiosError } from "axios";

const authApi: AxiosInstance = axios.create({
  baseURL: "https://pre-onboarding-selection-task.shop/",
  headers: {
    "Content-Type": "application/json",
  },
});

export const signIn = (data: { email: string; password: string }) => {
  return authApi("auth/signin", {
    method: "POST",
    data,
  });
};

export const signUp = (data: { email: string; password: string }) => {
  return authApi("auth/signup", {
    method: "POST",
    data,
  });
};

authApi.interceptors.response.use(
  (response: AxiosResponse) => {
    if (response.status === 200) {
      return response.data.access_token;
    } else if (response.status === 201) {
      alert(`회원가입이 되셨습니다.`);
    }
  },
  (error: AxiosError) => {
    if (error.response) {
      if (error.response.status === 404) {
        alert(`존재하지 않는 이메일입니다.`);
        return error.response;
      } else if (error.response.status === 401) {
        alert(`비밀번호가 올바르지 않습니다.`);
        return error.response;
      } else if (error.response.status === 400) {
        alert(`이미 존재하는 이메일 입니다.`);
        return error.response;
      }
    }
  },
);
