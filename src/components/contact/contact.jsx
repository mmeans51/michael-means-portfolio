import "./contact.css";
import phone from "../../img/phone.png"
import email from "../../img/email.png"
import address from "../../img/address.png"
import { useContext, useRef, useState } from "react";
import emailjs from "emailjs-com";
import { ThemeContext } from "../../context";

const Contactme = () => {
  const formRef = useRef();
  const [done, setDone] = useState(false)
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_xpm51v6",
        "template_c6b4lpl",
        formRef.current,
        "tFAJmHj4bU_mGSiHs"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true)
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
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
            <form ref={formRef} onSubmit={handleSubmit}>
            <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Name" name="user_name" />
            <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Subject" name="user_subject" />
            <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Email" name="user_email" />
            <textarea style={{backgroundColor: darkMode && "#333"}} rows="5" placeholder="Message" name="message" />
            <button>Submit</button>
            {done && "Thank you..."}
          </form>
        </div>
      </div>
    </div>
    
  );
};

export default Contactme;
