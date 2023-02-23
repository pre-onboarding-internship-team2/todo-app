import { Route, Navigate } from "react-router-dom";
import { useAuth } from "../context/auth";
import Layout from "../components/layout/Layout";
import SignUp from "../pages/SignUp";
import SignIn from "../pages/SignIn";
import Todo from "../pages/Todo";
import NotFound from "../pages/NotFound";

export const AppRoutes = (
    <>
      <Route 
        path="/signup" 
        element={
        <PublicRoute>
          <SignUp/>
        </PublicRoute> 
      } />
      <Route 
        path="/signin" 
        element={
        <PublicRoute>
          <SignIn/>
        </PublicRoute> 
      } />
      <Route 
        path="/todo" 
        element={
        <PrivateRoute>
          <Todo/>
        </PrivateRoute> 
      } />
      <Route 
        path="/*" 
        element={
        <PublicRoute>
          <NotFound/>
        </PublicRoute> 
      } />
      <Route 
        path="/" 
        element={
          <Layout/>
      } />
    </>
  );

  function PrivateRoute({ children }: { children: JSX.Element }) {
    const auth = useAuth();
    return <>{auth.authInfo ? children : <Navigate to="/signin" replace />}</>;
  }
  
  function PublicRoute({ children }: { children: JSX.Element }) {
    const auth = useAuth();
    return <>{auth.authInfo ? <Navigate to="/todo" replace /> : children}</>;
  }
  