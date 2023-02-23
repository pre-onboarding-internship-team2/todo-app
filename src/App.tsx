import Layout from "components/common/Layout";
import { AuthContext } from "context/AuthContext";
import NotFound from "pages/NotFound";
import SigninPage from "pages/SigninPage";
import SignupPage from "pages/SignupPage";
import TodoPage from "pages/TodoPage";
import { useContext } from "react";
import { useRoutes, Navigate } from "react-router-dom";

function App() {
  const { access_token } = useContext(AuthContext);

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
          element: access_token ? <TodoPage /> : <Navigate to="/signin" />,
        },
        {
          path: "signin",
          element: !access_token ? <SigninPage /> : <Navigate to="/todo" />,
        },
        {
          path: "signup",
          element: !access_token ? <SignupPage /> : <Navigate to="/todo" />,
        },
      ],
    },
    { path: "*", element: <NotFound /> },
  ]);

  return element;
}

export default App;
