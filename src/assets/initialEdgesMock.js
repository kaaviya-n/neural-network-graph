import { MarkerType } from "reactflow";

export const initialEdges = [
  {
    id: "e1-2",
    source: "1",
    target: "2",
    type: "smoothstep",
    markerEnd: {
      type: MarkerType.Arrow,
    },
    animated: true,
  },
  {
    id: "e2-3",
    source: "2",
    target: "3",
    type: "smoothstep",
  },
  {
    id: "e2-4",
    source: "2",
    target: "4",
    type: "smoothstep",
  },
  {
    id: "e3-5",
    source: "3",
    target: "5",
    type: "smoothstep",
  },
  { id: "e4-6", source: "4", target: "6", type: "smoothstep" },
  { id: "e5-7", source: "5", target: "7", type: "smoothstep" },
  { id: "e6-7", source: "6", target: "7", type: "smoothstep" },
  { id: "e7-8", source: "7", target: "8", type: "smoothstep" },
  { id: "e8-9", source: "8", target: "9", type: "smoothstep" },
  { id: "e9-10", source: "9", target: "10", type: "smoothstep" },
  { id: "e10-11", source: "10", target: "11", type: "smoothstep" },
  { id: "e10-12", source: "10", target: "12", type: "smoothstep" },
];
