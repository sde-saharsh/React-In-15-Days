import React, { useCallback } from "react";
import { Handle, Position } from "reactflow";

const CustomNode = ({ data }) => {
  const onChange = useCallback((evt) => {
    console.log(evt.target.value);
  }, []);

  return (
    <div style={{ padding: 10, border: "2px solid black", borderRadius: 10 }}>
      <Handle type="target" position={Position.Top} />

      <p>{data.label}</p>
      <input onChange={onChange} placeholder="Type here..." />

      <Handle type="source" position={Position.Bottom} />
    </div>
  );
};

export default CustomNode;
