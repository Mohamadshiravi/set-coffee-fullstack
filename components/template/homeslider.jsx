"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";

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
            src={"https://set-coffee.com/wp-content/uploads/2023/12/slide.jpg"}
            alt="slider"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={
              "https://set-coffee.com/wp-content/uploads/2021/10/winter-slie.jpg"
            }
            alt="slider"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={"https://set-coffee.com/wp-content/uploads/2022/06/fall.jpg"}
            alt="slider"
          />
        </SwiperSlide>
      </Swiper>
    </section>
  );
}
