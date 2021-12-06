import "./closeFriend.css"


export default function CloseFriend({user, pfp}) {
    return (
        <li className="sidebarFriend">
            <img className="sidebarFriendImg" src={pfp} alt="" />
            <span className="sidebarFriendName">{user}</span>
        </li>
    )
}
