import { Navigate, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/auth";
import Layout from "./components/layout/Layout";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import Todo from "./pages/Todo";
import NotFound from "./pages/NotFound";
import PageTemplate from "./PageTemplate";


function App() {
  return (
    <PageTemplate>
    <AuthProvider>
    <Routes>
      <Route path="/signup" element={<SignUp/>} />
      <Route path="/signin" element={<SignIn/>} />
      <Route path="/todo" element={<Todo/>} />
      <Route path="/*" element={<NotFound/>} />
      <Route path="/" element={<Layout/>} />
    </Routes>
    </AuthProvider>
    </PageTemplate>
  )
  
};

export default App;
