import IInput from "@/interfaces/_common/IInput";
import React from "react";

const Input = ({ type, placeholder, w, value, onChange }: IInput) => {
  return (
    <input
      className={`py-2 outline-none ${w === 1 ? "w-64" : "w-80"}`}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
};

export default Input;
