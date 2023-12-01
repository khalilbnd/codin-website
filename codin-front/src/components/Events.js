import React from 'react';
import Editor from "./Editor";
import event from '../assets/event.png'
import '../style/events.css'

const Events = () => {
  return (
    <div className="Events">
      <div className="Events-container">
        <h1>Events ;</h1>
        <Editor/>
        <div className="event">
          <div className="image">
            <img src={event} alt=""/>
          </div>
            <div className="event-describe">
              <h2>HACKATHON</h2>
              <hr/>
              <p>A hackathon is a fast-paced evcent
                where tech enthusiast collaborate to
                solve problems and build innovative
                software solutions in a short timeframe
                typically 24 to 48 hours.</p>
            </div>
        </div>
        <div className="event left-e">
          <div className="image">
            <img src={event} alt=""/>
          </div>
          <div className="event-describe">
            <h2>WORKSHOPS</h2>
            <hr/>
            <p>Game Dev.</p>
              <p>Mobile Dev ( native & Cross )</p>
              <p>ML engineering</p>
            <p>DL engineering</p>
            <p>Digital Marketing</p>
              <p>The ultimate React </p>
          </div>
        </div>
        <div className="event">
          <div className="image">
            <img src={event} alt=""/>
          </div>
          <div className="event-describe">
            <h2>ROBORAVE</h2>
            <hr/>
            <p>RoboRAVE is an international robotics competition and educational event. It provides a platform for students and enthusiasts to design, build, and program robots to compete in various challenges. .</p>
          </div>
        </div>
        <div className="event left-e">
          <div className="image">
            <img src={event} alt=""/>
          </div>
          <div className="event-describe">
            <h2>iCOMUNICATE</h2>
            <hr/>
            <p>Is a dynamic platform where individuals from
              various backgrounds and expertise converge
              to celebrate the power of effective
              communication.
              This event serves as a vibrant hub for sharing
              ideas and knowledge while honing the art of
              public speaking and communication</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;
