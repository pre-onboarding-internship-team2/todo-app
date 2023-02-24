import { useState } from 'react';
import { TrashIcon, PencilSquareIcon, CheckIcon, XMarkIcon } from '@heroicons/react/20/solid';
import { useTodo } from 'context/todo';
import TodoData from './todo.types';
interface IProps {
  todo: TodoData;
}

export default function TodoItem({ todo }: IProps) {
  const { updateTodo, deleteTodo } = useTodo();
  const [editToggle, setEditToggle] = useState(false);
  const [todoValue, setTodoValue] = useState(todo.todo);

  const updateTodoValue = () => {
    updateTodo({ id: todo.id, todo: todoValue, isCompleted: todo.isCompleted });
    setEditToggle(false);
  };

  return (
    <li className="form-control mt-3">
      {editToggle ? (
        <div className="flex items-center">
          <label className="flex cursor-pointer items-center justify-between"></label>
          <input
            type="text"
            className="h-10 w-full border-b px-2 focus:border-b-2 focus:border-b-black focus:outline-none"
            data-testid="modify-input"
            value={todoValue}
            onChange={(e) => setTodoValue(e.target.value)}
          />
          <button className="ml-1.5" data-testid="submit-button" onClick={updateTodoValue}>
            <CheckIcon className="h-6 stroke-[5px] text-gray-500 hover:text-black" />
          </button>
          <button
            className="ml-1.5"
            data-testid="cancel-button"
            onClick={() => setEditToggle(false)}
          >
            <XMarkIcon className="h-6 stroke-[5px] text-gray-500 hover:text-black" />
          </button>
        </div>
      ) : (
        <div className="flex cursor-pointer items-center justify-between">
          <div>
            <input
              type="checkbox"
              className="checkbox"
              checked={todo.isCompleted}
              onChange={() => {
                updateTodo({ id: todo.id, todo: todo.todo, isCompleted: !todo.isCompleted });
              }}
            />
            <label className="label-text ml-3 cursor-pointer align-top">{todo.todo}</label>
          </div>
          <div>
            <button className="ml-1.5" onClick={() => setEditToggle(!editToggle)}>
              <PencilSquareIcon
                className="h-6 stroke-[5px] text-gray-500 hover:text-black"
                data-testid="modify-button"
              />
            </button>
            <button className="ml-1.5" onClick={() => deleteTodo({ id: todo.id })}>
              <TrashIcon
                className="h-6 stroke-[5px] text-gray-500 hover:text-black"
                data-testid="delete-button"
              />
            </button>
          </div>
        </div>
      )}
    </li>
  );
}
