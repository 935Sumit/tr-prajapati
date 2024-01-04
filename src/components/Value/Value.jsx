import React, { useState } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
  AccordionItemState,
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";
import {
  MdOutlineArrowDropDown,
  MdOutlineArrowDropDownCircle,
} from "react-icons/md";
import data from "../../utils/accordion.jsx";

import registration from "../../utils/registration.jsx";

import aboutUsDetails from "../../utils/aboutUsDetails.jsx";
import "./Value.css";
// Demo styles, see 'Styles' section below for some notes on use.

const Value = () => {
  return (
    <div>
    <section id="value" className="v-wrapper">
      <div className="paddings innerWidth flexCenter v-container">
        {/* left side */}
        <div className="v-left">
          <div className="image-container">
            <img src="./value.png" alt="" />

          </div>
          
        </div>

        {/* right */}
        <div className="flexColStart v-right">
          <span className="orangeText">Our Services</span>

          <span className="primaryText">We believe in quality work</span>

          <span className="secondaryText">
            We always ready to help by providijng the best services for you.
            <br />
            We beleive a good blace to live can make your life better
          </span>
          <Accordion
            className="accordion"
            allowMultipleExpanded={false}
            preExpanded={[0]}
          >
            {data.map((item, i) => {
              const [className, setClassName] = useState(null);
              return (
                <AccordionItem className={`accordionItem ${className}`} uuid={i} key={i}>
                  <AccordionItemHeading>
                    <AccordionItemButton className="flexCenter accordionButton ">
                        {/* just for getting state of item */}
                      <AccordionItemState>
                        {({ expanded }) =>
                          expanded
                            ? setClassName("expanded")
                            : setClassName("collapsed")
                        }
                      </AccordionItemState>
                      <div className="flexCenter icon">{item.icon}</div>
                      <span
                        className="primaryText"
                      >
                        {item.heading}
                      </span>
                      <div className="flexCenter icon">
                        <MdOutlineArrowDropDown size={20} />
                      </div>
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <p className="secondaryText">{item.detail}</p>
                  </AccordionItemPanel>
                </AccordionItem>
              );
            })}
          </Accordion>
        </div>
      </div>
    </section>
    
    <section id="registration" className="v-wrapper">
      <div className="paddings innerWidth flexCenter v-container">
        {/* left side */}
        <div className="v-left">
        <span className="orangeText">Our Registrations<br/><br/>         </span>
      <span className="primaryText">'A Class' and 'Special Category II'<br/> registered contactor 
      </span>

<Accordion
  className="accordion"
  allowMultipleExpanded={false}
  preExpanded={[0]}
>
  {registration.map((item, i) => {
    const [className, setClassName] = useState(null);
    return (
      <AccordionItem className={`accordionItem ${className}`} uuid={i} key={i}>
        <AccordionItemHeading>
          <AccordionItemButton className="flexCenter accordionButton ">
              {/* just for getting state of item */}
            <AccordionItemState>
              {({ expanded }) =>
                expanded
                  ? setClassName("expanded")
                  : setClassName("collapsed")
              }
            </AccordionItemState>
            {/* <div className="flexCenter icon">{item.icon}</div> */}
            <span className="primaryText">
              {item.heading}
            </span>
            <div className="flexCenter icon">
              <MdOutlineArrowDropDown size={20} />
            </div>
          </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>
          <p className="secondaryText">{item.detail}</p>
        </AccordionItemPanel>
      </AccordionItem>
    );
  })}

</Accordion>


        </div>

        {/* right */} 
        <div className="flexColStart v-right">
          
<span className="orangeText">About Us<br/>         </span>
      <span className="primaryText">Inception of company and current Machinery & Manpower  
      </span>
          {/* <div className="image-container"> */}
            {/* <img src="./contact.jpg" alt="" /> */}
            <Accordion
  className="accordion"
  allowMultipleExpanded={false}
  preExpanded={[0]}
>
  {aboutUsDetails.map((item, i) => {
    const [className, setClassName] = useState(null);
    return (
      <AccordionItem className={`accordionItem ${className}`} uuid={i} key={i}>
        <AccordionItemHeading>
          <AccordionItemButton className="flexCenter accordionButton ">
              {/* just for getting state of item */}
            <AccordionItemState>
              {({ expanded }) =>
                expanded
                  ? setClassName("expanded")
                  : setClassName("collapsed")
              }
            </AccordionItemState>
            {/* <div className="flexCenter icon">{item.icon}</div> */}
            <span className="primaryText">
              {item.heading}
            </span>
            <div className="flexCenter icon">
              <MdOutlineArrowDropDown size={20} />
            </div>
          </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>
          <p className="secondaryText">{item.detail}</p>
        </AccordionItemPanel>
      </AccordionItem>
    );
  })}
</Accordion>

          {/* </div> */}
        </div>
        </div>
      {/* </div> */}
    </section>
    </div>
  );
};

export default Value;
