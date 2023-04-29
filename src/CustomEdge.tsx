import React, { useCallback } from "react";
import { getBezierPath, EdgeProps, useStore } from "reactflow";

export default function CustomEdge({
  id,
  sourceX,
  sourceY,
  targetX,
  targetY,
  sourcePosition,
  targetPosition,
  style = {},
  data,
  // selected,
  markerEnd,
}: // selected,
EdgeProps) {
  const [edgePath] = getBezierPath({
    sourceX,
    sourceY,
    sourcePosition,
    targetX,
    targetY,
    targetPosition,
  });

  // const selected = useStore((store) =>
  //   store.edges.find((x) => x.id === id && x.selected)
  // );
  const selected = useStore(
    useCallback(
      (store) => store.edges.find((x) => x.id === id && x.selected),
      [id]
    )
  );
  console.log(`selected:${selected ? "true" : "false"}`);

  return (
    <>
      <path
        id={id}
        style={
          selected
            ? { stroke: "red", strokeWidth: 3 }
            : { stroke: "blue", strokeWidth: 3 }
        }
        className="react-flow__edge-path"
        d={edgePath}
        markerEnd={markerEnd}
      />
      <text>
        <textPath
          href={`#${id}`}
          style={{ fontSize: 12, stroke: selected ? "red" : "blue" }}
          startOffset="50%"
          textAnchor="middle"
          // color={selected ? "red" : "#00ff00"}
        >
          {data.text}
        </textPath>
      </text>
    </>
  );
}
