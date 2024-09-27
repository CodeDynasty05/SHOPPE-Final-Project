import Counter from "@/components/Counter";
import Product from "@/components/Product";
import ProductData from "@/components/ProductData";
import TabsPage from "@/components/Tabs";
import IProduct from "@/interfaces/_common/IProduct";
import axios from "axios";
import { Metadata } from "next";
import Image from "next/image";
import React from "react";

async function fetchProducts() {
  const { data: products } = await axios<IProduct[]>(
    "http://localhost:5000/products/"
  );
  return products;
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const products = await fetchProducts();
  const product = products.find((p) => p.id == +params.slug);

  return {
    title: product ? product.productName : "Shop",
  };
}
export default async function SingleProductPage({
  params,
}: {
  params: { slug: string };
}) {
  const products = await fetchProducts();
  const data = products.find((p) => p.id == +params.slug);
  const recommended = products.filter((p) => p.id != +params.slug).slice(0, 3);

  return (
    <div>
      <div className="flex xl:flex-row flex-col gap-8 items-center">
        <div className="flex gap-8">
          <div className="flex flex-col gap-8 mt-1">
            {data &&
              [1, 2, 3, 4].map((i) => (
                <Image
                  key={i}
                  src={data?.image}
                  alt="img"
                  width={150}
                  height={150}
                  className="mx-auto"
                />
              ))}
          </div>
          <div>
            {data && (
              <Image
                src={data.image}
                alt="img"
                width={705}
                height={705}
                className="mx-auto"
              />
            )}
          </div>
        </div>
        {data && <ProductData data={data} />}
      </div>
      {data && <TabsPage data={data} />}
      <div className="my-8">
        <h2 className="text-3xl font-medium">Similar Items</h2>
      </div>
      <div className="grid grid-cols-3 gap-8 my-20">
        {recommended?.map((p) => (
          <Product key={p.id} {...p} />
        ))}
      </div>
    </div>
  );
}
