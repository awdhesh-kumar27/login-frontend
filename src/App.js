import logo from './logo.svg';
import './App.css';
import {Routes,Route} from 'react-router-dom';
import Home from './Routes/Home/Home';
import Register from './Routes/SignUp/SignUp';
import Login from './Routes/SignIn/SignIn';
import NavigationBar from './Components/Navigationbar';

function App() {
  return (
    <div >
       <NavigationBar></NavigationBar>
      <Routes>
         <Route path="/" element={<Home></Home>}></Route>
         <Route path="/register" element={<Register></Register>}></Route>
         <Route path="/login" element={<Login></Login>}></Route>
       </Routes>
    </div>
  );
}

export default App;
