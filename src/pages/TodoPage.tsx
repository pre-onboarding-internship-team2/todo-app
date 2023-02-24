import { useContext } from 'react';
import { useNavigate } from "react-router-dom";
import AuthContext from 'context/auth/AuthContext';
import CommonButton from 'components/common/CommonButton';
import TodoList from 'components/todo/TodoList';
import TodoInputForm from 'components/todo/TodoCreateForm';
import TodoLayout from 'components/todo/Layout'

const TodoPage = () => {
  const navigate = useNavigate();

  const { clearToken } = useContext(AuthContext);
  const onClickLogout = () => {
    clearToken()
    navigate('/signin')
  }

  return (
    <TodoLayout>
      <div className='w-2/5 py-20'>
        <nav className='relative flex items-center justify-center mb-9'>      
          <h2 className='text-2xl font-bold '>Todo List</h2>
          <CommonButton onClick={onClickLogout} className={'absolute top-0 right-0 w-fit py-1 px-3'}>로그아웃</CommonButton>
        </nav>

        <div>
          <TodoInputForm/>
          <TodoList/>
        </div>
      </div>
    </TodoLayout>
  )
}

export default TodoPage