import { createContext, useState, useEffect, ReactNode, useContext } from "react";
import { AxiosError } from "axios";
import { signUpApi, signInApi } from "../apis/auth/auth";
import { AuthRequestProps } from "../apis/auth/auth.types";

interface AuthContextProps {
    authInfo: string | null;
    signUp: (props: AuthRequestProps, callback: VoidFunction) => void;
    signIn: (props: AuthRequestProps, callback: VoidFunction) => void;
    signOut: (callback: VoidFunction) => void;
}

export const AuthContext = createContext<AuthContextProps>(
    { authInfo: null, signUp: () => {}, signIn: () => {}, signOut: () => {}}
);

export function AuthProvider({ children } : { children: ReactNode}) {
    const [authInfo, setAuthInfo] = useState("");

    useEffect(()=>{
        setAuthInfo(localStorage.getItem("access_token" )!);
    }, []);

    const signUp : AuthContextProps["signUp"] = (data, callback) => {
        signUpApi(data).then((res) => {
            callback();
            return { accessToken: res.data.access_token };
        })
        .catch((err: AxiosError) => {
            const status = err.response?.status;
            let msg: string;
            if (status === 401) {
                msg = "잘못된 비밀번호 입니다.";
            } else if (status === 404) {
              msg = "존재하지 않는 사용자입니다.";
            } else {
              msg =
                "알 수 없는 에러가 발생했습니다. 잠시 후 다시 시도 해 주세요.";
            }
            throw new Error(msg);
        });
    };

    const signIn : AuthContextProps["signIn"] = (data, callback) => {
        signInApi(data)
        .then((res) => {
            localStorage.setItem("access_token", res.data.access_token);
            setAuthInfo(res.data.access_token);
            callback();
            return { accessToken: res.data.access_token };
        })
        .catch((err: AxiosError) => {
            const status = err.response?.status;
            let msg: string;
            if (status === 400) {
                msg = "이미 가입된 사용자 입니다.";
              } else {
                msg =
                  "알 수 없는 에러가 발생했습니다. 잠시 후 다시 시도 해 주세요.";
              }
            throw new Error(msg);
        });
    };
    
    const signOut : AuthContextProps["signOut"] = (callback) => {
        localStorage.removeItem("access_token");
        setAuthInfo("");
        callback();
    };

    return (
        <AuthContext.Provider value={{ authInfo, signUp, signIn, signOut}}>
            {children}
        </AuthContext.Provider>
    );
}

