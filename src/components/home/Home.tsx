import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../../context/auth";

export default function Home(){
    
    let { authInfo, signOut } = useAuth();
    let navigate = useNavigate();
    
    return (
        <>
            <div className="flex flex-col justify-center items-center place-items-center h-screen">
                <h1 className="font-sans font-bold mb-5 text-xl">To Do</h1>
                    {!authInfo ? (
                        <>
                            <button className="my-0.5 w-60 text-base py-2 bg-green-1 text-white rounded-2xl">
                                <Link to="/signin">로그인</Link>
                            </button>
                            <button className="my-0.5 w-60 text-base py-2	bg-green-1 text-white rounded-2xl">
                                <Link to="/signup">회원가입</Link>
                            </button>
                        </>
                    ) : (
                        <>
                        <Link to="/todo">
                        <button className="font-sans bg-green-1 text-white my-0.5 w-60 text-sm py-2 rounded-2xl hover:bg-green-2">
                            My To Do
                        </button>
                        </Link>
                        <button className="bg-green-1 text-white my-0.5 w-60 text-base py-2 rounded-2xl hover:bg-green-2"
                            onClick={() => {
                                signOut(() => navigate("/signin"));
                            }}
                            >
                            로그아웃
                        </button>
                        </>
                    )}
            </div>
        </>
    );
};
