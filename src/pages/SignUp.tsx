import Sign from "../components/auth/Sign";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";
import { useAuth } from "../context/auth";

function SignUp(){
    const auth = useAuth();
    const navigator = useNavigate();

    const submitAction = auth.signUp;
    const submitCallback = () => {
        navigator("/signin", { replace: true });
    };

    return (
        <div className="flex flex-col justify-center items-center h-screen">
            <h2 className="p-2 font-extrabold">회원가입</h2>
            <Sign submitAction={submitAction} submitCallback={submitCallback}/>
            <Link to="/signin" className="text-gray	 hover:text-black	">
                Already have account? Sign In.
            </Link>
        </div>
    );
};

export default SignUp;