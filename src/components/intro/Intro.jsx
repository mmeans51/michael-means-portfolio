import "./Intro.css";
import me from "../../img/hiking-removebg-preview.png"
const Intro = () => {
  return (
    <div className="i">
      <div className="left">
        <div className="left-wrapper">
          <h2 className="intro">Hey there! My name is</h2>
          <h1 className="name">Michael Means</h1>
          <div className="title">
            <p className="ititle-wrapper">
              <div className="title-item">Web Developer</div>
              <div className="title-item">Musician</div>
              <div className="title-item">Diesel Tech</div>
              <div className="title-item">2x Bowling Champion</div>
              
             </p>
          </div>
          <div className="description">
              
          </div>
        </div>
      </div>
      <div className="iright">
          <div className="i-bg"></div>
          <img src={me} alt="" className="img" />
      </div>
    </div>
  );
};

export default Intro;
