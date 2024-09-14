import Carousel from "@/components/Carousel";
import Product from "@/components/Product";
import IProduct from "@/interfaces/_common/IProduct";
import axios from "axios";
import Link from "next/link";
import React from "react";

const Home = async () => {
  const { data } = await axios<IProduct[]>("http://localhost:5000/products/");
  const neededData = data.slice(0, 6);
  return (
    <div>
      <Carousel data={neededData} />
      <div className="flex justify-between py-12">
        <h3 className="text-2xl font-medium">Shop The Latest</h3>
        <Link className="inline-block text-main" href="/en/shop">
          View All
        </Link>
      </div>
      <div className="grid grid-cols-3 gap-16 pb-20">
        {neededData.map((product) => (
          <Product key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
};

export default Home;
