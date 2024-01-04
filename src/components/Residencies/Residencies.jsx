import React from "react";
import data from "../../utils/slider.json";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "./Residencies.css";
import { sliderSettings } from "../../utils/common";
import { useNavigate } from "react-router-dom";

import Autoplay from './../../../node_modules/swiper/modules/autoplay.min.mjs'

import Pagination from './../../../node_modules/swiper/modules/pagination.min.mjs'

const  Residencies = () => {
  const navigate = useNavigate();

  const handleSlideClick = (id) => {
    // Navigate to property page with the clicked ID
    navigate(`/property/${id}`);
  };


  return (
    <div id="residencies" className="r-wrapper">
      <div className="paddings innerWidth r-container">
        <div className="flexColStart r-head">
          <span className="orangeText">Our Projects</span>
          <span className="primaryText">Commericial and Residentials</span>
        </div>
        <Swiper {...sliderSettings}
        modules={[Autoplay, Pagination]}
        pagination={{clickable: true}}
        autoplay={{
          delay: 1500,
          pauseOnMouseEnter: true,
          disableOnInteraction: false
         }}
        >
          <SlideNextButton />
          {/* slider */}
          {data.map((card, i) => (
            <SwiperSlide key={i}>
              <div className="flexColStart r-card"  key={card.id} onClick={() => handleSlideClick(card.id)}>
                <img src={card.image} alt="home" />

                <span className="secondaryText r-price">
                  <span style={{ color: "orange" }}>₹ </span>
                  <span>{card.price}</span>
                </span>
                <span className="primaryText">{card.name}</span>
                <span className="secondaryText">{card.detail}</span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Residencies;

const SlideNextButton = () => {
  const swiper = useSwiper();
  return (
    <div className="flexCenter r-buttons">
      <button onClick={() => swiper.slidePrev()} className="r-prevButton">
        &lt;
      </button>
      <button onClick={() => swiper.slideNext()} className="r-nextButton">
        &gt;
      </button>
    </div>
  );
};
