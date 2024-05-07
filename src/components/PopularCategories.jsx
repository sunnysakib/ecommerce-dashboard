import { ArrowRight } from "lucide-react";
import React from "react";
import FOOD_CATEGORIES_DATA from "../assets/Data/FOOD_CATEGORIES_DATA";
import Rightarrow from "../assets/image/arrow.svg";
import Category from "./Category";
const PopularCategories = () => {
  return (
    <div className="popular-categories mt-20 mx-4 xl:mx-16 2xl:mx-36">
      <div className="flex justify-center lg:justify-between">
        <h1 className="font-semibold text-2xl lg:text-[32px]">Popular Categories</h1>
        <div className="hidden lg:flex lg:items-center cursor-pointer">
          <p className="text-primary font-semibold text-[16px] mr-1 leading-[3rem]">
            View All
          </p>
          <ArrowRight  className="h-4 text-primary"/>
        </div>
      </div>
      <div className="carousel carousel-center max-w-full mt-8 lg:grid lg:grid-rows-2 lg:grid-cols-6 gap-2 xl:gap-5 ">
            {
                FOOD_CATEGORIES_DATA.map(({id, ...otherProps})=>{
                    return <Category key={id} otherProps={otherProps}/>
                })
            }
      </div>
    </div>
  );
};

export default PopularCategories;
