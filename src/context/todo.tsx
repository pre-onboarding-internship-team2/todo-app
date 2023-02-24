import { createContext, useState, useEffect, ReactNode, useContext } from "react";
import { AxiosError } from 'axios';
import { TodoProps } from "../apis/todo/todo.types";
import { 
    CreateTodoRequestProps, 
    UpdateTodoRequestProps, 
    DeleteTodoRequestProps } from "../apis/todo/todo.types";
import { createTodoApi, getTodoApi } from "../apis/todo/todo";

interface TodoContextProps {
    toDos: TodoProps[];
    createToDo: (props: CreateTodoRequestProps) => void;
    // updateToDo: (props: UpdateTodoRequestProps) => void;
    // deleteToDo: (props: DeleteTodoRequestProps) => void;
}

const TodoContext = createContext<TodoContextProps>(null!);

export function TodoProvider({ children } : { children: ReactNode }) {
    console.log("todo Provider");
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

    function createToDo (props: CreateTodoRequestProps) {
        createTodoApi(props)
        .then((res) => {
            setToDos((prevToDos) => {
                return [
                    ...prevToDos,
                    res.data
                ]
            })
        })
        .catch((err) => {
            throw new Error(err);
        });
        
    };
    const updateToDo = () => {

    };
    const deleteToDo = () => {

    };

    useEffect(()=>{
        getToDo();
    },[])


    return (
        <TodoContext.Provider value={{ toDos, createToDo }}>
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
