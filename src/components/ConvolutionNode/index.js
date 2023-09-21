import React from "react";
import { Tooltip } from "../Tooltip";

import "./style.css";

export const ConvolutionNode = ({ valueW, valueB }) => {
  return (
    <Tooltip text="Convolution">
      <div className="convolutionNode">
        <h5>Conv</h5>
        <section>
          <p>
            W <span>{`< ${valueW} >`}</span>
          </p>
          <p>
            B <span>{`< ${valueB} >`}</span>
          </p>
        </section>
      </div>
    </Tooltip>
  );
};
