import React from "react";
import { NavLink } from "react-router-dom";

 const linkStyles = {
    display: "inline",
    width: "0px",
    padding: "0px 400px 0px 50px",
    margin: "0px",
    color: "black",
    background: "greenyellow"
   };

function NavBar({user}){
    return(
        <div className = "Navbar">
            
            <NavLink to = "/" exact style = {linkStyles}>Home</NavLink>
            <NavLink to = "/newshow" exact style = {linkStyles}>Add a New Show</NavLink>
             Hello, {user.username}
        </div>
    )
}

export default NavBar;