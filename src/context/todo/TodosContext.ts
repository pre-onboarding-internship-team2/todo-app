import { createContext } from 'react';
import TodoData from '../../types/TodoData.types';

const TodosContext = createContext<{
  todos: TodoData[];
  createTodo: (todo: string) => Promise<TodoData>;
  deleteTodo: (todoId: number) => Promise<null>;
  updateTodo: (todo: TodoData) => Promise<TodoData>;
}>({
  todos: [],
  createTodo: () => {
    throw new Error('TodosContext is uninitialized.');
  },
  deleteTodo: () => {
    throw new Error('TodosContext is uninitialized.');
  },
  updateTodo: () => {
    throw new Error('TodosContext is uninitialized.');
  },
});

export default TodosContext;
