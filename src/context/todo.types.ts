import { CreateTodoRequest, UpdateTodoRequest, DeleteTodoRequest } from 'apis/todo/todo.types';

export type TodoProps = {
  id: number;
  todo: string;
  isCompleted: boolean;
};

export type TodoContextProps = {
  todos: TodoProps[];
  createTodo: (props: CreateTodoRequest) => void;
  updateTodo: (props: UpdateTodoRequest) => void;
  deleteTodo: (props: DeleteTodoRequest) => void;
};
