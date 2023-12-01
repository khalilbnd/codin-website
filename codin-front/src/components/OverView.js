import React from 'react';
import '../style/OverView.css';
import ximg from '../assets/X.png';
import ihack from '../assets/logo-ihack.png';
import wave from '../assets/wave.png';
import khotwa from '../assets/cap.png';
import ScrollAnimation from "./ScrollAnimation";
import {Link} from "react-router-dom";

const OverView = () => {

  return (
    <div className="overView" id="Overview">
      <div className="over-container">
        <h1>#OverView</h1>
        <div className="describe-cards">
          <div className="describe-container">
            <div className="describe">
              <h2>iHACK</h2>
              <h4>Currently Available</h4>
              <p>A hackathon is a fast-paced event
                where tech enthusiast collaborate to
                solve problems and build innovative
                software solutions in a short timeframe
                typically 24 to 48 hours.</p>
              <h3>See More</h3>
            </div>
            <div className="des-image">
              <img  src={ihack} alt=""/>
            </div>
          </div>
          <div className="describe-container">
            <div className="describe">
              <h2>ITalkx</h2>
              <p>iTalkx is an independently organized event that follows the spirit of public speaking, dedicated to inspiring and engaging our local community with groundbreaking ideas and transformative discussions. Our mission is to create a platform where diverse voices and innovative concepts come together to spark conversations and drive positive change</p>
              <Link to="/Ihack">See More</Link>
            </div>
            <div className="des-image">
              <img  src={ximg} alt=""/>
            </div>
          </div>
          <div className="describe-container">
            <div className="describe">
              <h2>Khotwa TOUR</h2>
              <p>Salon of the Student and New Horizons" appears to be an event where various scientific clubs and participants come together to promote and exchange ideas, knowledge, and friendships. The salon typically includes a wide range of workshops and training courses aimed at skill development and knowledge enhancement. It is likely held in an  cultural center, and it is open to students and individuals interested in scientific and research fields</p>
              <h3>See More</h3>
            </div>
            <div className="des-image">
              <img  src={khotwa} alt=""/>
            </div>
          </div>
        </div>







      </div>
      {/*<img className="wave" src={wave} alt=""/>*/}
    </div>

  );
};

export default OverView;
