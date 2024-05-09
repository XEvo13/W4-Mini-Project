import { NavLink } from "react-router-dom";
import User from "../assets/images/user.png";
import "../pages/User";

function Navbar () {
    return (
        <nav className="nav-bar ">
        <ul className="nav-bar-ul text-with-border">
        
            <NavLink to="/" className={({isActive}) => (isActive ? "active" : "")}>
            Home
            </NavLink>

            <NavLink to="/Listing" className={({isActive}) => (isActive ? "active" : "")}>
            Products List
            </NavLink>

            <NavLink to="/User" className={({isActive}) => (isActive ? "active" : "")}>
            <img src={User} style={{height:"80px"}}/>
           </NavLink>   

           <NavLink to="/AddItem" className={({isActive}) => (isActive ? "active" : "")}>
            Add Item
            </NavLink> 
        </ul>
      </nav>
    )
}

export default Navbar;
