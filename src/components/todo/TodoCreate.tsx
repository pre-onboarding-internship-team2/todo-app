import { useState } from 'react';
import { useToDos } from '../../context/todo';

function TodoCreate() {
    const { createToDo } = useToDos();
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState('');

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        
        createToDo({todo: value});
        setValue('');
        setOpen(false);
    };

    return(
        <>
            { open && (
                <div className='w-full bottom-0 left-0 absolute'>
                    <form
                        className='bg-gray-1 pl-8 pt-8 pr-8 pb-16 rounded-b-2xl flex flex-row'
                        onSubmit={handleSubmit}>
                            <input className='flex p-3 rounded border-2 border-slate-200 w-128 box-border'
                                data-testid='new-todo-input'
                                autoFocus
                                value={value}
                                placeholder='할 일을 입력하고 Enter를 누르세요.'
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value)}>
                            </input>
                            <button className='w-20 bg-gray-3 text-white rounded hover:bg-green-2 disabled:bg-gray-3 disabled:cursor-not-allowed'
                                disabled={!value}>
                                Add
                            </button>
                    </form>
                </div>
            )}
            <button className='bg-green-1 hover:bg-green-2 active:bg-green-3 z-50 cursor-pointer w-20 h-20 items-center justify-center
            text-xl3 absolute left-1/2 bottom-0 -translate-x-2/4 translate-y-2/4 text-white rounded-full border-none outline-none flex
            ease-out duration-300'
                data-testid='new-todo-add-button'
                onClick={() => setOpen((prev)=>!prev)}>
                <svg 
                    xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                </svg>
            </button>

        </>
    );
};

export default TodoCreate;