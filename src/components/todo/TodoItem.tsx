import React, { useState } from "react";
import { MdDone, MdDelete, MdEdit, MdCancel } from 'react-icons/md';
import { TodoProps } from "../../apis/todo/todo.types";
import { useToDos } from "../../context/todo";

function TodoItem( todoItem: TodoProps) {
    const { id, todo, isCompleted } = todoItem;
    const { updateToDo, deleteToDo } = useToDos();
    const [editText, setEditText] = useState(todoItem.todo);
    const [toggle, setToggle] = useState(false);

    const handleEdit = () => {
        if (!editText) {
            // notify 주기
            return;
        }
        updateToDo({...todoItem, todo: editText})
        setToggle(!toggle);
    }

    return(
        <li className="flex items-center px-3">
            <div className="flex items-center justify-center mr-5 cursor-pointer w-8 h-8 rounded-md border-solid font-sm"
                onClick={() => updateToDo({...todoItem, isCompleted: !isCompleted})}>
                {/* {todoItem.isCompleted && <MdDone/>} */}
                {isCompleted && <MdDone/>}
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
                        {todo}
                    </div>
                    <button className='flex items-center justify-center text-blue-1 text-xl cursor-pointer hover:text-gray-2'
                        data-testid="modify-button"
                        onClick={() => setToggle(!toggle)}>
                        <MdEdit />
                    </button>
                    <button className='flex items-center justify-center text-blue-1 text-xl cursor-pointer hover:text-gray-2'
                        data-testid="delete-button"
                        onClick={() => deleteToDo({id: id})}>
                        <MdDelete />
                    </button>
                </>
            )}
        </li>
    );
};

export default React.memo(TodoItem);