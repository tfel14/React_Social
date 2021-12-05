import Messenger from "./pages/messenger/Messenger";
import PrivateRoutes from "./privateRoute";
import PublicRoutes from "./publicRoute";
import {Route} from 'react-router-dom';
import { Routes } from 'react-router-dom';
import { useCookies } from "react-cookie";
// import APITest from './components/apiComponent/api';


function App(){
  let [cookie, setCookie] = useCookies(['user']);
  let isLoggedIn;
  if(cookie.user != undefined){
    console.log(cookie);
    isLoggedIn = false;
    return(
      <div className="App container">
        <PrivateRoutes/>
      </div>
    )
  }
  else {
    return(
      <div className="App container">
        <PublicRoutes/>  
      </div>
    )
  }
  
  
       
}

export default App;
