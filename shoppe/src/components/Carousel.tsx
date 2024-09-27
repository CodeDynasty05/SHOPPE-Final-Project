"use client";
import IProduct from "@/interfaces/_common/IProduct";
import { Button } from "@nextui-org/react";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Carousel = ({ data }: { data: IProduct[] }) => {
  const [index, setIndex] = useState(0);
  const handleClick = (i: number) => {
    setIndex(i);
  };
  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex((currentIndex) => (currentIndex + 1) % data.length);
    }, 3000);
    return () => clearInterval(intervalId);
  }, [data.length]);
  return (
    <div className="h-[80vh] bg-[url(/carousel.jpg)] bg-cover bg-center rounded-2xl flex flex-col justify-center relative">
      <div className="ml-16 flex flex-col gap-5">
        <h3 className="text-3xl font-medium text-white">
          {data[index].productName}
        </h3>
        <p className="text-2xl font-medium text-white">${data[index].price}</p>
        <div className="border-2 border-white w-fit rounded-medium mt-6">
          <Link
            href={`/en/shop/${data[index].id}`}
            className="block text-white text-2xl py-4 px-6"
          >
            View Product
          </Link>
        </div>
      </div>
      <div className="flex justify-center items-center gap-5 py-10 absolute bottom-0 left-1/2 translate-x-[-50%] ">
        <button
          className={`w-3 h-3 rounded-[50%] ${
            index === 0 ? "border-2 border-white w-4 h-4" : "bg-white"
          }`}
          onClick={() => handleClick(0)}
        ></button>
        <button
          className={`w-3 h-3 rounded-[50%] ${
            index === 1 ? "border-2 border-white w-4 h-4" : "bg-white"
          }`}
          onClick={() => handleClick(1)}
        ></button>
        <button
          className={`w-3 h-3 rounded-[50%] ${
            index === 2 ? "border-2 border-white w-4 h-4" : "bg-white"
          }`}
          onClick={() => handleClick(2)}
        ></button>
        <button
          className={`w-3 h-3 rounded-[50%] ${
            index === 3 ? "border-2 border-white w-4 h-4" : "bg-white"
          }`}
          onClick={() => handleClick(3)}
        ></button>
        <button
          className={`w-3 h-3 rounded-[50%] ${
            index === 4 ? "border-2 border-white w-4 h-4" : "bg-white"
          }`}
          onClick={() => handleClick(4)}
        ></button>
        <button
          className={`w-3 h-3 rounded-[50%] ${
            index === 5 ? "border-2 border-white w-4 h-4" : "bg-white"
          }`}
          onClick={() => handleClick(5)}
        ></button>
      </div>
    </div>
  );
};

export default Carousel;
