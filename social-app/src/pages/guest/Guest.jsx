import Toppage from "../../components/toppage/Toppage";
import "./guest.css";

export default function Guest() {
  return (
    <>
      <div className="toppageContainer">
        <div className="toppageLeft">
          <span className="logo">Nosey Neighbor</span>
        </div>
        <div className="toppageRight">
          <div className="toppageLinks">
            <span className="toppageLink2"><a className="lognLink" href="/login">Login</a></span>
          </div>
        </div>
      </div>
      <div className="guest">
        <div className="guestImg">
        <img src="../assets/background.jpg" alt="" className="Img1"/>
        </div>
        <div className="welcome">
          <h1 className="welcome-title">
            <b>Welcome to Nosey Nieghbor!</b>
          </h1>
        </div>
        <div className="welcomeBanner">
          <p>
            This wonderful site helps you keep tabs on your neighbors even when
            your away from the window. Never miss out on any of your streets
            action!
          </p>
        </div>
        <button className="registerBtn"><a className="BtnFill" href="/register">Register Now!</a></button>
      </div>
    </>
  );
}
