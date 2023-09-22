import React from "react";

export const Input = ({ type, value, onChange, placeholder, name }) => {
  return (
    <input
      className="input"
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    />
  );
};
