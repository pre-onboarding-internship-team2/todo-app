export interface TodoProps {
    id: number;
    todo: string;
    isCompleted: boolean;
    userId: number;
}

export interface CreateTodoRequestProps {
    todo: string;
}

export interface UpdateTodoRequestProps{
    id: number;
    todo: string;
    isCompleted: boolean;
}

export interface DeleteTodoRequestProps{
    id: number;
}
