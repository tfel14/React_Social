import Toppage from "../../components/toppage/Toppage";
import "./guest.css";
// function getProfile() {
//     let profileURL = 'http:localhost:9999/api/user/61aa119702542a1da8dcd047'
//     return fetch(profileURL).then((res)=>res.json());
// }
export default function Guest() {
  return (
    <>
      <div className="toppageContainer">
        <div className="toppageLeft">
          <span className="logo">Nosey Neighbor</span>
        </div>
        <div className="toppageRight">
          <div className="toppageLinks">
            <span className="toppageLink2">Login</span>
          </div>
        </div>
      </div>
      <div className="guest">
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
      </div>
    </>
  );
}
