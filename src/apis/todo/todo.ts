import { apiClient } from "../client";
import { CreateTodoRequestProps, TodoProps } from "./todo.types";

export async function getTodoApi() {
    return await apiClient.get<TodoProps[]>("/todos");
};

export async function createTodoApi(todo: CreateTodoRequestProps) {
    return await apiClient.post<TodoProps>("/todos", todo);
};