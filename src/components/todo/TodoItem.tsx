import { useState, useContext } from 'react'
import { TodoState } from 'apis/todo/todoApi.type';
import TodoEdifForm from './TodoEdifForm';
import TodosContext from 'context/todo/TodoContext';

const TodoItem = ( { todo }: { todo : TodoState } ) => {
  const {updateTodo, deleteTodo } = useContext(TodosContext);

  const [isEdit, setIsEdit] = useState(false);
  const toggleEdit = () => setIsEdit( prev => !prev )


  const onClickCheckbox = (e: React.ChangeEvent<HTMLInputElement>) => {
    updateTodo({id: todo.id, todo: todo.todo, isCompleted: e.currentTarget.checked  })
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
    <div>
      <div>
        <input type="checkbox" onChange={onClickCheckbox} checked={todo.isCompleted}/>
        <p>{todo.todo}</p>
      </div>
      <div>
        <button onClick={toggleEdit}>Edit</button>
        <button onClick={onClickDeleteBtn}>Delete</button>
      </div>
    </div>
  )
}

export default TodoItem