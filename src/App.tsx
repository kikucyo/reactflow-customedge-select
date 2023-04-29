import React from "react";

import "reactflow/dist/style.css";
import { ReactFlowProvider } from "reactflow";
import ReactFlow1 from "./reactFlow1";
import ReactFlow2 from "./reactFlow2";

function App() {
  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <div>selected from useStore</div>
      <ReactFlow1 />
      <div>selected from props</div>
      <ReactFlow2 />
    </div>
  );
}

export default App;
