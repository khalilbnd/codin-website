import React from 'react';
import '../style/navbar.css'
import codin from  '../assets/logo-codin.png';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="logo">
          <img src={codin} alt=""/>
        </div>
        <ul className="nav-links">
          <li><a href="/#">Who are We</a></li>
          <li><a href="/#">Overview</a></li>
          <li><a href="/#">Events</a></li>
          <li><a href="/#">Challenges</a></li>
          <li><a href="/#">Trend</a></li>
        </ul>
        <div className="nav-socials">
          <h2>COD'IN</h2>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
