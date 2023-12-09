import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import './SignIn.css';
import { signInMethod } from "../../Api/Api";

const SignIn = ()=>{
    const navigate = useNavigate();
    const  [Email, setEmail] = useState("");
    const  [Password, setPassword] = useState("");
    const [Response,setResponse] = useState("");

    const emailhandler = (event) =>{
        const email = event.target.value;
        setEmail(email);
   };
   const passwordhandler = (event) =>{
        const password = event.target.value;
        setPassword(password);
    };
    const loginHandler = async (event) =>{
        event.preventDefault();
        const data = {"username":Email,"password":Password};
        const result = await signInMethod(data);
        // console.log(data);
        const resp = result.data.status +" "+ result.data.username;
        setResponse(resp);
        setEmail("");
        setPassword("");
   }
    return (
        <div className="login-div">
            <div className="login-form">
                <form onSubmit={loginHandler} method="POST">
                    <div><h1 className="heading">Login</h1></div>
                    <div>
                    <label>Username or Email </label>
                    <br></br>
                    <input className="input-box" type="string"  name="email" value={Email} onChange = {emailhandler} required placeholder="Username or Email"></input>
                    </div>
                    <div>
                    <label>Password </label>
                    <br></br>
                    <input className="input-box" type="password" name="password" value={Password} onChange={passwordhandler} required placeholder="Password" ></input>
                    </div>
                    <div>
                        <button className="submit-button" type="submit">Login</button>
                    </div>
                </form>
                <p>{Response}</p>
            </div>
        </div>
    );
}

export default SignIn;