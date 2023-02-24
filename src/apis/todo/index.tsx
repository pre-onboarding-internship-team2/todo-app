import { AxiosResponse, AxiosError } from "axios";
import { todoCreateInstance, todoGetInstance, todoUpdateInstance, todoDeleteInstance } from 'apis/todo/todoApi';
import { TodoState } from 'apis/todo/todoApi.type';


export async function createTodoRequest(todo: TodoState["todo"]): Promise<TodoState[]>{
    return new Promise((resolve, reject) => {
        todoCreateInstance(todo)
        .then( (res: AxiosResponse) => { 
            resolve(res.data.todo)
        })
        .catch( (error: AxiosError) => {
            reject(error.message)
        })
    }) 
}
export async function getTodosRequest(): Promise<TodoState[]> {
    return new Promise((resolve, reject) => {
        todoGetInstance()
        .then((res: AxiosResponse) => {
            resolve(res.data)
        })
        .catch( (error: AxiosError) => {
            reject(error.message)
        });
    })
}

export async function updateTodoRequest(id: TodoState["id"], todo: TodoState["todo"], isCompleted: TodoState["isCompleted"]): Promise<TodoState[]>{
    return new Promise((resolve, reject) => {
        todoUpdateInstance(id, todo, isCompleted)
        .then( (res: AxiosResponse) => { 
            resolve(res.data)
        })
        .catch( (error: AxiosError) => {
            reject(error.message)
        })
    }) 
}
export async function deleteTodoRequest(id: TodoState["id"]): Promise<TodoState[]>{
    return new Promise((resolve, reject) => {
        todoDeleteInstance(id)
        .then( (res: AxiosResponse) => { 
            resolve(res.data)
        })
        .catch( (error: AxiosError) => {
            reject(error.message)
        })
    }) 
}