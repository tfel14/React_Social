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
                    <span className="toppageLink1">Home</span>
                    <span className="toppageLink2">Timeline</span>
                </div>
                <div className="toppageIcons">
                    <div className="toppageIconItem">
                      <Person style={{backgroundColor: "#28e241"}} />  
                      <span className="toppageIconBadge">1</span>
                    </div>
                    <div className="toppageIconItem">
                      <Chat style={{backgroundColor: "#28e241"}}/>  
                      <span className="toppageIconBadge">2</span>
                    </div>
                    <div className="toppageIconItem">
                      <Notifications style={{backgroundColor: "#28e241"}}/>  
                      <span className="toppageIconBadge">1</span>
                    </div>
                </div>
                <img src="./assets/people/1.jpg" alt="" className="toppageImg"/>
            </div>
        </div>
    );
}
