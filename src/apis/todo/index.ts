import TodoData from '../../types/TodoData.types';
import { tokenApi } from '../apiClient';

export async function createTodo(todo: string): Promise<TodoData> {
  return tokenApi.post('/todos', { todo }).then((data) => data.data);
}

export async function getTodos(): Promise<TodoData[]> {
  return tokenApi.get('/todos').then((data) => data.data);
}

export async function updateTodo(
  todoId: number,
  todo: string,
  isCompleted: boolean
): Promise<TodoData> {
  const data = { todo, isCompleted };
  return tokenApi.put(`/todos/${todoId}`, data).then((data) => data.data);
}

export async function deleteTodo(todoId: number): Promise<null> {
  return tokenApi.delete(`/todos/${todoId}`).then((data) => data.data);
}
