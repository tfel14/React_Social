import Guest from './guest/Guest';
import LoggedInHome from './loggedInHome';

import "./home.css"

function home(props) {
  let loggedIn = props.loggedIn;
  return(
    <div className="homeContainer">
      {(loggedIn === true) ? <LoggedInHome userpfp={props.userInfo}/> : <Guest/>}
    </div>
  )
}
export default home;