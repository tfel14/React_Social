
import Home from "./pages/Home";
import Profile from "./pages/profile/Profile";
import RegisterPage from "./components/register/Register";
import LoginPage from "./components/login/Login";
import PostPage from "./components/post/Post";
import Messenger from "./pages/messenger/Messenger";
import { Route, Link } from 'react-router-dom';
import { Routes } from 'react-router-dom';
// import APITest from './components/apiComponent/api';
import User from './api/models/User';
function App() {
  return(
    <div className="App container">
      <Routes>
        <Route path= '/' exact element={<Home/>} />
        <Route path= '/profile' element={<Profile/>}/>
        <Route path= '/register' element={<RegisterPage/>}/>
        <Route path= '/login' element={<LoginPage/>}/>
        <Route path= '/post' element={<PostPage/>}/>
        {/* <Route path= '/api/user'/> */}
      </Routes>
    </div>
  )
       
}

export default App;
