export const updateEdges = (edges = [], item) => {
  const input = item.data.parameters.input;
  const output = item.data.parameters.output;
  if (input?.length || output?.length) {
    return output?.map((outValue) => {
      return edges.push({
        id: `${item.id}-${outValue}`,
        source: item.id,
        target: outValue,
        type: "smoothstep",
        // markerEnd: {
        //   type: MarkerType.Arrow,
        // },
      });
    });
  }
  return uniqueEdges(edges);
};

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
