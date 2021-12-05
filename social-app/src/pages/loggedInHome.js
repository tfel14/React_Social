import Toppage from "../components/toppage/Toppage";
import Sidebar from "../components/sidebar/Sidebar";
import Rightbar from "../components/rightbar/Rightbar";
import Feed from "../components/feed/Feed";
import "./home.css"


function LoggedInHome() {
    return (
        <div>
            <Toppage loggedIn={true}/>
            <Sidebar />
            <Feed/>
            <Rightbar/>
        </div>
    )
  }


  export default LoggedInHome;