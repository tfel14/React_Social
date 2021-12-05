import Home from './pages/Home';
import Profile from "./pages/profile/Profile";
import PostPage from "./components/post/Post";
import { Routes } from 'react-router-dom';
import {Route} from 'react-router-dom';

export default function PrivateRoutes() {
  return (
        <>
          <Routes>
              <Route path= '/' exact element={<Home loggedIn={true}/>} />
              <Route path= '/profile/:id' element={<Profile/>}/>
              <Route path= '/post/:id' element={<PostPage/>}/>
          </Routes>
        </>
        
  );
}
