import React from "react";

import { ReactFlow } from "reactflow";
import "reactflow/dist/style.css";
import CustomEdge from "./CustomEdge";
const initialNodes = [
  { id: "1", position: { x: 150, y: 50 }, data: { label: "1" } },
  {
    id: "2",
    position: { x: 50, y: 200 },
    data: { label: "3", text: "custome2" },
  },
  {
    id: "3",
    position: { x: 300, y: 200 },
    data: { label: "2" },
  },
];
const initialEdges = [
  { id: "e1-2", source: "1", target: "2", type: "step", label: "step edge" },
  {
    id: "e1-3",
    source: "1",
    target: "3",
    type: "custom",
    label: "custom edge",
    data: { text: "custome2" },
  },
  {
    id: "e2-3",
    source: "2",
    target: "3",
    type: "custom",
    label: "custom edge",
    data: { text: "custome3" },
  },
];

const edgeTypes = {
  custom: CustomEdge,
};

const reactFlow1: React.FC = () => {
  return (
    <div style={{ width: "100vw", height: "30vh" }}>
      <ReactFlow
        nodes={initialNodes}
        edges={initialEdges}
        edgeTypes={edgeTypes}
      />
    </div>
  );
};

export default reactFlow1;
