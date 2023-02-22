import React, { createContext, useCallback } from "react";
import { useNavigate } from "react-router-dom";

type ContextType = {
  token: string | null;
  saveToken: (token: string) => void;
  clearToken: () => void;
};

type AuthContextProviderProps = {
  children: React.ReactNode;
};

const AUTH_TOKEN_KEY = "token";

export const AuthContext = createContext<ContextType>({
  token: null,
  saveToken: () => {},
  clearToken: () => {},
});

const AuthContextProvider = ({ children }: AuthContextProviderProps) => {
  const navigate = useNavigate();
  const token = localStorage.getItem(AUTH_TOKEN_KEY);

  const saveToken = useCallback(
    (token: string) => {
      localStorage.setItem(AUTH_TOKEN_KEY, token);
      navigate("/todo");
    },
    [navigate],
  );

  const clearToken = useCallback(() => {
    localStorage.removeItem(AUTH_TOKEN_KEY);
    navigate("/signin");
  }, [navigate]);
  console.log("rendering");

  const value = { token, saveToken, clearToken };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthContextProvider;
