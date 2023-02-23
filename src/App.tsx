import { Routes, Route, Navigate, useRoutes } from "react-router-dom";
import { useAuth } from "./context/auth";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Todo from "./pages/Todo";
import NotFound from "./pages/NotFound";
import Layout from "./components/layout/Layout";

function App() {

  return (
      <Routes>
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
      </Routes>
  )

};

function PrivateRoute({ children }: { children: JSX.Element }) {
  const auth = useAuth();
  return <>{auth.authInfo ? children : <Navigate to="/signin" replace />}</>;
}

function PublicRoute({ children }: { children: JSX.Element }) {
  const auth = useAuth();
  return <>{auth.authInfo ? <Navigate to="/todo" replace /> : children}</>;
}

export default App;
