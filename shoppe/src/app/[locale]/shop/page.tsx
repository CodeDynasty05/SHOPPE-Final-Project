import ProductFilter from "@/components/ProductFilter";
import Products from "@/components/Products";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Shop | SHOPPE",
};

const ShopPage = () => {
  return (
    <div>
      <h2 className="text-3xl font-medium tracking-wider">Shop The Latest</h2>
      <div className="grid grid-cols-[1fr,6fr] sm:gap-14 gap-6">
        <ProductFilter />
        <Products />
      </div>
    </div>
  );
};

export default ShopPage;
