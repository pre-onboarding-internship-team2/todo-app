import { useState, useContext } from 'react';
import TodosContext from 'context/todo/TodoContext';

const TodoInputForm = () => {
    const [todo, setTodo] = useState('');
    const { createTodo } = useContext(TodosContext);
    
    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => setTodo(e.target.value)
    const onSubmitHander = (e: React.FormEvent) => {
      e.preventDefault();
      createTodo(todo).then(() => setTodo(''))
    }

    return (
        <form onSubmit={onSubmitHander}>
            <input onChange={onChangeHandler} value={todo}/>
            <button>추가</button>
      </form>
    )
}

export default TodoInputForm