import React from "react";
import "./style.css";

export const Tooltip = ({ text, children }) => {
  return (
    <div className="tooltip">
      <span className="tooltiptext">{text}</span>
      {children}
    </div>
  );
};
