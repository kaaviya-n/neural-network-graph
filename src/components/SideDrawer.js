import React from "react";
import { Label } from "./label";
import "./styles.css";

export const SideDrawer = ({
  onClose,
  currentNode,
  isOpen,
  fromCallback,
  toCallback,
}) => {
  const { kernel_size, type, strides, pads, input, output } =
    currentNode.data.parameters;
  return (
    <div className={`side-drawer ${isOpen ? "open" : ""}`}>
      <div className="headWrapper">
        <h1>Node properties</h1>
        <button onClick={onClose}>x</button>
      </div>
      <div className="bodyWrapper">
        <div className="contentWrapper">
          <h6>type</h6>
          <Label value={type} />
        </div>
        <h1>Attributes</h1>
        {(type === "Conv" || type === "maxpool") && (
          <>
            <div className="contentWrapper">
              <h6>kernel_shape</h6>
              <Label value={kernel_size} />
            </div>
            <div className="contentWrapper">
              <h6>pads</h6>
              <Label value={pads} />
            </div>
            <div className="contentWrapper">
              <h6>strides</h6>
              <Label value={strides} />
            </div>
          </>
        )}
        <h1>Inputs</h1>
        <div
          className="contentWrapper"
          onClick={() => fromCallback(currentNode.id)}
        >
          <h6>from</h6>
          {input?.map((item) => (
            <Label value={item} />
          ))}
        </div>
        <h1>Outputs</h1>
        <div className="contentWrapper" onClick={() => toCallback(output)}>
          <h6>to</h6>
          <div style={{ width: "100%" }}>
            {output?.map((item) => (
              <Label value={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
