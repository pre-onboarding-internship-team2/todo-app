import { createBrowserRouter, Navigate, Outlet } from "react-router-dom";
import { NotFoundPage } from "./pages/NotFoundPage";
import { SignInPage } from "./pages/SignInPage";
import { SignUpPage } from "./pages/SignUpPage";
import { TodoPage } from "./pages/TodoPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFoundPage />,
    children: [
      { path: "", element: <Navigate to="signin" /> },
      {
        path: "signin",
        index: true,
        element: <SignInPage />,
      },
      {
        path: "signup",
        element: <SignUpPage />,
      },
      {
        path: "todo",
        element: <TodoPage />,
      },
    ],
  },
]);

function App() {
  return <Outlet />;
}

export default App;
