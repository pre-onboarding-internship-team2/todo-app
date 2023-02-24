import { useTodo } from 'context/todo';
import TodoItem from './TodoItem';

export default function TodoList() {
  const { todos } = useTodo();

  return <ul>{todos && todos.map((todo) => <TodoItem key={todo.id} todo={todo} />)}</ul>;
}
