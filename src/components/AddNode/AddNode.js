import React, { useState } from "react";
import { Radio } from "../Form/Radio";
import { Modal } from "../Modal/Modal";

import "./AddNodeStyle.css";

export const AddNode = ({ isOpen, onClose, onSubmit }) => {
  const [operatorType, setOperatorType] = useState();

  const handleTypes = (ev) => {
    setOperatorType(ev.target.value);
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();
    onSubmit(operatorType);
    onClose();
    setOperatorType("");
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Node Properties">
      {/* <div className="contentWrappers">
        <h6>Node Label</h6>
        <Input
          type="text"
          placeholder="Node Label"
          value={nodeLabel}
          onChange={(ev) => setNodeLabel(ev.target.value)}
        />
      </div> */}
      <div className="contentWrappers">
        <h6>Operator Type</h6>
        <div style={{ width: "100%" }}>
          <Radio
            label="Conv"
            value="conv"
            checked={operatorType === "conv"}
            onChange={handleTypes}
          />
          <Radio
            label="Relu"
            value="relu"
            checked={operatorType === "relu"}
            onChange={handleTypes}
          />
        </div>
      </div>
      <button type="submit" onClick={handleSubmit}>
        Save
      </button>
    </Modal>
  );
};
