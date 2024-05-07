import { ArrowRight } from "lucide-react";
import React from "react";


import POPULAR_PRODUCT_DATA from "../assets/Data/POPULAR_PRODUCT_DATA";
import Product from "./Product";



const PopularProducts = () => {
  return (
    <div className="popular-products py-8 mt-10 px-4 xl:px-16 2xl:px-36 bg-[#F7F7F7]">
      <div className="flex justify-center lg:justify-between">
        <h1 className="font-semibold text-2xl lg:text-[32px]">Popular Products</h1>
        <div className="hidden lg:flex lg:items-center cursor-pointer">
          <p className="text-primary font-semibold text-[16px] mr-1 leading-[3rem]">
            View All
          </p>
          <ArrowRight  className="h-4 text-primary"/>
        </div>
      </div>
      <div className=" carousel carousel-center max-w-full mt-8 lg:grid grid-rows-2 grid-cols-5">
        {POPULAR_PRODUCT_DATA.map((data) => {
          return <Product key={data.id}  data={data} />
        })}
      </div>
    </div>
  );
};

export default PopularProducts;
