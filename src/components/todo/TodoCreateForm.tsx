import { useState, useContext } from 'react';
import TodosContext from 'context/todo/TodoContext';
import CommonButton from 'components/common/CommonButton';
import CommonInput from 'components/common/CommonInput';
import { PlusIcon } from "@heroicons/react/24/solid";

const TodoInputForm = () => {
    const [todo, setTodo] = useState('');
    const { createTodo } = useContext(TodosContext);
    
    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => setTodo(e.target.value)
    const onSubmitHander = (e: React.FormEvent) => {
      e.preventDefault();
      createTodo(todo).then(() => setTodo(''))
    }

    return (
      <form onSubmit={onSubmitHander} className='w-full flex justify-between mb-5'>
        <CommonInput type={"text"} onChange={onChangeHandler} value={todo} placeholder={"할 일을 입력해 주세요."} className={'w-4/5 rounded-md'}></CommonInput>
        <CommonButton className={'w-fit h-fit px-1 py-1'}>
          <PlusIcon className='w-7 h-7'></PlusIcon>
        </CommonButton>
      </form>
    )
}

export default TodoInputForm