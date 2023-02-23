import { Outlet, useNavigate, Link } from "react-router-dom";
import { useAuth } from "../../context/auth";

export default function Layout(){
    
    return (
        <>
          <Home />
          <Outlet />
        </>
    );
};

const Home = () => {
    let auth = useAuth();
    let navigate = useNavigate();
    
    return (
        <>
            <div className="flex flex-col justify-center items-center place-items-center h-screen">
                <h1 className="mb-5 text-xl">My To Do</h1>
                    {!auth.authInfo ? (
                        <>
                            <button className="my-0.5 w-60 text-base py-2 bg-green-300 text-white rounded-2xl">
                                <Link to="/signin">로그인</Link>
                            </button>
                            <button className="my-0.5 w-60 text-base py-2	bg-green-300 text-white rounded-2xl">
                                <Link to="/signup">회원가입</Link>
                            </button>
                        </>
                    ) : (
                        <button className="bg-green text-white my-0.5 w-60 text-base py-2 rounded-2xl disabled:bg-gray disabled:cursor-not-allowed"
                            onClick={() => {
                            auth.signOut(() => navigate("/signin"));
                            }}
                            >
                            로그아웃
                        </button>
                    )}
            </div>
        </>
    );
};

