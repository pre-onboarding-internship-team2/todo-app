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

        submitAction({email, password}, submitCallback);
    };


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
                <button className="my-0.5 w-60 text-lg py-2 bg-green-300 text-white rounded-2xl"
                    data-testid="signin-button"
                >Submit</button>   
            </form>
        </div>
    )
};

export default Sign;
