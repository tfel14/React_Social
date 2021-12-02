import "./login.css"

export default function Login() {
    return (
        <div className="login">
            <div className="loginWrapper">
                <div className="loginLeft">
                    <h3 className="authLogo">Nosey Neighbor</h3>
                    <span className="loginDesc">Keep tabs on everyone!!</span>
                </div> 
                <div className="loginRight">
                    <div className="loginBox">
                        <input placeholder="Email" className="loginInput" id="email"/>
                        <input placeholder="Password" className="loginInput" id="password"/>
                        <button className="loginButton">Login</button>
                        <span className="loginForgot">Forgot Password?</span>
                        <button className="loginRegisterButton">Create a New Account</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
