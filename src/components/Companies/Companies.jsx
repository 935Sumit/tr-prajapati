import React from "react";
import './Companies.css'
const Companies = () => {
  return (
    <section className="c-wrapper">
      <div className="paddings innerWidth flexCenter c-container">
        <p className="primaryText">Clients</p>
        <img src="./nddbLogo.jpg" alt="National Dairy Board" />
        <img src="./anandNagarPalika.jpeg" alt="Anand Nagar Palika" />
        <img src="./gphLogo.jpeg" alt="Gujarat Police Housing" />
        <img src="./deesaLogo.png" alt="Deesa NagarPalika" />
      </div>
    </section>
  );
};

export default Companies;
