export const updateNodeStyle = (item) => ({
  ...item,
  style: {
    ...item.style,
    border: "1px solid red",
  },
});

export const uniqueEdges = (edges) => {
  return [...new Map(edges.map((item) => [item["id"], item])).values()];
};
