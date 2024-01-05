// ScrollUpTransition.js
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const ScrollUpTransition = ({ children }) => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Set the duration of the animation (in milliseconds)
      once: false, // Only animate once
    });
  }, []);

  return (
    <div
      data-aos="fade-up"
      data-aos-offset="150" // Adjust this offset based on your design
    >
      {children}
    </div>
  );
};

export default ScrollUpTransition;
