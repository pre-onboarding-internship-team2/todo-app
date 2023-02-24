import { createContext, useState, useEffect, ReactNode, useContext } from "react";
import { AxiosError } from 'axios';
import { TodoProps } from "../apis/todo/todo.types";
import { 
    CreateTodoRequestProps, 
    UpdateTodoRequestProps, 
    DeleteTodoRequestProps } from "../apis/todo/todo.types";
import { createTodoApi, deleteTodoApi, getTodoApi, updateTodoApi } from "../apis/todo/todo";

interface TodoContextProps {
    toDos: TodoProps[];
    createToDo: (props: CreateTodoRequestProps) => void;
    updateToDo: (props: UpdateTodoRequestProps) => void;
    deleteToDo: (props: DeleteTodoRequestProps) => void;
}

const TodoContext = createContext<TodoContextProps>(null!);

export function TodoProvider({ children } : { children: ReactNode }) {
    const [toDos, setToDos] = useState<TodoProps[]>([]);

    const getToDo = () => {
        getTodoApi()
        .then((res) => {
            setToDos(res.data);
        })
        .catch((err) => {
            throw new Error(err);
        })
    };

    const createToDo = async (props: CreateTodoRequestProps)  => {
        createTodoApi(props);
        getToDo();
    };
    const updateToDo = async (props: UpdateTodoRequestProps) => {
        await updateTodoApi(props);
        getToDo();
    };
    const deleteToDo = async (props: DeleteTodoRequestProps) => {
        await deleteTodoApi(props);
        getToDo();
    };

    useEffect(()=>{
        getToDo();
    },[])


    return (
        <TodoContext.Provider value={{ toDos, createToDo, updateToDo, deleteToDo }}>
            {children}
        </TodoContext.Provider>
    );
};

export function useToDos() {
    const context = useContext(TodoContext);
    if (!context) {
        throw new Error('Cannot find TodoProvider');
    }
    return context;
}