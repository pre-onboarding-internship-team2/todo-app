import { useState } from "react";

function Sign(){

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = () => {
        console.log("submit");
    };


    return (
        <form style={{ display: "flex", flexDirection: "column"}}
                onSubmit={handleSubmit}>
            <input 
                data-testid="email-input" 
                name="email" 
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"/>
            <input 
                data-testid="password-input" 
                name="password" 
                type="password"
                onChange={(e) => setPassword(e.target.value)} 
                placeholder="Password"/>
            <button 
                data-testid="signin-button"
            >로그인</button>   
        </form>
    )
};

export default Sign;
