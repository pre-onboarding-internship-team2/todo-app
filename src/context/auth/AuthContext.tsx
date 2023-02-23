import { createContext } from 'react';

type ContextType = {
    token: boolean;
    saveToken: (token: string) => void;
    clearToken: () => void;
}
const AuthContext = createContext<ContextType>({ token: false, saveToken: () => {}, clearToken: () => {} });

export default AuthContext;