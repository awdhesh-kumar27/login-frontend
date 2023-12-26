import React, { useState } from "react";
import Container from 'react-bootstrap/Container';
import { Nav ,Navbar,NavDropdown} from "react-bootstrap";
import { NavLink,Link } from "react-router-dom";
import './Navigationbar.css'
import { getMethod } from "../Api/Api";
import { useEffect } from "react";

export const UserHome =()=>{
     
    const[username,setUserName] = useState("I am Null");
    const getData = async()=>{
        const result =  await getMethod("/UserHome");
        setUserName(result);
        console.log(result);
    };
     useEffect(()=>{
        getData()
     },[]);
      

      return (
        <div>Welcome to the Home Page <h1>{username}</h1></div>
      );
}

export default UserHome;