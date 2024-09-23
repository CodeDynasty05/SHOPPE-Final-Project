"use client";
import action from "@/app/actions";
import IComment from "@/interfaces/_common/IComment";
import { getDate } from "@/utils/helpers";
import { Checkbox, Input, Textarea } from "@nextui-org/react";
import axios from "axios";
import ReactStars from "react-stars";
import React, { useState } from "react";

const PostReview = ({ id, reviews }: { id: string; reviews: IComment[] }) => {
  const handlePost: any = () => {
    if (!userNameValue || !textValue || !star) {
      alert("Please fill in the required fields");
      return;
    }

    const data: IComment = {
      name: userNameValue,
      date: getDate(),
      comment: textValue,
      replies: [],
      star,
    };
    axios.patch(`http://localhost:5000/products/${id}`, {
      reviews: [...reviews, data],
    });
    action();
    setUserNameValue("");
    setEmailValue("");
    setTextValue("");
  };

  const [userNameValue, setUserNameValue] = useState("");
  const [emailValue, setEmailValue] = useState("");
  const [textValue, setTextValue] = useState("");
  const [star, setStar] = useState(0);

  return (
    <div className="flex flex-col gap-8">
      <h3 className="text-4xl font-medium">Leave a reply</h3>
      <p className="text-lg text-gray-500">
        Your email address will not be published. Required fields are marked *
      </p>
      <div className="flex flex-col gap-16">
        <Textarea
          variant={"underlined"}
          labelPlacement="outside"
          placeholder="Your comment*"
          value={textValue}
          onChange={(e) => setTextValue(e.target.value)}
          className="col-span-12 md:col-span-6 mb-6 md:mb-0"
          isRequired={true}
        />
        <div className="border-b-3">
          <Input
            type="text"
            variant="underlined"
            value={userNameValue}
            onChange={(e) => setUserNameValue(e.target.value)}
            label="Enter your name"
            isRequired={true}
          />
        </div>
        <div className="border-b-3">
          <Input
            type="email"
            variant="underlined"
            onChange={(e) => setEmailValue(e.target.value)}
            value={emailValue}
            label="Enter your Email"
          />
        </div>
        <Checkbox radius="none">
          Save my name, email, and website in this browser for the next time I
          comment
        </Checkbox>
        <div>
          <p className="text-lg text-gray-500">Your Rating*</p>
          <ReactStars
            count={5}
            value={star}
            onChange={(value) => setStar(value)}
            size={24}
            color2={"#ffd700"}
          />
        </div>
        <button
          className="text-white bg-black p-4 w-[30%] text-lg"
          onClick={handlePost}
        >
          POST COMMENT
        </button>
      </div>
    </div>
  );
};

export default PostReview;
