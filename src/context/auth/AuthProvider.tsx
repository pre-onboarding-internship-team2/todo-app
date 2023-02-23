import React, { useState, useCallback, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthContext from 'context/auth/AuthContext';

const ACCESS_TOKEN = "ACCESS_TOKEN";

function AuthProvider({ children }: { children: React.ReactNode }){
    const navigate = useNavigate();
    const [token, setToken] = useState(false);

    const saveToken = useCallback(
        (value: string) => {
            localStorage.setItem(ACCESS_TOKEN, value);
            navigate('/todo');
    },[navigate]);

    const clearToken = useCallback(() => {
        localStorage.removeItem(ACCESS_TOKEN);
        navigate('/signin');
    }, [navigate]);

    useEffect(() => {
        setToken(localStorage.getItem(ACCESS_TOKEN) ? true : false)
    },[navigate])

    return (
        <AuthContext.Provider value={{ token, saveToken, clearToken }}>
            {children}
        </AuthContext.Provider>
    );
}
export default AuthProvider