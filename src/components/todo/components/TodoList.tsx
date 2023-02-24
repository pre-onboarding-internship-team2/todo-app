import { useContext, useState } from 'react';
import TodosContext from '../../../context/todo/TodosContext';
import TodoEditForm from './TodoEditForm';
import TodoItem from './TodoItem';

const TodoList = () => {
  const { todos } = useContext(TodosContext);
  const [editTodoId, setEditTodoId] = useState<number | null>(null);

  return (
    <div className='absolute top-0 bottom-0 left-0 right-0 px-4'>
      <ul className='pb-4'>
        {[...todos]
          .reverse()
          .map((todo) =>
            todo.id === editTodoId ? (
              <TodoEditForm key={todo.id} todo={todo} onEditEnded={() => setEditTodoId(null)} />
            ) : (
              <TodoItem key={todo.id} todo={todo} onEdit={(id) => setEditTodoId(id)} />
            )
          )}
      </ul>
    </div>
  );
};

export default TodoList;
