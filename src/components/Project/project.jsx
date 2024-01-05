import React from "react";
import "./project.css";

import propertyData from "../../utils/projectDetail.json";

import { FaShower } from "react-icons/fa";
import { AiTwotoneCar } from "react-icons/ai";
import { MdLocationPin, MdMeetingRoom } from "react-icons/md";
import { MdEventSeat, MdStar } from 'react-icons/md';
import { MdFitnessCenter } from 'react-icons/md';
import { useParams } from 'react-router-dom';
import { MdFireHydrantAlt, MdElectricBolt } from 'react-icons/md';
import { MdLocalFlorist } from 'react-icons/md';

import Header from '../Header/Header'
import Footer from '../Footer/Footer'

import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import { sliderSettingsImages} from "../../utils/common";
import ScrollToTop from "../scrollToTop/ScrollToTop";
import Autoplay from './../../../node_modules/swiper/modules/autoplay.min.mjs'

import Pagination from './../../../node_modules/swiper/modules/pagination.min.mjs'
//'./../../../node_modules/swiper/modules/autoplay.mjs';


const Project = ({ match }) => {
    const { id } = useParams();
    const data = propertyData.find(item => item.id === parseInt(id, 10));
  

  return (
    
    <div className="wrapper">

<ScrollToTop />
       <Header/>
    {/* image */} 
      <div className="paddings innerWidth r-container">
        <Swiper {...sliderSettingsImages} 
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
          {data.image.map((card, i) => (
            <SwiperSlide key={i}>
              <div className="flexColStart r-card">
                <img class="projectImage"src={card.imageUrl} alt="home"/>
              </div>
              <div>
                <p className="secondaryText" style={{ textAlign: "center" }}>{card.detail}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    <div className="flexColStart paddings innerWidth property-container">
        <div className="flexCenter property-details">
          {/* left */}
          <div className="flexColStart left">
            {/* head */}
            <div className="flexStart head">
              <span className="primaryText">{data?.title}<br/></span>
            </div>
            
            <span className="orangeText" style={{ fontSize: "1.5rem" }}>
              Estimated Cost : ₹ {data?.price}<br/>
              Starting Date : {data.date}
              </span>
            <b>Facilities</b>
            <div className="flexStart facilities">
            {data?.facilities?.highlight && (
                  <div className="flexStart facility">
                    <MdStar size={20} color="#1F3E72" />
                    <span>{data.facilities.highlight}</span>
                  </div>
                )}

              {/* bathrooms */}
              {data?.facilities?.bathrooms && (
                <div className="flexStart facility">
                  <FaShower size={20} color="#1F3E72" />
                  <span>{data.facilities.bathrooms}</span>
                </div>
              )}

              {/* parkings */}
              {data?.facilities?.parking && (
                <div className="flexStart facility">
                  <AiTwotoneCar size={20} color="#1F3E72" />
                  <span>{data.facilities.parking}</span>
                </div>
              )}

              {/* rooms */}
              {data?.facilities?.bedrooms && (
                <div className="flexStart facility">
                  <MdMeetingRoom size={20} color="#1F3E72" />
                  <span>{data.facilities.bedrooms}</span>
                </div>
              )}
            {/* halls*/}
            {data?.facilities?.halls && (
                  <div className="flexStart facility">
                    <MdEventSeat size={20} color="#1F3E72" />
                    <span>{data.facilities.halls}</span>
                  </div>
                )}
            
            {data?.facilities?.gym && (
      <div className="flexStart facility">
        <MdFitnessCenter size={20} color="#1F3E72" />
        <span>{data.facilities.gym}</span>
      </div>
    )}

{data?.facilities?.fireHydrant && (
      <div className="flexStart facility">
        <MdFireHydrantAlt size={20} color="#1F3E72" />
        <span>{data.facilities.fireHydrant}</span>
      </div>
    )}

{data?.facilities?.garden && (
      <div className="flexStart facility">
        <MdLocalFlorist size={20} color="#1F3E72" />
        <span>{data.facilities.garden}</span>
      </div>
    )}
    {data?.facilities?.electrification && (
      <div className="flexStart facility">
        <MdElectricBolt size={20} color="#1F3E72" />
        <span>{data.facilities.electrification}</span>
      </div>
    )}

            </div>

            {/* address */}
            <div className="flexStart" style={{ gap: "1rem" }}>
              <MdLocationPin size={25} />
              <span className="secondaryText">
                {data?.address}{", "}
                {data?.city}{", "}
                {data?.country}
              </span>
            </div>
            {/* description */}

            <span className="secondaryText" style={{ textAlign: "justify" }}>
              {data?.description.split('\n').map((line, index) => (
        <React.Fragment key={index}>
          {line}
          <br />
        </React.Fragment>
      ))}
            </span>



          </div>

          {/* right side */}
          {/* <div className="map">
            <Map
              address={data?.address}
              city={data?.city}
              country={data?.country}
            />
          </div> */}
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Project;

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

