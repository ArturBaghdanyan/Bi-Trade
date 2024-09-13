import style from "./style.module.scss";
import Header from "../header";
import Footer from "../footer/index";
import facebook from "../../assets/contact-icons/facebook.svg";
import linkedin from "../../assets/contact-icons/linkedin.svg";
import instagram from "../../assets/contact-icons/instagram.svg";
import youtube from "../../assets/contact-icons/youtube.svg";
import twitter from "../../assets/contact-icons/twitter.svg";
import email from "../../assets/contact-icons/email.svg";
import phone from "../../assets/contact-icons/phone.svg";

import background from "../../assets/contact-icons/bg.svg";
import { Link } from "react-router-dom";

const ContactPage = () => {
  
  return (
    <div className={`${style.contact}`}>
      <Header />
      <div className="pages_title">
          <p>Contact Us</p>
      </div>
      <div className={`${style.contact_container} container-spacing`}>
        <div className={style.contact_container_leftContent}>
            <h4>let’s <b>get in touch</b> with us</h4>
            <div className={style.contact_container_leftContent_social_icons}>
                <img src={facebook} alt="facebook" />
                <img src={linkedin} alt="linkedin" />
                <img src={instagram} alt="instagram" />
                <img src={youtube} alt="youtube" />
                <img src={twitter} alt="twitter" />
            </div>
            <div className={style.contact_container_leftContent_tel}>
              <div className={style.contact_container_leftContent_tel_piece}>
                <div className={style.contact_container_leftContent_tel_icon}>
                  <img src={phone} alt="phone"/>
                </div>
                <div className={style.contact_container_leftContent_tel_piece_numbers}>
                  <Link to="#">0983888611</Link>
                  <Link to="#">0917749254</Link>
                </div>
              </div>
              <div className={style.contact_container_leftContent_tel_piece}>
                <div className={style.contact_container_leftContent_tel_icon}>
                  <img src={email} alt="email" />
                </div>
                <div className={style.contact_container_leftContent_tel_piece_numbers}>
                  <Link to="#">biTradesupport@mail.ru</Link>
                  <Link to="#">yourbitrade@gmail.com</Link>
                </div>
              </div>
            </div>
        </div>
        <div className={style.contact_container_rightContent}>
          <img src={background} alt="bg" />
          <form>
            <label>Name</label>
            <input type="text" placeholder="Enter your name" />
            <label>Email</label>
            <input type="text" placeholder="Enter your email" />
            <label>Message</label>
            <textarea placeholder="Type your message"></textarea>
            <button>Contact Us Now</button>
          </form>
        </div>
      </div>
	  <div style={{background: "#00150FFF"}}>
		<Footer />
	    </div>
    </div>
  )
}
export default ContactPage;