import { useState, useEffect } from 'react';
import { createTodoRequest, getTodosRequest, updateTodoRequest, deleteTodoRequest } from 'apis/todo/index'
import { TodoState } from 'apis/todo/todoApi.type'
import TodosContext from 'context/todo/TodoContext';

function TodoProvider({ children }: { children: React.ReactNode }) {
    const [todos, setTodos] = useState<TodoState[]>([]);

    const renderTodos = async() => {
      const todoItems = await getTodosRequest()
      setTodos(todoItems)
    }
  
    const createTodo = async (todo: TodoState["todo"]) => {
      createTodoRequest(todo);
      renderTodos();
    };

    const updateTodo = async (todo: Pick<TodoState, 'id' | 'todo' | 'isCompleted'>) => {
      await updateTodoRequest( todo.id, todo.todo, todo.isCompleted );
      renderTodos();
    };

    const deleteTodo = async (todoId: TodoState["id"]) => {
      await deleteTodoRequest(todoId);
      renderTodos();
    }
    
    
    useEffect(() => {
      renderTodos();
    }, []);

    return (
    <TodosContext.Provider value={{ todos, renderTodos, createTodo, deleteTodo, updateTodo }}>
        {children}
    </TodosContext.Provider>
    );
}

export default TodoProvider;