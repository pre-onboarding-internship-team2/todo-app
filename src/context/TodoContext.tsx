import {
  createTodo,
  deleteTodo,
  getTodos,
  updateTodo,
} from "apis/todo/todoApi";
import React, { createContext, useCallback, useState } from "react";

export type Todo = {
  id: number;
  todo: string;
  isCompleted: boolean;
  userId: number;
};

type TodoContextType = {
  todos: Todo[];
  reLoadTodos: () => void;
  createTodoHandler: (todo: string) => void;
  updateTodoHandler: (id: number, todo: string, isCompleted: boolean) => any;
  deleteTodoHandler: (id: number) => void;
};

type TodoContextProviderProps = {
  children: React.ReactNode;
};

export const TodoContext = createContext<TodoContextType>({
  todos: [],
  reLoadTodos: () => {},
  createTodoHandler: () => {},
  updateTodoHandler: () => {},
  deleteTodoHandler: () => {},
});

const TodoContextProvider = ({ children }: TodoContextProviderProps) => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const reLoadTodos = useCallback(() => {
    getTodos().then((res) => {
      if (res) {
        setTodos(res.data);
      }
    });
  }, []);

  const createTodoHandler = useCallback(
    (todo: string) => {
      createTodo(todo).then(reLoadTodos);
    },
    [reLoadTodos],
  );

  const updateTodoHandler = useCallback(
    async (id: number, todo: string, isCompleted: boolean) => {
      await updateTodo(id, todo, isCompleted).then(reLoadTodos);
    },
    [reLoadTodos],
  );

  const deleteTodoHandler = useCallback(
    (id: number) => {
      deleteTodo(id).then(reLoadTodos);
    },
    [reLoadTodos],
  );

  const value = {
    todos,
    reLoadTodos,
    createTodoHandler,
    updateTodoHandler,
    deleteTodoHandler,
  };

  return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>;
};

export default TodoContextProvider;
