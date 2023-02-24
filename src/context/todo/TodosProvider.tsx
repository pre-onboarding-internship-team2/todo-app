import { ReactNode, useCallback, useEffect, useState } from 'react';
import {
  createTodo as createTodoApi,
  deleteTodo as deleteTodoApi,
  getTodos as getTodosApi,
  updateTodo as updateTodoApi,
} from '../../apis/todo';
import TodoData from '../../types/TodoData.types';
import TodosContext from './TodosContext';

export default function TodosProvider({ children }: { children: ReactNode }) {
  const [todos, setTodos] = useState<TodoData[]>([]);

  const invalidateTodos = useCallback(() => {
    getTodosApi().then(setTodos);
  }, []);

  // todos 초기화
  useEffect(() => {
    invalidateTodos();
  }, [invalidateTodos]);

  const createTodo = useCallback(
    async (todo: string) => {
      const data = await createTodoApi(todo);
      invalidateTodos();

      return data;
    },
    [invalidateTodos]
  );

  const deleteTodo = useCallback(
    async (todoId: number) => {
      const data = await deleteTodoApi(todoId);
      invalidateTodos();

      return data;
    },
    [invalidateTodos]
  );

  const updateTodo = useCallback(
    async (todo: TodoData) => {
      const data = await updateTodoApi(todo.id, todo.todo, todo.isCompleted);
      invalidateTodos();

      return data;
    },
    [invalidateTodos]
  );

  return (
    <TodosContext.Provider value={{ todos, createTodo, deleteTodo, updateTodo }}>
      {children}
    </TodosContext.Provider>
  );
}
