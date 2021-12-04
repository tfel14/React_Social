import "./login.css"
import React, {useState} from 'react';
import { useNavigate } from "react-router-dom";
function loginUser(email, password){
    let loginURL = 'http://localhost:9999/api/user/login';
    let data = JSON.stringify({email, password});
    let resources = {
        method: "POST",
		headers: {
			"Content-Type": "application/json",
            // 'Accept': 'application/json'
		},
		body: data,
    }
    return fetch(loginURL, resources).then(res=>{
		return res.json();
	})
    // return fetch(loginURL).then((res)=>{return res.json()});
}
export default function Login() {
    let [email, setEmail] = useState('');
    let [password, setPassword] = useState('');
    const navigate = useNavigate();
    const submitHandler = async (event)=> {
		loginUser(email,password)
        .then((res)=> {
            console.log(res);
            let userCreds = res.user;
            navigate(`/profile/${userCreds._id}`);
        });
	}; 
    return (
        <div className="login">
            <div className="loginWrapper">
                <div className="loginLeft">
                    <h3 className="authLogo">Nosey Neighbor</h3>
                    <span className="loginDesc">Keep tabs on everyone!!</span>
                </div> 
                <div className="loginRight">
                    <div className="loginBox">
                        <input placeholder="Email" className="loginInput" id="email" value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
                        <input placeholder="Password" className="loginInput" id="password" value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
                        <button className="loginButton" type="submit" onClick={submitHandler}>Login</button>
                        <span className="loginForgot">Forgot Password?</span>
                        <button className="loginRegisterButton">Create a New Account</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
