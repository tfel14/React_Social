import Toppage from "../../components/toppage/Toppage";
import Sidebar from "../../components/sidebar/Sidebar";
import Rightbar from "../../components/rightbar/Rightbar";
import Feed from "../../components/feed/Feed";
import "./profile.css";
export default function Profile(props) {
  let info = props.profileInfo;
  let username = info.username;
  let pfp = info.pfp;
  return (
    <div>
      <Toppage loggedIn={true}/>
      <div className="profile">
        <Sidebar userpfp={pfp} username={username}/>
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img className="profileCoverImg" src="/assets/posts/post5.jpeg" alt="" />
              <img className="profileUserImg" src={pfp} alt="profile-pic" />
            </div>
            <div className="profileInfo">
                <h4 className="profileInfoName">{username}</h4>
                <span className="profileInfoDescription">Hello my friends!</span>
            </div>
          </div>
          <div className="profileRightBottom">
            <Feed userpfp={pfp}/>
            <Rightbar profile/>
          </div>
        </div>
      </div>
    </div>
  );
}
