import { useToDos } from "../../context/todo";


function TodoHead() {
    const { toDos } = useToDos();
    const undoneTasks = toDos.filter(todo => !todo.isCompleted);

    const today = new Date();
    const dateString = today.toLocaleDateString('ko-KR', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
    const dayName = today.toLocaleDateString('ko-KR', {weekday: 'long'});

    return(
        <div>
            <h1>{dateString}</h1>
            <div>{dayName}</div>
            <div>할 일 {undoneTasks.length}개 남음</div>
        </div>
    );
};

export default TodoHead;