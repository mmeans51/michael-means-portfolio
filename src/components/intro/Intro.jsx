import "./Intro.css";
import me from "../../img/hiking-removebg-preview.png"
const Intro = () => {
  return (
    <div className="i">
      <div className="i-left">
        <div className="i-left-wrapper">
          <h2 className="i-intro">hello my name is</h2>
          <h1 className="i-name">Michael</h1>
          <div className="i-title">
            <p className="i-title-wrapper">
              <div className="i-title-item">Web Developer</div>
              <div className="i-title-item">Musician</div>
              <div className="i-title-item">Diesel Tech</div>
              <div className="i-title-item">2x Bowling League Champion</div>
              
             </p>
          </div>
          <div className="i-description">
              ABOUT ME GOES HERE
          </div>
        </div>
      </div>
      <div className="i-right">
          <div className="i-bg"></div>
          <img src={me} alt="" className="i-img" />
      </div>
    </div>
  );
};

export default Intro;
