import { useState } from "react";
import { MdDone, MdDelete, MdEdit, MdCancel } from 'react-icons/md';
import { DeleteTodoRequestProps, TodoProps } from "../../apis/todo/todo.types";

function TodoItem( todoItem: TodoProps) {
    const [editText, setEditText] = useState(todoItem.todo);
    const [completed, setCompleted] = useState(todoItem.isCompleted);
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
        <div>
            <div>
                <button 
                    onClick={() => handleComplete()}>
                    {todoItem.isCompleted && <MdDone/>}
                </button>
                { toggle ? (
                    <>
                        <input
                            data-testid="modify-input"
                            defaultValue={todoItem.todo}
                            autoFocus
                            onChange={(e)=>setEditText(e.target.value)}>
                        </input>
                        <button
                            data-testid="submit-button"
                            onClick={handleEdit}>
                            <MdDone/>
                        </button>
                        <button
                            data-testid="cancel-button"
                            onClick={() => setToggle(!toggle)}>
                            <MdCancel />
                        </button>
                    </>
                ) : (
                    <>
                        <div>
                            {todoItem.todo}
                        </div>
                        <button
                            data-testid="modify-button"
                            onClick={() => setToggle(!toggle)}>
                            <MdEdit />
                        </button>
                        <button
                            data-testid="delete-button"
                            onClick={() => handleDelete({id: todoItem.id})}>
                            <MdDelete />
                        </button>
                    </>
                )}
            </div>
        </div>
    );
};

export default TodoItem;