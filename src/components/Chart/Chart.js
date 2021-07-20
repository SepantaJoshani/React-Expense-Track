import React from "react";
import "./Chart.css";
import ChartBar from "./ChartBar";

const Chart = (props) => {
    const dataPointValues = props.dataPoints.map(item=>item.value)
    const totalMax =Math.max(...dataPointValues)
  return (
    <div className="chart">
      {props.dataPoints.map((item) => (
        <ChartBar 
        value={item.value}
        maxValue={totalMax}
        label={item.label}
        key={item.label}
        />
      ))}
    </div>
  );
};

export default Chart;
