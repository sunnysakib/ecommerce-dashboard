import React from "react";
import SERVICES_DATA from "../assets/Data/SERVICES";
import Service from "./Service";

const ServiceCard = () => {
  return (
    <div className="service-card  mt-6 mx-4 xl:mx-16 2xl:mx-36">
      <div className="card border-none p-0 bg-base-100 shadow-xl">
        <div className="card-body p-2 lg:p-8">
          <div className="service grid grid-cols-4 gap-1 content-center  place-items-center grid-rows-1 sm:gap-4 lg:gap-8">
            {SERVICES_DATA.map(({ id, ...otherProps }) => {
              return <Service key={id} otherProps={otherProps} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
