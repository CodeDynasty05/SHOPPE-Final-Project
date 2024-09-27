"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Counter from "./Counter";
import IProduct from "@/interfaces/_common/IProduct";
import { useDispatch } from "react-redux";
import { deleteProduct, multipleBuy } from "@/app/Slices/BasketSlice";
import { Button } from "@nextui-org/react";

const BasketProducts = ({
  image,
  productName,
  info,
  price,
  count,
  stock,
}: IProduct) => {
  const [quantity, setQuantity] = useState(count);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(multipleBuy({ name: productName, count: quantity }));
  }, [quantity]);
  return (
    <div className="flex justify-between gap-4">
      <Image src={image} alt={productName} width={180} height={180} />
      <div className="flex flex-col justify-between">
        <div className="flex flex-col gap-2">
          <h3 className="text-xl">{productName}</h3>
          <p className="text-xl text-gray-400">
            {info.colours[0]} / {info.material}
          </p>
          <p className="text-xl text-main">${price}</p>
        </div>
        <div className="flex text-xl items-center gap-6">
          <span className="text-gray-400">QTY:</span>
          <Counter max={stock} count={quantity || 999} setCount={setQuantity} />
        </div>
      </div>
      <div>
        <Button
          size="sm"
          className="text-xl bg-white font-semibold"
          onClick={() => dispatch(deleteProduct({ name: productName }))}
        >
          x
        </Button>
      </div>
    </div>
  );
};

export default BasketProducts;
