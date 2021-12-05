import RegisterPage from "./components/register/Register";
import LoginPage from "./components/login/Login";
import Home from './pages/Home';
import {Routes} from 'react-router-dom';
import {Route} from 'react-router-dom';

export default function PublicRoutes() {
  return (
      <>
        <Routes>
            <Route path= '/' exact element={<Home loggedIn={false}/>} />
            <Route path= '/register' element={<RegisterPage/>}/>
            <Route path= '/login' element={<LoginPage/>}/>
        </Routes>
      </>
  );
}
