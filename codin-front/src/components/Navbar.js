import React, {useState} from 'react';
import '../style/navbar.css'
import codin from  '../assets/logo-codin.png';
import {Link} from "react-router-dom";

const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };


  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const closeNavbar = () => {
    setIsOpen(false);
  };

  const handleNavLinkClick = (section) => {
    scrollToSection(section);
    setIsOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="logo" onClick={() => scrollToSection('Home')}>
          <Link to="/"><img src={codin} alt=""/></Link>
        </div>
        <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
          <li onClick={() => { scrollToSection('Who'); closeNavbar(); }}><a href="/#">Who are We</a></li>
          <li onClick={() => { scrollToSection('Overview'); closeNavbar(); }}><a href="/#">Overview</a></li>
          <li onClick={() => { scrollToSection('Events'); closeNavbar(); }}><a href="/#">Events</a></li>
          <li><a href="/#">Challenges</a></li>
          <li><a href="/#">Trend</a></li>
        </ul>
        <div className="nav-socials">
          <h2>COD'IN</h2>
        </div>
        <div className="menu-icon" onClick={toggleNavbar}>
          <div className={`bar ${isOpen ? 'animate' : ''}`}></div>
          <div className={`bar ${isOpen ? 'animate' : ''}`}></div>
          <div className={`bar ${isOpen ? 'animate' : ''}`}></div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
