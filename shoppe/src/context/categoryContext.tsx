"use client";
import React, { useState, createContext } from "react";

export const categoryContext = createContext<
  [string, (category: string) => void]
>(["all", () => {}]);

const CategoryContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const arr = useState("all");
  return (
    <categoryContext.Provider value={arr}>{children}</categoryContext.Provider>
  );
};

export default CategoryContextProvider;
