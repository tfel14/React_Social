import Toppage from "../components/toppage/Toppage";
import Sidebar from "../components/sidebar/Sidebar";
import Rightbar from "../components/rightbar/Rightbar";
import Feed from "../components/feed/Feed";
import "./home.css"
import Guest from './guest/Guest';
import LoggedInHome from './loggedInHome';

function home(props) {
  let loggedIn = props.loggedIn;
  return(
    <div className="homeContainer">
      {(loggedIn == true) ? <LoggedInHome/> : <Guest/>}
    </div>
  )
}
export default home;