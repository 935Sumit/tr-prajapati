import React, { useState } from "react";
import "./Header.css";
import { BiMenuAltRight } from "react-icons/bi";
import { getMenuStyles } from "../../utils/common";
import OutsideClickHandler from "react-outside-click-handler";
import { Link , useLocation} from 'react-router-dom';

const Header = () => {
  const [menuOpened, setMenuOpened] = useState(false);
  const location = useLocation();
const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };


  return (
    <section className="h-wrapper">
      <div className="flexCenter innerWidth paddings h-container">
        {/* logo */}
        {location.pathname === '/' ? (
        <a href="#" onClick={handleClick}>
          <h1 className="logo" > T.R. Prajapati</h1>
        </a>
        ) : (
        // navigating to home page
        <Link to="/">
          <h1 className="logo" > T.R. Prajapati</h1>
        </Link>
      )}
        {/* menu */}
        <OutsideClickHandler
          onOutsideClick={() => {
            setMenuOpened(false);
          }}
        >
          <div className="flexCenter h-menu" style={getMenuStyles(menuOpened)}>
          
          {/* Project Section */}
          {location.pathname === '/' ? (
          <a href="#residencies">Projects</a>
            ) : (
            // navigating to Project
            <Link to="/">
              <a href="#residencies">Projects</a>
            </Link>
          )}
            
             {/* Services Section */}
          {location.pathname === '/' ? (
          <a href="#value">Services</a>
            ) : (
            // navigating to Project
            <Link to="/">
              <a href="#value">Services</a>
            </Link>
          )}

           {/* contact-us Section */}
           {location.pathname === '/' ? (
          <a href="#contact-us">Contact Us</a>
            ) : (
            // navigating to Project
            <Link to="/">
              <a href="#contact-us">Contact Us</a>
            </Link>
          )}
            {/* <a href="#contact-us">Contact Us</a> */}
          </div>
        </OutsideClickHandler>

        {/* for medium and small screens */}
        <div
          className="menu-icon"
          onClick={() => setMenuOpened((prev) => !prev)}
        >
          <BiMenuAltRight size={30} />
        </div>
      </div>
    </section>
  );
};

export default Header;
