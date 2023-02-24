import { FormEvent, useState } from 'react';
import { PlusIcon } from '@heroicons/react/20/solid';
import { useTodo } from 'context/todo';

export default function TodoAdd() {
  const { createTodo } = useTodo();
  const [value, setValue] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (value === '') return;
    createTodo({ todo: value });
    setValue('');
  };

  return (
    <div className="mb-5 flex items-center">
      <input
        type="text"
        onChange={(e) => setValue(e.target.value)}
        value={value}
        className="h-10 w-full border-b px-2 focus:border-b-2 focus:border-b-black focus:outline-none"
        data-testid="new-todo-input"
      />
      <button
        className="btn-sm btn-circle btn ml-3 rounded-full"
        onClick={handleSubmit}
        data-testid="new-todo-add-button"
      >
        <PlusIcon className="h-6 stroke-[5px]" />
      </button>
    </div>
  );
}
