import "./About.css";
import drums from "../../img/drumming.jpg";
import coding from "../../img/codingcert.jpg";

const About = () => {
  return (
    <div className="about">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img src={drums} alt="" className="a-img" />
        </div>
      </div>
      <div className="a-right">
          <h1 className="a-title">About Me</h1>
          <p className="a-sub">
              I am 28, he/him, from Grand Saline, Texas. I have an associates degree in Diesel Mechanics from TSTC and a coding bootcamp certification fro UT Austin.
              I spend my free time playing drums in a few different bands and playing in bowling league with my friends.
              In 10 years i hope to be working remotely and traveling the world.
          </p>
          <p className="a-description">
             
          </p>
          <div className="a-aboutme">
              <img src={coding} alt="" className="aboutme-img" />
              <div className="aboutme-text">
              <h4 className="codingtitle"> University of Texas Coding Certification</h4>
              <p className="codingcert">  In the UT coding boot camp I was Taught and challenged in HTML, CSS, Git, JS, web APIs, Third party APIs, serverside APIs, Node.js, SQL, ORM, MVC, NoSQL, PWA, React, MERN, State.

I am familiar with both back end and front end web applications, but I feel much stronger and interested in Front end web developing.</p>
              </div>
          </div>
      </div>
    </div>
  );
};

export default About;
