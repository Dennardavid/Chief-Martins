"use client";

import Cart from "./icons/cart";
import Close from "./icons/close";
import Delete from "./icons/delete";
import { useState, useRef } from "react";
import gsap from "gsap";
import Link from "next/link";

export default function Asoebi() {
  const [checkoutOpen, setCheckoutOpen] = useState(false);
  const [checkoutItems, setCheckoutItems] = useState([]);
  const [showCartDot, setShowCartDot] = useState(false);
  const [showCartButton, setShowCartButton] = useState(true);
  const checkoutRef = useRef(null);
  const cartIconRef = useRef(null);

  const toggleCheckout = () => {
    setCheckoutOpen(!checkoutOpen);
    if (!checkoutOpen) {
      setShowCartButton(false);
    }
  };

  const handleTransitionEnd = () => {
    if (!checkoutOpen) {
      setShowCartButton(true);
    }
  };

  const materials = [
    { name: "GENERAL MATERIAL 1", price: 10000, img: "material2.webp" },
    { name: "GENERAL MATERIAL 2", price: 5000, img: "material1.webp" },
    { name: "SERVICE OF SONGS", price: 5000, img: "service-of-song.png" },
  ];

  const addToCheckout = (item) => {
    setCheckoutItems((prevItems) => {
      const existingItem = prevItems.find((i) => i.name === item.name);
      if (existingItem) {
        return prevItems.map((i) =>
          i.name === item.name
            ? {
                ...i,
                quantity: i.quantity + 1,
                totalPrice: i.totalPrice + item.price,
              }
            : i
        );
      } else {
        return [...prevItems, { ...item, quantity: 1, totalPrice: item.price }];
      }
    });

    setShowCartDot(true);
    triggerContinuousBounce();
  };

  const triggerContinuousBounce = () => {
    gsap.to(cartIconRef.current, {
      y: -10,
      duration: 1,
      ease: "power1.inOut",
      yoyo: true,
      repeat: -1,
    });
  };

  const incrementItem = (itemName) => {
    setCheckoutItems((prevItems) =>
      prevItems.map((item) =>
        item.name === itemName
          ? {
              ...item,
              quantity: item.quantity + 1,
              totalPrice: item.totalPrice + item.price,
            }
          : item
      )
    );
  };

  const decrementItem = (itemName) => {
    setCheckoutItems((prevItems) =>
      prevItems.map((item) =>
        item.name === itemName && item.quantity > 1
          ? {
              ...item,
              quantity: item.quantity - 1,
              totalPrice: item.totalPrice - item.price,
            }
          : item
      )
    );
  };

  const deleteItem = (itemName) => {
    setCheckoutItems((prevItems) =>
      prevItems.filter((item) => item.name !== itemName)
    );

    if (checkoutItems.length === 1) {
      setShowCartDot(false);
    }
  };

  return (
    <section className="mt-[5%] lg:mt-[6%] pb-10 max-w-[1900px] mx-auto">
      <section
        id="content-section"
        className="flex flex-col lg:flex-row gap-5 items-center justify-evenly w-full transition-all duration-500"
      >
        {materials.map((item, index) => (
          <div
            key={index}
            className="w-[90%] md:w-[60%] lg:w-[23%] p-4 rounded-lg bg-white shadow-md hover:shadow-2xl hover:shadow-black/30 transition-all text-center"
          >
            <h1 className="text-lg font-bold">{item.name}</h1>
            <div className="max-w-[437px] min-h-[200px]">
              <img
                src={item.img}
                alt="asoebi material"
                className="w-full h-[350px] object-contain bg-[#e3e3e3] p-1 rounded-md"
              />
            </div>
            <div className="flex flex-col gap-y-2">
              <span className="my-1 font-medium text-sm md:text-base">
                &#8358;{item.price.toLocaleString()} Per 6 Yards
              </span>
              <button
                className="bg-amber-950/90 py-2 text-white rounded-md shadow-md"
                onClick={() => addToCheckout(item)}
              >
                Order Now
              </button>
            </div>
          </div>
        ))}
      </section>

      <section
        ref={checkoutRef}
        className={`fixed top-0 right-0 h-full bg-amber-950/60 backdrop-blur-md transform transition-all duration-500 ease-in-out z-40 ${
          checkoutOpen
            ? "translate-x-0 w-full lg:w-[50%]"
            : "translate-x-full w-0"
        }`}
        onTransitionEnd={handleTransitionEnd}
      >
        <div className="flex w-full justify-between mt-20">
          <h1 className="p-4 text-white text-lg font-semibold">Checkout</h1>
          <button onClick={toggleCheckout} className="text-white mr-[14px]">
            <Close />
          </button>
        </div>
        <div className="p-4">
          {checkoutItems.length > 0 ? (
            <div>
              <ul>
                {checkoutItems.map((item, index) => (
                  <li
                    key={item.name}
                    className="flex justify-between items-center my-4 bg-white p-2 rounded-md shadow-md"
                  >
                    <img
                      src={item.img}
                      alt={item.name}
                      className="w-16 h-16 object-cover mr-4 bg-[#e3e3e3] p-1 rounded-md"
                    />
                    <div className="flex flex-col gap-2">
                      <span>{item.name}</span>
                      <div className="flex items-center gap-x-2">
                        <button
                          onClick={() => decrementItem(item.name)}
                          className="bg-gray-300 text-black py-1 px-2 rounded-md"
                        >
                          -
                        </button>
                        <span>{item.quantity}</span>
                        <button
                          onClick={() => incrementItem(item.name)}
                          className="bg-gray-300 text-black py-1 px-2 rounded-md"
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <span>&#8358;{item.totalPrice.toLocaleString()}</span>
                    <button
                      onClick={() => deleteItem(item.name)}
                      className="bg-red-500 text-white py-1 px-1 rounded-md"
                    >
                      <Delete />
                    </button>
                  </li>
                ))}
              </ul>

              <div className="flex flex-col gap-2 mt-5 text-white">
                <p>
                  Amount: &#8358;
                  {checkoutItems
                    .reduce((acc, item) => acc + item.totalPrice, 0)
                    .toLocaleString()}
                  ;
                </p>
                <p>Bank Name: First Bank Nigeria</p>
                <p>Account Number: 3049431875</p>
                <p>Account Name: Abu Oghenetega Deborah</p>
                <Link
                  target="_blank"
                  href="https://wa.link/09musa"
                  className="bg-amber-950/90 py-2 px-8 text-white rounded-md shadow-md text-center"
                >
                  <button>Show Proof of Payment</button>
                </Link>
              </div>
            </div>
          ) : (
            <p className="text-white text-center">No items in checkout.</p>
          )}
        </div>
      </section>

      {showCartButton && !checkoutOpen && (
        <button
          onClick={toggleCheckout}
          className="fixed top-16 md:top-24 right-2 md:right-6 lg:top-28 lg:right-10 bg-amber-950/90 text-white p-3 lg:p-4 rounded-full transition-opacity duration-300 ease-in-out z-40"
          ref={cartIconRef}
        >
          <Cart />
          {showCartDot && (
            <span className="absolute top-0 right-0 w-3 h-3 bg-red-500 rounded-full"></span>
          )}
        </button>
      )}
    </section>
  );
}
