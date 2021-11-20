import "./rightbar.css"

export default function Rightbar() {
    return (
        <div className="rightbar">
            <div className="rightbarWrapper">
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
                    <li className="rightbarFriend">
                        <div className="rightbarProfileImgContainer">
                            <img className="rightbarProfileImg" src="assets/people/3.jpg" alt=""/>
                            <span className="rightbarOnline"></span>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}
