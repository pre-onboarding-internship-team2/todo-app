import { apiClient } from "../client";
import { AuthRequestProps, AuthResponseProps } from "./auth.types";

export async function signUpApi(data: AuthRequestProps) {
    return await apiClient.post<AuthResponseProps>("/auth/signup", data);
};

export async function signInApi(data: AuthRequestProps) {
    return await apiClient.post<AuthResponseProps>("/auth/signin", data);
};