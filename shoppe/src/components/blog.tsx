import Image from "next/image";
import Link from "next/link";
import React from "react";

const Blog = ({
  id,
  title,
  image,
  desc,
  date,
  category,
}: {
  id: number;
  title: string;
  image: string;
  desc: string;
  date: string;
  category: string;
  locale: string;
}) => {
  return (
    <div className="flex flex-col gap-5">
      <Image
        src={image}
        alt="title"
        width={0}
        height={0}
        sizes="100vw"
        style={{ width: "100%", height: "auto" }}
      />
      <p className="text-gray-500 text-lg">
        {category} - {date}
      </p>
      <h3 className="text-2xl font-medium">{title}</h3>
      <p className="text-gray-500 w-[90%] text-lg">{desc}</p>
      <Link
        href={`/en/blog/${id}`}
        className="text-yellow-700 font-semibold self-start mt-4"
      >
        Read More
      </Link>
    </div>
  );
};

export default Blog;
