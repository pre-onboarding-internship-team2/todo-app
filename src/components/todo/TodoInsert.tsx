import ShareBtn from "components/common/ShareBtn";
import ShareInput from "components/common/ShareInput";
import useInput from "hooks/useInput";

const TodoInsert = () => {
  const { value, changeHandler: newTodoChangeHandler } = useInput("");

  const todoSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={todoSubmitHandler}>
      <ShareInput
        testid="new-todo-input"
        type="text"
        value={value}
        onChange={newTodoChangeHandler}
        placeholder="투두 입력"
      />
      <ShareBtn type="submit" testid="new-todo-add-button" text="추가" />
    </form>
  );
};

export default TodoInsert;
