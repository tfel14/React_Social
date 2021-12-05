import Toppage from "../components/toppage/Toppage";
import Sidebar from "../components/sidebar/Sidebar";
import Rightbar from "../components/rightbar/Rightbar";
import Feed from "../components/feed/Feed";
import "./home.css"


function LoggedInHome() {
    return (
        <>
            <Toppage loggedIn={true}/>
            <div className="left">
                <Sidebar />
            </div>
            <Feed/>
            <Rightbar profile/>
            
        </>
    )
  }


  export default LoggedInHome;