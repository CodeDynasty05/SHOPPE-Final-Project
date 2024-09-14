import Blogs from "@/components/blogs";
import SideFilter from "@/components/sideFilter";
import { _CATEGORIES } from "@/utils/constants";
import React from "react";

const BlogPage = () => {
  return (
    <>
      <h2 className="text-3xl font-medium">Blog</h2>
      <div className="grid grid-cols-[1fr,9fr]">
        <SideFilter />
        <Blogs />
      </div>
    </>
  );
};

export default BlogPage;
