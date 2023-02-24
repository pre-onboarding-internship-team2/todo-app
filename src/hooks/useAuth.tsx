import { useContext } from "react";
import { AuthContext } from "../context/auth";
import { TodoContext } from "../context/todo";

export function useAuth() {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("Cannot find AuthProvider");
    }
    return context;
}

export function useToDos() {
    const context = useContext(TodoContext);
    if (!context) {
        throw new Error("Cannot find TodoProvider");
    }
    return context;
}
