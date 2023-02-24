import { Routes, Route, Navigate } from "react-router-dom";
import { useAuth } from "./context/auth";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Todo from "./pages/Todo";
import NotFound from "./pages/NotFound";
import Home from "./components/home/Home";

function App() {
    const { authInfo } = useAuth();
    return (
      <Routes>
          <Route path="/signup" element={
              authInfo ? <Navigate to="/todo"/> : <SignUp/>}/>
          <Route path="/signin" element={
              authInfo ? <Navigate to="/todo"/> : <SignIn/> }/>
          <Route path="/todo" element={
              authInfo ?  <Todo/> : <Navigate to="/signin"/> }/>
          <Route path="/*" element={<NotFound/> }></Route>
          <Route path="/" element={ <Home/> }/>
      </Routes>
    );
};

export default App;
