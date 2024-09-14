"use client";
import action from "@/app/actions";
import IComment from "@/interfaces/_common/IComment";
import { getDate } from "@/utils/helpers";
import { Checkbox, Input, Textarea } from "@nextui-org/react";
import axios from "axios";
import React, { useState } from "react";

const PostComment = ({
  id,
  comments,
}: {
  id: string;
  comments: IComment[];
}) => {
  const handlePost: any = () => {
    if (!userNameValue || !textValue) {
      alert("Please fill in the required fields");
      return;
    }

    const data: IComment = {
      name: userNameValue,
      date: getDate(),
      comment: textValue,
      website: websiteValue,
      replies: [],
    };
    axios.patch(`http://localhost:5000/blogs/${id}`, {
      comments: [...comments, data],
    });
    action();
    setUserNameValue("");
    setEmailValue("");
    setWebsiteValue("");
    setTextValue("");
  };

  const [userNameValue, setUserNameValue] = useState("");
  const [emailValue, setEmailValue] = useState("");
  const [websiteValue, setWebsiteValue] = useState("");
  const [textValue, setTextValue] = useState("");

  return (
    <div className="flex flex-col gap-8">
      <h3 className="text-4xl font-medium">Leave a reply</h3>
      <p className="text-lg text-gray-500">
        Your email address will not be published. Required fields are marked *
      </p>
      <div className="flex flex-col gap-16">
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
        <div className="border-b-3">
          <Input
            type="text"
            variant="underlined"
            onChange={(e) => setWebsiteValue(e.target.value)}
            value={websiteValue}
            label="Enter your Website"
          />
        </div>
        <Checkbox radius="none">
          Save my name, email, and website in this browser for the next time I
          comment
        </Checkbox>
        <Textarea
          variant={"underlined"}
          labelPlacement="outside"
          placeholder="Your comment*"
          value={textValue}
          onChange={(e) => setTextValue(e.target.value)}
          className="col-span-12 md:col-span-6 mb-6 md:mb-0"
          isRequired={true}
        />
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

export default PostComment;
