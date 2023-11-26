import React from 'react';
import '../style/footer.css';
import facebook from '../assets/facebook.png';
import discord from '../assets/discord.png';
import instagram from '../assets/instagram.png';
import map from '../assets/map.png';

const Footer = () => {
  return (
    <footer className="footer-content">
      <div className="footer-container">
        <div className="socials">
          <h1>COD'IN</h1>
          <div className="socialsLinks">
            <a href="/#"><i><img src={instagram} alt=""/></i></a>
            <a href="/#"><i><img src={facebook} alt=""/></i></a>
            <a href="/#"><i><img src={discord} alt=""/></i></a>
            <a href="/#"><i><img src={discord} alt=""/></i></a>
          </div>
        </div>
        <div className="useful">
          <a href="/#">About us</a>
          <a href="/#">Our latest events</a>
          <a href="/#">Overview</a>
          <a href="/#">Our latest events</a>
          <a href="/#">Overview</a>
        </div>
        <div className="position">
          <a href=""><i><img src={map} alt=""/></i>Faculté des sciences Exactes et informatique Mostaganem Algerie</a>
          <a href="mailto:test@test.com"><i><img src={map} alt=""/></i>amine.dahah.etudes@gmail.com</a>
          <a href=""><i><img src={map} alt=""/></i>0541268509</a>
        </div>
      </div>
      
    </footer>
  );
};

export default Footer;
