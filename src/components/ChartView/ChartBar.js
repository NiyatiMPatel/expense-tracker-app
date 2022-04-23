import React from "react";

import "./ChartBar.css";

const ChartBar = (props) => {
  let chartbarFillHeight = "0%";
  if (props.maxValue > 0) {
    chartbarFillHeight = Math.round((props.value / props.maxValue) * 100) + "%";
  }

  return (
    <div className="chartbar-wrapper">
      <div className="chartbar">
        <div
          className="chartbar-fills"
          style={{ height: chartbarFillHeight }}
        ></div>
      </div>
      <div className="chartbar-labels">{props.label}</div>
    </div>
  );
};

export default ChartBar;
