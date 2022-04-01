import "./contact.css";
import phone from "../../img/phone.png"
import email from "../../img/email.png"
import address from "../../img/address.png"

const Contactme = () => {
  return (
    <div className="contact">
      <div className="bg"></div>
      <div className="wrapper">
        <div className="left">
          <h1 className="title">Let's discuss your project</h1>
          <div className="info">
            <div className="item">
              <img src={phone} alt="" className="icon" />
              +1 (903) 808 0914
            </div>
            <div className="item">
              <img className="icon" src={email} alt="" />
              colemeans51@gmail.com
            </div>
            <div className="item">
              <img className="icon" src={address} alt="" />
              my address
            </div>
          </div>
        </div>
        <div className="right">
            <p className="description">
               <b>contact</b> description goes here
            </p>
            <form>
                <input type="text" placeholder="Your Name" name="username" />
                <input type="text" placeholder="context" name="usercontext" />
                <input type="text" placeholder="email" name="useremail" />
                <textarea rows="5" placeholder="text" name="text"/>
                <button>Submit</button>
            </form>
        </div>
      </div>
    </div>
    
  );
};

export default Contactme;
