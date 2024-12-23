"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

const ImageCarousel = () => {
  const images = [
    "https://staging12.autobusparis.com/images/about/bcabs-kochi-taxi-head-office.jpg",
    "https://staging12.autobusparis.com/images/about/bcabs-kochi-cab-fleet.jpg",
    "https://staging12.autobusparis.com/images/about/bcabs-kochi-cabs.jpg",
  ];

  return (
    <div className="carousel-container">
      <Swiper
        modules={[Navigation, Pagination]}
        navigation
        autoplay
        pagination={{ clickable: true }}
        loop
        className="w-full"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              className="w-full h-auto object-cover rounded-md"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ImageCarousel;
