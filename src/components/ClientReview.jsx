import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { register } from 'swiper/element/bundle';
// register Swiper custom elements
register();

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";
import REVIEW_DATA from "../assets/Data/REVIEW_DATA";

const ClientReview = () => {
  return (
    <div className="news mx-36 my-20">
      <h1 className="font-semibold text-[32px] mb-10">Client Reviews</h1>
      <>
        <Swiper
        css-mode="true"
          slidesPerView={3}
          spaceBetween={2}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >

        {REVIEW_DATA.map(({ id, description, img }) => {
            return (
              <SwiperSlide>
              <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                  <h2 className="card-title">Card title!</h2>
                  <p>If a dog chews shoes whose shoes does he choose?</p>
                  <div className="card-actions justify-end">
                    <button className="btn btn-primary">Buy Now</button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            );
      })}
        </Swiper>
      </>
    </div>
  );
};

export default ClientReview;
