import React from "react";

export const Radio = ({ label, checked, onChange }) => {
  return (
    <label>
      <input type="radio" checked={checked} onChange={onChange} />
      {label}
    </label>
  );
};
