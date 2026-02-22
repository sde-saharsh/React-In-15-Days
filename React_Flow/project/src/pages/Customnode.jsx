import React from "react";
import { Handle, Position } from "reactflow";

const CustomNode = ({ data }) => {
  return (
    <div style={{ padding: 10, border: "2px solid black", borderRadius: 10 }}>
      <Handle type="target" position={Position.Top} />

      <p>{data.label}</p>

      <input
        value={data.text || ""}
        onChange={(e) => data.onChange(e.target.value)}
        placeholder="Type here..."
      />
    <Handle
      type="source"
      position={Position.Left}
      style={{ background: "blue", width: 24, height: 24 }}
    />

    <Handle
      type="source"
      position={Position.Right}
      style={{ background: "blue", width: 50, height: 50 }}
    />

      <Handle type="source" position={Position.Bottom} />
    </div>
  );
};

export default CustomNode;
