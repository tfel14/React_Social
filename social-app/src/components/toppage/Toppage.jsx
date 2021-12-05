import "./toppage.css"
import { Search, Person, Chat, Notifications } from "@material-ui/icons"
import axios from 'axios';
import PrivateLinks from './privateLinks';
import PublicLinks from './publicLinks';

function logoutHandler() {
    let requestBody = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        }
    }
    return axios.post('http://localhost:9999/api/user/logout', requestBody)
}
function Toppage(props) {
    let loggedIn = props.loggedIn;
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
                    <span className="toppageLink1"><a href="/">Home</a></span>
                    {(loggedIn) ? <PrivateLinks logout = {logoutHandler}/> : <PublicLinks/>}
                    {/* <span className="toppageLink2">Timeline</span> */}
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
                <a href="/profile">
                    <img src="./assets/people/1.jpg" alt="" className="toppageImg"/>
                </a>
            </div>
        </div>
    );
}
export default Toppage;