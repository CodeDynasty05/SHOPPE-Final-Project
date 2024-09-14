"use client";
import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import Blog from "./blog";
import { Pagination } from "@nextui-org/react";
import { categoryContext } from "@/context/categoryContext";

const Blogs = () => {
  const [category] = useContext(categoryContext);
  const [page, setPage] = useState(1);
  const [blogs, setBlogs] = useState([]);
  const neededBlogs =
    category.toLowerCase() === "all"
      ? blogs
      : blogs.filter((blog: any) => blog.category === category);
  useEffect(() => {
    axios("http://localhost:5000/blogs/")
      .then((res) => {
        return res.data;
      })
      .then((data) => {
        setBlogs(data);
      });
  }, []);
  const blogsLen = neededBlogs.length;
  return (
    <div className="p-6">
      <div className="grid grid-cols-2 gap-20">
        {neededBlogs.slice((page - 1) * 4, page * 4).map((blog: any) => (
          <Blog key={blog.id} {...blog} />
        ))}
      </div>
      <div className="mx-auto w-fit mt-12">
        <Pagination
          total={Math.ceil(blogsLen / 4)}
          initialPage={1}
          page={page}
          color="secondary"
          size="lg"
          showControls={true}
          onChange={(currPage) => setPage(currPage)}
        />
      </div>
    </div>
  );
};

export default Blogs;
