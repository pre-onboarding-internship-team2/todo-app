import { Link } from "react-router-dom";

function Todo(){
    return (
        <div className="flex flex-col m-5 justify-center items-center">
            <Link to="/" replace>
                <button className="w-20 absolute right-6 bg-green-1 text-white my-0.5 w-60 text-base py-2 rounded-2xl hover:bg-green-2">
                    Home
                </button>
            </Link>
            <h2>Todo Page</h2>
        </div>
    );
};

export default Todo;