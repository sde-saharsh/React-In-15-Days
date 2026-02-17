import React, { useCallback, useMemo } from "react";
import ReactFlow, {
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  MiniMap,
  addEdge,
} from "reactflow";
import "reactflow/dist/style.css";

import CustomNode from "./CustomNode";

const initialNodes = [];
const initialEdges = [];

const Home = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const nodeTypes = useMemo(() => ({
    custom: CustomNode,
  }), []);

  const addNode = (type) => {
    const newNode = {
      id: `${nodes.length + 1}`,
      type: type,
      position: { x: Math.random() * 400, y: Math.random() * 400 },
      data: { label: `${type.toUpperCase()} Node` },
    };
    console.log("nodeadded")
    setNodes((nds) => [...nds, newNode]);
  };

  const onConnect = useCallback((connection) => {
    setEdges((eds) =>
      addEdge({ ...connection,  animated: true }, eds)
    );
  }, []);

  return (
    <div className="h-screen w-screen flex">
      {/* left panel */}
      <div className="w-1/5 bg-gray-100 p-4 border-r">
        <h2 className="text-lg font-bold mb-4">Add Nodes</h2>

        <button className="w-full bg-red-500 text-white p-2 rounded mb-3" onClick={() => addNode("input")}>
          Add input node
        </button>

        <button
          className="w-full bg-blue-500 text-white p-2 rounded mb-3"
          onClick={() => addNode("default")}
        >
          Add default node
        </button>

        <button
          className="w-full bg-green-500 text-white p-2 rounded mb-3"
          onClick={() => addNode("output")}
        >
          Add output node
        </button>

        <button
          className="w-full bg-purple-500 text-white p-2 rounded mb-3"
          onClick={() => addNode("custom")}
        >
          Add Custom Node
        </button>
      </div>

      {/* ReactFlow */}
      <div className="h-screen w-3/4">
        <ReactFlow
          nodes={nodes}
          edges={edges}
          nodeTypes={nodeTypes}   
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
          fitView
        >
          <Controls />
          <Background />
          <MiniMap />
        </ReactFlow>
      </div>
    </div>
  );
};

export default Home;
