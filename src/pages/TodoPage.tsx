import Header from '../components/common/Header';
import TodoAddForm from '../components/todo/components/TodoAddForm';
import TodoList from '../components/todo/components/TodoList';
import TodosProvider from '../context/todo/TodosProvider';

const TodoPage = () => {
  return (
    <TodosProvider>
      <div className='relative h-screen min-w-[20em] bg-gray-200'>
        <div className='absolute top-0 w-full'>
          <Header />
        </div>
        <div className='flex h-screen w-full items-center justify-center pt-16'>
          <div className='flex h-full w-1/2 flex-col max-md:w-full'>
            <div className='px-4'>
              <TodoAddForm />
            </div>
            <div className='relative mt-4 flex-1 overflow-y-scroll'>
              <TodoList />
            </div>
          </div>
        </div>
      </div>
    </TodosProvider>
  );
};
export default TodoPage;
