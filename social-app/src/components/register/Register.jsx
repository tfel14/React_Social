import "./register.css"
// import userController from '../../api/controllers/user';
import React, {useState} from 'react';
import { useNavigate } from "react-router-dom";


function isNewUser(username){
	const userURL = "http://localhost:3000/api/user"
	return fetch(userURL).then(res=>res.json()).then(users=>{
		let hasUser = users.find(user=> {
			return user.username === username;
		});
		if(hasUser=== undefined){
			return true;
		}
		return false;
	})
}
function registerUser(username,password){
	const url ="http://localhost:3000/api/user/register"
	let data = JSON.stringify({
		username,password
	})
	let resources = {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
            'Accept': 'application/json'
		},
		body: data,
	};
	return fetch(url,resources).then(res=>res.json())


}

function Register() {
    const User = require('../../api/models/User');
    let [email, setEmail] = useState('');
    let [username, setUsername] = useState('');
    let [password, setPassword] = useState('');
    let [repassword, setRepassword] = useState('');
    let [error, setError] = useState('');
    const navigate = useNavigate();
    const submitHandler = (event)=> {
        event.preventDefault();
        if(password !== repassword){
			setError("Both Passwords must be the same!");
			return;
		}
		isNewUser(username).then(bool=>{
			if(!bool){
				setError("Need A Unique username");
				return;
			}
			registerUser(username,password).then(res=>{
				console.log(res);
				navigate("/login")
			})
		})
		
	};
    return (
        <div className="register">
        <div className="registerWrapper">
            <div className="registerLeft">
                <h3 className="authLogo">Nosey Neighbor</h3>
                <span className="registerDesc">Keep tabs on everyone!!</span>
            </div>
            <div className="registerRight">
                <form className="registerBox" onSubmit={submitHandler}>
                    <input placeholder="Username" className="registerInput" id="username" value={username} onChange={(e)=>{setUsername(e.target.value)}}/>
                    <input placeholder="Email" className="registerInput" id="email" value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
                    <input placeholder="Password" className="registerInput" id="password" value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
                    <input placeholder="Retype Password" className="registerInput" id="repeatPassword" value={repassword} onChange={(e)=>{setRepassword(e.target.value)}}/>
                    <button className="registerButton" type="submit">Register Now</button>
                    <button className="loginPageButton">Login to New Account</button>
                </form>
            </div>
        </div>
    </div>
    )
}

export default Register;
