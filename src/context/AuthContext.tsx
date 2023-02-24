import React, { createContext, useCallback } from "react";
import { useNavigate } from "react-router-dom";

type ContextType = {
  access_token: string | null;
  saveToken: (token: string) => void;
  clearToken: () => void;
};

type AuthContextProviderProps = {
  children: React.ReactNode;
};

export const AuthContext = createContext<ContextType>({
  access_token: null,
  saveToken: () => {},
  clearToken: () => {},
});

const AuthContextProvider = ({ children }: AuthContextProviderProps) => {
  const navigate = useNavigate();
  const access_token = localStorage.getItem("token");

  const saveToken = useCallback((token: string) => {
    localStorage.setItem("token", token);
  }, []);

  const clearToken = useCallback(() => {
    localStorage.removeItem("token");
    navigate("/signin");
  }, [navigate]);

  const value = { access_token, saveToken, clearToken };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthContextProvider;
