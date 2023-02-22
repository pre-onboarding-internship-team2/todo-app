import { Routes, Route } from "react-router-dom";
import Layout from "components/common/Layout";
import SignInPage from "pages/signin";
import SignUpPage from "pages/signup";
import { Navigate } from "react-router-dom";
import TodoPage from "pages/todo";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Navigate to={"/signin"} />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/todo" element={<TodoPage />} />
      </Route>
    </Routes>
  );
}

export default App;
