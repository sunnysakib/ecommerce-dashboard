import React from "react";
import POPULAR_PRODUCT_DATA from "../assets/Data/POPULAR_PRODUCT_DATA";
import Rightarrow from "../assets/image/arrow.svg";
import Product from "./Product";
const FeatureProducts = () => {
  const firstSixProducts = POPULAR_PRODUCT_DATA.slice(0, 6);
  return (
    <div className= "mx-4 mt-8 xl:mx-16 2xl:mx-36 sm:my-20">
      <div className="flex justify-center lg:justify-between">
        <h1 className="font-semibold text-2xl lg:text-[32px]">Featured Products</h1>
        <div className="hidden lg:flex lg:items-center cursor-pointer">
          <p className="text-primary font-semibold text-[16px] mr-3 leading-[3rem]">
            View All
          </p>
          <img className="h-4" src={Rightarrow} />
        </div>
      </div>
      <div className=" carousel carousel-center max-w-full mt-4 sm:mt-8 lg:grid grid-rows-1 grid-cols-6">
        {firstSixProducts.map((data) => {
          return <Product key={data.id} data={data} />;
        })}
      </div>
    </div>
  );
};

export default FeatureProducts;
