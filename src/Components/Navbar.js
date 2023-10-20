import React, { useEffect, useState } from "react";
import {Link, useLocation} from "react-router-dom";
import ReorderIcon from "@material-ui/icons/Reorder";
import "../Styles/Navbar.css";

/* Navbar.js
 * Through react and JSX, this file contains the HTML code for the Navigation bar
 * functionality for routing to correct page upon click of route on header
 * functionality for toggling the navigation bar (3 dots only when on a small width window)
 */
function Navbar() {
    // these will help toggle between Navbar being expanded/open (true) and closed (false). Below in the class "toggleButton",
    // we set expandNavbar to !expandNavbar upon click of the toggle button. This toggles it between open and closed.
    const [expandNavbar, setExpandNavbar] = useState(false);
    
    // below allows the navbar to cahnge state to closed (false) upon clicking a link on the Navbar.
    const location = useLocation();

    useEffect(() => {
        setExpandNavbar(false)
    }, [location])

    return (
        <div className="navbar" id={expandNavbar ? "open" : "close"}>
            <div className="toggleButton">
                
                <button onClick={() => {setExpandNavbar((prev) => (!prev))}}> 
                    <ReorderIcon /> 
                </button>
            </div>
            <div className="links">
                <Link to="/"> Home </Link>
                <Link to="/experience"> Experience </Link>
                <Link to="/projects"> Projects </Link>
                <Link to="/skills"> Skills </Link>
            </div>
        </div>
    );
}

export default Navbar;