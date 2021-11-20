import "./rightbar.css"
import {Users} from "../../dummyData"
import Online from "../online/Online"

export default function Rightbar({profile}) {
    
    const HomeRightBar = () => {
        return(
            <>
               <div className="birthdayContainer">
                    <img className="birthdayImg" src="assets/birthday.png" alt=""/>
                    <span className="birthdayText">
                    {" "}
                    <b>Violet Flowers</b> and <b> 3 other friends</b> have a birthday today
                    </span>
                </div>
                <img className='rightbarAd' src="assets/ad.png" alt=""/>
                <h4 className="rightbarTitle">Online Friends</h4>
                <ul className="rightbarFriendList">
                   {Users.map(u=>(
                    <Online key={u.id} user={u}/>
                    ))}
                </ul> 
            </>
            );
    };

    const ProfileRightbar = () =>{
        return (
            <>
                <h4 className="rightbarTitle">User information</h4>
                <div className="rightbarInfo">
                    <div className="rightbarInfoItem">
                        <span className="rightbarInfoKey">City:</span>
                        <span className="rightbarInfoKey">New York</span>
                    </div>
                    <div className="rightbarInfoItem">
                        <span className="rightbarInfoKey">From:</span>
                        <span className="rightbarInfoKey">Rio</span>
                    </div>
                    <div className="rightbarInfoItem">
                        <span className="rightbarInfoKey">Relationship:</span>
                        <span className="rightbarInfoKey">Single</span>
                    </div>
                </div>
                <h4 className="rightbarTitle" >User friend</h4>
                <div className="rightbarFollowings">
                    <div className="rightbarFollowing">
                        <img className="rightbarFollowingImg" src="assets/people/3.jpg" alt="" />
                        <span className="rightbarFollowingName">John Carter</span>
                    </div>
                    <div className="rightbarFollowing">
                        <img className="rightbarFollowingImg" src="assets/people/2.png" alt="" />
                        <span className="rightbarFollowingName">John Carter</span>
                    </div>
                    <div className="rightbarFollowing">
                        <img className="rightbarFollowingImg" src="assets/people/4.jpg" alt="" />
                        <span className="rightbarFollowingName">John Carter</span>
                    </div>
                    <div className="rightbarFollowing">
                        <img className="rightbarFollowingImg" src="assets/people/5.jpg" alt="" />
                        <span className="rightbarFollowingName">John Carter</span>
                    </div>
                    <div className="rightbarFollowing">
                        <img className="rightbarFollowingImg" src="assets/people/6.jpg" alt="" />
                        <span className="rightbarFollowingName">John Carter</span>
                    </div>
                    <div className="rightbarFollowing">
                        <img className="rightbarFollowingImg" src="assets/people/7.jpg" alt="" />
                        <span className="rightbarFollowingName">John Carter</span>
                    </div>
                </div>
            </>
        )
    }
    return (
        <div className="rightbar">
            <div className="rightbarWrapper">
                {profile ? <ProfileRightbar/> : <HomeRightBar/>}
            </div>
        </div>
    )
}
