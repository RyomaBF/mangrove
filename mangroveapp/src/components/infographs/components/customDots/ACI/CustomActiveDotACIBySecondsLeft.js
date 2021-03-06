import React, { Component } from 'react';

class CustomActiveDotACIBySecondsLeft extends Component {
  render() {
    const { cx, cy, payload, dataKey, graph, type } = this.props;

    return (
      <circle 
        className="recharts-dot" 
        cx={cx} 
        cy={cy} 
        r={5}
        x={payload.aciLeft}
        y={payload.stamp}
        jobid={payload.jobId}
        name={payload.name}
        filename={payload.fileName}
        inputid={payload.inputId}
        src={payload.downloadUrl}
        key={dataKey}
        graph={graph}
        index={type}
      />
    );
  }
}

export default CustomActiveDotACIBySecondsLeft;