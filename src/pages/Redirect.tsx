import { useContext } from "react";
import { Navigate, Outlet } from 'react-router-dom';
import AuthContext from 'context/auth/AuthContext'

export const Authorized = () => {
    const { token } = useContext(AuthContext);
    if (token === false) return <Navigate to="/signin" />;

  return <Outlet />;
}
export const UnAuthorized = () => {
    const { token } = useContext(AuthContext);
    if (token === true) return <Navigate to="/todo" />;

    return <Outlet />;
}
