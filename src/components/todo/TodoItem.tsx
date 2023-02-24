import { useState, useContext, useEffect } from 'react'
import { TodoState } from 'apis/todo/todoApi.type';
import TodoEdifForm from './TodoEdifForm';
import TodosContext from 'context/todo/TodoContext';
import CommonButton from 'components/common/CommonButton';
import CommonInput from 'components/common/CommonInput';
import { PencilSquareIcon, MinusCircleIcon } from "@heroicons/react/24/solid";

const TodoItem = ( { todo }: { todo : TodoState } ) => {
  const {updateTodo, deleteTodo } = useContext(TodosContext);

  const [isEdit, setIsEdit] = useState<boolean>(false);
  const toggleEdit = () => setIsEdit( prev => !prev )

  const onClickCheckbox = (e: React.ChangeEvent<HTMLInputElement>) => {
    updateTodo({ id: todo.id, todo: todo.todo, isCompleted: e.currentTarget.checked }).then((res) => {console.log(res)})
  }

  const onClickDeleteBtn = () => {
    const confirmed = window.confirm('투두를 삭제하시겠습니까?');
    if(confirmed){
      deleteTodo(todo.id)
    }
  }

  if(isEdit){
    return <TodoEdifForm todo={todo} isFinishedEdit={toggleEdit}/>
  }

  return (
    <div className='flex flex-row justify-between'>
      <div className='flex flex-row'>
        <CommonInput type="checkbox" onChange={onClickCheckbox} checked={todo.isCompleted} className={'w-fit h-fit'}/>
        <p>{todo.todo}</p>
      </div>
      <div>
        <CommonButton onClick={toggleEdit} className={'w-fit h-fit'}>
          <PencilSquareIcon className='w-7 h-7 p-1'></PencilSquareIcon>
        </CommonButton >
        <CommonButton onClick={onClickDeleteBtn} className={'w-fit h-fit'}>
          <MinusCircleIcon className='w-7 h-7 p-1'></MinusCircleIcon>
        </CommonButton>
      </div>
    </div>
  )
}

export default TodoItem