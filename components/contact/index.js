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

import { Link } from "react-router-dom";

const ContactPage = () => {

  return (
    <div className={style.contact}>
      <Header />
      <div className={style.contact_title}>
          <p>Contact Us</p>
      </div>
      <div className={style.contact_container}>
        <div>
            <h4>let’s get in touch with us</h4>
            <div>
                <img src={facebook} alt="facebook" />
                <img src={linkedin} alt="linkedin" />
                <img src={instagram} alt="instagram" />
                <img src={youtube} alt="youtube" />
                <img src={twitter} alt="twitter" />
            </div>
            <div>
              <div>
                <div>
                  <img src={phone} alt="phone"/>
                </div>
                <div>
                  <Link to="#">0983888611</Link>
                  <Link to="#">0917749254</Link>
                </div>
              </div>
              <div>
                <div>
                  <img src={email} alt="email" />
                </div>
                <div>
                  <Link to="#">biTradesupport@mail.ru</Link>
                  <Link to="#">yourbitrade@gmail.com</Link>
                </div>
              </div>
            </div>
        </div>
        <div></div>
      </div>
	  <div style={{background: "#00150FFF"}}>
		<Footer />
	    </div>
    </div>
  )
}
export default ContactPage;