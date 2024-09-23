"use client";
import IProduct from "@/interfaces/_common/IProduct";
import React, { useState } from "react";
import Counter from "./Counter";
import { Button } from "@nextui-org/react";
import Image from "next/image";
import type { Metadata } from "next";
import { useDispatch, useSelector } from "react-redux";
import { addToBasket } from "@/app/Slices/BasketSlice";
import { RootState } from "@/lib/store";
import ReactStars from "react-stars";

let data: IProduct | undefined;
export let metadata: Metadata;

const ProductData = ({ data }: { data: IProduct }) => {
  const [count, setCount] = useState(1);
  metadata = {
    title: data?.productName + " | Shoppe",
  };
  const dispatch = useDispatch();
  const basket = useSelector((state: RootState) => state.basket.basket);

  const handleClick = () => {
    const item = basket.find(
      (item: IProduct) => item.productName === data.productName
    );
    item || dispatch(addToBasket({ ...data, count }));
  };
  return (
    <div className="flex flex-col gap-6 px-24 py-12">
      <h2 className="text-3xl font-medium">{data.productName}</h2>
      <p className="text-main text-xl">${data.price}</p>
      <div>
        <ReactStars value={data.rating} edit={false} size={24} />
      </div>
      <p>{data.desc}</p>
      <div className="flex gap-6">
        <Counter max={data.stock} count={count} setCount={setCount} />
        <Button variant="bordered" className="w-full" onClick={handleClick}>
          Add to cart
        </Button>
      </div>
      <div className="flex gap-6">
        <button>
          <Image src={"/icons/heart.png"} alt="heart" width={20} height={20} />
        </button>
        |
        <button>
          <Image src={"/icons/email.png"} alt="email" width={20} height={20} />
        </button>
        <button>
          <Image
            src={"/icons/facebook.png"}
            alt="facebook"
            width={10}
            height={10}
          />
        </button>
        <button>
          <Image
            src={"/icons/instagram.png"}
            alt="insta"
            width={20}
            height={20}
          />
        </button>
        <button>
          <Image
            src={"/icons/twitter.png"}
            alt="twitter"
            width={20}
            height={20}
          />
        </button>
      </div>
      <p>
        <span className="font-medium">SKU:</span> {data.stock}
      </p>
      <p>
        <span className="font-medium">Category:</span> {data.category}
      </p>
    </div>
  );
};

export default ProductData;
