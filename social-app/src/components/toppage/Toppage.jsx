import "./toppage.css"
import { Search, Person, Chat, Notifications } from "@material-ui/icons"

export default function Toppage() {
    return (
        <div className="toppageContainer">
            <div className="toppageLeft">
                <span className="logo">Nosey Neighbor</span>
            </div>
            <div className="toppageCenter">
                <div className="searchbar">
                    <Search className="searchIcon" />
                    <input placeholder="Search for friend, post or video " className="searchInput"/>
                </div>
            </div>
            <div className="toppageRight">
                <div className="toppageLinks"> 
                    <span className="toppageLink">Home</span>
                    <span className="toppageLink">Timeline</span>
                </div>
                <div className="toppageIcons">
                    <div className="toppageIconItem">
                      <Person />  
                      <span className="toppageIconBadge">1</span>
                    </div>
                    <div className="toppageIconItem">
                      <Chat />  
                      <span className="toppageIconBadge">2</span>
                    </div>
                    <div className="toppageIconItem">
                      <Notifications />  
                      <span className="toppageIconBadge">1</span>
                    </div>
                </div>
                <img src="./assets/people/1.jpg" alt="" className="toppageImg"/>
            </div>
        </div>
    );
}
