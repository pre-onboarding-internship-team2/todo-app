import { useState } from "react";
import { MdDone, MdDelete, MdEdit, MdCancel } from 'react-icons/md';
import { DeleteTodoRequestProps, TodoProps } from "../../apis/todo/todo.types";

function TodoItem( todoItem: TodoProps) {
    const [editText, setEditText] = useState(todoItem.todo);
    // const [completed, setCompleted] = useState(todoItem.isCompleted);
    const [completed, setCompleted] = useState(true);
    const [toggle, setToggle] = useState(false);
    
    const handleComplete = () => {
        setCompleted(!completed);
        // updateToDo
    }

    const handleEdit = () => {
        if (!editText) {
            // notify 주기
            return;
        }
        //updateToDo
        setToggle(!toggle);
    }

    const handleDelete = (id : DeleteTodoRequestProps) => {
        //deleteToDo
        console.log("delete");
    }

    return(
        <li className="flex items-center px-3">
            <div className="flex items-center justify-center mr-5 cursor-pointer w-8 h-8 rounded-md border-solid font-sm"
                onClick={() => handleComplete()}>
                {/* {todoItem.isCompleted && <MdDone/>} */}
                {completed && <MdDone/>}
            </div>
            { toggle ? (
                <>
                    <input className='p-3 rounded border-2 border-slate-200 w-128 box-border'
                        data-testid="modify-input"
                        defaultValue={todoItem.todo}
                        autoFocus
                        onChange={(e)=>setEditText(e.target.value)}>
                    </input>
                    <button className='flex items-center justify-center text-blue-1 text-xl cursor-pointer hover:text-gray-2'
                        data-testid="submit-button"
                        onClick={handleEdit}>
                        <MdDone/>
                    </button>
                    <button className='flex items-center justify-center text-blue-1 text-xl cursor-pointer hover:text-gray-2'
                        data-testid="cancel-button"
                        onClick={() => setToggle(!toggle)}>
                        <MdCancel />
                    </button>
                </>
            ) : (
                <>
                    <div className='flex-1 text-base'>
                        {todoItem.todo}
                    </div>
                    <button className='flex items-center justify-center text-blue-1 text-xl cursor-pointer hover:text-gray-2'
                        data-testid="modify-button"
                        onClick={() => setToggle(!toggle)}>
                        <MdEdit />
                    </button>
                    <button className='flex items-center justify-center text-blue-1 text-xl cursor-pointer hover:text-gray-2'
                        data-testid="delete-button"
                        onClick={() => handleDelete({id: todoItem.id})}>
                        <MdDelete />
                    </button>
                </>
            )}
        </li>
    );
};

export default TodoItem;