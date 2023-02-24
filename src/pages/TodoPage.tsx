import { useContext } from 'react';
import { useNavigate } from "react-router-dom";
import AuthContext from 'context/auth/AuthContext';
import CommonButton from 'components/common/CommonButton';
import TodoList from 'components/todo/TodoList';
import TodoInputForm from 'components/todo/TodoCreateForm';

const TodoPage = () => {
  const navigate = useNavigate();

  const { clearToken } = useContext(AuthContext);
  const onClickLogout = () => {
    clearToken()
    navigate('/signin')
  }

  return (
    <div>
      <nav>      
        <h2>todoPage</h2>
        <CommonButton text="로그아웃" onClick={onClickLogout}/>
      </nav>

      <div>
        <TodoInputForm/>
        <TodoList/>
      </div>
    </div>
  )
}

export default TodoPage