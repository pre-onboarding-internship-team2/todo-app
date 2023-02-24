import { useToDos } from "../../context/todo";

function TodoList() {
    const { toDos } = useToDos();

    return(
        <div className='flex-1 py-5 px-8 pb-12 overflow-y-auto'>
            {toDos.map((list) => 
                <div 
                    key={list.id}> 
                    {list.todo} 
                </div>)}
        </div>
    );
};

export default TodoList;