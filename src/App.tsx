import Layout from "@components/common/Layout";
import NotFound from "@pages/NotFound";
import SigninPage from "@pages/SigninPage";
import SignupPage from "@pages/SignupPage";
import TodoPage from "@pages/TodoPage";
import { useRoutes, Navigate } from "react-router-dom";

function App() {
  let element = useRoutes([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "",
          element: <Navigate to="todo" />,
        },
        { path: "todo", element: <TodoPage /> },
        {
          path: "signin",
          element: <SigninPage />,
        },
        {
          path: "signup",
          element: <SignupPage />,
        },
      ],
    },
    { path: "*", element: <NotFound /> },
  ]);

  return element;
}

export default App;
