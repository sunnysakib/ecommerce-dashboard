import React from "react";

const Category = ({ otherProps }) => {
  const { title, img } = otherProps;
  return (
    <div className="category carousel-item">
      <div className="card  bg-base-100 shadow-md cursor-pointer hover:border-primary hover:text-primary w-full h-full border rounded  border-[#E6E6E6]">
        <figure className="pt-5">
          <img
            src={img}    
          />
        </figure>
        <div className="py-5 text-center">
          <h1 className="font-medium text-sm xl:text-lg">{title}</h1>
        </div>
      </div>
    </div>
  );
};

export default Category;
