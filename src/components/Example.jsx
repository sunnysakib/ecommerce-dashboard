import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/features/cart/cartSlice";
import DetailModal from "./DetailModal";
import Ratings from "./Ratings";
const Product = (props) => {
  // console.log(props);
  // const { title, img, discount, price, disPrice } = otherProps;

  // const product  = {
  //   product_name: title,
  //   price: price,
  //   product_img: img,
  // }
  let [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch()
  function openModal() {
    setIsOpen(true);
  }
  return (
    <div className="products-category carousel-item">
      {/* <div className="card group/item bg-base-100 shadow-sm cursor-pointer hover:border-primary w-full h-full border rounded-none  border-[#E6E6E6]">
        <>
          {discount != "" && (
            <div className="absolute mt-4 ml-4">
              <span className="text-white text-sm px-2 font-light rounded bg-warning">
                {discount}
              </span>
            </div>
          )}
          <div className="invisible group-hover/item:visible absolute flex flex-col gap-2 min-w-full items-end mt-4 pr-4">
            <svg
              className="group/edit hover:fill-red-500"
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="20" cy="20" r="19.5" fill="white" stroke="#F2F2F2" />
              <path
              className="group-hover/edit:stroke-red-500"
                d="M19.9996 27.5451C3.33328 18.3333 14.9999 8.3333 19.9996 14.6567C24.9999 8.3333 36.6666 18.3333 19.9996 27.5451Z"
                stroke="#1A1A1A"
                strokeWidth="1.5"
              />
            </svg>
            <svg
            className="preview"
            onClick={openModal}
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="20" cy="20" r="19.5" fill="white" stroke="#F2F2F2" />
              <path
                d="M20 13.541C13.75 13.541 11.25 20.0001 11.25 20.0001C11.25 20.0001 13.75 26.4577 20 26.4577C26.25 26.4577 28.75 20.0001 28.75 20.0001C28.75 20.0001 26.25 13.541 20 13.541V13.541Z"
                stroke="#1A1A1A"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M20 23.125C20.8288 23.125 21.6237 22.7958 22.2097 22.2097C22.7958 21.6237 23.125 20.8288 23.125 20C23.125 19.1712 22.7958 18.3763 22.2097 17.7903C21.6237 17.2042 20.8288 16.875 20 16.875C19.1712 16.875 18.3763 17.2042 17.7903 17.7903C17.2042 18.3763 16.875 19.1712 16.875 20C16.875 20.8288 17.2042 21.6237 17.7903 22.2097C18.3763 22.7958 19.1712 23.125 20 23.125V23.125Z"
                stroke="#1A1A1A"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <DetailModal otherProps={otherProps}  isOpen={isOpen} setIsOpen={setIsOpen} />
          </div>
        </>
        <img className="m-auto w-full" src={img} />

        <div className="product-text-field mx-4 flex justify-between items-center ">
          <div className="my-4">
            <h1 className="text-sm text-[#4D4D4D] group-hover/item:text-[#2C742F]">{title}</h1>
            <div className="flex gap-2  my-1">
              <p className="text-base font-medium text-[#1A1A1A]">
                {price} TK.
              </p>
              {disPrice != 0 && (
                <p className="text-base line-through text-[#999999]">
                  {disPrice} TK.
                </p>
              )}
            </div>
            <Ratings />
          </div>
          <svg
          onClick={()=>dispatch(addToCart(product))}
          className="cart-svg"
            width="40"
            height="41"
            viewBox="0 0 40 41"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="20"
              cy="20.5"
              r="20"
              className="fill-[#F2F2F2] group-hover/item:fill-primary"
            />
            <path
              className="stroke-[#1A1A1A] group-hover/item:stroke-white "
              d="M16.6667 18.8333H14.1667L12.5 28H27.5L25.8333 18.8333H23.3333M16.6667 18.8333V16.3333C16.6667 14.4924 18.1591 13 20 13V13C21.8409 13 23.3333 14.4924 23.3333 16.3333V18.8333M16.6667 18.8333H23.3333M16.6667 18.8333V21.3333M23.3333 18.8333V21.3333"
              strokeWidth="1.3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div> */}
    </div>
  );
};

export default Product;
