import { createContext, useState, useEffect, ReactNode } from "react";
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

export const TodoContext = createContext<TodoContextProps>(
    { toDos: [], createToDo: () => {}, updateToDo: () => {}, deleteToDo: () => {}}
);

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
        await createTodoApi(props);
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

