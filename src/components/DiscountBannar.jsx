import React from "react";
import discount from "../assets/image/Discount-Bannar.svg";
const DiscountBannar = () => {
  return (
   <div className="discount-bannar mx-4 xl:mx-16 2xl:mx-36 sm:my-20 ">
    <div className="card relative border-none p-0">
      <img className="w-full " src={discount} alt="" srcSet="" />
      <div className="absolute w-full h-full flex flex-col items-end text-white">
        <div className="w-full h-full flex justify-between items-center lg:items-start lg:flex-col sm:justify-around lg:justify-center content-center px-4 xl:gap-1 dektoplg:gap-4 xl:w-[40%] xl:mr-16 2xl:w-[27%] 2xl:mr-32">
        <div className="w-[60%] lg:w-full">
        <p className="font-medium text-sm sm:text-base">SUMMER SALE</p>
        <p className="font-semibold text-xl sm:text-3xl lg:text-6xl">
          <span className="text-[#FF8A00]">37%</span> OFF
        </p>
        <p className="hidden sm:inline text-xs sm:text-base font-thin">
          Free on all your order, Free Shipping and 30 days money-back guarantee
        </p>
        </div>
        <div className="mt-3">
          <button className="btn text-[10px] btn-sm px-4 sm:btn-md no-animation group/item bg-white text-primary border-none hover:text-white hover:bg-primary rounded-full sm:px-10">
            Shop Now{" "}
            <svg
            className="sm:w-[18px]"
              width="10"
              height="15"
              viewBox="0 0 18 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                className="group-hover/item:stroke-white"
                d="M16.5 7.50052H1.5"
                stroke="#00B307"
                strokeWidth="1.5"
                strokeLinejoin="round"
                
              />
              <path
                className="group-hover/item:stroke-white"
                d="M10.45 1.47552L16.5 7.49953L10.45 13.5245"
                stroke="#00B307"
                strokeWidth="1.5"
                strokeLinejoin="round"
               
              />
            </svg>
          </button>
        </div>
        </div>
      </div>
    </div>
   </div>
  );
};

export default DiscountBannar;
