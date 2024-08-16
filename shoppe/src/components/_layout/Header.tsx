import Image from "next/image";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="flex justify-between items-center fixed right-0 px-10 top-0 w-[100%] h-20">
      <h1 className="text-[35px]">
        <span className="text-[#A18A68]">S</span>HOPPE
      </h1>
      <nav className="flex items-center gap-8">
        <div className="flex gap-20 mx-10">
          <Link href={"/shop"}>Shop</Link>
          <Link href={"/blog"}>Blog</Link>
          <Link href={"/about"}>Our Story</Link>
        </div>
        <div className="w-[1px] h-[20px] bg-black"></div>
        <Link href={"/search"}>
          <Image
            src={"/icons/search.png"}
            width={20}
            height={20}
            alt="search"
          />
        </Link>
        <Link href={"/cart"}>
          <Image src={"/icons/cart.png"} width={20} height={20} alt="cart" />
        </Link>
        <Link href={"/account"}>
          <Image
            src={"/icons/account.png"}
            width={20}
            height={20}
            alt="account"
          />
        </Link>
      </nav>
    </header>
  );
};

export default Header;
