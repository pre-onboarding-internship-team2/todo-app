import { useContext } from 'react';
import TodosContext from 'context/todo/TodoContext';
import TodoItem from 'components/todo/TodoItem'

const TodoList = () => {
    const { todos } = useContext(TodosContext);

    return (
        <ul>
            {todos.map((todo) => (
                <li key={todo.id} className='py-3 border-b'>
                    <TodoItem todo={todo} />
                </li>
            ))}
        </ul>
    )
}

export default TodoList