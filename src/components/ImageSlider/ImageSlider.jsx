import React from 'react';
import { Swiper, SwiperSlide, SlideNextButton } from 'swiper/react';
import 'swiper/swiper.min.css';

const ImageSlider = ({ images }) => {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      autoplay={{ delay: 2000, disableOnInteraction: false }}
      navigation={{ nextEl: '.swiper-button-next' }}
    >
      <SlideNextButton className="swiper-button-next" />
      {images.map((image, index) => (
        <SwiperSlide key={index}>
          <img src={image} alt={`Image ${index + 1}`} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ImageSlider;
