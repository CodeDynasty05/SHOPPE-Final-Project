"use client";
import getData from "@/utils/GetData";
import React, { useState } from "react";
import Product from "./Product";
import { Pagination } from "@nextui-org/react";

const Products = () => {
  const data = getData();
  const [page, setPage] = useState(1);
  const productsLen = data.length;

  return (
    <div className="pb-20">
      <div className="grid grid-cols-3 gap-16">
        {data.slice((page - 1) * 3, page * 3).map((product) => (
          <Product key={product.id} {...product} />
        ))}
      </div>
      <div className="mx-auto w-fit mt-12">
        <Pagination
          total={Math.ceil(productsLen / 3)}
          initialPage={1}
          page={page}
          color="secondary"
          size="lg"
          showControls={true}
          onChange={(currPage) => setPage(currPage)}
        />
      </div>
    </div>
  );
};

export default Products;
