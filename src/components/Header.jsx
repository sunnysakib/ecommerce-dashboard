import { ArrowRight } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";
import Rightarrow from "../assets/image/arrow.svg";

const Header = () => {
  return (
    <div className="header-section mt-[4.5rem] mx-4 xl:mx-16 2xl:mx-36">
      <div className="header-box grid  grid-col-2 gap-2 sm:grid-rows-2 sm:grid-cols-3 xl:grid-rows-2 xl:grid-cols-3 xl:gap-5">
        <div className="col-span-2 xl:row-span-2 sm:row-span-2 ">
          <div className="rounded-lg flex items-center header-banner-big  bg-cover bg-no-repeat min-w-full min-h-[250px] sm:min-h-[400px] lg:min-h-[515px]  xl:min-h-[712px] sm:bg-right">
            <div className="banner-text min-h-full w-1/2 ml-10 xl:space-y-10 xl:ml-16">
              <h1 className="text-2xl font-semibold xl:text-5xl text-white">
                Fresh & Healthy Organic Food
              </h1>
              <div className="banner-text1 my-2 xl:border-l-4 xl:pl-5 xl:space-y-5 xl:border-Green">
                <p className="text-white font-medium xl:text-xl">
                  Sale up to {" "}
                  <span className="text-white px-2 rounded bg-warning xl:text-xl xl:py-1 xl:px-3 xl:font-semibold">
                    30% OFF
                  </span>
                </p>
              </div>
              <p className="text-white text-sm pb-2 xl:font-normal">
                Free shipping on all your order.
              </p>
              <div className="hidden lg:block">
                <Link to='all-product' className="btn no-animation bg-white text-primary border-none hover:text-white hover:bg-primary rounded-full px-12">
                  Shop Now
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-lg  header-banner-small1 bg-cover bg-no-repeat">
          <div className="m-auto my-4 w-fit sm:my-auto xl:ml-10 xl:mt-10">
            <p className="uppercase text-center lg:text-left font-medium text-sm tracking-wide leading-[2rem]">
              Summer Sale
            </p>
            <p className="font-semibold text-center lg:text-left text-lg text-[32px]">
              75% OFF
            </p>
            <p className="text-sm font-normal  text-[#666666] xl:leading-[3rem]">
              Only Fruit & Vegetable
            </p>
            <div className="hidden lg:flex lg:items-center">
              <p className="text-primary font-semibold text-[16px] mr-2 lg:leading-[3rem]">
                Shop Now
              </p>
              <ArrowRight className="size-5 text-primary" />
            </div>
          </div>
        </div>

        <div className="rounded-lg header-banner-small2 bg-cover bg-no-repeat h-full flex flex-col items-center justify-center text-white">
          <p className="font-medium text-[14px] mb-2 tracking-[2px] uppercase lg:leading-[3rem]">
            Best Deal
          </p>
          <p className="font-semibold text-l w-[9rem] xl:text-[32px] text-center lg:w-[60%]">
            Special Products Deal of the Month
          </p>
          <div className="hidden lg:flex lg:items-center">
            <p className="text-primary font-semibold text-[16px] mr-2 leading-[3rem]">
              Shop Now
            </p>
            <ArrowRight className="size-5 text-primary"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
