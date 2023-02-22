import Layout from "components/common/Layout";
import { AuthContext } from "context/AuthContext";
import NotFound from "pages/NotFound";
import SigninPage from "pages/SigninPage";
import SignupPage from "pages/SignupPage";
import TodoPage from "pages/TodoPage";
import { useContext } from "react";
import { useRoutes, Navigate } from "react-router-dom";

function App() {
  const { token } = useContext(AuthContext);

  let element = useRoutes([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "",
          element: <Navigate to="todo" />,
        },
        {
          path: "todo",
          element: token ? <TodoPage /> : <Navigate to="/signin" />,
        },
        {
          path: "signin",
          element: !token ? <SigninPage /> : <Navigate to="/todo" />,
        },
        {
          path: "signup",
          element: !token ? <SignupPage /> : <Navigate to="/todo" />,
        },
      ],
    },
    { path: "*", element: <NotFound /> },
  ]);

  return element;
}

export default App;
