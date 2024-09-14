import IProduct from "@/interfaces/_common/IProduct";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Product = ({ id, productName, image, price }: IProduct) => {
  return (
    <div className="relative">
      <Image
        src={image}
        alt={productName}
        width={0}
        height={0}
        sizes="100vw"
        style={{ width: "100%", height: "auto" }}
      />
      <h3 className="text-2xl font-medium py-4">{productName}</h3>
      <p className="text-main text-xl">$ {price}</p>
      <Link className="absolute inset-0" href={`/en/shop/${id}`}></Link>
    </div>
  );
};

export default Product;
