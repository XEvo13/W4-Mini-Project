import { NavLink } from "react-router-dom";
// import Listing from "./Listing";
import AddItem from "../AddItem";
import "../components/Sidebar.css"

function SideBar() {
    return(
        <nav className="sidebar">
            <ul className="sidebar-ul">
                <NavLink to="/AddItem" className={({isActive}) => (isActive ? "active" : "")}>
                    <button className="button" onClick={AddItem}>Create</button>
                </NavLink>
                {/* <NavLink to="/Listing" className={({isActive}) => (isActive ? "active" : "")}>
                    <button className="button" onClick={Listing}>Update</button>
                </NavLink> */}
            </ul>
        </nav>
    );
}

export default SideBar;