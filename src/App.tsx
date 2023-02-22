import { Navigate, useRoutes } from "react-router-dom";

import Layout from "./components/layout/Layout";
import SignIn from "./components/auth/SignIn";
import SignUp from "./components/auth/SignUp";
import Todo from "./components/todo/Todo";

function App() {
  const isAuth = localStorage.getItem("user");

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
          element: isAuth ? <Todo /> : <Navigate to="/signin" />,
        },
        {
          path: "signin",
          element: !isAuth ? <SignIn /> : <Navigate to="/todo" />,
        },
        {
          path: "signup",
          element: !isAuth ? <SignUp /> : <Navigate to="/todo" />,
        },
      ],
    },
  ]);
  return element
};
export default App;
