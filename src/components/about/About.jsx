import "./about.css";
import Award from "../../img/award.png";
import Drums from "../../img/drumming.jpg"

const About = () => {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img
            src={Drums}
            alt=""
            className="a-img"
          />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">About Me</h1>
        <p className="a-sub">
          I'm a web developer living in dallas looking for my frist junior developer and to be a
          contributing member to a developing team.
        </p>
        <p className="a-desc">
          I recently finished the UT Austin full stack Bootcamp and have gained a proficient experience in JS, Mern, React, and much more.
        </p>
        <div className="a-award">
          <img src={Award} alt="" className="a-award-img" />
          <div className="a-award-texts">
            <h4 className="a-award-title">UT Full Stack Bootcamp Certification</h4>
            <p className="a-award-desc">
              I wont't bore you here with the details, so head over to my resume to see my experience and technical skills.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
