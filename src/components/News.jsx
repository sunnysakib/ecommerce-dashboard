import React from "react";
import NEWS_DATA from "../assets/Data/NEWS_DATA";
import Rightarrow from "../assets/image/arrow.svg";
import img from "../assets/image/news2.svg";
const News = () => {
  return (
    <div className="news my-20 mx-4 xl:mx-16 2xl:mx-36">
      <h1 className="font-semibold text-center text-[32px] mb-10 ">
        Leatest News
      </h1>
      <div className="carousel carousel-center w-full gap-7 justify-center">
        {NEWS_DATA.map(({ id, description, img }) => {
          return (
            <div key={id} className="carousel-item w-72 lg:w-[31%] xl:w-[31%] mb-5">
              <div className="">
                <div className="card card-compact border-none p-0 w-full bg-base-100 shadow-xl">
                  <figure>
                    <img src={img} className="w-full" alt="" />
                  </figure>
                  <div className="card-body h-[200px]">
                    <p className="text-[18px] mt-4">{description}</p>
                    <div className="card-actions justify-start">
                      <div className="flex items-center cursor-pointer">
                        <p className="text-primary font-semibold text-[14px] mr-3 leading-[3rem]">
                          Read More
                        </p>
                        <img className="h-3" src={Rightarrow} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default News;
