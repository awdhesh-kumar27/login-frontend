import logo from './logo.svg';
import './App.css';
import {Routes,Route} from 'react-router-dom';
import Home from './Routes/Home/Home';
import Register from './Routes/SignUp/SignUp';
import Login from './Routes/SignIn/SignIn';
import NavigationBar from './Components/Navigationbar';
import UserHome from './Components/UserHome';

function App() {
  return (
    <div >
       <NavigationBar></NavigationBar>
      <Routes>
         <Route path="/" element={<Home></Home>}></Route>
         <Route path="/register" element={<Register></Register>}></Route>
         <Route path="/login" element={<Login></Login>}></Route>
         <Route path="/UserHome" element={<UserHome></UserHome>}></Route>
       </Routes>
    </div>
  );
}

export default App;
