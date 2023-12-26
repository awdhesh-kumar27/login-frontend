import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import './SignUp.css';
import { signUpMethod } from "../../Api/Api";

const SignUp = ()=>{
   
    const  [ConfirmPassword, setConfirmPassword] = useState("");
    const  [UserName, setUserName] = useState("");
    const  [Email, setEmail] = useState("");
    const  [Password, setPassword] = useState("");
    const [Response,setResponse] = useState("");
    const emailHandler = (event) =>{
        const email = event.target.value;
         setEmail(email);
   };
    const UserNamehandler = (event) =>{
        const email = event.target.value;
        setUserName(email);
   };
   const passwordhandler = (event) =>{
        const password = event.target.value;
        setPassword(password);
    };

    const confirmPasswordHandler = (event) =>{
        const confirmpassword = event.target.value;
        setConfirmPassword(confirmpassword);
    };

    const registerHandler = async (event) =>{
        event.preventDefault();

        const data = {
        "email" : Email,
        "username" : UserName,
        "password" : Password
        }
        // console.log(data);
        if(Password === ConfirmPassword){
            const result = await signUpMethod(data);
            setResponse(result.data.message);
        }else{
            //  console.log("Password not matched");
        }
        setConfirmPassword("");
        setUserName("");
        setEmail("");
        setPassword("");
   }
    return (
        <div className="register-restaurant">
        <div className="register-div">
            <div className="register-form">
                <form onSubmit={registerHandler} method="POST">
                    <div><h1 className="heading"> Register </h1></div>
                    <div>
                    <label>UserName </label>
                    <br></br>
                    <input className="input-box" type="string"  name="email" value={UserName} onChange = {UserNamehandler} required placeholder="Username"></input>
                    </div>

                    <div>
                    <label>Email </label>
                    <br></br>
                    <input className="input-box" type="email"  name="email" value={Email} onChange = {emailHandler} required placeholder="Email"></input>
                    </div>
                    <div>
                    <label>Password </label>
                    <br></br>
                    <input className="input-box" type="password" name="password" value={Password} onChange={passwordhandler} required placeholder="Password" ></input>
                    </div>
                    <div>
                    <label>Confirm Password </label>
                    <br></br>
                    <input className="input-box" type="password" name="ConfirmPassword" value={ConfirmPassword} onChange={confirmPasswordHandler} required placeholder="Password" ></input>
                    </div>
                    <div>
                        <button className="submit-button" type="submit">Register</button>
                    </div>
                    <div> 
                    </div>
                </form>
                <p>{Response}</p>
            </div>
        </div>
        </div>
    );
}

export default SignUp;