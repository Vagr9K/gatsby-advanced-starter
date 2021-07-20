/* eslint-disable react/jsx-filename-extension */
import React from "react";

const VesicaPiscis = () => {
  const radius = 25;
  const center = 50;
  const leftX = center - radius / 2;
  const rightX = center + radius / 2;

  return (
    <div className="backgroundWrapper">
      <svg
        viewBox="0 0 100 100"
        height="100%"
        width="100%"
        fill="red"
        stroke="blue"
      >
        <g>
          <circle cx={leftX} cy={center} r={radius} stroke="pink" fill="cyan" />
          <circle
            cx={rightX}
            cy={center}
            r={radius}
            stroke="orange"
            fill="green"
          />
        </g>
      </svg>
    </div>
  );
};

export default VesicaPiscis;
