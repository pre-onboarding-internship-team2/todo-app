import ShareBtn from "components/common/ShareBtn";
import ShareInput from "components/common/ShareInput";
import { TodoContext } from "context/TodoContext";
import useInput from "hooks/useInput";
import { useContext } from "react";

const TodoInsert = () => {
  const { value, setValue, changeHandler: newTodoChangeHandler } = useInput("");
  const { createTodoHandler } = useContext(TodoContext);

  const todoSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    createTodoHandler(value);
    setValue("");
  };

  return (
    <form className="w-full flex" onSubmit={todoSubmitHandler}>
      <ShareInput
        testid="new-todo-input"
        type="text"
        value={value}
        onChange={newTodoChangeHandler}
        placeholder="투두 입력"
        className={"px-1 py-2 w-full text-black roundedm-md border-2"}
      />
      <ShareBtn
        className={"p-2 w-16 rounded-md border bg-blue-500"}
        type="submit"
        testid="new-todo-add-button"
        text="추가"
      />
    </form>
  );
};

export default TodoInsert;
