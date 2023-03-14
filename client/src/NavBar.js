import React from "react";
import { NavLink } from "react-router-dom";

 const linkStyles = {
    display: "inline",
    width: "0px",
    padding: "0px 30px 0px 50px",
    margin: "0px",
    color: "black",
    background: "greenyellow"
   };


function NavBar({user, setUser}){

    function handleLogoutClick() {
        fetch("/logout", { method: "DELETE" }).then((r) => {
          if (r.ok) {
            setUser(null);
          }
        });
      }
    return(
        <div className = "Navbar">
            
            <NavLink to = "/" exact style = {linkStyles}>Home</NavLink>
            <NavLink to = "/newshow" exact style = {linkStyles}>Add a New Show</NavLink>
            <NavLink to = "/myreviews" exact style = {linkStyles}>My Reviews</NavLink>
             Hello, {user.username}
            <button className = "logoutButton" onClick={handleLogoutClick}>Log Out</button>
        </div>
    )
}

export default NavBar;