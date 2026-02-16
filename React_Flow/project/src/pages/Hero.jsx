import React from "react";
import ReactFlow, { MiniMap, Background, Panel, Controls } from "reactflow";
import "reactflow/dist/style.css";

const nodeColor = (node) => {
  switch (node.type) {
    case "input":
      return "red";
    case "output":
      return "green";
    case "default":
      return "blue";
    case "group":
      return "gray";
    default:
      return "#eee";
  }
};

const initialNodes = [
  {
    id: "4",
    data: { label: "Group Node" },
    type: "group",
    position: { x: 600, y: 300 },
    style: {
      width: 300,
      height: 300,
      backgroundColor: "rgba(150,150,150,0.1)",
      border: "2px dashed #555",
      borderRadius: "10px",
    },
  },
  {
    id: "1",
    data: { label: "Input Node" },
    type: "input",
    position: { x: 100, y: 100 },
  },
  {
    id: "2",
    data: { label: "Output Node" },
    type: "output",
    position: { x: 400, y: 100 },
  },
  {
    id: "3",
    data: { label: "Default Node" },
    type: "default",
    position: { x: 50, y: 50 },
    parentNode: "4",
    extent: "parent",
  },
];

const initialEdges = [
  {
    id:'e1-e2',
    source:'1',
    target:'2',
    type:'step',
    label:'1 to 2',
    animated:true
  }
];

const Hero = () => {
  return (
    <div className="h-screen w-screen bg-slate-50">
      <ReactFlow defaultNodes={initialNodes} defaultEdges={initialEdges} fitView>
        <Controls />
        <MiniMap nodeColor={nodeColor} />
        <Background variant="lines" gap={20} size={1} />
        <Panel position="top-right">x: 20cm</Panel>
      </ReactFlow>
    </div>
  );
};

export default Hero;
