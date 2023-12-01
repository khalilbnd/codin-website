import React, {useState} from 'react';
import '../style/WhoWe.css';
import question from '../assets/Question.png';

const WhoAreWer = () => {

  const [isHover, setIsHover] = useState(false);

  const handleMouseover = () => {
    setIsHover(true);
    console.log("ouii")
  };

  const handleMouseout = () => {
    setIsHover(false);
  };
  
  return (
    <div className="Wcontent" id="Who">
      <div className="content-container">
        <h1 >//Who we are ?</h1>
        <div className="who">
          <div onMouseEnter={handleMouseover} onMouseLeave={handleMouseout} className={`left ${isHover ? 'hovering': ''}`}>
            <p>"We are a passionate scientific club comprised of computer science students.</p>
            <p className="hovering">
              Our core values include sharing knowledge organizing both scientific and fun activities, and promoting our love for programming and the IT world.
              We are dedicated to making a positive impact not only within our university but also in our
              wider community."</p>
          </div>
          <div className="right">
            <img src={question} alt=""/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhoAreWer;
