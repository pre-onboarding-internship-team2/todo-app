import { todo } from "../../components/todo/types";
import { todoInstance } from "../api_config";

export const todoCreateApi = async (todo: todo) => {
  return await todoInstance.post("/todos", { todo });
};

export const todoGetApi = async () => {
  return await todoInstance.get("/todos");
};

export const todoUpdateApi = async ({ isCompleted, id, todo }: todo) => {
  return await todoInstance.put(`/todos/${id}`, { todo, isCompleted });
};

export const todoDeleteApi = async (id: number) => {
  return todoInstance.delete(`/todos/${id}`);
};
