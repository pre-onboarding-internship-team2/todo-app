import { createContext } from "react";
import { CreateTodoRequestProps, DeleteTodoRequestProps, TodoState, UpdateTodoRequestProps } from 'apis/todo/todoApi.type'

export type TodosContextProps = {
    todos: TodoState[];
    renderTodos: () => Promise<void>;
    createTodo: (todo: CreateTodoRequestProps["todo"]) => Promise<void>;
    deleteTodo: (todoId: UpdateTodoRequestProps["id"]) => Promise<void>;
    updateTodo: (todo: TodoState) => Promise<void>;
};

const TodosContext = createContext<TodosContextProps>({
    todos: [],
    renderTodos: async () => {},
    createTodo: async (props: CreateTodoRequestProps["todo"]) => { },
    deleteTodo: async (props: DeleteTodoRequestProps["id"]) => { },
    updateTodo: async (props: UpdateTodoRequestProps) => { },
});

export default TodosContext;