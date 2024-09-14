import IInput from "@/interfaces/_common/IInput";
import React from "react";

const Input = ({ type, placeholder, pr, value, onChange }: IInput) => {
  return (
    <input
      className={`pr-${pr} py-2 outline-none`}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
};

export default Input;
