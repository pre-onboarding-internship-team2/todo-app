import { Link } from "react-router-dom";

function Todo(){
    return (
        <>
            <h2>Todo Page</h2>
            <Link to="/" replace>
                <button>Home</button>
            </Link>
        </>
    );
};

export default Todo;