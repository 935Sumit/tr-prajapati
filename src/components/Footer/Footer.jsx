import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="f-wrapper">
      <div className="paddings innerWidth flexCenter f-container">
        {/* left side */}
        <div className="flexColStart f-left">
          {/* <img src="./logo2.png" alt="" width={120} /> */}
          <h2 className="logo"> T. R. Prajapati</h2>
          <span className="secondaryText">
            Our vision is to be the industry leader, delivering innovative and sustainable construction solutions<br/> 
            that inspire and leave a positive impact on communities, guided by integrity, safety, and a commitment to quality. 
            </span>
        </div>

        <div className="flexColStart f-right">
          <span className="primaryText">Address</span>
          <span className="secondaryText">1st Floor, Kiran Complex, Near Deepavali Society,<br/>100 Feet Road, Anand 388001</span>
          <div className="flexCenter f-menu">
            <a href="#residencies">Projects</a>
            <a href="#value">Services</a>
            <a href="#contact-us">Contact Us</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
