import { apiClient } from "../client";
import { CreateTodoRequestProps, DeleteTodoRequestProps, TodoProps, UpdateTodoRequestProps } from "./todo.types";

export async function getTodoApi() {
    return await apiClient.get<TodoProps[]>("/todos");
};

export async function createTodoApi(todo: CreateTodoRequestProps) {
    return await apiClient.post<TodoProps>("/todos", todo);
};

export async function updateTodoApi({id, todo, isCompleted}: UpdateTodoRequestProps) {
    return await apiClient.put<TodoProps>(`/todos/${id}`, {
        todo,
        isCompleted
    });
};

export function deleteTodoApi({id}: DeleteTodoRequestProps) {
    return apiClient.delete<TodoProps>(`/todos/${id}`);
};