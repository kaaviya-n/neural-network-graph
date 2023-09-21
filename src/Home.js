import React, { useEffect, useState } from "react";
import ReactFlow, {
  ReactFlowProvider,
  Controls,
  useNodesState,
  useEdgesState,
} from "reactflow";

import { initialNodes } from "./assets/initialNodes";
import { SideDrawer } from "./components/SideDrawer";
import { uniqueEdges, updateEdges, updateNodeStyle } from "./util";

import "reactflow/dist/style.css";

const defaultViewport = { x: 0, y: 0, zoom: 2.5 };

const NeuralGraph = () => {
  const [nodes, setNodes] = useNodesState(initialNodes);
  const [edges, setEdges] = useEdgesState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [currentNode, setCurrentNode] = useState({});

  useEffect(() => {
    if (initialNodes.length) {
      initialNodes.map((item) => {
        setEdges(updateEdges(edges, item));
        return null;
      });
    }
  }, []);

  const handleFromNodes = (id) => {
    let newNodes = nodes.map((item) => {
      if (item.id === id) {
        return updateNodeStyle(item);
      } else {
        return {
          ...item,
        };
      }
    });
    let newEdges = [];
    nodes.map((item) => {
      if (item.id === id) {
        const input = item.data.parameters.input;
        const output = item.data.parameters.output;
        if (input?.length || output?.length) {
          return output?.map((outValue) => {
            return newEdges.push({
              id: `${item.id}-${outValue}`,
              source: item.id,
              target: outValue,
              type: "smoothstep",
              animated: true,
            });
          });
        }
      } else {
        const input = item.data.parameters.input;
        const output = item.data.parameters.output;
        if (input?.length || output?.length) {
          return output?.map((outValue) => {
            return newEdges.push({
              id: `${item.id}-${outValue}`,
              source: item.id,
              target: outValue,
              type: "smoothstep",
              animated: false,
            });
          });
        }
      }
      return null;
    });
    setEdges(uniqueEdges(newEdges));
    setNodes(newNodes);
  };

  const handleToNodes = (output) => {
    let newNodes = nodes.map((item) => {
      if (output.filter((id) => id === item.id).length !== 0) {
        return updateNodeStyle(item);
      } else {
        return {
          ...item,
        };
      }
    });
    setNodes(newNodes);
  };

  return (
    <div>
      {isOpen && (
        <SideDrawer
          isOpen
          currentNode={currentNode}
          onClick={() => setIsOpen(false)}
          fromCallback={handleFromNodes}
          toCallback={handleToNodes}
        />
      )}
      <ReactFlowProvider>
        <div style={{ width: "90%", height: "100vh" }}>
          <ReactFlow
            nodes={nodes}
            edges={edges}
            defaultViewport={defaultViewport}
            fitView
            attributionPosition="bottom-left"
            snapToGrid={true}
            onNodeClick={(_, data) => {
              setIsOpen(true);
              setCurrentNode(data);
              setNodes(initialNodes);
            }}
          />
          <Controls />
        </div>
      </ReactFlowProvider>
    </div>
  );
};

export default NeuralGraph;
