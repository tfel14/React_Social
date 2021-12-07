import "./toppage.css"
import { Search, Person, Chat, Notifications } from "@material-ui/icons"
import axios from 'axios';
import PrivateLinks from './privateLinks';
import PublicLinks from './publicLinks';
import {useCookies} from 'react-cookie';
import {useNavigate} from 'react-router-dom';
function Toppage(props) {
    let loggedIn = props.loggedIn;
    let [userCookie, ,removeUserCookie] = useCookies(['user']);
    let removeTokenCookie = useCookies(['token'])[2];
    let profileLink = null; //`/profile/${userCookie.user.id}`;
    let navigate = useNavigate();
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
                    {(loggedIn) ? <PrivateLinks logout = {()=>{
                        removeUserCookie('user');
                        removeTokenCookie('token');
                        navigate('/');
                    }}/> : <PublicLinks/>}
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
                <a href={profileLink}>
                    {(loggedIn) ? <img src={userCookie.user.pfp} alt="" className="toppageImg"/> : null}
                </a>
            </div>
        </div>
    );
}
export default Toppage;