"use client";
import { FilterContext } from "@/context/FilterContext";
import IProduct from "@/interfaces/_common/IProduct";
import axios from "axios";
import { useContext, useEffect, useState } from "react";

const getData = () => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [filter, setFilter] = useContext(FilterContext);
  useEffect(() => {
    axios.get<IProduct[]>("http://localhost:5000/products/").then((res) => {
      setProducts(res.data);
    });
  }, []);
  console.log(filter.range);

  const neededCategory = products.filter((product) => {
    if (filter.category === "All") {
      return product;
    } else {
      return product.category === filter.category;
    }
  });
  const neededPrice = neededCategory.filter((product) => {
    if (Array.isArray(filter.range) && filter.range.length > 1) {
      if (
        product.price >= filter.range[0] &&
        product.price <= filter.range[1]
      ) {
        return product;
      }
    }
  });
  const inStock = neededPrice.filter((product) => {
    if (filter.inStock) {
      return product.stock && product;
    } else {
      return product;
    }
  });
  const searched = inStock.filter((product) => {
    if (filter.search) {
      return product.productName
        .toLowerCase()
        .includes(filter.search.toLowerCase());
    } else {
      return product;
    }
  });
  searched.sort((a, b) => {
    if (filter.sort === "Popularity") {
      return b.rating - a.rating;
    } else if (filter.sort === "Price: Low to High") {
      return a.price - b.price;
    } else {
      return b.price - a.price;
    }
  });
  return searched;
};

export default getData;
