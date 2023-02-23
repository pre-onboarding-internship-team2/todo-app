import { clientAuthAPI } from 'apis/clientAPI';
import Auth from 'apis/auth/authApi.type';

export const signUpInstance = async (email: Auth["email"], password: Auth["password"]) => {
    return await clientAuthAPI.post(`auth/signup`, { email, password });
};
export const signInInstance = async (email: Auth["email"], password: Auth["password"]) => {
    return await clientAuthAPI.post(`auth/signIn`, { email, password });
};
  