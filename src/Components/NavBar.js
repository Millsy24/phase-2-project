import React from 'react'
import { NavLink } from 'react-router-dom';



const NavBar = () => {
    

    
    return (
        <div>
            <NavLink
                to="/"
                exact
            >
            Sightings
            </NavLink>
            <NavLink
                to="/submitpage"
                exact
            >
            Submit Sighting    
            </NavLink>
            <NavLink
                to="/cryptids"
                exact
            >
            Cryptids    
            </NavLink>
                       
        </div>
    )



}




export default NavBar;