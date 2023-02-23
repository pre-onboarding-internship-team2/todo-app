import { useContext } from "react";
import { Navigate, Outlet } from 'react-router-dom';
import AuthContext from 'context/auth/AuthContext'

export const Authorized = () => {
    const { token } = useContext(AuthContext);
    if (token === null) return <Navigate to="/signin" />;

  return <Outlet />;
}
export const UnAuthorized = () => {
    const { token } = useContext(AuthContext);
    if (token !== null) return <Navigate to="/todo" />;

    return <Outlet />;
}
