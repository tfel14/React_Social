import Toppage from "../../components/toppage/Toppage";
import Sidebar from "../../components/sidebar/Sidebar";
import Rightbar from "../../components/rightbar/Rightbar";
import Feed from "../../components/feed/Feed";
import "./profile.css";
// function getProfile() {
//     let profileURL = 'http:localhost:9999/api/user/61aa119702542a1da8dcd047'
//     return fetch(profileURL).then((res)=>res);
// }
export default function Profile() {
  return (
    <>
      <Toppage loggedIn={true}/>
      <div className="profile">
        <Sidebar />
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img className="profileCoverImg" src="/assets/posts/post5.jpeg" alt="" />
              <img className="profileUserImg" src="/assets/people/1.jpg" alt="" />
            </div>
            <div className="profileInfo">
                <h4 className="profileInfoName">Safak Kocaoglu</h4>
                <span className="profileInfoDescription">Hello my friends!</span>
            </div>
          </div>
          <div className="profileRightBottom">
            <Feed />
            <Rightbar profile/>
          </div>
        </div>
      </div>
    </>
  );
}
