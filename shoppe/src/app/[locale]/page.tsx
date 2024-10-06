import Carousel from "@/components/Carousel";
import HomeViewAll from "@/components/HomeViewAll";
import Product from "@/components/Product";
import IProduct from "@/interfaces/_common/IProduct";
import axios from "axios";
import { Metadata } from "next";
import Link from "next/link";
import React from "react";

export const metadata: Metadata = {
  title: "Home | SHOPPE",
};

const Home = async () => {
  const { data } = await axios<IProduct[]>("http://localhost:5000/products/");
  const neededData = data.slice(0, 6);
  return (
    <div>
      <Carousel data={neededData} />
      <HomeViewAll />
      <div className="grid xl:grid-cols-3 gap-16 pb-20 md:grid-cols-2 md:gap-8">
        {neededData.map((product) => (
          <Product key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
};

export default Home;
