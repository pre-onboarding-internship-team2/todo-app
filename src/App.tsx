import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SignInPage from 'pages/SignInPage';
import SignUpPage from 'pages/SignUpPage';
import TodoPage from 'pages/TodoPage';
import NotFoundPage from 'pages/NotFoundPage';
import AuthProvider from 'context/auth/AuthProvider'
import { Authorized, UnAuthorized } from 'pages/Redirect'

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route element={<Authorized/>}>
            <Route path='/' element={ <TodoPage/> } />
            <Route path='/todo' element={ <TodoPage/>} />
          </Route>
          <Route element={<UnAuthorized />}>
            <Route path='/signin' element={<SignInPage/>} />
            <Route path='/signup' element={<SignUpPage/>} />
          </Route>
          <Route path='/*' element={ <NotFoundPage/>}/>
        </Routes>
      
      </AuthProvider>
    </BrowserRouter>
  ) ;
}

export default App