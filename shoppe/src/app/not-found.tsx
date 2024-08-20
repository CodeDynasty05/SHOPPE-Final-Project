import Link from "next/link";
import React from "react";

const NotFoundPage = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-10 w-[20vw] mx-auto h-[60vh]">
      <h2 className="text-3xl text-center font-medium">404 ERROR</h2>
      <p className="text-center">
        This page not found;
        <br /> back to home and start again
      </p>
      <Link
        href={"/en/"}
        className="display:inline-block border-black border-2  mx-auto py-3 px-5 hover:bg-gray-200 active:bg-gray-300"
      >
        HOMEPAGE
      </Link>
    </div>
  );
};

export default NotFoundPage;
