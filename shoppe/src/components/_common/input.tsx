import IInput from "@/interfaces/_common/IInput";
import React from "react";

const Input = ({ type, placeholder }: IInput) => {
  return (
    <input
      className="pr-16 py-2 outline-none"
      type={type}
      placeholder={placeholder}
    />
  );
};

export default Input;
