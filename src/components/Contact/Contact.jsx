import React from "react";
import "./Contact.css";
import { MdCall } from "react-icons/md";
import { BsFillChatDotsFill } from "react-icons/bs";
import {HiChatBubbleBottomCenter} from 'react-icons/hi2'
const Contact = () => {
  return (
    <div id="contact-us" className="c-wrapper">
      <div className="paddings innerWidth flexCenter c-container">
        {/* left side */}
        <div className="flexColStart c-left">
          <span className="orangeText">Contact Us</span>
          <span className="primaryText">Building Dreams, Creating Impact – Contact Us Today!</span>
          <span className="secondaryText">
          If you have any inquiries, project proposals, or would like to know more about our services, please reach out to us{" "}.
          </span>

          <div className="flexColStart contactModes">
            {/* first row */}
            <div className="flexStart row">
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <MdCall size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Rohit Prajapati</span>
                    <span className="secondaryText">84605 23352</span>
                  </div>
                </div>
                <div className="flexCenter button"><a href="tel:+918460523352">Call now </a></div>
              </div>

              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <BsFillChatDotsFill size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Chat</span>
                    <span className="secondaryText">84605 23352</span>
                  </div>
                </div>
                <div className="flexCenter button"><a href="https://wa.me/918460523352">Chat now</a></div>
              </div>
            </div>

            {/* second row */}
            <div className="flexStart row">
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <MdCall size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Bhavesh Prajapati</span>
                    <span className="secondaryText">98987 15090</span>
                  </div>
                </div>
                <div className="flexCenter button"><a href="tel:+919898715090">Call now </a></div>
              </div>

              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <HiChatBubbleBottomCenter size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Email</span>
                    <span className="secondaryText">trprajapati080967<br/>@gmail.com</span>
                  </div>
                </div>
                <div className="flexCenter button"><a href="mailto:trprajapati080967@gmail.com">mail now</a></div>
              </div>
            </div>
          </div>
        </div>

        {/* right side */}
        <div className="flexEnd c-right">
          <div className="image-container">
            <img src="./backDrop.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
