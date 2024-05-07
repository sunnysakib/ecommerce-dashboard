import React from "react";
import { Fragment, useState } from "react";
import {
  Dialog,
  DialogPanel,
  DialogTitle,
  Transition,
  TransitionChild,
} from "@headlessui/react";
import U_Arrow from "../assets/image/up_arrow_icon.svg";
import D_Arrow from "../assets/image/down_arrow_icon.svg";
import { useSelector, useDispatch } from "react-redux";
import {
  decreamentItemQuantity,
  increamentItemQuantity,
  removeItem,
} from "../redux/features/cart/cartSlice";
import { X } from "lucide-react";
import Lottie from "react-lottie";
import LottieFile from "../assets/lotties/empty-cart.json";
import { Link } from "react-router-dom";

const Cart = () => {
  const [open, setOpen] = useState(false);
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  return (
    <>
      <div className="" onClick={() => setOpen(true)}>
        <label className="drawer-button btn btn-ghost btn-circle">
          <div className="indicator">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
            <span className="badge badge-sm indicator-item text-black">
              {cart.product.length}
            </span>
          </div>
        </label>
      </div>
      <Transition show={open} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={setOpen}>
          <div className="fixed inset-0 bg-gray-800 bg-opacity-75 overflow-hidden">
            <div className="absolute inset-0 overflow-hidden">
              <div className="pointer-events-none  fixed inset-y-0 right-0 flex max-w-full pl-10">
                <TransitionChild
                  as={Fragment}
                  enter="transform transition ease-in-out duration-500 sm:duration-700"
                  enterFrom="translate-x-full"
                  enterTo="translate-x-0"
                  leave="transform transition ease-in-out duration-500 sm:duration-700"
                  leaveFrom="translate-x-0"
                  leaveTo="translate-x-full"
                >
                  <DialogPanel className="pointer-events-auto w-screen max-w-md">
                    <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                      <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                        <div className="flex items-start justify-between">
                          <DialogTitle className="text-lg font-medium text-gray-900">
                            Shopping cart
                          </DialogTitle>
                          <div className="ml-3 flex h-7 items-center">
                            <button
                              type="button"
                              className="relative -m-2 p-2 text-gray-400 hover:text-gray-500"
                              onClick={() => setOpen(false)}
                            >
                              <span className="absolute -inset-0.5" />
                              <span className="sr-only">Close panel</span>
                              <X className="h-6 w-6" />
                            </button>
                          </div>
                        </div>

                        <div className="pt-8">
                          <div className="flow-root">
                            {cart.product.length === 0 ? (
                              <div className=" flex flex-col justify-center items-center">
                                <Lottie
                                  height={300}
                                  width={300}
                                  options={{
                                    animationData: LottieFile,
                                    loop: true,
                                    autoplay: true,
                                    rendererSettings: {
                                      preserveAspectRatio: "xMidYMid slice",
                                    },
                                  }}
                                />
                                <h1 className="font-medium text-xl">Cart is Empty</h1>
                                <Link onClick={() => setOpen(false)} className="text-primary underline" to="/">Shop Now</Link>
                              </div>
                            ) : (
                              <div>
                                <ul
                                  role="list"
                                  className="-my-6 divide-y divide-gray-200"
                                >
                                  {cart.product.map(
                                    ({
                                      id,
                                      product_name,
                                      product_img,
                                      price,
                                      itemQuantity,
                                    }) => (
                                      <li key={id} className=" flex py-6">
                                        <div className="increment-button flex flex-col items-center cursor-pointer pr-2">
                                          <img
                                            onClick={() =>
                                              dispatch(
                                                increamentItemQuantity(id)
                                              )
                                            }
                                            className="h-[1rem]"
                                            src={U_Arrow}
                                            alt="U_Arrow.svg"
                                          />
                                          <p className="py-1">{itemQuantity}</p>
                                          <img
                                            onClick={() =>
                                              dispatch(
                                                decreamentItemQuantity(id)
                                              )
                                            }
                                            className="h-[1rem]"
                                            src={D_Arrow}
                                            alt="D_Arrow.svg"
                                          />
                                        </div>
                                        <div className="h-16 w-16 flex-shrink-0 item-center overflow-hidden rounded-md border border-gray-200">
                                          <img
                                            src={product_img}
                                            alt={product_img}
                                            className="h-full w-full object-cover object-center"
                                          />
                                        </div>

                                        <div className="ml-4 flex flex-1 flex-col">
                                          <div>
                                            <div className="flex justify-between text-base font-medium text-gray-900">
                                              <h3>{product_name}</h3>
                                              <p className="ml-4">{price}</p>
                                            </div>
                                            {/* <p className="mt-1 text-sm text-gray-500">
                                            Salmon
                                          </p> */}
                                          </div>
                                          <div className="flex flex-1 items-end justify-between text-sm">
                                            <p className="text-gray-500">
                                              Qty {itemQuantity}
                                            </p>

                                            <div className="flex">
                                              <button
                                                onClick={() =>
                                                  dispatch(removeItem(id))
                                                }
                                                type="button"
                                                className="font-medium text-primary hover:text-green-800"
                                              >
                                                Remove
                                              </button>
                                            </div>
                                          </div>
                                        </div>
                                      </li>
                                    )
                                  )}
                                </ul>

                                <div className="border-t border-gray-200 px-4 py-6 mt-3 sm:px-6">
                                  <div className="flex justify-between text-base font-medium text-gray-900">
                                    <p>Subtotal</p>
                                    <p>00 TK.</p>
                                  </div>
                                  <p className="mt-0.5 text-sm text-gray-500">
                                    Shipping and taxes calculated at checkout.
                                  </p>
                                  <div className="mt-6">
                                    <button
                                      className={`w-full flex items-center justify-center rounded-md border border-transparent bg-primary px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-green-800 ${
                                        cart.length === 0
                                          ? "btn btn-disabled"
                                          : ""
                                      }`}
                                    >
                                      Checkout
                                    </button>
                                  </div>
                                  <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                                    <p>
                                      or
                                      <button
                                        type="button"
                                        className="font-medium text-primary hover:text-green-800 ml-1"
                                        onClick={() => setOpen(false)}
                                      >
                                        Continue Shopping
                                        <span aria-hidden="true"> &rarr;</span>
                                      </button>
                                    </p>
                                  </div>
                                </div>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </DialogPanel>
                </TransitionChild>
              </div>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default Cart;
