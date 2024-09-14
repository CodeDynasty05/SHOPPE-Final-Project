"use client";
import IFilter from "@/interfaces/IFilter";
import React, { useState, createContext } from "react";

export const FilterContext = createContext<
  [IFilter, React.Dispatch<React.SetStateAction<IFilter>>]
>([
  {
    category: "",
    sort: "",
    range: [0, 0],
    onSale: false,
    inStock: false,
  },
  () => {},
]);

const FilterContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [filter, setFilter] = useState<IFilter>({
    category: "",
    sort: "",
    range: [0, 0],
    onSale: false,
    inStock: false,
  });
  return (
    <FilterContext.Provider value={[filter, setFilter]}>
      {children}
    </FilterContext.Provider>
  );
};

export default FilterContextProvider;
