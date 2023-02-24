import { TodoContext } from "context/TodoContext";
import { useContext, useEffect } from "react";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const { reLoadTodos, todos } = useContext(TodoContext);

  useEffect(() => {
    reLoadTodos();
  }, [reLoadTodos]);

  return (
    <ul className="max-h-52 min-h-[13rem] overflow-y-auto">
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
};

export default TodoList;
