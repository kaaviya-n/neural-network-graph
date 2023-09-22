import React from "react";

import "./ModalStyle.css";

export const Modal = ({ isOpen, onClose, children, title }) => {
  if (!isOpen) return null;

  return (
    <div className="modal">
      <div className="modal-content">
        <div className="Wrapper">
          <h3>{title}</h3>
          <button onClick={onClose}>x</button>
        </div>
        {children}
      </div>
    </div>
  );
};
