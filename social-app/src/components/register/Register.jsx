import "./register.css"

export default function Register() {
    return (
        <div className="login">
        <div className="loginWrapper">
            <div className="loginLeft">
                <h3 className="loginLogo">Nosey Neighbor</h3>
                <span className="loginDesc">Keep tabs on everyone!!</span>
            </div>
            <div className="loginRight">
                <div className="loginBox">
                    <input placeholder="Username" className="loginInput" />
                    <input placeholder="Email" className="loginInput" />
                    <input placeholder="Password" className="loginInput" />
                    <input placeholder="Retype Password" className="loginInput" />
                    <button className="loginButton">Register Now</button>
                    <button className="loginRegisterButton">Login to New Account</button>
                </div>
            </div>
        </div>
    </div>
    )
}
