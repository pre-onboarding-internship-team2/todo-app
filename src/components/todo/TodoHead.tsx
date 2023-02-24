import { useToDos } from "../../hooks/useAuth";

function TodoHead() {
    const { toDos } = useToDos();
    const undoneTasks = toDos.filter(todo => !todo.isCompleted);

    const today = new Date();
    const dateString = today.toLocaleDateString("ko-KR", {
        year: "numeric",
        month: "long",
        day: "numeric"
    });
    const dayName = today.toLocaleDateString("ko-KR", {weekday: "long"});

    return(
        <div className="pt-12 px-10 pb-6 border-b-2">
            <h1 className="font-bold m-0 text-xl text-date-1">{dateString}</h1>
            <div className="mt-1 text-day-1 text-lg sans">{dayName}</div>
            <div className="font-semibold mt-8 text-base text-green-2">할 일 {undoneTasks.length}개 남음</div>
        </div>
    );
};

export default TodoHead;