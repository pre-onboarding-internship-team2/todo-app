import { useState, useEffect } from "react";
import { AuthRequestProps } from "../../../apis/auth/auth.types";
import SignValidation from "../validation/SignValidation";

function Sign({submitAction, submitCallback} : {
    submitAction: (props: AuthRequestProps, callback: VoidFunction) => void;
    submitCallback: VoidFunction;
}) {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isValidForm, setIsValidForm] = useState(false);
    const [validMsg, setValidMsg] = useState<AuthRequestProps>();

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        
        submitAction({email, password}, submitCallback);
    };

    useEffect(()=> {
        const { valid, message } = SignValidation({email, password});

        setValidMsg((msg)=> {
            return {
                email: message.email,
                password: message.password
            };
        });
        setIsValidForm(valid);
    }, [email, password]);

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
                <div className="flex flex-col justify-center items-center">
                    { validMsg?.email ? 
                        <h2 className="text-red	text-sm items-center justify-center">{validMsg.email}</h2> 
                        : null }
                    { validMsg?.password ? 
                        <h2 className="text-red	text-sm items-center justify-center">{validMsg.password}</h2> 
                        : null }
                </div>
                <button className="bg-green-1 text-white my-0.5 w-60 text-lg py-2 rounded-2xl hover:bg-green-2 disabled:bg-gray disabled:cursor-not-allowed"
                    data-testid="signin-button"
                    disabled={!isValidForm}
                >Submit</button>   
            </form>
        </div>
    )
};

export default Sign;