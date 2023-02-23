import AuthProtected from 'components/common/AuthProtected';
import Layout from 'components/common/Layout';
import NotFound from 'pages/NotFound';
import Signin from 'pages/Signin';
import Signup from 'pages/Signup';
import Todo from 'pages/Todo';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Signin />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />

        <Route element={<AuthProtected />}>
          <Route path="/todo" element={<Todo />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
