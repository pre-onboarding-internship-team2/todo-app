import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import Sign from "../components/auth/components/Sign";
import { useAuth } from "../context/auth";

function SignIn(){
    const auth = useAuth();
    const navigator = useNavigate();

    const submitAction = auth.signIn;
    const submitCallback = () => {
        navigator("/todo", { replace: true });
    };

    return (
        <div className="flex flex-col justify-center items-center h-screen">
            <h1 className="p-2 font-extrabold text-base">로그인</h1>
            <Sign submitAction={submitAction} submitCallback={submitCallback} />
            <Link to="/signup" className="text-gray-2 hover:text-black	">
                Dont have a account? Sign up.
            </Link>
        </div>
    );
};

export default SignIn;