import React from 'react';
import './index.css'
import { Link } from "react-router-dom";

const Navbar = () => {
  return ( 
    <div className="nav">
      <div className="navHeading">
        PORTFOLIO
      </div>
      <div className="navPages">
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to="/About"> About </Link></li>
          <li><Link to="/Project"> Projects </Link></li>
          <li><Link to="/Contact"> Contact </Link></li>
        </ul>
      </div>
    </div>
   );
}
 
export default Navbar;