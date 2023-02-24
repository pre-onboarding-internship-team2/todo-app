import { useState, useContext } from 'react';
import TodosContext from 'context/todo/TodoContext';
import { TodoState } from 'apis/todo/todoApi.type';
import CommonInput from 'components/common/CommonInput';
import CommonButton from 'components/common/CommonButton';
import { CheckCircleIcon, XCircleIcon } from "@heroicons/react/24/solid";

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
        <div className='flex flex-row w-full'>
            <form onSubmit={onSubmitHander} className='flex flex-row justify-between '>
                <CommonInput type={"text"} onChange={onChangeHandler} value={value} className={'w-4/5 px-2 mr-2'}></CommonInput>
                <div className='flex flex-row '>
                    <CommonButton className={'w-fit h-fit  mr-2'}>
                        <CheckCircleIcon className='w-7 h-7'/>
                    </CommonButton>
                    <CommonButton onClick={() => isFinishedEdit()} className={'w-fit h-fit'}>
                        <XCircleIcon className='w-7 h-7'/>
                    </CommonButton>
                </div>
            </form>
        </div>
    )
}

export default TodoEdifForm