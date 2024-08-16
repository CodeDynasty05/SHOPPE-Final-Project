import Image from "next/image";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="flex justify-between items-center">
      <h1 className="text-[35px]">
        <span className="text-[#A18A68]">S</span>HOPPE
      </h1>
      <nav className="d-flex items-center gap-3">
        <Link href={"/shop"}>Shop</Link>
        <Link href={"/blog"}>Blog</Link>
        <Link href={"/about"}>Our Story</Link>
        <div className="w-[1px] h-[20px] bg-black"></div>
        <Link href={"/search"}>
          <Image src={"/search.png"} alt="search" />
        </Link>
        <Link href={"/cart"}>
          <Image src={"/cart.png"} alt="cart" />
        </Link>
        <Link href={"/account"}>
          <Image src={"/account.png"} alt="account" />
        </Link>
      </nav>
    </header>
  );
};

export default Header;
