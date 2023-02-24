import { clientTodoAPI } from 'apis/clientAPI';
import { TodoState } from 'apis/todo/todoApi.type';

export const todoCreateInstance= async (todo: TodoState["todo"]) => {
    return await clientTodoAPI.post(`todos/`, { todo });
};

export const todoGetInstance = async () => {
    return await clientTodoAPI.get(`todos`);
};
  
export const todoUpdateInstance = async (id: TodoState["id"], todo: TodoState["todo"], isCompleted: TodoState["isCompleted"]) => {
    return await clientTodoAPI.put(`todos/${id}`, { todo, isCompleted });
};

export const todoDeleteInstance = async (id: TodoState["id"]) => {
    return await clientTodoAPI.delete( `todos/${id}`);
}