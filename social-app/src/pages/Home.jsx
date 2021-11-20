
import Toppage from "../components/toppage/Toppage";
import Sidebar from "../components/sidebar/Sidebar";
import Rightbar from "../components/rightbar/Rightbar";
import Feed from "../components/feed/Feed";
import "./home.css"


export default function home() {
  return (
    <>
      <Toppage />
      <div className="homeContainer">
      <Sidebar />
      <Feed/>
      <Rightbar/>
      </div>
    </>
  );
}
