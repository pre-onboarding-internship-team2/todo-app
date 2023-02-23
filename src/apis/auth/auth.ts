import { client } from "../api_config";

export const signUpApi = async (email: string, password: string) => {
  return await client.post("/auth/signup", { email, password });
};

export const signInApi = async (email: string, password: string) => {
  return await client.post("/auth/signin", { email, password });
};
