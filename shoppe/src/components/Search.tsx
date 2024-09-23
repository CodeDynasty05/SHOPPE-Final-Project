"use client";
import { useRouter } from "next/navigation";
import React, { useState, useEffect, useRef } from "react";

const Search = ({ children }: { children: React.ReactNode }) => {
  const [show, setShow] = useState(false);
  const [search, setSearch] = useState("");
  const searchRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        searchRef.current &&
        !searchRef.current.contains(event.target as Node)
      ) {
        setShow(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      setSearch("");
      setShow(false);
      router.push(`en/shop?search=${encodeURIComponent(search)}`);
    }
  };
  return (
    <div className="flex gap-6" ref={searchRef}>
      <input
        type="text"
        placeholder="Search"
        className={`border-black rounded-2xl transition-all ${
          show ? "w-full border-2 pl-4" : "w-0"
        }`}
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <button onClick={() => setShow(!show)}>{children}</button>
    </div>
  );
};

export default Search;
