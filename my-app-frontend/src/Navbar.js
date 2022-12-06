import React from 'react'
import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (  
        <nav>
        
        
            <ul>
                <li><NavLink to ="/">Home </NavLink></li>
                <li><NavLink to="/daycares">View Daycares </NavLink></li>
                <li><NavLink to="/daycares/new">Add Daycare</NavLink></li>
            </ul>
        
        </nav>
    );
}
 
export default Navbar;