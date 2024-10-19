"use client";

import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import { FreeMode, Navigation, Thumbs } from "swiper/modules";

export default function ProductSlider({ images, alt }) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <>
      <Swiper
        loop={true}
        spaceBetween={10}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
      >
        {images.map((e, i) => (
          <SwiperSlide key={i} className="bg-gray-100">
            <img
              width={1440}
              height={720}
              src={e}
              className="w-full aspect-square object-contain mix-blend-multiply"
              alt={alt}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        loop={true}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
      >
        {images.map((e, i) => (
          <SwiperSlide className="bg-gray-100" key={i}>
            <img
              width={1440}
              height={720}
              key={i}
              src={e}
              className="w-full aspect-square object-contain mix-blend-multiply"
              alt={alt}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
