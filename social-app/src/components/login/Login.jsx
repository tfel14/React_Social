import "./login.css"
import React, {useState} from 'react';
import { useNavigate } from "react-router-dom";
import {useCookies} from 'react-cookie';
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
    const setCookie = useCookies(['userCookie'])[1];
    const submitHandler = async (event)=> {
		loginUser(email,password)
        .then((res)=> {
            let userData = res.user;
            let token = res.token;
            setCookie('user', userData, {path: '/'});
            setCookie('token', token, {path: '/'});
            // document.cookie('x-auth-token', res, {maxAge: 90000})
            if(userData._id)
            navigate('/profile/'+userData._id);
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
