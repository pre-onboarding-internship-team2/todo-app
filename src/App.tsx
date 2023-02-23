import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SignInPage from 'pages/SignInPage';
import SignUpPage from 'pages/SignUpPage';
import TodoPage from 'pages/TodoPage';
import NotFoundPage from 'pages/NotFoundPage';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={ <SignInPage/> } />
        <Route path='/signin' element={ <SignInPage/> } />
        <Route path='/signup' element={ <SignUpPage/> } />
        <Route path='/todo' element={ <TodoPage/> }/>

        <Route path='/*' element={ <NotFoundPage/>}/>
      </Routes>
    </BrowserRouter>
  ) ;
}

export default App;
