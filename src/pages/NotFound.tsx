import { Link } from "react-router-dom";

function NotFound(){
    return (
        <div className="flex flex-col p-10 h-screen">
            <div className="h-48 flex flex-col">
                <h2 className="text-xl3 font-tilt flex justify-center items-center">
                    404
                </h2>
                <h2 className="py-3 text-xl2 font-tilt flex justify-center items-center">
                    NotFound Page
                </h2>
                <h2 className="text-lg font-sans flex justify-center items-center">
                    Page doesn't exist.
                </h2>
            </div>
            <Link to="/" className="py-3 flex justify-center items-center">
                <button className="bg-green-1 text-white my-0.5 w-60 text-lg py-2 rounded-2xl hover:bg-green-2">
                    Go Home
                </button>
            </Link>
        </div>
    );
};

export default NotFound;