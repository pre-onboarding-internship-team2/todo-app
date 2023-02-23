import { useState, useEffect } from "react";
import { signInApi } from "../../apis/auth/auth";
import { AuthRequestProps } from "../../apis/auth/auth.types";

function Sign({submitAction, submitCallback} : {
    submitAction: (props: AuthRequestProps, callback: VoidFunction) => void;
    submitCallback: VoidFunction;
}) {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isValidForm, setIsValidForm] = useState(false);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("submit");
        submitAction({email, password}, submitCallback);
    };

    useEffect(() => {
        const checkValidForm = () => {
            const EMAIL_CHECK = new RegExp("@");
            const PW_CHECK = new RegExp("(?=.{8,})");

            return (EMAIL_CHECK.test(email) && PW_CHECK.test(password));
        };
    
        setIsValidForm(checkValidForm());
      }, [email, password]);
    console.log(isValidForm);
    return (
        <div className="flex justify-center items-center">
            <form className="flex flex-col align"
                    onSubmit={handleSubmit}>
                <input className="my-1 text-lg p-2"
                    data-testid="email-input" 
                    value={email}
                    type="email"
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"/>
                <input className="my-1 text-lg p-2"
                    data-testid="password-input" 
                    value={password}
                    type="password"
                    onChange={(e) => setPassword(e.target.value)} 
                    placeholder="Password"/>
                { !isValidForm ? 
                    <div className="flex flex-col justify-center items-center">
                        <h2 className="text-red-500	text-sm items-center justify-center">@를 포함한 이메일을 입력해주세요</h2>
                        <h2 className="text-red-500	text-sm items-center justify-center">비밀번호는 8자리 이상 입력해주세요</h2>
                    </div> 
                        : null}
                <button className="my-0.5 w-60 text-lg py-2 bg-green-300 text-white rounded-2xl disabled:bg-gray-300 disabled:cursor-not-allowed"
                    data-testid="signin-button"
                    disabled={!isValidForm}
                >Submit</button>   
            </form>
        </div>
    )
};

export default Sign;
