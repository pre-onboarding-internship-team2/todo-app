

import TodoAdd from 'components/todo/TodoAdd';
import TodoList from 'components/todo/TodoList';
import { TodoProvider } from 'context/todo';

export default function Todo() {
  return (
    <TodoProvider>
      <div className="hero-content w-8/12 min-w-fit flex-col">
        <h1 className="text-3xl font-bold">TODO LIST</h1>
        <div className="card w-full max-w-sm bg-base-100 shadow-2xl">
          <div className="card-body">
            <TodoAdd />
            <TodoList />
          </div>
        </div>
      </div>
    </TodoProvider>
  );
}
