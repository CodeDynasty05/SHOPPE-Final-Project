import ProductFilter from "@/components/ProductFilter";
import Products from "@/components/Products";
import React from "react";

const ShopPage = () => {
  return (
    <div>
      <h2 className="text-3xl font-medium tracking-wider">Shop The Latest</h2>
      <div className="grid grid-cols-[1fr,6fr] gap-14">
        <ProductFilter />
        <Products />
      </div>
    </div>
  );
};

export default ShopPage;
