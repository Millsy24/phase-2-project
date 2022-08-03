import React from 'react'
import { NavLink } from 'react-router-dom';



const NavBar = () => {
    

    
    return (
        <div className='navbar'>
            <NavLink className="link-style"
                to="/"
                exact
            >
            <h3>Sightings</h3>   
            </NavLink>
            <NavLink className="link-style"
                to="/submitpage"
                exact
            >
            <h3>Submit Sighting</h3>     
            </NavLink>
            <NavLink className="link-style"
                to="/cryptids"
                exact
            >
            <h3>Cryptids</h3>    
            </NavLink>
                       
        </div>
    )



}




export default NavBar;