import TodoInsert from "components/todo/TodoInsert";
import TodoList from "components/todo/TodoList";
import TodoTemplate from "components/todo/TodoTemplate";

const TodoPage = () => {
  return (
    <TodoTemplate>
      <TodoInsert />
      <TodoList />
    </TodoTemplate>
  );
};

export default TodoPage;
