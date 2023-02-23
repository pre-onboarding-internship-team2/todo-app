import { useContext } from 'react';
import { Navigate, useRoutes } from 'react-router-dom';
import Layout from './components/common/Layout';
import TokenContext from './context/token/TokenContext';
import NotFound from './pages/NotFound';
import SignInPage from './pages/SignInPage';
import SignUpPage from './pages/SignUpPage';
import TodoPage from './pages/TodoPage';

function App() {
  const { token: isAuth } = useContext(TokenContext);

  let element = useRoutes([
    {
      path: '/',
      element: <Layout />,
      errorElement: <NotFound />,
      children: [
        {
          path: '',
          element: <Navigate to='todo' />,
        },
        {
          path: 'todo',
          element: isAuth ? <TodoPage /> : <Navigate to='/signin' />,
        },
        {
          path: 'signin',
          element: !isAuth ? <SignInPage /> : <Navigate to='/todo' />,
        },
        {
          path: 'signup',
          element: !isAuth ? <SignUpPage /> : <Navigate to='/todo' />,
        },
      ],
    },
  ]);
  return element;
}

export default App;
