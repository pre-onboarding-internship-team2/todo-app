import { FormEvent, useContext } from 'react';
import TodosContext from '../../../context/todo/TodosContext';

const TodoAddForm = () => {
  const { createTodo } = useContext(TodosContext);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const formElement = e.target as HTMLFormElement;
    const inputElement = formElement[0] as HTMLInputElement;

    const todo = inputElement.value;
    if (todo.length === 0) return;

    createTodo(todo).then(() => {
      formElement.reset();
    });
  };

  return (
    <form className='flex w-full border-b-[1px] border-gray-600' onSubmit={handleSubmit}>
      <input
        className='form-input flex-1 overflow-hidden text-ellipsis bg-transparent'
        type='text'
        placeholder='새로운 할 일을 추가해보세요.'
        data-testid='new-todo-input'
      />
      <button
        className='w-10 text-gray-700 hover:opacity-50'
        type='submit'
        data-testid='new-todo-add-button'
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth={1.5}
          stroke='currentColor'
          className='h-6 w-6'
        >
          <path strokeLinecap='round' strokeLinejoin='round' d='M12 4.5v15m7.5-7.5h-15' />
        </svg>
      </button>
    </form>
  );
};

export default TodoAddForm;
