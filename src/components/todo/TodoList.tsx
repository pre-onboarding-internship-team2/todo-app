import { useToDos } from "../../context/todo";
import TodoItem from "./TodoItem";


function TodoList() {
    const { toDos } = useToDos();

    return(
        <div className='flex-1 py-5 px-8 pb-12 overflow-y-auto'>
            {toDos.map((list) => 
                <TodoItem 
                    key={list.id}
                    id={list.id}
                    todo={list.todo}
                    isCompleted={list.isCompleted}
                    userId={list.userId}/>
            )}
        </div>
    );
};

export default TodoList;