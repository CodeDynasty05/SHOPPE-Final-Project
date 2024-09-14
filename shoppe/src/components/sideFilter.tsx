"use client";
import { _CATEGORIES } from "@/utils/constants";
import Button from "@/components/_common/Button";
import Input from "@/components/_common/input";
import React, { useContext } from "react";
import { categoryContext } from "@/context/categoryContext";

const SideFilter = () => {
  const [shownCategory, setShownCategory] = useContext(categoryContext);
  const handleClick = (category: string) => {
    setShownCategory(category);
    console.log(category);
  };
  return (
    <div className="pr-7">
      <div className="flex border-b-gray-300 border-b-2 my-8">
        <Input type="text" placeholder="Search" pr={3} />
        <Button content="/about/search.png" contentType="image" />
      </div>
      <h4 className="mb-8 font-medium text-xl">Catogeries</h4>
      <div className="flex flex-col gap-3">
        {_CATEGORIES.map((category) => (
          <p
            key={category}
            onClick={() => handleClick(category)}
            className="text-gray-500 cursor-pointer"
          >
            {category}
          </p>
        ))}
      </div>
    </div>
  );
};

export default SideFilter;
