import ShareBtn from "components/common/ShareBtn";
import ShareInput from "components/common/ShareInput";
import useInput from "hooks/useInput";
import React, { useState } from "react";

const TodoItem = () => {
  const [isEdit, setIsEdit] = useState(false);
  const { value, changeHandler: editTodoChangeHandler } = useInput("");

  const editStatusChangeHandler = () => {
    setIsEdit((prev) => !prev);
  };

  return (
    <li>
      <label>
        <input type="checkbox" />
        {!isEdit ? (
          <span></span>
        ) : (
          <ShareInput
            type="text"
            testid="modify-input"
            value={value}
            onChange={editTodoChangeHandler}
            placeholder="내용 수정"
          />
        )}
      </label>
      {!isEdit ? (
        <>
          <ShareBtn
            type="button"
            testid="modify-button"
            text="수정"
            onClick={editStatusChangeHandler}
          />
          <ShareBtn type="submit" testid="delete-button" text="삭제" />
        </>
      ) : (
        <>
          <ShareBtn type="submit" testid="submit-button" text="제출" />
          <ShareBtn
            type="button"
            testid="cancel-button"
            text="취소"
            onClick={editStatusChangeHandler}
          />
        </>
      )}
    </li>
  );
};

export default TodoItem;
