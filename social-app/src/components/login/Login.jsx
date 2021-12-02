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
            'Accept': 'application/json'
		},
		body: data,
    }
    return fetch("http://localhost:9999/api/user/login",resources).then(res=>{
			//console.log(res.status);
			return JSON.parse(JSON.stringify(res));
	})
    // return fetch(loginURL).then((res)=>{return res.json()});
}
export default function Login() {
    let [email, setEmail] = useState('');
    let [password, setPassword] = useState('');
    const navigate = useNavigate();
    const submitHandler = async (event)=> {
        event.preventDefault();
        // if(password !== repassword){
		// 	setError("Both Passwords must be the same!");
		// 	return;
		// }
		loginUser(email,password)
        .then((res)=> {
            console.log(res);
            navigate("/")
        });
		// .then(res=>{
		// 	// console.log(res);
		// 	navigate("/login")
		// })
		// isNewUser(username).then(bool=>{
		// 	if(!bool){
		// 		setError("Need A Unique username");
		// 		return;
		// 	}
			
		// })
		
	}; 
    return (
        <div className="login">
            <div className="loginWrapper">
                <div className="loginLeft">
                    <h3 className="authLogo">Nosey Neighbor</h3>
                    <span className="loginDesc">Keep tabs on everyone!!</span>
                </div> 
                <div className="loginRight">
                    <form className="loginBox" onSubmit={submitHandler}>
                        <input placeholder="Email" className="loginInput" id="email" value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
                        <input placeholder="Password" className="loginInput" id="password" value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
                        <button className="loginButton">Login</button>
                        <span className="loginForgot">Forgot Password?</span>
                        <button className="loginRegisterButton">Create a New Account</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
