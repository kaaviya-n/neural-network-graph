import React from "react";

import "./style.css";

export const Radio = ({ label, checked, onChange, value }) => {
  return (
    <label className="radio">
      <input type="radio" value={value} checked={checked} onChange={onChange} />
      {label}
    </label>
  );
};
