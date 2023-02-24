import { useState, useContext } from "react";
import ShareBtn from "components/common/ShareBtn";
import ShareInput from "components/common/ShareInput";
import useInput from "hooks/useInput";
import { Todo, TodoContext } from "context/TodoContext";

type TodoItemProps = {
  todo: Todo;
};

const TodoItem = ({ todo }: TodoItemProps) => {
  const [isEdit, setIsEdit] = useState(false);
  const {
    value,
    setValue,
    changeHandler: editTodoChangeHandler,
  } = useInput("");
  const { updateTodoHandler, deleteTodoHandler } = useContext(TodoContext);

  const checkEditHandler = () => {
    const { id, todo: originalTodo, isCompleted } = todo;
    updateTodoHandler(id, originalTodo, !isCompleted);
  };

  const editStatusChangeHandler = () => {
    setIsEdit((prev) => !prev);
  };

  const newTodoSubmitHandler = () => {
    updateTodoHandler(todo.id, value, todo.isCompleted).then(() => {
      setIsEdit((prev) => !prev);
      setValue("");
    });
  };

  return (
    <li className="flex items-center [&:nth-child(even)]:bg-teal-300">
      <label className="w-full flex">
        <input
          type="checkbox"
          checked={todo.isCompleted}
          onChange={checkEditHandler}
        />
        {!isEdit ? (
          <span className="pl-3">{todo.todo}</span>
        ) : (
          <ShareInput
            type="text"
            testid="modify-input"
            value={value}
            onChange={editTodoChangeHandler}
            placeholder="내용 수정"
            className={"px-1 py-2 w-full text-black roundedm-md border-2"}
          />
        )}
      </label>
      {!isEdit ? (
        <div className="flex">
          <ShareBtn
            className={"p-2 w-16 rounded-md border bg-blue-500"}
            type="button"
            testid="modify-button"
            text="수정"
            onClick={editStatusChangeHandler}
          />
          <ShareBtn
            className={"p-2 w-16 rounded-md border bg-blue-500"}
            type="button"
            testid="delete-button"
            text="삭제"
            onClick={() => deleteTodoHandler(todo.id)}
          />
        </div>
      ) : (
        <div className="flex">
          <ShareBtn
            className={"p-2 w-16 rounded-md border bg-blue-500"}
            type="button"
            testid="submit-button"
            text="제출"
            onClick={newTodoSubmitHandler}
          />
          <ShareBtn
            className={"p-2 w-16 rounded-md border bg-blue-500"}
            type="button"
            testid="cancel-button"
            text="취소"
            onClick={editStatusChangeHandler}
          />
        </div>
      )}
    </li>
  );
};

export default TodoItem;
