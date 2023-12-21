import './index.css'
import React from 'react';
import fb from "./fb.png";
import ig from "./ig.jpg";
import mail from "./mail.jpg";

const Footer = () => {
  return ( 
    <div className='footHolder'>
    <div className="footer">
      <div className="footName"> Dishil Zalavadiya </div>
      <div className="social">
        <span className="Insta"> <a href="https://www.instagram.com/dishil.iitkgp/"> <img src={ig} alt="Insta" /> </a> </span>
        <span className="Fb"> <a href="https://www.facebook.com/dishil.zalavadia.7"><img src={fb} alt="Fb" /> </a> </span>
        <span className="Mail"><a href="mailto:dishil2906@gmail.com"> <img src={mail} alt="Mail" /> </a></span>
      </div>
    </div>
    </div>
   );
}
 
export default Footer;