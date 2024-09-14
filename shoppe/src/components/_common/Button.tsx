import Image from "next/image";
import React from "react";

const Button = ({
  content,
  contentType,
}: {
  content: string;
  contentType: string;
}) => {
  return (
    <button className="pl-1 cursor-pointer">
      {contentType === "text" ? (
        content
      ) : (
        <Image src={content} alt={content} width={20} height={20} />
      )}
    </button>
  );
};

export default Button;
