import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import hour from "../assets/image/1-hour.webp";
import cash from "../assets/image/cash-on-delivery.webp";
import amex from "../assets/image/Amex.webp";
import masterCard from "../assets/image/mastercard.webp";
import visa from "../assets/image/VIsa.webp";
import bkash from "../assets/image/bkash.webp";
import nogod from "../assets/image/NagadLogo.webp";
import cod from "../assets/image/COD.webp";

const DetailModal = ({ otherProps, isOpen, setIsOpen }) => {
  const { title, img, discount, price, disPrice } = otherProps;
  function closeModal() {
    setIsOpen(false);
  }
  // const [backgroundPosition, setBackgroundPosition] = useState("0% 0%");
  // const handleMouseMove = (e) => {
  //   const { left, top, width, height } = e.target.getBoundingClientRect();
  //   let x = ((e.pageX - left) / width) * 100;
  //   let y = ((e.pageY - top) / height) * 100;
  //   setBackgroundPosition(`${x}% ${y}%`);
  // };
  // group-hover/img:opacity-0
  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-6xl transform overflow-hidden rounded-2xl bg-white text-left align-middle shadow-xl transition-all">
                  <button
                    className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                    onClick={closeModal}
                  >
                    ✕
                  </button>
                  <div>
                    <div className="lg:flex lg:gap-3 p-6">
                      <div  className="flex items-center justify-center">
                        <figure
                          className="group/img  bg-no-repeat bg-cover lg:w-[400px]"
                          // onMouseMove={handleMouseMove}
                          style={{
                            backgroundImage: `url(${img})`,
                          }}
                        >
                          <img
                            className=" w-full"
                            src={img}
                            alt="Zoomed Image"
                          />
                        </figure>
                      </div>
                      <div className="product-info w-full">
                        <div className="flex">
                          <h1 className="text-4xl font-semibold">{title}</h1>
                        </div>
                        <div className="text-xl pt-2 flex gap-2 border-b-2 pb-8">
                          <p
                            className={`${
                              disPrice ? "line-through text-[#999999]" : ""
                            } `}
                          >
                            {price} TK.
                          </p>
                          {disPrice != 0 && (
                            <p className="text-xl  text-primary">
                              {disPrice} TK.
                            </p>
                          )}
                          <p className="bg-[#ea4b4848] text-[#EA4B48] text-[1rem] px-3 rounded-2xl">65% Off</p>
                        </div>
                        <div className="flex gap-4 pt-8 border-b-2 pb-8">
                          <div className="btn-group border rounded-md">
                            <button className="btn text-2xl w-fit">-</button>
                            <p className="w-[5rem] text-2xl text-center m-auto">
                              0
                            </p>
                            <button className="btn w-fit text-2xl">+</button>
                          </div>
                          <button className="btn btn-primary text-white">
                            Buy Now
                          </button>
                        </div>
                        <div className="pt-8">
                          <p className="text-md font-thin">
                            Every 1 kg of the product will contain 5pcs-6pcs of
                            Malta. Malta, a variety of orange, is a popular
                            citrus fruit cultivated in hot climate. The fruit is
                            rich in mineral salts and other ingredients of
                            nutritive value such as iron, lime, phosphorus, and
                            vital minerals. Malta is loaded with vitamin C and
                            vitamin B complex. It is a round-shaped,
                            medium-sized fruit, weighting an average of 145.8
                            gm.
                          </p>
                        </div>
                        <div className="pt-4">
                          <p className="text-md font-bold">Category: <span className="font-thin">Vegitables</span></p>
                          <p className="text-md font-bold">Tag:  <span className="font-thin"> Healthy, Fresh, Dinner</span></p>
                        </div>
                      </div>
                    </div>
                    <div className="modal-footer lg:flex justify-between bg-slate-100 px-6">
                      <div className="lg:flex gap-4">
                        <div className="flex justify-center items-center">
                          <img className="h-[3rem]" src={hour} alt="1-hour" />
                          <p className="text-sm font-thin">
                            30 minute delivery
                          </p>
                        </div>
                        <div className="flex justify-center items-center">
                          <img className="h-[2.5rem]" src={cash} alt="cash" />
                          <p className="text-sm font-thin">Cash on delivery</p>
                        </div>
                      </div>
                      <div className="flex justify-center items-center">
                        <p className="text-sm font-thin">Pay with</p>
                        <img className="h-[2.5rem]" src={amex} alt="cash" />
                        <img className="h-[2.5rem]" src={masterCard} alt="cash" />
                        <img className="h-[2.5rem]" src={visa} alt="cash" />
                        <img className="h-[2.5rem]" src={bkash} alt="cash" />
                        <img className="h-[2.5rem]" src={nogod} alt="cash" />
                        <img className="h-[2.5rem]" src={cod} alt="cash" />
                      </div>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default DetailModal;
