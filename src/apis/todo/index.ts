import apiClient from 'apis/apiClient';
import { CreateTodoRequest, UpdateTodoRequest, DeleteTodoRequest } from './todo.types';

export const fetchGetTodos = async () => {
  return apiClient.get('/todos');
};

export const fetchCreateTodo = async (todo :CreateTodoRequest) => {
  return apiClient.post("/todos", todo);
};

export const fetchUpdateTodo = async ({id, todo, isCompleted} :UpdateTodoRequest) => {
  return apiClient.put(`/todos/${id}`, { todo, isCompleted });
};

export const fetchDeleteTodo = async (id :DeleteTodoRequest) => {
  return apiClient.delete(`/todos/${id.id}`);
};
