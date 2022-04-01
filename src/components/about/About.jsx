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
              about me goes here
          </p>
          <p className="a-description">
              Description goes here
          </p>
          <div className="a-aboutme">
              <img src={coding} alt="" className="aboutme-img" />
              <div className="aboutme-text">
              <h4 className="codingtitle"> University of Texas Coding Certification</h4>
              <p className="codingcert"> description of coding certification here</p>
              </div>
          </div>
      </div>
    </div>
  );
};

export default About;
