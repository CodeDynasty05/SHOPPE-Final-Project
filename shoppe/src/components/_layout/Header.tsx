"use client";
import { Button } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import Search from "../Search";
import Cart from "../Cart";

const Header = ({ locale }: { locale: string }) => {
  const pathname = usePathname();
  const path = pathname.split("/")[2];
  return (
    <header className="flex justify-between items-center fixed z-40 top-0 w-[91%] h-20 border-b-2 border-b-black-300 bg-white">
      <h1 className="text-[35px]">
        <Link href={`/${locale}`}>
          <span className="text-[#A18A68]">S</span>HOPPE
        </Link>
      </h1>
      <nav className="flex items-center gap-8">
        <div className="flex gap-20 mx-10">
          <Link
            href={`/${locale}/shop`}
            className={
              path === "shop"
                ? "underline underline-offset-[30px] decoration-2"
                : ""
            }
          >
            Shop
          </Link>
          <Link
            href={`/${locale}/blog`}
            className={
              path === "blog"
                ? "underline underline-offset-[30px] decoration-2"
                : ""
            }
          >
            Blog
          </Link>
          <Link
            href={`/${locale}/about`}
            className={
              path === "about"
                ? "underline underline-offset-[30px] decoration-2"
                : ""
            }
          >
            Our Story
          </Link>
        </div>
        <div className="w-[1px] h-[20px] bg-black"></div>
        <Search>
          <Image
            src={"/icons/search.png"}
            width={20}
            height={20}
            alt="search"
          />
        </Search>
        <Cart>
          <Image src={"/icons/cart.png"} width={20} height={20} alt="cart" />
        </Cart>
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
