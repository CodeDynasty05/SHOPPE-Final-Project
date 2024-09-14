"use client";
import React, { useContext, useEffect, useState } from "react";
import Input from "./_common/input";
import Button from "./_common/Button";
import { Select, SelectItem, Slider, Switch } from "@nextui-org/react";
import { SortBy, _CATEGORIES } from "@/utils/constants";
import { FilterContext } from "@/context/FilterContext";

const ProductFilter = () => {
  const [categoryValue, setCategoryValue] = useState("All");
  const [sort, setSort] = useState("Popularity");
  const [range, setRange] = useState<number[] | number>([0, 100]);
  const [filter, setFilter] = useContext(FilterContext);
  const [onSale, setOnSale] = useState(false);
  const [inStock, setInStock] = useState(false);
  const [search, setSearch] = useState("");
  useEffect(() => {
    setFilter({
      ...filter,
      category: categoryValue,
      sort: sort,
      range: range,
      onSale,
      inStock,
      search,
    });
  }, [categoryValue, sort, range, onSale, inStock, search]);

  return (
    <div className="flex flex-col gap-8 mt-8">
      <div className="flex border-b-gray-300 border-b-2">
        <Input
          type="text"
          placeholder="Search"
          pr={1}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <Button content="/about/search.png" contentType="image" />
      </div>
      <Select
        items={_CATEGORIES.map((category) => {
          return { key: category, category };
        })}
        placeholder="Category"
        className="max-w-xs"
        aria-label="Category"
        variant="bordered"
        value={categoryValue}
        onChange={(e) => setCategoryValue(e.target.value)}
      >
        {(product) => (
          <SelectItem key={product.key}>{product.category}</SelectItem>
        )}
      </Select>
      <Select
        items={SortBy}
        placeholder="Sort By"
        className="max-w-xs"
        aria-label="Sort By"
        variant="bordered"
        value={sort}
        onChange={(e) => setSort(e.target.value)}
      >
        {(order) => <SelectItem key={order.value}>{order.value}</SelectItem>}
      </Select>
      <Slider
        label="Price Range"
        step={5}
        minValue={0}
        maxValue={100}
        defaultValue={[0, 100]}
        onChange={(val) => setRange(val)}
        formatOptions={{ style: "currency", currency: "USD" }}
        className="max-w-md"
      />
      <div className="flex justify-between">
        <p>On Sale</p>
        <Switch
          aria-label="Automatic updates"
          checked={onSale}
          onChange={() => setOnSale(!onSale)}
        />
      </div>
      <div className="flex justify-between">
        <p>In Stock</p>
        <Switch
          aria-label="Automatic updates"
          checked={inStock}
          onChange={() => setInStock(!inStock)}
        />
      </div>
    </div>
  );
};

export default ProductFilter;
