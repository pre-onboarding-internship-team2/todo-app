import axios from "axios";
import { handleError } from "../../utils/error";
import { SignRequestProps, SignResponseProps } from "./sign.type";

export function fetchSignIn(props: SignRequestProps) {
  return getInstance().post<SignResponseProps>("signin", props);
}

export function fetchSignup(props: SignRequestProps) {
  return getInstance().post<SignResponseProps>("signup", props);
}

const instance = axios.create({
  baseURL: `${process.env.REACT_APP_BACKEND_URL}/auth/`,
});

const getInstance = () => {
  if (!process.env.REACT_APP_BACKEND_URL)
    handleError(new Error("no environment variable : REACT_APP_BACKEND_URL"));

  return instance;
};
