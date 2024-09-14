import IComment from "@/interfaces/_common/IComment";
import Image from "next/image";
import React from "react";

const Comment = ({ name, comment, date, replies }: IComment) => {
  return (
    <div className="border-b-3 pb-6">
      <div className="flex gap-4">
        <Image src={"/avatar.jpg"} alt="avatar" width={80} height={80} />
        <div>
          <h4 className="font-medium">
            {name} &nbsp; <span className="text-gray-500">{date}</span>
          </h4>
          <p className="text-gray-500">{comment}</p>
        </div>
      </div>
      <div>
        <h4 className="text-xl font-medium my-6">Replies ({replies.length})</h4>
        {replies?.map((reply) => (
          <div className="flex gap-4 ml-24">
            <Image src={"/avatar.jpg"} alt="avatar" width={80} height={80} />
            <div>
              <h4 className="font-medium">
                {reply.name} &nbsp;{" "}
                <span className="text-gray-500">{reply.date}</span>
              </h4>
              <p className="text-gray-500">{reply.comment}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Comment;
