import React, { useCallback, useMemo } from "react";
import ReactFlow, {
  MiniMap,
  Background,
  Panel,
  Controls,
  addEdge,
  useNodesState,
  useEdgesState,
} from "reactflow";
import "reactflow/dist/style.css";

// const initialNodes = [
//   {
//     id: "4",
//     data: { label: "Group Node" },
//     type: "group",
//     position: { x: 600, y: 300 },
//     style: {
//       width: 300,
//       height: 300,
//       backgroundColor: "rgba(150,150,150,0.1)",
//       border: "2px dashed #555",
//       borderRadius: "10px",
//     },
//   },
//   {
//     id: "1",
//     data: { label: "Input Node" },
//     type: "input",
//     position: { x: 100, y: 100 },
//   },
//   {
//     id: "2",
//     data: { label: "Output Node" },
//     type: "output",
//     position: { x: 400, y: 100 },
//   },
//   {
//     id: "3",
//     data: { label: "Default Node" },
//     type: "default",
//     position: { x: 50, y: 50 },
//     parentNode: "4",
//     extent: "parent",
//   },
// ];


// const initialEdges = [];

// const nodeColor = (node) => {
//   switch (node.type) {
//     case "input":
//       return "red";
//     case "output":
//       return "green";
//     default:
//       return "#999";
//   }
// };

// const Hero = () => {
//   const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
//   const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

//   const onConnect = useCallback(
//     (connection) => {
//       setEdges((eds) => addEdge(connection, eds));
//     },
//     [setEdges]
//   );

//   // prevents recreation every render
//   const nodeTypes = useMemo(() => ({}), []);
//   const edgeTypes = useMemo(() => ({}), []);

//   return (
//     <div className="h-screen w-screen bg-slate-50">
//       <ReactFlow
//         nodes={nodes}
//         edges={edges}
//         onNodesChange={onNodesChange}
//         onEdgesChange={onEdgesChange}
//         onConnect={onConnect}
//         nodeTypes={nodeTypes}
//         edgeTypes={edgeTypes}
//         fitView
//       >
//         <Controls />
//         <MiniMap nodeColor={nodeColor} />
//         <Background variant="lines" gap={20} size={1} />
//         <Panel position="top-right">No extra rerender</Panel>
//       </ReactFlow>
//     </div>
//   );
// };

// export default Hero;




// import React, { useMemo } from "react";
// import ReactFlow, { Controls, Background } from "reactflow";
// import "reactflow/dist/style.css";

import CustomNode from "./Customnode";

const initialNodes = [
  {
    id: "1",
    type: "custom", // 👈 important
    position: { x: 200, y: 200 },
    data: { label: "My Custom Node" },
  },
];

const initialEdges = [];

const Hero = () => {
  // 👇 register custom node type
  const nodeTypes = useMemo(() => ({
    custom: CustomNode,
  }), []);

  return (
    <div style={{ height: "100vh", width: "100vw" }}>
      <ReactFlow
        nodes={initialNodes}
        edges={initialEdges}
        nodeTypes={nodeTypes} // 👈 important
        fitView
      >
        <Controls />
        <Background />
      </ReactFlow>
    </div>
  );
};

export default Hero;
