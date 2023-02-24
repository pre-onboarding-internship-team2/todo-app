import { useState, useContext } from 'react';
import TodosContext from 'context/todo/TodoContext';
import { TodoState } from 'apis/todo/todoApi.type';

const TodoEdifForm = ({ todo, isFinishedEdit } : { todo: TodoState, isFinishedEdit: () => void } ) => {
    const [value, setValue] = useState<string>(todo.todo);
    const { updateTodo } = useContext(TodosContext);
    
    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value)
    const onSubmitHander = (e: React.FormEvent) => {
        e.preventDefault();
        updateTodo({id: todo.id, todo: value, isCompleted: todo.isCompleted })
        .then(() => {
            setValue('')
            isFinishedEdit();
        })
    }

    return (
        <>
            <form onSubmit={onSubmitHander}>
                <input onChange={onChangeHandler} value={value}/>
                <button>완료</button>
            </form>
            <button onClick={() => isFinishedEdit()}>취소</button>
        </>
    )
}

export default TodoEdifForm