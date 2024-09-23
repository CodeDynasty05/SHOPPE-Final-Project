"use client";
import React, { useState } from "react";

const Counter = ({
  max,
  count,
  setCount,
}: {
  max: number;
  count: number;
  setCount: Function;
}) => {
  return (
    <div className="flex bg-gray-200 w-fit h-10 items-center">
      <button
        className="w-10 cursor-pointer"
        onClick={() => count > 1 && setCount(count - 1)}
      >
        -
      </button>
      <p>{count}</p>
      <button
        className="w-10 cursor-pointer"
        onClick={() => count < max && setCount(count + 1)}
      >
        +
      </button>
    </div>
  );
};

export default Counter;
