"use client";
import { RootState } from "@/lib/store";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import BasketProducts from "./BasketProducts";
import IProduct from "@/interfaces/_common/IProduct";
import Link from "next/link";

const SideBasket = () => {
  const basket = useSelector(
    (state: RootState) => state.basket.basket
  ) as IProduct[];
  const totalPrice = useSelector((state: RootState) => state.basket.totalPrice);
  const dispatch = useDispatch();

  return (
    <div className="flex flex-col justify-between border-2 px-8 py-5 border-gray-400 overflow-y-scroll animate-rightToLeft absolute h-screen top-0 right-[-5%] w-[500px] bg-white">
      <div>
        <h3 className="text-xl font-medium">Shopping Bag</h3>
        <p className="pt-5">{basket.length} items</p>
      </div>
      <div className="h-full">
        {basket.length ? (
          <div className="flex flex-col gap-4 py-4 h-full">
            {basket.map((product) => (
              <BasketProducts key={product.id} {...product} />
            ))}
          </div>
        ) : (
          <p className="text-center text-xl pt-10">Your basket is empty</p>
        )}
      </div>
      <div className="flex flex-col gap-4">
        <div className="w-full border-1 border-gray-300 my-6"></div>
        <div className="flex justify-between">
          <p className="text-xl font-medium">
            Subtotal ({basket.length} items)
          </p>
          <p className="text-xl font-medium">$ {totalPrice}</p>
        </div>
        <div className="relative border-2 rounded-2xl border-black p-8 text-2xl font-medium my-6">
          <Link className="absolute inset-0 text-center pt-4" href={"/en/cart"}>
            VIEW CART
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SideBasket;
