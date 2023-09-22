import React, { useState } from "react";
import { Input } from "../Form/Input";
import { Radio } from "../Form/Radio";
import { Modal } from "../Modal";

import "./style.css";

export const AddNode = ({ isOpen, onClose }) => {
  const [nodeLabel, setNodeLabel] = useState("");
  const [operatorType, setOperatorType] = useState();

  const handleTypes = (ev) => {
    console.log(ev);
    setOperatorType(ev.target.value);
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Node Properties">
      <div className="contentWrappers">
        <h6>Node Label</h6>
        <Input
          type="text"
          placeholder="Node Label"
          value={nodeLabel}
          onChange={(ev) => setNodeLabel(ev.target.value)}
        />
      </div>
      <div className="contentWrappers">
        <h6>Operator Type</h6>
        <div style={{ width: "100%" }}>
          <Radio
            label="Conv"
            checked={operatorType === "Conv"}
            onChange={handleTypes}
          />
          <Radio
            label="Relu"
            checked={operatorType === "Relu"}
            onChange={handleTypes}
          />
        </div>
      </div>
      <button>Save</button>
    </Modal>
  );
};
