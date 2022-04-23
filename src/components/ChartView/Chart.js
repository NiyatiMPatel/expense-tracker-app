import React from "react";

import "./Chart.css";
import ChartBar from "./ChartBar";

const Chart = (props) => {
  const dataPointValues = props.dataPoints.map((dataPoint) => dataPoint.value);
  const totalMaximum = Math.max(...dataPointValues);

  return (
    <div className="chart-wrapper">
      {props.dataPoints.map((dataSets) => (
        <ChartBar
          value={dataSets.value}
          maxValue={totalMaximum}
          label={dataSets.label}
          key={dataSets.label}
        />
      ))}
    </div>
  );
};

export default Chart;
