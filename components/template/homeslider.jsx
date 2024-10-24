"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import Image from "next/image";

export default function HomeSlider() {
  return (
    <section className="mt-[90px]">
      <Swiper
        className=""
        loop={true}
        modules={[Autoplay]}
        autoplay={{ delay: "5000", disableOnInteraction: false }}
        grabCursor
      >
        <SwiperSlide>
          <img
            src={"/img/bg-photo/photo_2024-10-24_15-45-52.jpg"}
            alt="slide0"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={"/img/bg-photo/photo_2024-10-24_15-46-19.jpg"}
            alt="slide1"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={"/img/bg-photo/photo_2024-10-24_15-46-26.jpg"}
            alt="slide2"
          />
        </SwiperSlide>
      </Swiper>
    </section>
  );
}
