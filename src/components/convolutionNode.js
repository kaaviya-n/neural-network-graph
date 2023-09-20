import React from "react";

import "./styles.css";

export const ConvolutionNode = ({ valueW, valueB }) => {
  return (
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
  );
};
