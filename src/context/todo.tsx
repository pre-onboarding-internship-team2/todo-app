import { createContext, ReactNode, useContext, useState, useEffect } from 'react';
import { fetchGetTodos, fetchCreateTodo, fetchUpdateTodo, fetchDeleteTodo } from 'apis/todo';
import { TodoContextProps, TodoProps } from './todo.types';

const TodoContext = createContext<TodoContextProps>(null!);

export function TodoProvider({ children }: { children: ReactNode }) {
  const [todos, setTodos] = useState<TodoProps[]>([]);

  const refreshTodos = async () => {
    const response = await fetchGetTodos();
    setTodos(response.data);
  };

  const createTodo: TodoContextProps['createTodo'] = async (props) => {
    await fetchCreateTodo(props);
    refreshTodos();
  };

  const updateTodo: TodoContextProps['updateTodo'] = async (props) => {
    await fetchUpdateTodo(props);
    refreshTodos();
  };

  const deleteTodo: TodoContextProps['deleteTodo'] = async (props) => {
    await fetchDeleteTodo(props);
    refreshTodos();
  };

  useEffect(() => {
    refreshTodos();
  }, []);

  return (
    <TodoContext.Provider value={{ todos, createTodo, updateTodo, deleteTodo }}>
      {children}
    </TodoContext.Provider>
  );
}

export function useTodo() {
  return useContext(TodoContext);
}