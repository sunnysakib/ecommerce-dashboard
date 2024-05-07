import React from "react";

const Service = ({ otherProps }) => {
  const { title, text, img } = otherProps;
  return (
    <div className="service flex items-center">
      <div className="mr-2 sm:mr-4">
        <img src={img} alt={title} />
      </div>
      <div>
        <h1 className="text-[10px] font-semibold sm:text-sm lg:text-base leading-loose">{title}</h1>
        <p className="text-[8px] font-normal sm:text-xs lg:text-sm text-[#999999]">{text}</p>
      </div>
    </div>
  );
};

export default Service;
