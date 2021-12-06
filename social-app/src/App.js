// import Messenger from "./pages/messenger/Messenger";
import PrivateRoutes from "./privateRoute";
import PublicRoutes from "./publicRoute";
import { useCookies } from "react-cookie";

function App(){
  let cookie = useCookies(['user'])[0];
  if(cookie.user !== undefined){
    console.log(cookie);
    return(
      <div className="toppageLinks">
        <PrivateRoutes/>
      </div>
    )
  }
  else {
    return(
      <div className="toppageLinks">
        <PublicRoutes/>  
      </div>
    )
  }
  
  
       
}

export default App;
