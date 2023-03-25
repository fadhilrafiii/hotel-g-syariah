import React, { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

const Input = (props: InputProps) => {
  return (
    <input
      {...props}
      className={`px-3 py-2 h-[35px] bg-white border border-gray-400 rounded-md w-full ${props.className}`}
    />
  );
};

export default Input;
