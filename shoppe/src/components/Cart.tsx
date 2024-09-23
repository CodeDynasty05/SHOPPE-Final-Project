"use client";
import type { RootState } from "../lib/store";
import React, { useState, useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import SideBasket from "./SideBasket";

const Cart = ({ children }: { children: React.ReactNode }) => {
  const basket = useSelector((state: RootState) => state.basket.basket);
  const [show, setShow] = useState(false);
  const basketRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        basketRef.current &&
        !basketRef.current.contains(event.target as Node)
      ) {
        setShow(false);
      }
    };

    if (show) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [show]);

  return (
    <>
      <div className="relative">
        <button onClick={() => setShow(!show)}>{children}</button>
        {basket.length ? (
          <div className="flex justify-center items-center absolute top-[-5px] right-[-5px] w-4 h-4 text-sm text-white bg-red-500 rounded-full">
            {basket.length}
          </div>
        ) : null}
      </div>

      {show && (
        <div ref={basketRef}>
          <SideBasket />
        </div>
      )}
    </>
  );
};

export default Cart;
