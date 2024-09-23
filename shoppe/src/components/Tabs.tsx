"use client";
import React, { useState } from "react";
import IProduct from "@/interfaces/_common/IProduct";
import PostReview from "./PostReview";
import Comment from "./comment";

export default function TabsPage({ data }: { data: IProduct }) {
  const [page, setPage] = useState(1);
  const tabs = [
    {
      id: 1,
      label: "Description",
      content: (
        <div>
          <p>{data.desc}</p>
        </div>
      ),
    },
    {
      id: 2,
      label: "Additional Information",
      content: (
        <div className="flex flex-col gap-4">
          <p>
            <span className="font-medium">Weight: </span> {data.info.weight} kg
          </p>
          <p>
            <span className="font-medium">Dimensions: </span>
            {data.info.dimension} cm
          </p>
          <p>
            <span className="font-medium">Color: </span>{" "}
            {data.info.colours.map(
              (c) => c.charAt(0).toUpperCase() + c.slice(1) + "  "
            )}
          </p>
          <p>
            <span className="font-medium">Material: </span>
            {"  "}
            {data.info.material.charAt(0).toUpperCase() +
              data.info.material.slice(1)}
          </p>
        </div>
      ),
    },
    {
      id: 3,
      label: "Reviews",
      content: (
        <div className="flex justify-around">
          <div className="flex flex-col gap-4 w-[50%]">
            {data.reviews.length ? (
              data.reviews.map((r) => <Comment {...r} />)
            ) : (
              <h2 className="text-2xl font-medium flex justify-center mt-16">
                No reviews
              </h2>
            )}
          </div>
          <PostReview id={String(data.id)} reviews={data.reviews} />
        </div>
      ),
    },
  ];
  return (
    <div className="flex w-full flex-col mt-10">
      <div className="h-14 flex items-center gap-28 border-b-2">
        {tabs.map((tab) => (
          <button
            className={`w-fit text-xl ${
              page === tab.id
                ? "underline font-medium underline-offset-[20px]"
                : ""
            }`}
            onClick={() => setPage(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="py-10">{tabs[page - 1].content}</div>
    </div>
  );
}
