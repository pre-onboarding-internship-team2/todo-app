import { Link } from "react-router-dom";
import TodoCreate from "../components/todo/TodoCreate";
import TodoHead from "../components/todo/TodoHead";
import TodoList from "../components/todo/TodoList";
import { TodoProvider } from "../context/todo";

function Todo(){
    return (
        <TodoProvider>
            <div className="flex flex-col m-5 justify-center items-center">
                <Link to="/" replace>
                    <button className="w-32 absolute right-6 bg-green-1 text-white my-0.5 text-base py-2 rounded-2xl hover:bg-green-2">
                        Home
                    </button>
                </Link>
            </div>
            <TodoHead/>
            <TodoList/>
            <TodoCreate/>
        </TodoProvider>
    );
};

export default Todo;