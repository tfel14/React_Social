import Toppage from "../components/toppage/Toppage";
import Sidebar from "../components/sidebar/Sidebar";
import Rightbar from "../components/rightbar/Rightbar";
import Feed from "../components/feed/Feed";
import "./home.css";



function LoggedInHome() {
  return (
    <>
    <div className="toppageContainer">
      <Toppage loggedIn={true} />
      </div>
    <div className="homeContainer">
      <Sidebar /> 
      <Feed/>
      <Rightbar profile />
    </div>
    </>
  );
}

export default LoggedInHome;
